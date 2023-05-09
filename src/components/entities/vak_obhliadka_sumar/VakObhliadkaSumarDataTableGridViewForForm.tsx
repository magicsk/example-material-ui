import { useFormikContext, FieldProps } from 'formik'
import React, { useEffect, useState } from 'react'
import { DataGrid, GridCellParams, GridSelectionModel } from '@mui/x-data-grid'
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
} from '@iteria-app/component-templates'
import introspection from '../../../generated/introspect.json'
import * as generatedGraphql from '../../../generated/graphql'
export interface VakObhliadkaSumarDataGridProps {
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
const VakObhliadkaSumarDataTableGridViewForForm: React.FC<VakObhliadkaSumarDataGridProps> =
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
    let formikContext
    const filterProps = filterPropsProp ?? useFilter()
    const [siblingCount, setSiblingCount] = useState(1)
    const [hideNextButton, setHideNextButton] = useState(false)
    const [selectionModel, setSelectionModel] =
      React.useState<GridSelectionModel>([])
    if (!filterPropsProp) formikContext = useFormikContext()
    const setFieldValue = formikContext?.setFieldValue
    const entityIntrospection = introspection?.__schema?.types?.find(
      (type) => type?.name === 'vak_obhliadka_sumar'
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
        field: 'predpis_obhliadka_fk',
        type: getColumnType(entityIntrospection, 'predpis_obhliadka_fk'),
        renderHeader: () => (
          <Translate
            entityName="vak_obhliadka_sumar"
            fieldName={getRelationshipField('predpis_obhliadka_fk')}
            defaultMessage="Predpis obhliadka fk"
          />
        ),
        minWidth: 150,
        flex: 2,
        renderCell: (params: GridCellParams) => {
          const index = params?.api?.getRowIndex(params.row.id)
          return (
            <div
              data-test="table-row-vak_obhliadka_sumar"
              data-test-id={`table-row-vak_obhliadka_sumar-${params.row.id}`}
            >
              <FormField
                fieldName="predpis_obhliadka_fk"
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
        columnType: getColumnGraphQlType(
          entityIntrospection,
          'predpis_obhliadka_fk'
        ),
      },
      {
        field: 'predpis_obhliadka.poradie',
        type: getColumnType(entityIntrospection, 'predpis_obhliadka.poradie'),
        renderHeader: () => (
          <Translate
            entityName="vak_obhliadka_sumar"
            fieldName={getRelationshipField('predpis_obhliadka.poradie')}
            defaultMessage="Predpis obhliadka poradie"
          />
        ),
        minWidth: 150,
        flex: 2,
        renderCell: (params: GridCellParams) => {
          const index = params?.api?.getRowIndex(params.row.id)
          return (
            <div
              data-test="table-row-vak_obhliadka_sumar"
              data-test-id={`table-row-vak_obhliadka_sumar-${params.row.id}`}
            >
              <FormField
                fieldName="predpis_obhliadka.poradie"
                rootName={rootName}
                relationshipName={relationshipName}
                index={index}
              >
                {(fieldProps: FieldProps) => {
                  return <Typography>{fieldProps.field.value}</Typography>
                }}
              </FormField>
            </div>
          )
        },
        columnType: getColumnGraphQlType(
          entityIntrospection,
          'predpis_obhliadka.poradie'
        ),
      },
      {
        field: 'predpis_obhliadka.name',
        type: getColumnType(entityIntrospection, 'predpis_obhliadka.name'),
        renderHeader: () => (
          <Translate
            entityName="vak_obhliadka_sumar"
            fieldName={getRelationshipField('predpis_obhliadka.name')}
            defaultMessage="Predpis obhliadka name"
          />
        ),
        minWidth: 150,
        flex: 2,
        renderCell: (params: GridCellParams) => {
          const index = params?.api?.getRowIndex(params.row.id)
          return (
            <div
              data-test="table-row-vak_obhliadka_sumar"
              data-test-id={`table-row-vak_obhliadka_sumar-${params.row.id}`}
            >
              <FormField
                fieldName="predpis_obhliadka.name"
                rootName={rootName}
                relationshipName={relationshipName}
                index={index}
              >
                {(fieldProps: FieldProps) => {
                  return <Typography>{fieldProps.field.value}</Typography>
                }}
              </FormField>
            </div>
          )
        },
        columnType: getColumnGraphQlType(
          entityIntrospection,
          'predpis_obhliadka.name'
        ),
      },
      {
        field: 'predpis_obhliadka.termin_cas',
        type: getColumnType(
          entityIntrospection,
          'predpis_obhliadka.termin_cas'
        ),
        renderHeader: () => (
          <Translate
            entityName="vak_obhliadka_sumar"
            fieldName={getRelationshipField('predpis_obhliadka.termin_cas')}
            defaultMessage="Predpis obhliadka termin cas"
          />
        ),
        minWidth: 150,
        flex: 2,
        renderCell: (params: GridCellParams) => {
          const index = params?.api?.getRowIndex(params.row.id)
          return (
            <div
              data-test="table-row-vak_obhliadka_sumar"
              data-test-id={`table-row-vak_obhliadka_sumar-${params.row.id}`}
            >
              <FormField
                fieldName="predpis_obhliadka.termin_cas"
                rootName={rootName}
                relationshipName={relationshipName}
                index={index}
              >
                {(fieldProps: FieldProps) => {
                  return <Typography>{fieldProps.field.value}</Typography>
                }}
              </FormField>
            </div>
          )
        },
        columnType: getColumnGraphQlType(
          entityIntrospection,
          'predpis_obhliadka.termin_cas'
        ),
      },
      {
        field: 'predpis_obhliadka.termin_cas_do',
        type: getColumnType(
          entityIntrospection,
          'predpis_obhliadka.termin_cas_do'
        ),
        renderHeader: () => (
          <Translate
            entityName="vak_obhliadka_sumar"
            fieldName={getRelationshipField('predpis_obhliadka.termin_cas_do')}
            defaultMessage="Predpis obhliadka termin cas do"
          />
        ),
        minWidth: 150,
        flex: 2,
        renderCell: (params: GridCellParams) => {
          const index = params?.api?.getRowIndex(params.row.id)
          return (
            <div
              data-test="table-row-vak_obhliadka_sumar"
              data-test-id={`table-row-vak_obhliadka_sumar-${params.row.id}`}
            >
              <FormField
                fieldName="predpis_obhliadka.termin_cas_do"
                rootName={rootName}
                relationshipName={relationshipName}
                index={index}
              >
                {(fieldProps: FieldProps) => {
                  return <Typography>{fieldProps.field.value}</Typography>
                }}
              </FormField>
            </div>
          )
        },
        columnType: getColumnGraphQlType(
          entityIntrospection,
          'predpis_obhliadka.termin_cas_do'
        ),
      },
      {
        field: 'predpisane',
        type: 'number',
        renderHeader: () => (
          <Translate
            entityName="vak_obhliadka_sumar"
            fieldName={getRelationshipField('predpisane')}
            defaultMessage="Predpisane"
          />
        ),
        minWidth: 50,
        flex: 1,
        renderCell: (params: GridCellParams) => {
          const index = params?.api?.getRowIndex(params.row.id)
          return (
            <div
              data-test="table-row-vak_obhliadka_sumar"
              data-test-id={`table-row-vak_obhliadka_sumar-${params.row.id}`}
            >
              <FormField
                fieldName="predpisane"
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
        columnType: getColumnGraphQlType(entityIntrospection, 'predpisane'),
      },
      {
        field: 'ok',
        type: 'number',
        renderHeader: () => (
          <Translate
            entityName="vak_obhliadka_sumar"
            fieldName={getRelationshipField('ok')}
            defaultMessage="Ok"
          />
        ),
        minWidth: 50,
        flex: 1,
        renderCell: (params: GridCellParams) => {
          const index = params?.api?.getRowIndex(params.row.id)
          return (
            <div
              data-test="table-row-vak_obhliadka_sumar"
              data-test-id={`table-row-vak_obhliadka_sumar-${params.row.id}`}
            >
              <FormField
                fieldName="ok"
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
        columnType: getColumnGraphQlType(entityIntrospection, 'ok'),
      },
      {
        field: 'nestihnute',
        type: 'number',
        renderHeader: () => (
          <Translate
            entityName="vak_obhliadka_sumar"
            fieldName={getRelationshipField('nestihnute')}
            defaultMessage="Nestihnuté"
          />
        ),
        minWidth: 50,
        flex: 1,
        renderCell: (params: GridCellParams) => {
          const index = params?.api?.getRowIndex(params.row.id)
          // '=SUM(number('$.obhliadka_sumar[0].predpisane'), MULTIPLY(-1, number('$.obhliadka_sumar[0].ok')))
          return (
            <div
              data-test="table-row-vak_obhliadka_sumar"
              data-test-id={`table-row-vak_obhliadka_sumar-${params.row.id}`}
            >
              <Typography>{params?.row?.predpisane + (params?.row?.ok * -1) ?? ''}</Typography>
            </div>
          )
        },
        columnType: getColumnGraphQlType(entityIntrospection, 'ok'),
      },
    ]
    if (fromLookup) {
      data = data?.vak_obhliadka_sumar ?? []
    }
    return (
      <Card>
        {filterPropsProp && (
          <Toolbar
            filterProps={filterProps}
            introspection={entityIntrospection}
          >
            <CreateButton entityName="vak_obhliadka_sumar" />
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
            Footer: () => <></>,
          }}
        />
      </Card>
    )
  }
export default VakObhliadkaSumarDataTableGridViewForForm
