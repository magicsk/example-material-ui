import React from 'react'
import { LookupDialog } from './LookupDialog'
import VakSmenaTypDataTableContainerForForm from './vak_smena_typ/VakSmenaTypDataTableContainerForForm'
import VakSmenaTypDataTableGridViewForForm from './vak_smena_typ/VakSmenaTypDataTableGridViewForForm'
import Button from '@mui/material/Button'
import { Search } from '@mui/icons-material'
import { Translate } from '@iteria-app/component-templates'
type Props = {
  setFieldValue: (field: string, value: any, shouldValidate?: boolean) => void
  replacedValue: string
  submit: () => void
}
export const VakSmenaTypLookupDialogWrapperForForm = ({
  setFieldValue,
  replacedValue,
  submit
}: Props) => {
  return (
    <LookupDialog
      Container={VakSmenaTypDataTableContainerForForm}
      View={VakSmenaTypDataTableGridViewForForm}
      radio
      onSubmit={(rows) => {
        setFieldValue(replacedValue, rows?.[0], false)
        // document.getElementById("smena_form")?.requestSubmit?.()
        submit?.()
      }}
      title={replacedValue}
    >
      <Button
        color="secondary"
        variant="contained"
        startIcon={<Search />}
        style={{ margin: '16px' }}
      >
        <Translate
          entityName={replacedValue}
          fieldName="lookup"
          defaultMessage={`Lookup ${replacedValue}`}
        />
      </Button>
    </LookupDialog>
  )
}
