import React from 'react'
import VakUlohaFormView from '../../../components/entities/vak_uloha/VakUlohaFormView'
import VakUlohaFormContainer from '../../../components/entities/vak_uloha/VakUlohaFormContainer'
const VakUlohaFormPage: React.FC = () => {
  return (
    <VakUlohaFormContainer
      View={({ data, onSubmit, onCopy }) => (
        <VakUlohaFormView data={data} onSubmit={onSubmit} onCopy={onCopy} />
      )}
    />
  )
}
export default VakUlohaFormPage
// export const OUTLET_ROUTE = 'domysliet cestu k listu'
