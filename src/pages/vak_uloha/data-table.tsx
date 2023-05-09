import React from 'react'
import VakUlohaFilter from '../../components/entities/vak_uloha/VakUlohaFilter'
import VakUlohaDataTableContainerForForm from '../../components/entities/vak_uloha/VakUlohaDataTableContainerForForm'
import VakUlohaDataTableGridViewListForForm from '../../components/entities/vak_uloha/VakUlohaDataTableGridViewListForForm'
import { FilterDrawer } from '@iteria-app/component-templates'
import { Box } from '@mui/material'
const VakUlohaManyPage: React.FC = () => {
  return (
    <VakUlohaDataTableContainerForForm
      View={({ data, error, loading, onClickRow, filterProps }) => (
        <>
          <Box>
            <FilterDrawer>
              <VakUlohaFilter filterCallbacks={filterProps} />
            </FilterDrawer>
            <VakUlohaDataTableGridViewListForForm
              data={data?.vak_uloha}
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
export default VakUlohaManyPage
export const INDEX_ROUTE = 'data-table'
