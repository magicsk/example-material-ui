import React, { ChangeEventHandler, FocusEventHandler, ReactNode } from 'react'
import { Formik, useFormikContext, FieldProps } from 'formik'
import introspection from '../../../generated/introspect.json'
import {
  Grid,
  InputLabel,
  Input,
  TextField,
  Checkbox as CheckboxInput,
  FormControlLabel,
  Typography,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material'
import { FormField } from '../FormField'
import {
  FormatFieldCellWrapper,
  TableRow,
  TranslateTableCellWrapper,
  columnCount,
  getEnumTypes,
  Translate,
} from '@iteria-app/component-templates'
interface IProps {
  rootName?: string
  relationshipName?: string
  index?: number
}
const VakUlohaTypForm: React.FC<IProps> = ({
  rootName,
  relationshipName,
  index,
}) => {
  const { setFieldValue } = useFormikContext()
  const columns = [
    <TableRow key="name">
      <TranslateTableCellWrapper
        headerName="Name"
        entityName="vak_uloha_typ"
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
    <TableRow key="vstup">
      <TranslateTableCellWrapper
        headerName="Vstup"
        entityName="vak_uloha_typ"
        fieldToReplace="vstup"
      />
      <FormatFieldCellWrapper>
        <FormField
          fieldName="vstup"
          rootName={rootName}
          relationshipName={relationshipName}
          index={index}
        >
          {(fieldProps: FieldProps) => {
            return (
              <Grid container alignItems="center" paddingY={1}>
                <Select
                  name={fieldProps.field.name}
                  onChange={fieldProps.field.onChange}
                  onBlur={fieldProps.field.onBlur}
                  onClick={(event) => {
                    event.stopPropagation()
                  }}
                  fullWidth
                  value={fieldProps.field.value ?? ''}
                >
                  {getEnumTypes(introspection, 'vak_uloha_typ', 'vstup').map(
                    (enumField) => (
                      <MenuItem value={enumField} key={enumField}>
                        <Translate
                          entityName="vak_uloha_typ"
                          fieldName={`vstup.${enumField}`}
                          defaultMessage={enumField}
                        />
                      </MenuItem>
                    )
                  )}
                </Select>
              </Grid>
            )
          }}
        </FormField>
      </FormatFieldCellWrapper>
    </TableRow>,
  ]
  return <>{columns?.map((field) => field)}</>
}
export default VakUlohaTypForm
