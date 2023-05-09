import React from 'react'
import VakUlohaTabsList from '../../components/entities/vak_uloha/VakUlohaTabsList'
import { Outlet } from 'react-router-dom'
import { WrapperForContentBesidesDrawer } from '@iteria-app/component-templates'
import { Box } from '@mui/material'
const VakUlohaManyPage: React.FC = () => {
  return (
    <>
      <Box
        sx={{
          display: 'flex',
        }}
      >
        <WrapperForContentBesidesDrawer open>
          <VakUlohaTabsList />
          <Outlet />
        </WrapperForContentBesidesDrawer>
      </Box>
    </>
  )
}
export default VakUlohaManyPage
export const INDEX_ROUTE = 'data-table'
