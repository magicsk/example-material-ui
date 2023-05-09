import React from 'react'
import VakPracovnikFilter from '../../components/entities/vak_pracovnik/VakPracovnikFilter'
import VakPracovnikDataTableContainerForForm from '../../components/entities/vak_pracovnik/VakPracovnikDataTableContainerForForm'
import VakPracovnikDataTableGridViewForForm from '../../components/entities/vak_pracovnik/VakPracovnikDataTableGridViewForForm'
import { FilterDrawer } from '@iteria-app/component-templates'
import { Box } from '@mui/material'
const VakPracovnikManyPage: React.FC = () => {
  return (
    <VakPracovnikDataTableContainerForForm
      View={({ data, error, loading, onClickRow, filterProps }) => (
        <>
          <Box>
            <FilterDrawer>
              <VakPracovnikFilter filterCallbacks={filterProps} />
            </FilterDrawer>
            <VakPracovnikDataTableGridViewForForm
              data={data?.vak_pracovnik}
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
export default VakPracovnikManyPage
export const INDEX_ROUTE = 'data-table'
