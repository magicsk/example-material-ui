import React from 'react'
import { Formik, FormikHelpers, FormikValues, FieldProps } from 'formik'
import VakUlohaDataTableGridViewReadForForm from '../vak_uloha/VakUlohaDataTableGridViewReadForForm'
import { FormCard } from '../FormCard'
import { FormField } from '../FormField'
import {
  Box,
  CardActions,
  CardContent,
  Grid,
  Typography,
} from '@mui/material'
import { FileCopy, Save } from '@mui/icons-material'
import {
  createEmptyObject,
  Translate,
  columnCount,
} from '@iteria-app/component-templates'
import { LoadingButton } from '@mui/lab'
import * as generatedGraphql from '../../../generated/graphql'
import introspection from '../../../generated/introspect.json'
interface Props {
  data?: generatedGraphql.VakSmenaQuery
  onSubmit: (
    values: FormikValues,
    formikHelpers: FormikHelpers<FormikValues>
  ) => void
  onCopy?: (
    values: FormikValues,
    formikHelpers: FormikHelpers<FormikValues>
  ) => void
  saveButtonDisabled?: boolean
}
const VakSmenaFormPrintView: React.FC<Props> = ({
  data,
  onSubmit,
  onCopy,
  saveButtonDisabled,
}) => {
  return (
    <div style={{ marginLeft: 25, marginRight: 25 }}>
      <Typography variant="h1" align="center">
        <Translate
          entityName="vak_smena"
          fieldName="heading"
          defaultMessage="vak_smena"
        />
      </Typography>
      <Typography align="center">
        <Translate
          entityName="vak_smena"
          fieldName="message"
          defaultMessage="Edit this text using the translate tool"
        />
      </Typography>
      <Box sx={{ marginY: 2 }}>
        <CardContent>
          <Formik
            initialValues={
              data ??
              createEmptyObject(
                'vak_smena_by_pk',
                generatedGraphql,
                introspection
              )
            }
            onSubmit={onSubmit}
            validateOnChange={false}
            validateOnBlur={false}
          >
            {(formikProps) => {
              const { setFieldValue } = formikProps
              return (
                <form onSubmit={formikProps.handleSubmit}>
                  <Grid container spacing={3}>
                    <FormField fieldName="uloha" rootName="vak_smena_by_pk">
                      {(fieldProps: FieldProps) => {
                        return (
                          <FormCard
                            title="uloha"
                            length={12}
                          >
                            <VakUlohaDataTableGridViewReadForForm
                              data={fieldProps.field.value}
                              relationshipName="uloha"
                              rootName="vak_smena_by_pk"
                            />
                          </FormCard>
                        )
                      }}
                    </FormField>
                  </Grid>
                </form>
              )
            }}
          </Formik>
        </CardContent>
      </Box>
    </div>
  )
}
export default VakSmenaFormPrintView
