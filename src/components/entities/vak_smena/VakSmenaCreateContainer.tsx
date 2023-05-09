import React from 'react'
import { useParams, useNavigate, useSearchParams } from 'react-router-dom'
import {
  useVak_Smena_By_PkQuery,
  useInsert_Vak_SmenaMutation,
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
  data: generatedGraphql.VakSmenaQuery
  onSubmit: (
    values: FormikValues,
    formikHelpers: FormikHelpers<FormikValues>
  ) => void
}
interface VakSmenaFormContainerProps {
  View: React.FC<IViewProps>
}
const VakSmenaCreateContainer: React.FC<VakSmenaFormContainerProps> = ({
  View,
}) => {
  const { id } = useParams()
  const navigate = useNavigate()
  const intl = useIntl()
  const [searchParams] = useSearchParams()
  const filterProps = useFilter(searchParams, 'vak_smena')
  const [insertedData, insertMutation] = useInsert_Vak_SmenaMutation()
  const [data] = generatedGraphql.useVak_Smena_CreateQuery()
  const handleSubmit = (
    values: FormikValues,
    formikHelpers: FormikHelpers<FormikValues>
  ) => {
    values = JSON.parse(JSON.stringify(values))
    debugger
    formikHelpers.setSubmitting(true)
    showLoadingSnackbar(
      intl.formatMessage({
        id: 'submit.inprogress',
        defaultMessage: 'Submitting...',
      })
    )
    if (!values?.vak_smena?.smena_typ?.id) {
      showErrorSnackbar(
        intl.formatMessage({
          id: 'smena_typ.submit.failed',
          defaultMessage: 'Submit failed: smena_typ cannot be null',
        })
      )
      formikHelpers.setSubmitting(false)
      return
    }
    values.vak_smena.__typename = 'vak_smena'
    delete values?.vak_uloha_typ
    if (values?.vak_smena)
      values.vak_smena.smena_typ_fk = values.vak_smena.smena_typ.id
    delete values?.vak_smena?.smena_typ
    if (values?.vak_smena?.smena2pracovnik) {
      values.vak_smena.smena2pracovnik =
        values?.vak_smena?.smena2pracovnik?.map((s2p) => {
          delete s2p?.smena
          if (s2p?.id < 0) delete s2p?.id
          return s2p
        })
    }
    values?.vak_smena?.uloha?.map((uloha) => {
      if (uloha?.poradie === null) delete uloha.poradie
      return uloha
    })
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
          navigate(`/app/vak_smena/${newId}`)
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
export default VakSmenaCreateContainer
