import React, { ChangeEventHandler, FocusEventHandler } from 'react'
import { Formik, useFormikContext, FieldProps } from 'formik'
import { DateTimePicker, LocalizationProvider } from '@mui/lab'
import AdapterDateFns from '@date-io/date-fns'
import { Grid, InputLabel, Input, TextField, Typography } from '@mui/material'
import { FormField } from '../FormField'
import {
  FormatFieldCellWrapper,
  TableRow,
  TranslateTableCellWrapper,
  columnCount,
  saveDateTime,
} from '@iteria-app/component-templates'
interface IProps {
  rootName?: string
  relationshipName?: string
  index?: number
}
const VakKontrolnyBodFormCreate: React.FC<IProps> = ({
  rootName,
  relationshipName,
  index,
}) => {
  const { setFieldValue } = useFormikContext()
  const columns = [
    <TableRow key="kod">
      <TranslateTableCellWrapper
        headerName="Kod"
        entityName="vak_kontrolny_bod"
        fieldToReplace="kod"
      />
      <FormatFieldCellWrapper>
        <FormField
          fieldName="kod"
          rootName={rootName}
          relationshipName={relationshipName}
          index={index}
        >
          {(fieldProps: FieldProps) => {
            return (
              <Grid container alignItems="center" paddingY={1}>
                <TextField
                  name={fieldProps.field.name}
                  variant="standard"
                  onChange={fieldProps.field.onChange}
                  onBlur={fieldProps.field.onBlur}
                  onClick={(event) => {
                    event.stopPropagation()
                  }}
                  InputProps={{
                    startAdornment: <></>,
                  }}
                  fullWidth
                  type="string"
                  value={fieldProps.field.value ?? ''}
                />
              </Grid>
            )
          }}
        </FormField>
      </FormatFieldCellWrapper>
    </TableRow>,
    <TableRow key="name">
      <TranslateTableCellWrapper
        headerName="Name"
        entityName="vak_kontrolny_bod"
        fieldToReplace="name"
      />
      <FormatFieldCellWrapper>
        <FormField
          fieldName="name"
          rootName={rootName}
          relationshipName={relationshipName}
          index={index}
        >
          {(fieldProps: FieldProps) => {
            return (
              <Grid container alignItems="center" paddingY={1}>
                <TextField
                  name={fieldProps.field.name}
                  variant="standard"
                  onChange={fieldProps.field.onChange}
                  onBlur={fieldProps.field.onBlur}
                  onClick={(event) => {
                    event.stopPropagation()
                  }}
                  InputProps={{
                    startAdornment: <></>,
                  }}
                  fullWidth
                  type="string"
                  value={fieldProps.field.value ?? ''}
                />
              </Grid>
            )
          }}
        </FormField>
      </FormatFieldCellWrapper>
    </TableRow>,
    <TableRow key="parovane">
      <TranslateTableCellWrapper
        headerName="Parovane"
        entityName="vak_kontrolny_bod"
        fieldToReplace="parovane"
      />
      <FormatFieldCellWrapper>
        <FormField
          fieldName="parovane"
          rootName={rootName}
          relationshipName={relationshipName}
          index={index}
        >
          {(fieldProps: FieldProps) => {
            return (
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <Grid container alignItems="center" paddingY={1}>
                  <DateTimePicker
                    value={fieldProps.field.value ?? null}
                    ampm={false}
                    onChange={(val: Date | null) => {
                      setFieldValue(
                        fieldProps.field.name,
                        saveDateTime(val),
                        false
                      )
                    }}
                    renderInput={(params) => (
                      <TextField fullWidth variant="standard" {...params} />
                    )}
                  />
                </Grid>
              </LocalizationProvider>
            )
          }}
        </FormField>
      </FormatFieldCellWrapper>
    </TableRow>,
  ]
  return <>{columns?.map((field) => field)}</>
}
export default VakKontrolnyBodFormCreate
