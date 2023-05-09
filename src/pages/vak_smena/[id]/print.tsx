import React from 'react'
import VakSmenaFormPrintView from '../../../components/entities/vak_smena/VakSmenaFormPrintView'
import VakSmenaFormPrintContainer from '../../../components/entities/vak_smena/VakSmenaFormPrintContainer'
const VakSmenaFormPrintPage: React.FC = () => {
  return (
    <VakSmenaFormPrintContainer
      View={({ data, onSubmit, onCopy }) => (
        <VakSmenaFormPrintView
          data={data}
          onSubmit={onSubmit}
          onCopy={onCopy}
        />
      )}
    />
  )
}
export default VakSmenaFormPrintPage
// export const OUTLET_ROUTE = 'domysliet cestu k listu'
