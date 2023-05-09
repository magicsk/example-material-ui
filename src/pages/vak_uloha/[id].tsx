import React from 'react'
import VakUlohaTabsDetail from '../../components/entities/vak_uloha/VakUlohaTabsDetail'
import { Outlet, useNavigate } from 'react-router-dom'
import { ArrowBack } from '@mui/icons-material'
import { Box, Button } from '@mui/material'
import { Translate } from '@iteria-app/component-templates'
const VakUlohaFormPage: React.FC = () => {
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
          onClick={() => navigate('/app/VakUloha' + window?.location?.search)}
        >
          <ArrowBack />
          <Translate entityName="Back" />
        </Button>
        <VakUlohaTabsDetail />
      </Box>
      <Outlet />
    </>
  )
}
export default VakUlohaFormPage
