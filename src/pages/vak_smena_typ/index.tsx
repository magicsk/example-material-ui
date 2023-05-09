import React from 'react'
import VakSmenaTypTabsList from '../../components/entities/vak_smena_typ/VakSmenaTypTabsList'
import { Outlet } from 'react-router-dom'
import { WrapperForContentBesidesDrawer } from '@iteria-app/component-templates'
import { Box } from '@mui/material'
const VakSmenaTypManyPage: React.FC = () => {
  return (
    <>
      <Box
        sx={{
          display: 'flex',
        }}
      >
        <WrapperForContentBesidesDrawer open>
          <VakSmenaTypTabsList />
          <Outlet />
        </WrapperForContentBesidesDrawer>
      </Box>
    </>
  )
}
export default VakSmenaTypManyPage
export const INDEX_ROUTE = 'data-table'
