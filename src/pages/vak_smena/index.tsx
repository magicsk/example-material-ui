import React from 'react'
import VakSmenaTabsList from '../../components/entities/vak_smena/VakSmenaTabsList'
import { Outlet } from 'react-router-dom'
import { WrapperForContentBesidesDrawer } from '@iteria-app/component-templates'
import { Box } from '@mui/material'
const VakSmenaManyPage: React.FC = () => {
  return (
    <>
      <Box
        sx={{
          display: 'flex',
        }}
      >
        <WrapperForContentBesidesDrawer open>
          <VakSmenaTabsList />
          <Outlet />
        </WrapperForContentBesidesDrawer>
      </Box>
    </>
  )
}
export default VakSmenaManyPage
export const INDEX_ROUTE = 'data-table'
