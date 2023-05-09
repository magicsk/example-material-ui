import React from 'react'
import VakSmenaTypFilter from '../../components/entities/vak_smena_typ/VakSmenaTypFilter'
import VakSmenaTypDataTableContainerForForm from '../../components/entities/vak_smena_typ/VakSmenaTypDataTableContainerForForm'
import VakSmenaTypDataTableGridViewForForm from '../../components/entities/vak_smena_typ/VakSmenaTypDataTableGridViewForForm'
import { FilterDrawer } from '@iteria-app/component-templates'
import { Box } from '@mui/material'
const VakSmenaTypManyPage: React.FC = () => {
  return (
    <VakSmenaTypDataTableContainerForForm
      View={({ data, error, loading, onClickRow, filterProps }) => (
        <>
          <Box>
            <FilterDrawer>
              <VakSmenaTypFilter filterCallbacks={filterProps} />
            </FilterDrawer>
            <VakSmenaTypDataTableGridViewForForm
              data={data?.vak_smena_typ}
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
export default VakSmenaTypManyPage
export const INDEX_ROUTE = 'data-table'
