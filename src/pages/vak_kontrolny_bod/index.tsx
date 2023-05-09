import React from 'react'
import VakKontrolnyBodTabsList from '../../components/entities/vak_kontrolny_bod/VakKontrolnyBodTabsList'
import { Outlet } from 'react-router-dom'
import { WrapperForContentBesidesDrawer } from '@iteria-app/component-templates'
import { Box } from '@mui/material'
const VakKontrolnyBodManyPage: React.FC = () => {
  return (
    <>
      <Box
        sx={{
          display: 'flex',
        }}
      >
        <WrapperForContentBesidesDrawer open>
          <VakKontrolnyBodTabsList />
          <Outlet />
        </WrapperForContentBesidesDrawer>
      </Box>
    </>
  )
}
export default VakKontrolnyBodManyPage
export const INDEX_ROUTE = 'data-table'
