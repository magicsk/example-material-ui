import React from 'react'
import { LookupDialog } from './LookupDialog'
import VakPracovnikDataTableContainerForForm from './vak_pracovnik/VakPracovnikDataTableContainerForForm'
import VakPracovnikDataTableGridViewForForm from './vak_pracovnik/VakPracovnikDataTableGridViewForForm'
import Button from '@mui/material/Button'
import { Search } from '@mui/icons-material'
import { Translate } from '@iteria-app/component-templates'
type Props = {
  setFieldValue: (field: string, value: any, shouldValidate?: boolean) => void
  replacedValue: string
}
export const VakPracovnikLookupDialogWrapperForForm = ({
  setFieldValue,
  replacedValue,
}: Props) => {
  return (
    <LookupDialog
      Container={VakPracovnikDataTableContainerForForm}
      View={VakPracovnikDataTableGridViewForForm}
      onClickRow={(row) => {
        setFieldValue(replacedValue, row, false)
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
