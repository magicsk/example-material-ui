import React from 'react'
import VakSmenaTypCreateFormView from '../../components/entities/vak_smena_typ/VakSmenaTypCreateFormView'
import VakSmenaTypCreateContainer from '../../components/entities/vak_smena_typ/VakSmenaTypCreateContainer'
const VakSmenaTypCreatePage: React.FC = () => {
  return (
    <VakSmenaTypCreateContainer
      View={({ data, onSubmit }) => (
        <>
          <VakSmenaTypCreateFormView data={data} onSubmit={onSubmit} />
        </>
      )}
    />
  )
}
export default VakSmenaTypCreatePage
