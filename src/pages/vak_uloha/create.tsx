import React from 'react'
import VakUlohaCreateFormView from '../../components/entities/vak_uloha/VakUlohaCreateFormView'
import VakUlohaCreateContainer from '../../components/entities/vak_uloha/VakUlohaCreateContainer'
const VakUlohaCreatePage: React.FC = () => {
  return (
    <VakUlohaCreateContainer
      View={({ data, onSubmit }) => (
        <>
          <VakUlohaCreateFormView data={data} onSubmit={onSubmit} />
        </>
      )}
    />
  )
}
export default VakUlohaCreatePage
