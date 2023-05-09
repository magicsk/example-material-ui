import React from 'react'
import VakUlohaTypCreateFormView from '../../components/entities/vak_uloha_typ/VakUlohaTypCreateFormView'
import VakUlohaTypCreateContainer from '../../components/entities/vak_uloha_typ/VakUlohaTypCreateContainer'
const VakUlohaTypCreatePage: React.FC = () => {
  return (
    <VakUlohaTypCreateContainer
      View={({ data, onSubmit }) => (
        <>
          <VakUlohaTypCreateFormView data={data} onSubmit={onSubmit} />
        </>
      )}
    />
  )
}
export default VakUlohaTypCreatePage
