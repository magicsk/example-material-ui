import React from 'react'
import { useParams, useNavigate, useSearchParams } from 'react-router-dom'
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
  useFilter,
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
}
interface VakKontrolnyBodFormContainerProps {
  View: React.FC<IViewProps>
}
const VakKontrolnyBodCreateContainer: React.FC<
  VakKontrolnyBodFormContainerProps
> = ({ View }) => {
  const { id } = useParams()
  const navigate = useNavigate()
  const intl = useIntl()
  const [searchParams] = useSearchParams()
  const filterProps = useFilter(searchParams, 'vak_kontrolny_bod')
  const [insertedData, insertMutation] = useInsert_Vak_Kontrolny_BodMutation()
  let data
  if (filterProps?.id)
    [data] = useVak_Kontrolny_Bod_By_PkQuery({
      variables: { id: filterProps?.id },
    })
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
  if (data?.fetching) return <Fetching />
  if (data?.error) return <Error error={data?.error} />
  return (
    <ErrorBoundary>
      <QueryBoundary queryResponse={data}>
        <View data={data?.data} onSubmit={handleSubmit} />
      </QueryBoundary>
    </ErrorBoundary>
  )
}
export default VakKontrolnyBodCreateContainer
