import React from 'react'
import VakPracovnikFormView from '../../../components/entities/vak_pracovnik/VakPracovnikFormView'
import VakPracovnikFormContainer from '../../../components/entities/vak_pracovnik/VakPracovnikFormContainer'
const VakPracovnikFormPage: React.FC = () => {
  return (
    <VakPracovnikFormContainer
      View={({ data, onSubmit, onCopy, onDelete }) => (
        <VakPracovnikFormView
          data={data}
          onSubmit={onSubmit}
          onCopy={onCopy}
          onDelete={onDelete}
        />
      )}
    />
  )
}
export default VakPracovnikFormPage
// export const OUTLET_ROUTE = 'domysliet cestu k listu'
