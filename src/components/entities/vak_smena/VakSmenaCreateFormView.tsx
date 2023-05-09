import React from 'react'
import {
  Formik,
  FormikHelpers,
  FormikValues,
  FieldProps,
} from 'formik'
import VakKontrolnyBodDataTableGridViewForForm from '../vak_kontrolny_bod/VakKontrolnyBodDataTableGridViewForForm'
import VakKontrolnyBodDataTableContainerForForm from '../vak_kontrolny_bod/VakKontrolnyBodDataTableContainerForForm'
import VakUlohaDataTableGridViewForForm from '../../entities/vak_uloha/VakUlohaDataTableGridViewForForm'
import VakPracovnikDataTableGridViewForForm from '../vak_pracovnik/VakPracovnikDataTableGridViewForForm'
import VakPracovnikDataTableContainerForForm from '../vak_pracovnik/VakPracovnikDataTableContainerForForm'
import { LookupDialog } from '../LookupDialog'
import { VakSmenaTypLookupDialogWrapperForForm } from '../VakSmenaTypLookupDialogWrapperForForm'
import VakSmenaTypForm from '../vak_smena_typ/VakSmenaTypForm'
import VakSmena2pracovnikDataTableGridViewForForm from '../vak_smena2pracovnik/VakSmena2pracovnikDataTableGridViewForForm'
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
import { FileCopy, Save, Add } from '@mui/icons-material'
import {
  createEmptyObject,
  Translate,
  handleArrayRealtionshipSubmit,
} from '@iteria-app/component-templates'
import { LoadingButton } from '@mui/lab'
import * as generatedGraphql from '../../../generated/graphql'
import introspection from '../../../generated/introspect.json'
import VakSmenaFormCreate from './VakSmenaFormCreate'
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
const VakSmenaCreateFormView: React.FC<Props> = ({
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
          fieldName="heading.create"
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
              createEmptyObject('vak_smena', generatedGraphql, introspection)
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
                    <FormCard title="vak_smena">
                      <VakSmenaFormCreate rootName="vak_smena" />
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
                        rootName="vak_smena"
                      >
                        {(fieldProps: FieldProps) => {
                          return (
                            <FormCard title={'smena_typ' ?? 'vak_smena_typ'}>
                              <VakSmenaTypForm
                                rootName="vak_smena"
                                relationshipName="smena_typ"
                                value={fieldProps.field.value}
                              />
                              {'smena_typ' && formikProps?.setFieldValue && (
                                <VakSmenaTypLookupDialogWrapperForForm
                                  setFieldValue={formikProps?.setFieldValue}
                                  replacedValue="vak_smena.smena_typ"
                                />
                              )}
                            </FormCard>
                          )
                        }}
                      </FormField>
                      <FormField
                        fieldName="smena2pracovnik"
                        rootName="vak_smena"
                      >
                        {(fieldProps: FieldProps) => {
                          return (
                            <FormCard title="smena2pracovnik">
                              <VakSmena2pracovnikDataTableGridViewForForm
                                data={fieldProps.field.value}
                                relationshipName="smena2pracovnik"
                                rootName="vak_smena"
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
                                    'vak_smena',
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
                    <FormField fieldName="uloha" rootName="vak_smena">
                      {(fieldProps: FieldProps) => {
                        return (
                          <FormCard title="uloha" length={12}>
                            <VakUlohaDataTableGridViewForForm
                              data={fieldProps.field.value}
                              relationshipName="uloha"
                              rootName="vak_smena"
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
                                  'vak_smena',
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
export default VakSmenaCreateFormView
