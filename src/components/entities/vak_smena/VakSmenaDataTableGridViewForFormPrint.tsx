import { useFormikContext } from 'formik'
import React, { useEffect, useState } from 'react'
import { DataGrid, GridCellParams, GridSelectionModel } from '@mui/x-data-grid'
import { useIntl } from 'react-intl'
import { Card, LinearProgress, Typography } from '@mui/material'
import {
  controlNextButton,
  controlSiblings,
  FilterProps,
  Translate,
  Toolbar,
  CreateButton,
  useFilter,
  getRelationshipField,
  getColumnType,
  getColumnGraphQlType,
  DataTableFooter,
} from '@iteria-app/component-templates'
import introspection from '../../../generated/introspect.json'
import * as generatedGraphql from '../../../generated/graphql'
export interface VakSmenaDataGridProps {
  data: generatedGraphql.EntitiesQuery
  filterProps?: FilterProps
  onClickRow?: (state: number) => void
  loading: boolean
  error: generatedGraphql.IError | null
  relationshipName?: string
  checkboxes?: boolean
  rootName?: string
  fromLookup?: boolean
}
const VakSmenaDataTableGridViewForFormPrint: React.FC<
  VakSmenaDataGridProps
> = ({
  data,
  filterProps: filterPropsProp,
  onClickRow,
  checkboxes,
  loading,
  error,
  relationshipName,
  rootName,
  fromLookup,
}) => {
  const intl = useIntl()
  let formikContext
  const filterProps = filterPropsProp ?? useFilter()
  const [siblingCount, setSiblingCount] = useState(1)
  const [hideNextButton, setHideNextButton] = useState(false)
  const [selectionModel, setSelectionModel] =
    React.useState<GridSelectionModel>([])
  if (!filterPropsProp) formikContext = useFormikContext()
  const setFieldValue = formikContext?.setFieldValue
  const entityIntrospection = introspection?.__schema?.types?.find(
    (type) => type?.name === 'vak_smena'
  )?.fields
  const {
    page,
    pageSize,
    countRows,
    setCountToRows,
    handleFilter,
    handleSort,
  } = filterProps
  useEffect(() => {
    if (!loading) {
      controlNextButton({
        data: data ?? [],
        countRows: countRows,
        hideNextButton: hideNextButton,
        setCountToRows: setCountToRows,
        setHideNextButton: setHideNextButton,
        page: page,
        pageSize: pageSize,
      })
      controlSiblings(data ?? [], pageSize, page, setSiblingCount)
    }
  }, [data])
  const columns = [
    {
      field: 'termin_od',
      type: getColumnType(entityIntrospection, 'termin_od'),
      renderHeader: () => (
        <Translate
          entityName="vak_smena"
          fieldName={getRelationshipField('termin_od')}
          defaultMessage="Termin od"
        />
      ),
      minWidth: 150,
      flex: 2,
      renderCell: (params: GridCellParams) => {
        const index = params?.api?.getRowIndex(params.row.id)
        return (
          <div
            data-test="table-row-vak_smena"
            data-test-id={`table-row-vak_smena-${params.row.id}`}
          >
            <Typography>
              {`${intl.formatDate(params?.row?.termin_od)} ${intl.formatTime(
                params?.row?.termin_od
              )}`}
            </Typography>
          </div>
        )
      },
      columnType: getColumnGraphQlType(entityIntrospection, 'termin_od'),
    },
  ]
  if (fromLookup) {
    data = data?.vak_smena ?? []
  }
  return (
    <Card>
      {filterPropsProp && (
        <Toolbar filterProps={filterProps} introspection={entityIntrospection}>
          <CreateButton entityName="vak_smena" />
        </Toolbar>
      )}
      <DataGrid
        checkboxSelection={checkboxes}
        disableSelectionOnClick={checkboxes}
        onSelectionModelChange={(newSelectionModel) => {
          setSelectionModel(newSelectionModel)
        }}
        selectionModel={selectionModel}
        keepNonExistentRowsSelected
        rows={data ?? []}
        columns={columns}
        loading={loading}
        hideFooterPagination
        autoHeight={true}
        error={error}
        sortingMode="server"
        filterMode="server"
        onSortModelChange={handleSort}
        onFilterModelChange={(model) => handleFilter(model, columns)}
        onRowClick={(event) => {
          if (onClickRow) onClickRow(event.row)
        }}
        components={{
          LoadingOverlay: LinearProgress,
          Footer: () => (
            <DataTableFooter
              showPagination={!!filterPropsProp}
              filterProps={filterProps}
              siblingCount={siblingCount}
              hideNextButton={hideNextButton}
              formikContext={formikContext}
              relationshipName={relationshipName}
              generatedGraphql={generatedGraphql}
              introspection={introspection}
            />
          ),
        }}
      />
    </Card>
  )
}
export default VakSmenaDataTableGridViewForFormPrint
