import { useFormikContext, FieldProps } from 'formik'
import React, { useEffect, useState } from 'react'
import { DataGrid, GridCellParams, GridSelectionModel } from '@mui/x-data-grid'
import { useIntl } from 'react-intl'
import { FormField } from '../FormField'
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
  columnCount,
  parseTime,
} from '@iteria-app/component-templates'
import introspection from '../../../generated/introspect.json'
import * as generatedGraphql from '../../../generated/graphql'
export interface VakPredpisObhliadkaDataGridProps {
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
const VakPredpisObhliadkaDataTableGridViewForForm: React.FC<
  VakPredpisObhliadkaDataGridProps
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
    (type) => type?.name === 'vak_predpis_obhliadka'
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
      field: 'name',
      type: getColumnType(entityIntrospection, 'name'),
      renderHeader: () => (
        <Translate
          entityName="vak_predpis_obhliadka"
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
            data-test="table-row-vak_predpis_obhliadka"
            data-test-id={`table-row-vak_predpis_obhliadka-${params.row.id}`}
          >
            <FormField
              fieldName="name"
              rootName={rootName}
              relationshipName={relationshipName}
              index={index}
            >
              {(fieldProps: FieldProps) => {
                return <Typography>{fieldProps.field.value ?? ''}</Typography>
              }}
            </FormField>
          </div>
        )
      },
      columnType: getColumnGraphQlType(entityIntrospection, 'name'),
    },
    {
      field: 'poradie',
      type: getColumnType(entityIntrospection, 'poradie'),
      renderHeader: () => (
        <Translate
          entityName="vak_predpis_obhliadka"
          fieldName={getRelationshipField('poradie')}
          defaultMessage="Poradie"
        />
      ),
      minWidth: 150,
      flex: 2,
      renderCell: (params: GridCellParams) => {
        const index = params?.api?.getRowIndex(params.row.id)
        return (
          <div
            data-test="table-row-vak_predpis_obhliadka"
            data-test-id={`table-row-vak_predpis_obhliadka-${params.row.id}`}
          >
            <FormField
              fieldName="poradie"
              rootName={rootName}
              relationshipName={relationshipName}
              index={index}
            >
              {(fieldProps: FieldProps) => {
                return <Typography>{fieldProps.field.value ?? ''}</Typography>
              }}
            </FormField>
          </div>
        )
      },
      columnType: getColumnGraphQlType(entityIntrospection, 'poradie'),
    },
    {
      field: 'termin_cas',
      type: getColumnType(entityIntrospection, 'termin_cas'),
      renderHeader: () => (
        <Translate
          entityName="vak_predpis_obhliadka"
          fieldName={getRelationshipField('termin_cas')}
          defaultMessage="Termin cas"
        />
      ),
      minWidth: 150,
      flex: 2,
      renderCell: (params: GridCellParams) => {
        const index = params?.api?.getRowIndex(params.row.id)
        return (
          <div
            data-test="table-row-vak_predpis_obhliadka"
            data-test-id={`table-row-vak_predpis_obhliadka-${params.row.id}`}
          >
            <FormField
              fieldName="termin_cas"
              rootName={rootName}
              relationshipName={relationshipName}
              index={index}
            >
              {(fieldProps: FieldProps) => {
                return (
                  <Typography>
                    {fieldProps.field.value
                      ? intl.formatTime(parseTime(fieldProps.field.value))
                      : ''}
                  </Typography>
                )
              }}
            </FormField>
          </div>
        )
      },
      columnType: getColumnGraphQlType(entityIntrospection, 'termin_cas'),
    },
    {
      field: 'termin_cas_do',
      type: getColumnType(entityIntrospection, 'termin_cas_do'),
      renderHeader: () => (
        <Translate
          entityName="vak_predpis_obhliadka"
          fieldName={getRelationshipField('termin_cas_do')}
          defaultMessage="Termin cas do"
        />
      ),
      minWidth: 150,
      flex: 2,
      renderCell: (params: GridCellParams) => {
        const index = params?.api?.getRowIndex(params.row.id)
        return (
          <div
            data-test="table-row-vak_predpis_obhliadka"
            data-test-id={`table-row-vak_predpis_obhliadka-${params.row.id}`}
          >
            <FormField
              fieldName="termin_cas_do"
              rootName={rootName}
              relationshipName={relationshipName}
              index={index}
            >
              {(fieldProps: FieldProps) => {
                return (
                  <Typography>
                    {fieldProps.field.value
                      ? intl.formatTime(parseTime(fieldProps.field.value))
                      : ''}
                  </Typography>
                )
              }}
            </FormField>
          </div>
        )
      },
      columnType: getColumnGraphQlType(entityIntrospection, 'termin_cas_do'),
    },
  ]
  if (fromLookup) {
    data = data?.vak_predpis_obhliadka ?? []
  }
  return (
    <Card>
      {filterPropsProp && (
        <Toolbar filterProps={filterProps} introspection={entityIntrospection}>
          <CreateButton entityName="vak_predpis_obhliadka" />
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
export default VakPredpisObhliadkaDataTableGridViewForForm
