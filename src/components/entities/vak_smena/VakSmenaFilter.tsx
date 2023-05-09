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
  saveDate,
  Translate,
  getRelationshipField,
} from '@iteria-app/component-templates'
import React, { useEffect, ChangeEventHandler, FocusEventHandler } from 'react'
import { EntitiesQuery } from '../../../generated/graphql'
import AdapterDateFns from '@date-io/date-fns'
import { DatePicker, LocalizationProvider } from '@mui/lab'
import {
  Grid,
  TextField,
  Typography,
  Checkbox as CheckboxInput,
  FormControlLabel,
  Select,
  MenuItem,
} from '@mui/material'
import { useSearchParams } from 'react-router-dom'
type Props = {
  filterCallbacks?: FilterProps
  data?: any
}
const VakSmenaFilter = ({ filterCallbacks, data }: Props) => {
  const [urlParams, setUrlSearchParams] = useSearchParams()
  const currentParams = Object.fromEntries([...(urlParams ?? [])])
  const handleOnChangeSetField = (
    field: string,
    date: string,
    shouldValidate?: boolean,
    propsOperand?: string
  ) => {
    let finalParams = {}
    finalParams = JSON.parse(JSON.stringify(currentParams))
    const type = 'date'
    const value = date
    let { currentParamKeys, chosenOperand, filterData, columnsData } =
      getColumnsOperandFilterData(currentParams, field, date, type)
    if (value) {
      finalParams[`${field}:${type}:${propsOperand ?? chosenOperand}`] = value
      const { newFilterData, newColumnsData } = handleNewDefaultField(
        currentParamKeys,
        field,
        type,
        propsOperand ?? (chosenOperand as string),
        value
      )
      filterData = [...filterData, ...newFilterData]
      columnsData = [...columnsData, ...newColumnsData]
    } else
      delete finalParams[`${field}:${type}:${propsOperand ?? chosenOperand}`]
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
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <Grid container alignItems="center" paddingY={1}>
          <DatePicker
            value={getFieldValue('termin_od') ?? null}
            label="termin_od"
            onChange={(val: Date | null) => {
              handleOnChangeSetField(
                'termin_od',
                saveDate(val),
                false,
                'gte'
              )
            }}
            renderInput={(params) => (
              <TextField fullWidth variant="standard" {...params} />
            )}
          />
        </Grid>
      </LocalizationProvider>
    </>,
    <>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <Grid container alignItems="center" paddingY={1}>
          <DatePicker
            value={getFieldValue('termin_do') ?? null}
            label="termin_do"
            onChange={(val: Date | null) => {
              handleOnChangeSetField(
                'termin_do',
                saveDate(val),
                false,
                'lte'
              )
            }}
            renderInput={(params) => (
              <TextField fullWidth variant="standard" {...params} />
            )}
          />
        </Grid>
      </LocalizationProvider>
    </>,
    <>
      <Grid container alignItems="center" paddingY={1}>
        <Select
          variant="standard"
          name="vak_smena_typ.name"
          label={
            <Translate
              entityName={'vak_smena_typ'}
              fieldName={getRelationshipField('name')}
              defaultMessage={'vak_smena_typ.name'}
            />
          }
          onChange={(event: Event) => handleOnChange('smena_typ.name', event)}
          onClick={(event) => {
            event.stopPropagation()
          }}
          fullWidth
          value={getFieldValue('smena_typ.name') ?? ''}
        >
          {data?.vak_smena_typ?.map((enumField) => (
            <MenuItem value={enumField?.name} key={enumField?.id}>
              <Translate
                entityName={'vak_smena_typ'}
                fieldName={`${'name'}.${enumField?.name}`}
                defaultMessage={enumField?.name}
              />
            </MenuItem>
          ))}
        </Select>
      </Grid>
    </>,
    <>
      <Grid container alignItems="center" paddingY={1}>
        <Select
          name="smena2pracovnik.pracovnik.name"
          label={
            <Translate
              entityName={'vak_smena2pracovnik'}
              fieldName={getRelationshipField('name')}
              defaultMessage={'smena2pracovnik.pracovnik.name'}
            />
          }
          variant="standard"
          title="smena2pracovnik.pracovnik.name"
          onChange={(event: Event) =>
            handleOnChange('smena2pracovnik.pracovnik.name', event)
          }
          onClick={(event) => {
            event.stopPropagation()
          }}
          InputProps={{
            startAdornment: <></>,
          }}
          fullWidth
          value={getFieldValue('smena2pracovnik.pracovnik.name') ?? ''}
        >
          {data?.vak_pracovnik?.map((enumField) => (
            <MenuItem value={enumField?.name} key={enumField?.id}>
              <Translate
                entityName={'vak_pracovnik'}
                fieldName={`${'name'}.${enumField?.name}`}
                defaultMessage={enumField?.name}
              />
            </MenuItem>
          ))}
        </Select>
      </Grid>
    </>,
  ]
  return <>{columns?.map((field) => field)}</>
}
export default VakSmenaFilter
