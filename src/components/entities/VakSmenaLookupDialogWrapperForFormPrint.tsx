import React from 'react'
import { LookupDialog } from './LookupDialog'
import VakSmenaDataTableContainerForFormPrint from './vak_smena/VakSmenaDataTableContainerForFormPrint'
import VakSmenaDataTableGridViewForFormPrint from './vak_smena/VakSmenaDataTableGridViewForFormPrint'
import Button from '@mui/material/Button'
import { Search } from '@mui/icons-material'
import { Translate } from '@iteria-app/component-templates'
type Props = {
  setFieldValue: (field: string, value: any, shouldValidate?: boolean) => void
  replacedValue: string
}
export const VakSmenaLookupDialogWrapperForFormPrint = ({
  setFieldValue,
  replacedValue,
}: Props) => {
  return (
    <LookupDialog
      Container={VakSmenaDataTableContainerForFormPrint}
      View={VakSmenaDataTableGridViewForFormPrint}
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
