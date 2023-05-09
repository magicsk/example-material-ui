import React from 'react'
import VakSmenaFilter from '../../components/entities/vak_smena/VakSmenaFilter'
import VakSmenaDataTableContainerForForm from '../../components/entities/vak_smena/VakSmenaDataTableContainerForForm'
import VakSmenaDataTableGridViewForForm from '../../components/entities/vak_smena/VakSmenaDataTableGridViewForForm'
import { FilterDrawer } from '@iteria-app/component-templates'
import { Box } from '@mui/material'
const VakSmenaManyPage: React.FC = () => {
  return (
    <VakSmenaDataTableContainerForForm
      View={({ data, error, loading, onClickRow, filterProps }) => (
        <>
          <Box>
            <FilterDrawer>
              <VakSmenaFilter filterCallbacks={filterProps} data={data} />
            </FilterDrawer>
            <VakSmenaDataTableGridViewForForm
              data={data?.vak_smena}
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
export default VakSmenaManyPage
export const INDEX_ROUTE = 'data-table'
