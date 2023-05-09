import React from 'react'
import VakUlohaTypFormView from '../../../components/entities/vak_uloha_typ/VakUlohaTypFormView'
import VakUlohaTypFormContainer from '../../../components/entities/vak_uloha_typ/VakUlohaTypFormContainer'
const VakUlohaTypFormPage: React.FC = () => {
  return (
    <VakUlohaTypFormContainer
      View={({ data, onSubmit, onCopy, onDelete }) => (
        <VakUlohaTypFormView data={data} onSubmit={onSubmit} onCopy={onCopy} onDelete={onDelete} />
      )}
    />
  )
}
export default VakUlohaTypFormPage
// export const OUTLET_ROUTE = 'domysliet cestu k listu'
