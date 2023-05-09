import { useFormikContext, FieldProps } from 'formik'
import React, { useEffect, useState } from 'react'
import { DataGrid, GridCellParams, GridSelectionModel } from '@mui/x-data-grid'
import { FormField } from '../FormField'
import { Card, IconButton, LinearProgress, Typography } from '@mui/material'
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
  columnCount,
} from '@iteria-app/component-templates'
import { Delete } from '@mui/icons-material'
import introspection from '../../../generated/introspect.json'
import * as generatedGraphql from '../../../generated/graphql'
export interface VakSmena2pracovnikDataGridProps {
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
const VakSmena2pracovnikDataTableGridViewForForm: React.FC<VakSmena2pracovnikDataGridProps> =
  ({
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
    const formikProps = useFormikContext()
    let formikContext
    const filterProps = filterPropsProp ?? useFilter()
    const [siblingCount, setSiblingCount] = useState(1)
    const [hideNextButton, setHideNextButton] = useState(false)
    const [selectionModel, setSelectionModel] =
      React.useState<GridSelectionModel>([])
    if (!filterPropsProp) formikContext = useFormikContext()
    const setFieldValue = formikContext?.setFieldValue
    const entityIntrospection = introspection?.__schema?.types?.find(
      (type) => type?.name === 'vak_smena2pracovnik'
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

    const handleDelete = (row: any) => {
      row.platny = false
    }

    const columns = [
      {
        field: 'pracovnik.name',
        type: getColumnType(entityIntrospection, 'pracovnik.name'),
        renderHeader: () => (
          <Translate
            entityName="vak_smena2pracovnik"
            fieldName={getRelationshipField('pracovnik.name')}
            defaultMessage="Pracovnik name"
          />
        ),
        minWidth: 150,
        flex: 11,
        renderCell: (params: GridCellParams) => (
          <Typography>{params.row.pracovnik.name ?? ''}</Typography>
        ),
        columnType: getColumnGraphQlType(entityIntrospection, 'pracovnik.name'),
      },
      {
        field: 'delete',
        renderHeader: () => (
          <Translate
            entityName="vak_smena2pracovnik"
            fieldName={'delete'}
            defaultMessage=" "
          />
        ),
        minWidth: 75,
        flex: 1,
        renderCell: (params: GridCellParams) => {
          return (
            <IconButton
              onClick={() => {
                handleDelete(params.row)
              }}
            >
              <Delete />
            </IconButton>
          )
        },
      },
    ]
    if (fromLookup) {
      data = data?.vak_smena2pracovnik ?? []
    }
    return (
      <Card>
        {filterPropsProp && (
          <Toolbar
            filterProps={filterProps}
            introspection={entityIntrospection}
          >
            <CreateButton entityName="vak_smena2pracovnik" />
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
          rows={data?.filter((row) => row?.platny) ?? []}
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
export default VakSmena2pracovnikDataTableGridViewForForm
