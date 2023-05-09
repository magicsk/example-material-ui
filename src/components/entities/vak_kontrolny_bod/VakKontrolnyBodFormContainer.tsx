import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import {
  useVak_Kontrolny_Bod_By_PkQuery,
  useInsert_Vak_Kontrolny_BodMutation,
} from '../../../generated/graphql'
import {
  deepClone,
  Error,
  ErrorBoundary,
  Fetching,
  parseRequestErrors,
  QueryBoundary,
  showErrorSnackbar,
  showLoadingSnackbar,
  showSuccessSnackbar,
} from '@iteria-app/component-templates'
import { FormikHelpers, FormikValues } from 'formik'
import { getUpsertQuery } from '@iteria-app/graphql-lowcode'
import { useIntl } from 'react-intl'
import * as generatedGraphql from '../../../generated/graphql'
interface IViewProps {
  data: generatedGraphql.VakKontrolnyBodQuery
  onSubmit: (
    values: FormikValues,
    formikHelpers: FormikHelpers<FormikValues>
  ) => void
  onCopy: (
    values: FormikValues,
    formikHelpers: FormikHelpers<FormikValues>
  ) => void
  onDelete: (
    values: FormikValues,
    formikHelpers: FormikHelpers<FormikValues>
  ) => void
}
interface VakKontrolnyBodFormContainerProps {
  View: React.FC<IViewProps>
}
const VakKontrolnyBodFormContainer: React.FC<
  VakKontrolnyBodFormContainerProps
> = ({ View }) => {
  const { id } = useParams()
  const navigate = useNavigate()
  const intl = useIntl()
  const [insertedData, insertMutation] = useInsert_Vak_Kontrolny_BodMutation()
  let data
  if (id !== 'create') {
    ;[data] = useVak_Kontrolny_Bod_By_PkQuery({
      variables: { id },
    })
  }
  const handleSubmit = (
    values: FormikValues,
    formikHelpers: FormikHelpers<FormikValues>
  ) => {
    formikHelpers.setSubmitting(true)
    showLoadingSnackbar(
      intl.formatMessage({
        id: 'submit.inprogress',
        defaultMessage: 'Submitting...',
      })
    )
    insertMutation(getUpsertQuery(values, generatedGraphql)).then(
      (response) => {
        if (response.error) {
          showErrorSnackbar(
            intl.formatMessage({
              id: 'submit.failed',
              defaultMessage: 'Submit failed: ',
            }) + parseRequestErrors(response.error.message, intl)
          )
          console.error('Submit error:', response.error)
        } else {
          showSuccessSnackbar(
            intl.formatMessage({
              id: 'submit.successful',
              defaultMessage: 'Submit successful',
            })
          )
        }
        formikHelpers.setSubmitting(false)
        const newId =
          response.data?.[`${Object.keys(response.data)[0]}`]?.returning?.[0]
            ?.id
        if (newId) {
          navigate(-1)
        }
      }
    )
  }
  const handleCopy = (
    values: FormikValues,
    formikHelpers: FormikHelpers<FormikValues>
  ) => {
    handleSubmit( deepClone(values, false, true), formikHelpers)
  }
  const handleDelete = (
    values: FormikValues,
    formikHelpers: FormikHelpers<FormikValues>
  ) => {
    if (values?.vak_kontrolny_bod_by_pk?.platny != null) {
      values.vak_kontrolny_bod_by_pk.platny = !(values?.vak_kontrolny_bod_by_pk?.platny ?? true)
    } else {
      console.error("values.vak_kontrolny_bod_by_pk.platny not found")
    }
    handleSubmit(values, formikHelpers)
  }
  if (data?.fetching) return <Fetching />
  if (data?.error) return <Error error={data?.error} />
  return (
    <ErrorBoundary>
      <QueryBoundary queryResponse={data}>
        <View data={data?.data} onSubmit={handleSubmit} onCopy={handleCopy} onDelete={handleDelete}/>
      </QueryBoundary>
    </ErrorBoundary>
  )
}
export default VakKontrolnyBodFormContainer
