import React from 'react'
import VakUlohaTypFilter from '../../components/entities/vak_uloha_typ/VakUlohaTypFilter'
import VakUlohaTypDataTableContainerForForm from '../../components/entities/vak_uloha_typ/VakUlohaTypDataTableContainerForForm'
import VakUlohaTypDataTableGridViewZoznamForForm from '../../components/entities/vak_uloha_typ/VakUlohaTypDataTableGridViewZoznamForForm'
import { FilterDrawer } from '@iteria-app/component-templates'
import { Box } from '@mui/material'
const VakUlohaTypManyPage: React.FC = () => {
  return (
    <VakUlohaTypDataTableContainerForForm
      View={({ data, error, loading, onClickRow, filterProps }) => (
        <>
          <Box>
            <FilterDrawer>
              <VakUlohaTypFilter filterCallbacks={filterProps} />
            </FilterDrawer>
            <VakUlohaTypDataTableGridViewZoznamForForm
              data={data?.vak_uloha_typ}
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
export default VakUlohaTypManyPage
export const INDEX_ROUTE = 'data-table'
