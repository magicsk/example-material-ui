import React from 'react'
import VakPracovnikCreateFormView from '../../components/entities/vak_pracovnik/VakPracovnikCreateFormView'
import VakPracovnikCreateContainer from '../../components/entities/vak_pracovnik/VakPracovnikCreateContainer'
const VakPracovnikCreatePage: React.FC = () => {
  return (
    <VakPracovnikCreateContainer
      View={({ data, onSubmit }) => (
        <>
          <VakPracovnikCreateFormView data={data} onSubmit={onSubmit} />
        </>
      )}
    />
  )
}
export default VakPracovnikCreatePage
