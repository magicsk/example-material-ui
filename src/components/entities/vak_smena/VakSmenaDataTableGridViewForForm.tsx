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
const VakSmenaDataTableGridViewForForm: React.FC<VakSmenaDataGridProps> = ({
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
          defaultMessage="Termin datum od"
        />
      ),
      minWidth: 150,
      flex: 2,
      renderCell: (params: GridCellParams) => {
        return (
          <div
            data-test="table-row-vak_smena"
            data-test-id={`table-row-vak_smena-${params.row.id}`}
          >
            <Typography>
              {params?.row?.termin_od
                ? `${intl.formatDate(params?.row?.termin_od)} ${intl.formatTime(
                    params?.row?.termin_od
                  )}`
                : ''}
            </Typography>
          </div>
        )
      },
      columnType: getColumnGraphQlType(entityIntrospection, 'termin_od'),
    },
    {
      field: 'termin_do',
      type: getColumnType(entityIntrospection, 'termin_do'),
      renderHeader: () => (
        <Translate
          entityName="vak_smena"
          fieldName={getRelationshipField('termin_do')}
          defaultMessage="Termin datum do"
        />
      ),
      minWidth: 150,
      flex: 2,
      renderCell: (params: GridCellParams) => {
        return (
          <div
            data-test="table-row-vak_smena"
            data-test-id={`table-row-vak_smena-${params.row.id}`}
          >
            <Typography>
              {params?.row?.termin_do
                ? `${intl.formatDate(params?.row?.termin_do)} ${intl.formatTime(
                    params?.row?.termin_do
                  )}`
                : ''}
            </Typography>
          </div>
        )
      },
      columnType: getColumnGraphQlType(entityIntrospection, 'termin_do'),
    },
    {
      field: 'smena_typ.name',
      type: getColumnType(entityIntrospection, 'smena_typ.name'),
      renderHeader: () => (
        <Translate
          entityName="vak_smena_typ"
          fieldName={getRelationshipField('smena_typ.name')}
          defaultMessage="Smena typ name"
        />
      ),
      minWidth: 150,
      flex: 1,
      renderCell: (params: GridCellParams) => {
        return (
          <div
            data-test="table-row-vak_smena_typ"
            data-test-id={`table-row-vak_smena_typ-${params.row.id}`}
          >
            <Typography>{params?.row?.smena_typ?.name ?? ''}</Typography>
          </div>
        )
      },
      columnType: getColumnGraphQlType(entityIntrospection, 'smena_typ.name'),
    },
    {
      field: 'obhliadka_sumar.predpisane',
      type: 'number',
      renderHeader: () => (
        <Translate
          entityName="vak_obhliadka_sumar"
          fieldName={getRelationshipField('obhliadka_sumar.predpisane')}
          defaultMessage="Obhliadka sumar predpisane"
        />
      ),
      minWidth: 150,
      flex: 2,
      renderCell: (params: GridCellParams) => {
        const sum = params?.row?.obhliadka_sumar?.reduce?.(
          (partialSum, a) => partialSum + a?.predpisane,
          0
        )
        return (
          <div
            data-test="table-row-vak_obhliadka_sumar"
            data-test-id={`table-row-vak_obhliadka_sumar-${params.row.id}`}
          >
            <Typography>{sum ?? ''}</Typography>
          </div>
        )
      },
      columnType: getColumnGraphQlType(
        entityIntrospection,
        'obhliadka_sumar.predpisane'
      ),
    },
    {
      field: 'obhliadka_sumar_aggregate.aggregate.sum.ok',
      type: 'number',
      renderHeader: () => (
        <Translate
          entityName="vak_obhliadka_sumar_aggregate"
          fieldName={getRelationshipField(
            'obhliadka_sumar_aggregate.aggregate.sum.ok'
          )}
          defaultMessage="Obhliadka sumar aggregate aggregate sum ok"
        />
      ),
      minWidth: 50,
      flex: 1,
      renderCell: (params: GridCellParams) => {
        return (
          <div
            data-test="table-row-vak_obhliadka_sumar_aggregate"
            data-test-id={`table-row-vak_obhliadka_sumar_aggregate-${params.row.id}`}
          >
            <Typography>
              {JSON.stringify(
                params?.row?.obhliadka_sumar_aggregate?.aggregate?.sum?.ok
              )}
            </Typography>
          </div>
        )
      },
      columnType: getColumnGraphQlType(
        entityIntrospection,
        'obhliadka_sumar_aggregate.aggregate.sum.ok'
      ),
    },
    {
      field: 'nesplnene',
      type: 'number',
      renderHeader: () => (
        <Translate
          entityName="vak_smena"
          fieldName="nesplnene"
          defaultMessage="nesplnene"
        />
      ),
      minWidth: 50,
      flex: 0,
      renderCell: (params: GridCellParams) => {
        return (
          <div
            data-test="table-row-vak_obhliadka_sumar_aggregate"
            data-test-id={`table-row-vak_obhliadka_sumar_aggregate-${params.row.id}`}
          >
            <Typography>
              {(((params?.row?.obhliadka_sumar_aggregate?.aggregate?.sum
                ?.predpisane) ?? '') +
                ((params?.row?.obhliadka_sumar_aggregate?.aggregate?.sum?.ok ?? 0) * -1)) ?? ''}
            </Typography>
          </div>
        )
      },
      columnType: getColumnGraphQlType(
        entityIntrospection,
        'obhliadka_sumar_aggregate.aggregate.sum.ok'
      ),
    },
    {
      field: 'smena2pracovnik.pracovnik.name',
      type: getColumnType(
        entityIntrospection,
        'smena2pracovnik.pracovnik.name'
      ),
      renderHeader: () => (
        <Translate
          entityName="vak_smena2pracovnik"
          fieldName={getRelationshipField('smena2pracovnik.pracovnik.name')}
          defaultMessage="Smena2pracovnik pracovnik name"
        />
      ),
      minWidth: 200,
      flex: 4,
      renderCell: (params: GridCellParams) => {
        const workers = params?.row?.smena2pracovnik?.reduce?.(
          (partialSum, a) => {
            if (a?.pracovnik) return partialSum + a?.pracovnik?.name + ','
            return partialSum
          },
          ''
        )
        return (
          <div
            data-test="table-row-vak_smena2pracovnik"
            data-test-id={`table-row-vak_smena2pracovnik-${params.row.id}`}
          >
            <Typography>{workers ?? ''}</Typography>
          </div>
        )
      },
      columnType: getColumnGraphQlType(
        entityIntrospection,
        'smena2pracovnik.pracovnik.name'
      ),
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
export default VakSmenaDataTableGridViewForForm
