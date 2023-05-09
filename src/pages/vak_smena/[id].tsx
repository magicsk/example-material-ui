import React from 'react'
import VakSmenaTabsDetail from '../../components/entities/vak_smena/VakSmenaTabsDetail'
import { Outlet, useNavigate } from 'react-router-dom'
import { ArrowBack } from '@mui/icons-material'
import { Box, Button } from '@mui/material'
import { Translate } from '@iteria-app/component-templates'
const VakSmenaFormPage: React.FC = () => {
  const navigate = useNavigate()
  return (
    <>
      <Box
        key="price"
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          marginTop: '10px',
        }}
      >
        <Button
          onClick={() => navigate('/app/vak_smena' + window?.location?.search)}
        >
          <ArrowBack />
          <Translate entityName="Back" />
        </Button>
        <VakSmenaTabsDetail />
      </Box>
      <Outlet />
    </>
  )
}
export default VakSmenaFormPage
