import React, { ChangeEventHandler, FocusEventHandler } from 'react'
import { Formik, useFormikContext, FieldProps } from 'formik'
import AdapterDateFns from '@date-io/date-fns'
import { DatePicker, DateTimePicker, LocalizationProvider } from '@mui/lab'
import {
  Grid,
  TextField,
  Checkbox as CheckboxInput,
  FormControlLabel,
  Select,
  MenuItem,
} from '@mui/material'
import { FormField } from '../FormField'
import introspection from '../../../generated/introspect.json'
import {
  FormatFieldCellWrapper,
  TableRow,
  TranslateTableCellWrapper,
  columnCount,
  saveDate,
  getEnumTypes,
  Translate,
} from '@iteria-app/component-templates'
interface IProps {
  rootName?: string
  relationshipName?: string
  index?: number
}
const VakSmenaForm: React.FC<IProps> = ({
  rootName,
  relationshipName,
  index,
}) => {
  const { setFieldValue } = useFormikContext()
  const columns = [
    <TableRow key="termin_od">
      <TranslateTableCellWrapper
        headerName="Termin datum od"
        entityName="vak_smena"
        fieldToReplace="termin_od"
      />
      <FormatFieldCellWrapper>
        <FormField
          fieldName="termin_od"
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
                    onChange={(val: Date | null) => {
                      setFieldValue(fieldProps.field.name, saveDateTime(val), false)
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
    <TableRow key="termin_do">
      <TranslateTableCellWrapper
        headerName="Termin datum do"
        entityName="vak_smena"
        fieldToReplace="termin_do"
      />
      <FormatFieldCellWrapper>
        <FormField
          fieldName="termin_do"
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
                    onChange={(val: Date | null) => {
                      setFieldValue(fieldProps.field.name, saveDateTime(val), false)
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
    <TableRow key="informacia_kancelaria">
      <TranslateTableCellWrapper
        headerName="Informacia kancelaria"
        entityName="vak_smena"
        fieldToReplace="informacia_kancelaria"
      />
      <FormatFieldCellWrapper>
        <FormField
          fieldName="informacia_kancelaria"
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
                  multiline
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
    <TableRow key="informacia_teren">
      <TranslateTableCellWrapper
        headerName="Informacia teren"
        entityName="vak_smena"
        fieldToReplace="informacia_teren"
      />
      <FormatFieldCellWrapper>
        <FormField
          fieldName="informacia_teren"
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
                  multiline
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
  ]
  return <>{columns?.map((field) => field)}</>
}
export default VakSmenaForm
