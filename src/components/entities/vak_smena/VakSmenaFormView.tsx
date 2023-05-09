import React from 'react'
import {
  Formik,
  FormikHelpers,
  FormikValues,
  FieldProps,
  useFormikContext,
} from 'formik'
import VakKontrolnyBodDataTableGridViewForForm from '../vak_kontrolny_bod/VakKontrolnyBodDataTableGridViewForForm'
import VakKontrolnyBodDataTableContainerForForm from '../vak_kontrolny_bod/VakKontrolnyBodDataTableContainerForForm'
import VakUlohaDataTableGridViewForForm from '../../entities/vak_uloha/VakUlohaDataTableGridViewForForm'
import VakPracovnikDataTableGridViewForForm from '../vak_pracovnik/VakPracovnikDataTableGridViewForForm'
import VakPracovnikDataTableContainerForForm from '../vak_pracovnik/VakPracovnikDataTableContainerForForm'
import { LookupDialog } from '../LookupDialog'
import { VakSmenaTypLookupDialogWrapperForForm } from '../VakSmenaTypLookupDialogWrapperForForm'
import VakSmenaTypForm from '../vak_smena_typ/VakSmenaTypForm'
import VakSmenaForm from '../../entities/vak_smena/VakSmenaForm'
import VakSmena2pracovnikDataTableGridViewForForm from '../vak_smena2pracovnik/VakSmena2pracovnikDataTableGridViewForForm'
import VakObhliadkaSumarDataTableGridViewForForm from '../vak_obhliadka_sumar/VakObhliadkaSumarDataTableGridViewForForm'
import { FormCard } from '../FormCard'
import { FormField } from '../FormField'
import {
  Box,
  CardActions,
  CardContent,
  Grid,
  Typography,
  Button,
} from '@mui/material'
import { FileCopy, Save, Add, Delete, Undo } from '@mui/icons-material'
import {
  createEmptyObject,
  Translate,
  columnCount,
  createNewElement,
  handleArrayRealtionshipSubmit,
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
  onDelete?: (
    values: FormikValues,
    formikHelpers: FormikHelpers<FormikValues>
  ) => void
  saveButtonDisabled?: boolean
}
const VakSmenaFormView: React.FC<Props> = ({
  data,
  onSubmit,
  onCopy,
  onDelete,
  saveButtonDisabled,
}) => {
  const formikProps = useFormikContext()
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
                <form onSubmit={formikProps.handleSubmit} id={'smena_form'}>
                  <Grid container spacing={3}>
                    <FormCard title={'vak_smena'}>
                      <VakSmenaForm
                        rootName={'vak_smena_by_pk' ?? 'ROOT_NAME'}
                      />
                    </FormCard>
                    <Grid
                      item
                      container
                      direction={'row'}
                      xs={6}
                      md={3}
                      columns={6}
                    >
                      <FormField
                        fieldName="smena_typ"
                        rootName="vak_smena_by_pk"
                      >
                        {(fieldProps: FieldProps) => {
                          return (
                            <FormCard title={'smena_typ' ?? 'vak_smena_typ'}>
                              <VakSmenaTypForm
                                rootName="vak_smena_by_pk"
                                relationshipName="smena_typ"
                                value={fieldProps.field.value}
                              />
                              {'smena_typ' && formikProps?.setFieldValue && (
                                <VakSmenaTypLookupDialogWrapperForForm
                                  setFieldValue={formikProps?.setFieldValue}
                                  replacedValue="vak_smena_by_pk.smena_typ"
                                />
                              )}
                            </FormCard>
                          )
                        }}
                      </FormField>
                      <FormField
                        fieldName="smena2pracovnik"
                        rootName="vak_smena_by_pk"
                      >
                        {(fieldProps: FieldProps) => {
                          return (
                            <FormCard title="smena2pracovnik">
                              <VakSmena2pracovnikDataTableGridViewForForm
                                data={fieldProps.field.value}
                                relationshipName="smena2pracovnik"
                                rootName="vak_smena_by_pk"
                              />
                              <LookupDialog
                                Container={
                                  VakPracovnikDataTableContainerForForm
                                }
                                View={VakPracovnikDataTableGridViewForForm}
                                checkboxes
                                toExclude={fieldProps.field.value}
                                onSubmit={(rows) => {
                                  handleArrayRealtionshipSubmit(
                                    fieldProps.field.value,
                                    formikProps?.setFieldValue,
                                    generatedGraphql,
                                    introspection,
                                    'vak_smena_by_pk',
                                    'vak_smena2pracovnik',
                                    rows,
                                    'pracovnik'
                                  )
                                }}
                                title="smena2pracovnik"
                              >
                                <Button
                                  startIcon={<Add />}
                                  color="secondary"
                                  variant="contained"
                                  sx={{ m: '16px' }}
                                >
                                  <Translate
                                    entityName="smena2pracovnik"
                                    fieldName="new"
                                    defaultMessage="Add new smena2pracovnik"
                                  />
                                </Button>
                              </LookupDialog>
                            </FormCard>
                          )
                        }}
                      </FormField>
                    </Grid>
                    <FormField
                      fieldName="obhliadka_sumar"
                      rootName="vak_smena_by_pk"
                    >
                      {(fieldProps: FieldProps) => {
                        return (
                          <FormCard title="obhliadka_sumar" length={12}>
                            <VakObhliadkaSumarDataTableGridViewForForm
                              data={fieldProps.field.value}
                              relationshipName="obhliadka_sumar"
                              rootName="vak_smena_by_pk"
                            />
                          </FormCard>
                        )
                      }}
                    </FormField>
                    <FormField fieldName="uloha" rootName="vak_smena_by_pk">
                      {(fieldProps: FieldProps) => {
                        return (
                          <FormCard title="uloha" length={12}>
                            <VakUlohaDataTableGridViewForForm
                              data={fieldProps.field.value}
                              relationshipName="uloha"
                              rootName="vak_smena_by_pk"
                            />
                            <LookupDialog
                              Container={
                                VakKontrolnyBodDataTableContainerForForm
                              }
                              View={VakKontrolnyBodDataTableGridViewForForm}
                              checkboxes
                              onSubmit={(rows) => {
                                handleArrayRealtionshipSubmit(
                                  fieldProps.field.value,
                                  formikProps?.setFieldValue,
                                  generatedGraphql,
                                  introspection,
                                  'vak_smena_by_pk',
                                  'vak_uloha',
                                  rows,
                                  'kontrolny_bod'
                                )
                              }}
                              title="uloha"
                            >
                              <Button
                                startIcon={<Add />}
                                color="secondary"
                                variant="contained"
                                sx={{ m: '16px' }}
                              >
                                <Translate
                                  entityName="uloha"
                                  fieldName="new"
                                  defaultMessage="Add new uloha"
                                />
                              </Button>
                            </LookupDialog>
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
                        !onDelete || data?.vak_smena_by_pk?.platny == null
                      }
                      loading={formikProps.isSubmitting}
                      loadingPosition="start"
                      color="error"
                      startIcon={
                        data?.vak_smena_by_pk?.platny ? <Delete /> : <Undo />
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
                          data?.vak_smena_by_pk?.platny ? 'Delete' : 'Restore'
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
export default VakSmenaFormView
