import React from 'react'
import VakPracovnikTabsDetail from '../../components/entities/vak_pracovnik/VakPracovnikTabsDetail'
import { Outlet, useNavigate } from 'react-router-dom'
import { ArrowBack } from '@mui/icons-material'
import { Box, Button } from '@mui/material'
import { Translate } from '@iteria-app/component-templates'
const VakPracovnikFormPage: React.FC = () => {
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
            navigate('/app/VakPracovnik' + window?.location?.search)
          }
        >
          <ArrowBack />
          <Translate entityName="Back" />
        </Button>
        <VakPracovnikTabsDetail />
      </Box>
      <Outlet />
    </>
  )
}
export default VakPracovnikFormPage
