import {
  createColumnData,
  createFilterData,
  createFilterItem,
  FilterProps,
  getColumnsOperandFilterData,
  getOperandForType,
  getTypeFromField,
  getTypeOfField,
  handleNewDefaultField,
  useFilter,
} from '@iteria-app/component-templates'
import React, { useEffect, ChangeEventHandler, FocusEventHandler } from 'react'
import { EntitiesQuery } from '../../../generated/graphql'
import {
  Grid,
  InputLabel,
  Input,
  TextField,
  Checkbox as CheckboxInput,
  FormControlLabel,
  Typography,
} from '@mui/material'
import { useSearchParams } from 'react-router-dom'
type Props = {
  filterCallbacks?: FilterProps
}
const VakUlohaTypFilter = ({ filterCallbacks }: Props) => {
  const [urlParams, setUrlSearchParams] = useSearchParams()
  const currentParams = Object.fromEntries([...(urlParams ?? [])])
  const handleOnChangeSetField = (
    field: string,
    date: string,
    shouldValidate?: boolean
  ) => {
    let finalParams = {}
    finalParams = JSON.parse(JSON.stringify(currentParams))
    const type = 'date'
    const value = date
    let { currentParamKeys, chosenOperand, filterData, columnsData } =
      getColumnsOperandFilterData(currentParams, field, date, type)
    if (value) {
      finalParams[`${field}:${type}:${chosenOperand}`] = value
      const { newFilterData, newColumnsData } = handleNewDefaultField(
        currentParamKeys,
        field,
        type,
        chosenOperand as string,
        value
      )
      filterData = [...filterData, ...newFilterData]
      columnsData = [...columnsData, ...newColumnsData]
    } else delete finalParams[`${field}:${type}:${chosenOperand}`]
    filterCallbacks?.handleToolbarFilter(filterData, columnsData)
    setUrlSearchParams(finalParams)
  }
  const handleOnChange = (field: string, event: Event) => {
    const type = getTypeOfField(event)
    const value =
      type === 'boolean' ? event?.target?.checked : event?.target?.value
    let finalParams = {}
    finalParams = JSON.parse(JSON.stringify(currentParams))
    let { chosenOperand, currentParamKeys, filterData, columnsData } =
      getColumnsOperandFilterData(currentParams, field, value, type)
    if (type === 'array') {
      const firstValue = value?.[0]
      const secondValue = value?.[1]
      finalParams[`${field}:number:${chosenOperand?.[0]}`] = firstValue
      finalParams[`${field}:number:${chosenOperand?.[1]}`] = secondValue
      value?.forEach((innerValue, index) => {
        if (
          !currentParamKeys.includes(
            `${field}:${type}:${chosenOperand?.[index]}`
          )
        ) {
          const newFilterItem = createFilterItem(
            chosenOperand?.[index],
            innerValue,
            field
          )
          filterData?.push(newFilterItem)
          if (!columnsData?.find((column) => column?.field === field))
            columnsData?.push({
              field: field,
              type: 'number',
            })
        }
      })
    } else {
      if (value) {
        finalParams[`${field}:${type}:${chosenOperand}`] = value
        const { newFilterData, newColumnsData } = handleNewDefaultField(
          currentParamKeys,
          field,
          type,
          chosenOperand as string,
          value
        )
        filterData = [...filterData, ...newFilterData]
        columnsData = [...columnsData, ...newColumnsData]
      } else delete finalParams[`${field}:${type}:${chosenOperand}`]
    }
    filterCallbacks?.handleToolbarFilter(filterData, columnsData)
    setUrlSearchParams(finalParams)
  }
  useEffect(() => {
    const keys = Object.keys(currentParams)
    const filterData = createFilterData(keys, currentParams)
    const columnsData = createColumnData(keys)
    filterCallbacks?.handleToolbarFilter(filterData, columnsData)
  }, [])
  const getFieldValue = (field: string) => {
    const keys = Object.keys(currentParams)
    const foundKeys = keys?.filter((key) => {
      const splittedKey = key?.split(':')
      return splittedKey?.[0] === field
    })
    if (!foundKeys || foundKeys?.length === 0) return null
    if (foundKeys?.length === 1) {
      const type = getTypeFromField(foundKeys?.[0])
      if (type === 'boolean') {
        return currentParams?.[foundKeys?.[0]] === 'true'
      }
      return currentParams?.[foundKeys?.[0]]
    }
    const firstElement =
      currentParams?.[keys?.find((key) => key?.endsWith(':lte'))]
    const secondElement =
      currentParams?.[keys?.find((key) => key?.endsWith(':gte'))]
    return [firstElement, secondElement]
  }
  const columns = [
    <>
      <Grid container alignItems="center" paddingY={1}>
        <TextField
          name="name"
          label="name"
          variant="standard"
          title="name"
          onChange={(event: Event) => handleOnChange('name', event)}
          onClick={(event) => {
            event.stopPropagation()
          }}
          InputProps={{
            startAdornment: <></>,
          }}
          fullWidth
          type="string"
          value={getFieldValue('name') ?? ''}
        />
      </Grid>
    </>,
    <>
      <Grid container alignItems="center">
        <FormControlLabel
          control={
            <CheckboxInput
              name="platny"
              onChange={(event: Event) => handleOnChange('platny', event)}
              checked={getFieldValue('platny')}
            />
          }
          label={'platny' ?? ''}
        />
      </Grid>
    </>,
  ]
  return <>{columns?.map((field) => field)}</>
}
export default VakUlohaTypFilter
