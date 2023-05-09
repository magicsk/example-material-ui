import React from 'react'
import VakSmenaFormView from '../../../components/entities/vak_smena/VakSmenaFormView'
import VakSmenaFormContainer from '../../../components/entities/vak_smena/VakSmenaFormContainer'
const VakSmenaFormPage: React.FC = () => {
  return (
    <VakSmenaFormContainer
      View={({ data, onSubmit, onCopy, onDelete }) => (
        <VakSmenaFormView data={data} onSubmit={onSubmit} onCopy={onCopy} onDelete={onDelete} />
      )}
    />
  )
}
export default VakSmenaFormPage
// export const OUTLET_ROUTE = 'domysliet cestu k listu'
