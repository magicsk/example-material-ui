import React, { ChangeEventHandler, FocusEventHandler } from 'react'
import { Formik, useFormikContext, FieldProps } from 'formik'
import {
  Checkbox as CheckboxInput,
  FormControlLabel,
  Grid,
  Typography,
  Input,
  TextField,
  InputLabel,
} from '@mui/material'
import { FormField } from '../FormField'
import {
  FormatFieldCellWrapper,
  TableRow,
  TranslateTableCellWrapper,
  columnCount,
} from '@iteria-app/component-templates'
interface IProps {
  rootName?: string
  relationshipName?: string
  index?: number
}
const VakUlohaForm: React.FC<IProps> = ({
  rootName,
  relationshipName,
  index,
}) => {
  const { setFieldValue } = useFormikContext()
  const columns = [
    <TableRow key="done">
      <TranslateTableCellWrapper
        headerName="Done"
        entityName="vak_uloha"
        fieldToReplace="done"
      />
      <FormatFieldCellWrapper>
        <FormField
          fieldName="done"
          rootName={rootName}
          relationshipName={relationshipName}
          index={index}
        >
          {(fieldProps: FieldProps) => {
            return (
              <Grid container alignItems="center">
                <FormControlLabel
                  control={
                    <CheckboxInput
                      name={fieldProps.field.name}
                      onChange={fieldProps.field.onChange}
                      checked={fieldProps.field.value}
                    />
                  }
                  label=""
                />
              </Grid>
            )
          }}
        </FormField>
      </FormatFieldCellWrapper>
    </TableRow>,
    <TableRow key="poradie">
      <TranslateTableCellWrapper
        headerName="Poradie"
        entityName="vak_uloha"
        fieldToReplace="poradie"
      />
      <FormatFieldCellWrapper>
        <FormField
          fieldName="poradie"
          rootName={rootName}
          relationshipName={relationshipName}
          index={index}
        >
          {(fieldProps: FieldProps) => {
            return (
              <Grid container alignItems="center" paddingY={1}>
                <TextField
                  type="number"
                  name={fieldProps.field.name}
                  variant="standard"
                  onChange={fieldProps.field.onChange}
                  onBlur={fieldProps.field.onBlur}
                  onClick={(event) => {
                    event.stopPropagation()
                  }}
                  fullWidth
                  value={fieldProps.field.value ?? ''}
                />
              </Grid>
            )
          }}
        </FormField>
      </FormatFieldCellWrapper>
    </TableRow>,
    <TableRow key="vstup_cislo">
      <TranslateTableCellWrapper
        headerName="Vstup cislo"
        entityName="vak_uloha"
        fieldToReplace="vstup_cislo"
      />
      <FormatFieldCellWrapper>
        <FormField
          fieldName="vstup_cislo"
          rootName={rootName}
          relationshipName={relationshipName}
          index={index}
        >
          {(fieldProps: FieldProps) => {
            return (
              <Grid container alignItems="center">
                <Input
                  type="number"
                  inputProps={{
                    step: '0.1',
                  }}
                  name={fieldProps.field.name}
                  onChange={fieldProps.field.onChange}
                  onBlur={fieldProps.field.onBlur}
                  onClick={(event) => {
                    event.stopPropagation()
                  }}
                  fullWidth
                  value={fieldProps.field.value ?? ''}
                />
              </Grid>
            )
          }}
        </FormField>
      </FormatFieldCellWrapper>
    </TableRow>,
    <TableRow key="vstup_text">
      <TranslateTableCellWrapper
        headerName="Vstup text"
        entityName="vak_uloha"
        fieldToReplace="vstup_text"
      />
      <FormatFieldCellWrapper>
        <FormField
          fieldName="vstup_text"
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
  ]
  return <>{columns?.map((field) => field)}</>
}
export default VakUlohaForm
