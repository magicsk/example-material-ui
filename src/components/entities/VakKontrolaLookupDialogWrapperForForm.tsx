import React from 'react'
import { LookupDialog } from './LookupDialog'
import VakKontrolaDataTableContainerForForm from './vak_kontrola/VakKontrolaDataTableContainerForForm'
import VakKontrolaDataTableGridViewForForm from './vak_kontrola/VakKontrolaDataTableGridViewForForm'
import Button from '@mui/material/Button'
import { Search } from '@mui/icons-material'
import { Translate } from '@iteria-app/component-templates'
type Props = {
  setFieldValue: (field: string, value: any, shouldValidate?: boolean) => void
  replacedValue: string
}
export const VakKontrolaLookupDialogWrapperForForm = ({
  setFieldValue,
  replacedValue,
}: Props) => {
  return (
    <LookupDialog
      Container={VakKontrolaDataTableContainerForForm}
      View={VakKontrolaDataTableGridViewForForm}
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
