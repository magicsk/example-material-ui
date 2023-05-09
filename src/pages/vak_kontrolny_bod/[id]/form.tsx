import React from 'react'
import VakKontrolnyBodFormView from '../../../components/entities/vak_kontrolny_bod/VakKontrolnyBodFormView'
import VakKontrolnyBodFormContainer from '../../../components/entities/vak_kontrolny_bod/VakKontrolnyBodFormContainer'
const VakKontrolnyBodFormPage: React.FC = () => {
  return (
    <VakKontrolnyBodFormContainer
      View={({ data, onSubmit, onCopy, onDelete }) => (
        <VakKontrolnyBodFormView
          data={data}
          onSubmit={onSubmit}
          onCopy={onCopy}
          onDelete={onDelete} 
        />
      )}
    />
  )
}
export default VakKontrolnyBodFormPage
// export const OUTLET_ROUTE = 'domysliet cestu k listu'
