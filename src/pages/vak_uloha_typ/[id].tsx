import React from 'react'
import VakUlohaTypTabsDetail from '../../components/entities/vak_uloha_typ/VakUlohaTypTabsDetail'
import { Outlet, useNavigate } from 'react-router-dom'
import { ArrowBack } from '@mui/icons-material'
import { Box, Button } from '@mui/material'
import { Translate } from '@iteria-app/component-templates'
const VakUlohaTypFormPage: React.FC = () => {
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
            navigate('/app/VakUlohaTyp' + window?.location?.search)
          }
        >
          <ArrowBack />
          <Translate entityName="Back" />
        </Button>
        <VakUlohaTypTabsDetail />
      </Box>
      <Outlet />
    </>
  )
}
export default VakUlohaTypFormPage
