import React from 'react'
import VakSmenaTypTabsDetail from '../../components/entities/vak_smena_typ/VakSmenaTypTabsDetail'
import { Outlet, useNavigate } from 'react-router-dom'
import { ArrowBack } from '@mui/icons-material'
import { Box, Button } from '@mui/material'
import { Translate } from '@iteria-app/component-templates'
const VakSmenaTypFormPage: React.FC = () => {
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
          onClick={() =>
            navigate('/app/VakSmenaTyp' + window?.location?.search)
          }
        >
          <ArrowBack />
          <Translate entityName="Back" />
        </Button>
        <VakSmenaTypTabsDetail />
      </Box>
      <Outlet />
    </>
  )
}
export default VakSmenaTypFormPage
