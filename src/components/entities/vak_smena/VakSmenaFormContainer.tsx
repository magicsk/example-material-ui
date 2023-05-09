import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
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
  onCopy: (
    values: FormikValues,
    formikHelpers: FormikHelpers<FormikValues>
  ) => void
  onDelete: (
    values: FormikValues,
    formikHelpers: FormikHelpers<FormikValues>
  ) => void
}
interface VakSmenaFormContainerProps {
  View: React.FC<IViewProps>
}
const VakSmenaFormContainer: React.FC<VakSmenaFormContainerProps> = ({
  View,
}) => {
  const { id } = useParams()
  const navigate = useNavigate()
  const intl = useIntl()
  const [insertedData, insertMutation] = useInsert_Vak_SmenaMutation()
  let data
  if (id !== 'create') {
    ;[data] = useVak_Smena_By_PkQuery({
      variables: { id },
    })
  }
  const handleSubmit = (
    values: FormikValues,
    formikHelpers: FormikHelpers<FormikValues>
  ) => {
    values = JSON.parse(JSON.stringify(values))
    formikHelpers.setSubmitting(true)
    showLoadingSnackbar(
      intl.formatMessage({
        id: 'submit.inprogress',
        defaultMessage: 'Submitting...',
      })
    )
    if (!values?.vak_smena_by_pk?.smena_typ?.id) {
      showErrorSnackbar(
        intl.formatMessage({
          id: 'smena_typ.submit.failed',
          defaultMessage: 'Submit failed: smena_typ cannot be null',
        })
      )
      return
    }
    if (values?.vak_smena_by_pk)
      values.vak_smena_by_pk.smena_typ_fk = values.vak_smena_by_pk.smena_typ.id
    delete values?.vak_smena_by_pk?.obhliadka_sumar
    delete values?.vak_smena_by_pk?.smena_typ
    if (values?.vak_smena_by_pk?.smena2pracovnik) {
      values.vak_smena_by_pk.smena2pracovnik =
        values?.vak_smena_by_pk?.smena2pracovnik?.map((s2p) => {
          delete s2p?.smena
          if (s2p?.id < 0) delete s2p?.id
          return s2p
        })
    }
    values?.vak_smena_by_pk?.uloha?.map((uloha) => {
      if (uloha?.poradie === null) delete uloha.poradie
      return uloha
    })
    // delete values?.vak_smena_by_pk?.smena2pracovnik?.smena
    // delete values?.vak_smena_by_pk?.smena2pracovnik?.id
    console.log(values)
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
  const handleCopy = (
    values: FormikValues,
    formikHelpers: FormikHelpers<FormikValues>
  ) => {
    const valuesDeepClone = deepClone(values, false, true)
    handleSubmit(valuesDeepClone, formikHelpers)
  }
  const handleDelete = (
    values: FormikValues,
    formikHelpers: FormikHelpers<FormikValues>
  ) => {
    if (values?.vak_smena_by_pk?.platny != null) {
      values.vak_smena_by_pk.platny = !(values?.vak_smena_by_pk?.platny ?? true)
    } else {
      console.error('values.vak_smena_by_pk.platny not found')
    }
    handleSubmit(values, formikHelpers)
  }
  if (data?.fetching) return <Fetching />
  if (data?.error) return <Error error={data?.error} />
  return (
    <ErrorBoundary>
      <QueryBoundary queryResponse={data}>
        <View
          data={data?.data}
          onSubmit={handleSubmit}
          onCopy={handleCopy}
          onDelete={handleDelete}
        />
      </QueryBoundary>
    </ErrorBoundary>
  )
}
export default VakSmenaFormContainer
