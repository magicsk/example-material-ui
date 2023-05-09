import React from 'react'
import { LookupDialog } from './LookupDialog'
import VakUlohaDataTableContainerForForm from './vak_uloha/VakUlohaDataTableContainerForForm'
import VakUlohaDataTableGridViewForForm from './vak_uloha/VakUlohaDataTableGridViewForForm'
import Button from '@mui/material/Button'
import { Search } from '@mui/icons-material'
import { Translate } from '@iteria-app/component-templates'
type Props = {
  setFieldValue: (field: string, value: any, shouldValidate?: boolean) => void
  replacedValue: string
}
export const VakUlohaLookupDialogWrapperForForm = ({
  setFieldValue,
  replacedValue,
}: Props) => {
  return (
    <LookupDialog
      Container={VakUlohaDataTableContainerForForm}
      View={VakUlohaDataTableGridViewForForm}
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
