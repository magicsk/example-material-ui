import React from 'react'
import { LookupDialog } from './LookupDialog'
import VakSmenaDataTableContainerForForm from './vak_smena/VakSmenaDataTableContainerForForm'
import VakSmenaDataTableGridViewForForm from './vak_smena/VakSmenaDataTableGridViewForForm'
import Button from '@mui/material/Button'
import { Search } from '@mui/icons-material'
import { Translate } from '@iteria-app/component-templates'
type Props = {
  setFieldValue: (field: string, value: any, shouldValidate?: boolean) => void
  replacedValue: string
}
export const VakSmenaLookupDialogWrapperForForm = ({
  setFieldValue,
  replacedValue,
}: Props) => {
  return (
    <LookupDialog
      Container={VakSmenaDataTableContainerForForm}
      View={VakSmenaDataTableGridViewForForm}
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
