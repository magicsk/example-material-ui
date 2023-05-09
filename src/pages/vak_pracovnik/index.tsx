import React from 'react'
import VakPracovnikTabsList from '../../components/entities/vak_pracovnik/VakPracovnikTabsList'
import { Outlet } from 'react-router-dom'
import { WrapperForContentBesidesDrawer } from '@iteria-app/component-templates'
import { Box } from '@mui/material'
const VakPracovnikManyPage: React.FC = () => {
  return (
    <>
      <Box
        sx={{
          display: 'flex',
        }}
      >
        <WrapperForContentBesidesDrawer open>
          <VakPracovnikTabsList />
          <Outlet />
        </WrapperForContentBesidesDrawer>
      </Box>
    </>
  )
}
export default VakPracovnikManyPage
export const INDEX_ROUTE = 'data-table'
