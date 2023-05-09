import React from 'react'
import VakUlohaTypTabsList from '../../components/entities/vak_uloha_typ/VakUlohaTypTabsList'
import { Outlet } from 'react-router-dom'
import { WrapperForContentBesidesDrawer } from '@iteria-app/component-templates'
import { Box } from '@mui/material'
const VakUlohaTypManyPage: React.FC = () => {
  return (
    <>
      <Box
        sx={{
          display: 'flex',
        }}
      >
        <WrapperForContentBesidesDrawer open>
          <VakUlohaTypTabsList />
          <Outlet />
        </WrapperForContentBesidesDrawer>
      </Box>
    </>
  )
}
export default VakUlohaTypManyPage
export const INDEX_ROUTE = 'data-table'
