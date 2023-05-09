import React from 'react'
import { Formik, FormikHelpers, FormikValues, FieldProps } from 'formik'
import VakPredpisObhliadkaDataTableGridViewForForm from '../vak_predpis_obhliadka/VakPredpisObhliadkaDataTableGridViewForForm'
import { FormCard } from '../FormCard'
import { FormField } from '../FormField'
import VakSmenaTypForm from '../../entities/vak_smena_typ/VakSmenaTypForm'
import {
  Box,
  Button,
  CardActions,
  CardContent,
  Grid,
  Typography,
} from '@mui/material'
import { Delete, FileCopy, Save, Undo } from '@mui/icons-material'
import {
  createEmptyObject,
  Translate,
  columnCount,
} from '@iteria-app/component-templates'
import { LoadingButton } from '@mui/lab'
import * as generatedGraphql from '../../../generated/graphql'
import introspection from '../../../generated/introspect.json'
interface Props {
  data?: generatedGraphql.VakSmenaTypQuery
  onSubmit: (
    values: FormikValues,
    formikHelpers: FormikHelpers<FormikValues>
  ) => void
  onCopy?: (
    values: FormikValues,
    formikHelpers: FormikHelpers<FormikValues>
  ) => void
  onDelete?: (
    values: FormikValues,
    formikHelpers: FormikHelpers<FormikValues>
  ) => void
  saveButtonDisabled?: boolean
}
const VakSmenaTypFormView: React.FC<Props> = ({
  data,
  onSubmit,
  onCopy,
  onDelete,
  saveButtonDisabled,
}) => {
  return (
    <div style={{ marginLeft: 25, marginRight: 25 }}>
      <Typography variant="h1" align="center">
        <Translate
          entityName="vak_smena_typ"
          fieldName="heading"
          defaultMessage="vak_smena_typ"
        />
      </Typography>
      <Typography align="center">
        <Translate
          entityName="vak_smena_typ"
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
                'vak_smena_typ_by_pk',
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
                    <FormCard title={'vak_smena_typ'}>
                      <VakSmenaTypForm
                        rootName={'vak_smena_typ_by_pk' ?? 'ROOT_NAME'}
                      />
                    </FormCard>
                    <FormField
                      fieldName="predpis_obhliadka"
                      rootName="vak_smena_typ_by_pk"
                    >
                      {(fieldProps: FieldProps) => {
                        return (
                          <FormCard
                            title="predpis_obhliadka"
                            length={columnCount(fieldProps.field.value)}
                          >
                            <VakPredpisObhliadkaDataTableGridViewForForm
                              data={fieldProps.field.value}
                              relationshipName="predpis_obhliadka"
                              rootName="vak_smena_typ_by_pk"
                            />
                          </FormCard>
                        )
                      }}
                    </FormField>
                  </Grid>
                  <CardActions>
                    <LoadingButton
                      disabled={saveButtonDisabled}
                      loading={formikProps.isSubmitting}
                      loadingPosition="start"
                      startIcon={<Save />}
                      style={{
                        margin: '12px auto',
                      }}
                      variant="contained"
                      type="submit"
                      data-test-id="save-entity-button"
                    >
                      <Translate entityName="Save" />
                    </LoadingButton>
                    {onCopy !== undefined && (
                      <LoadingButton
                        disabled={saveButtonDisabled}
                        color="secondary"
                        loading={formikProps.isSubmitting}
                        loadingPosition="start"
                        startIcon={<FileCopy />}
                        style={{
                          margin: '12px auto',
                        }}
                        variant="contained"
                        onClick={() => {
                          if (onCopy) {
                            onCopy(data as FormikValues, formikProps)
                          }
                        }}
                        data-test-id="copy-entity-button"
                      >
                        <Translate entityName="Copy" />
                      </LoadingButton>
                    )}
                    <LoadingButton
                      disabled={
                        !onDelete || data?.vak_smena_typ_by_pk?.platny == null
                      }
                      loading={formikProps.isSubmitting}
                      loadingPosition="start"
                      color="error"
                      startIcon={
                        data?.vak_smena_typ_by_pk?.platny ? (
                          <Delete />
                        ) : (
                          <Undo />
                        )
                      }
                      style={{
                        margin: '12px auto',
                      }}
                      variant="contained"
                      onClick={() => {
                        onDelete(data as FormikValues, formikProps)
                      }}
                      data-test-id="delete-entity-button"
                    >
                      <Translate
                        entityName={
                          data?.vak_smena_typ_by_pk?.platny
                            ? 'Delete'
                            : 'Restore'
                        }
                      />
                    </LoadingButton>
                  </CardActions>
                </form>
              )
            }}
          </Formik>
        </CardContent>
      </Box>
    </div>
  )
}
export default VakSmenaTypFormView
