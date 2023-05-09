import React from 'react'
import VakKontrolnyBodFilter from '../../components/entities/vak_kontrolny_bod/VakKontrolnyBodFilter'
import VakKontrolnyBodDataTableContainerForForm from '../../components/entities/vak_kontrolny_bod/VakKontrolnyBodDataTableContainerForForm'
import VakKontrolnyBodDataTableGridViewListForForm from '../../components/entities/vak_kontrolny_bod/VakKontrolnyBodDataTableGridViewListForForm'
import { FilterDrawer } from '@iteria-app/component-templates'
import { Box } from '@mui/material'
const VakKontrolnyBodManyPage: React.FC = () => {
  return (
    <VakKontrolnyBodDataTableContainerForForm
      View={({ data, error, loading, onClickRow, filterProps }) => (
        <>
          <Box>
            <FilterDrawer>
              <VakKontrolnyBodFilter filterCallbacks={filterProps} />
            </FilterDrawer>
            <VakKontrolnyBodDataTableGridViewListForForm
              data={data?.vak_kontrolny_bod}
              filterProps={filterProps}
              onClickRow={onClickRow}
              loading={loading}
              error={error}
            />
          </Box>
        </>
      )}
    />
  )
}
export default VakKontrolnyBodManyPage
export const INDEX_ROUTE = 'data-table'
