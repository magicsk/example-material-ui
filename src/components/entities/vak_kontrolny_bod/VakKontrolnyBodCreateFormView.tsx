import React from 'react'
import { Formik, FormikHelpers, FormikValues } from 'formik'
import {
  Box,
  Button,
  CardActions,
  CardContent,
  Grid,
  Typography,
} from '@mui/material'
import { FileCopy, Save } from '@mui/icons-material'
import { createEmptyObject, Translate } from '@iteria-app/component-templates'
import { LoadingButton } from '@mui/lab'
import VakKontrolnyBodFormCreate from '../vak_kontrolny_bod/VakKontrolnyBodFormCreate'
import * as generatedGraphql from '../../../generated/graphql'
import introspection from '../../../generated/introspect.json'
import { FormCard } from '../FormCard'
interface Props {
  data?: generatedGraphql.VakKontrolnyBodQuery
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
const VakKontrolnyBodCreateFormView: React.FC<Props> = ({
  data,
  onSubmit,
  onCopy,
  saveButtonDisabled,
}) => {
  return (
    <div style={{ marginLeft: 25, marginRight: 25 }}>
      <Typography variant="h1" align="center">
        <Translate
          entityName="vak_kontrolny_bod"
          fieldName="heading"
          defaultMessage="vak_kontrolny_bod"
        />
      </Typography>
      <Typography align="center">
        <Translate
          entityName="vak_kontrolny_bod"
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
                'vak_kontrolny_bod',
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
                    <FormCard title="vak_kontrolny_bod">
                      <VakKontrolnyBodFormCreate rootName="vak_kontrolny_bod" />
                    </FormCard>
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
export default VakKontrolnyBodCreateFormView
