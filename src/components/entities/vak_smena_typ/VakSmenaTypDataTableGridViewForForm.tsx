import { useFormikContext } from 'formik'
import React, { useEffect, useState } from 'react'
import { DataGrid, GridCellParams, GridSelectionModel } from '@mui/x-data-grid'
import { Card, LinearProgress, Radio, Typography } from '@mui/material'
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
export interface VakSmenaTypDataGridProps {
  data: generatedGraphql.EntitiesQuery
  filterProps?: FilterProps
  onClickRow?: (state: number) => void
  loading: boolean
  error: generatedGraphql.IError | null
  selectionModel?: MutableRefObject<GridSelectionModel>
  relationshipName?: string
  checkboxes?: boolean
  radio?: boolean
  rootName?: string
  fromLookup?: boolean
}
const VakSmenaTypDataTableGridViewForForm: React.FC<VakSmenaTypDataGridProps> =
  ({
    data,
    filterProps: filterPropsProp,
    selectionModel,
    onClickRow,
    checkboxes,
    radio,
    loading,
    error,
    relationshipName,
    rootName,
    fromLookup,
  }) => {
    let formikContext
    const filterProps = filterPropsProp ?? useFilter()
    const [siblingCount, setSiblingCount] = useState(1)
    const [hideNextButton, setHideNextButton] = useState(false)
    const [internalSelectionModel, setInternalSelectionModel] =
      useState<GridSelectionModel>([])
    if (!filterPropsProp) formikContext = useFormikContext()
    const setFieldValue = formikContext?.setFieldValue
    const entityIntrospection = introspection?.__schema?.types?.find(
      (type) => type?.name === 'vak_smena_typ'
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

    const radioColumn = {
      field: 'radiobutton',
      headerName: '',
      width: 100,
      sortable: false,
      renderCell: (params) => (
        <Radio
          checked={internalSelectionModel?.[0] === params.id}
          value={params.id}
        />
      ),
    }

    const columns = [
      {
        field: 'name',
        type: getColumnType(entityIntrospection, 'name'),
        renderHeader: () => (
          <Translate
            entityName="vak_smena_typ"
            fieldName={getRelationshipField('name')}
            defaultMessage="Name"
          />
        ),
        minWidth: 150,
        flex: 2,
        renderCell: (params: GridCellParams) => {
          const index = params?.api?.getRowIndex(params.row.id)
          return (
            <div
              data-test="table-row-vak_smena_typ"
              data-test-id={`table-row-vak_smena_typ-${params.row.id}`}
            >
              <Typography>{params?.row?.name ?? ''}</Typography>
            </div>
          )
        },
        columnType: getColumnGraphQlType(entityIntrospection, 'name'),
      },
    ]
    if (fromLookup) {
      data = data?.vak_smena_typ ?? []
    }
    return (
      <Card>
        {filterPropsProp && (
          <Toolbar
            filterProps={filterProps}
            introspection={entityIntrospection}
          >
            <CreateButton entityName="vak_smena_typ" />
          </Toolbar>
        )}
        <DataGrid
          checkboxSelection={checkboxes}
          disableSelectionOnClick={checkboxes}
          onSelectionModelChange={(newSelectionModel) => {
            if (selectionModel?.current) {
              selectionModel.current = newSelectionModel.map((id) =>
                data?.find((r) => r.id === id)
              )
              setInternalSelectionModel(newSelectionModel)
            }
          }}
          selectionModel={internalSelectionModel}
          keepNonExistentRowsSelected
          rows={data ?? []}
          columns={radio ? [radioColumn, ...columns] : columns}
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
export default VakSmenaTypDataTableGridViewForForm
