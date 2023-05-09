import React from 'react'
import VakKontrolnyBodTabsDetail from '../../components/entities/vak_kontrolny_bod/VakKontrolnyBodTabsDetail'
import { Outlet, useNavigate } from 'react-router-dom'
import { ArrowBack } from '@mui/icons-material'
import { Box, Button } from '@mui/material'
import { Translate } from '@iteria-app/component-templates'
const VakKontrolnyBodFormPage: React.FC = () => {
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
            navigate('/app/VakKontrolnyBod' + window?.location?.search)
          }
        >
          <ArrowBack />
          <Translate entityName="Back" />
        </Button>
        <VakKontrolnyBodTabsDetail />
      </Box>
      <Outlet />
    </>
  )
}
export default VakKontrolnyBodFormPage
