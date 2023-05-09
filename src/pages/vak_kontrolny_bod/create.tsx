import React from 'react'
import VakKontrolnyBodCreateFormView from '../../components/entities/vak_kontrolny_bod/VakKontrolnyBodCreateFormView'
import VakKontrolnyBodCreateContainer from '../../components/entities/vak_kontrolny_bod/VakKontrolnyBodCreateContainer'
const VakKontrolnyBodCreatePage: React.FC = () => {
  return (
    <VakKontrolnyBodCreateContainer
      View={({ data, onSubmit }) => (
        <>
          <VakKontrolnyBodCreateFormView data={data} onSubmit={onSubmit} />
        </>
      )}
    />
  )
}
export default VakKontrolnyBodCreatePage
