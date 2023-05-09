import React from 'react'
import VakSmenaTypFormView from '../../../components/entities/vak_smena_typ/VakSmenaTypFormView'
import VakSmenaTypFormContainer from '../../../components/entities/vak_smena_typ/VakSmenaTypFormContainer'
const VakSmenaTypFormPage: React.FC = () => {
  return (
    <VakSmenaTypFormContainer
      View={({ data, onSubmit, onCopy, onDelete }) => (
        <VakSmenaTypFormView
          data={data}
          onSubmit={onSubmit}
          onCopy={onCopy}
          onDelete={onDelete}
        />
      )}
    />
  )
}
export default VakSmenaTypFormPage
// export const OUTLET_ROUTE = 'domysliet cestu k listu'
