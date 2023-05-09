import React from 'react'
import VakSmenaCreateFormView from '../../components/entities/vak_smena/VakSmenaCreateFormView'
import VakSmenaCreateContainer from '../../components/entities/vak_smena/VakSmenaCreateContainer'
const VakSmenaCreatePage: React.FC = () => {
  return (
    <VakSmenaCreateContainer
      View={({ data, onSubmit }) => (
        <>
          <VakSmenaCreateFormView data={data} onSubmit={onSubmit} />
        </>
      )}
    />
  )
}
export default VakSmenaCreatePage
