import { useFormikContext, FieldProps } from 'formik'
import React, { useEffect, useState } from 'react'
import { DataGrid, GridCellParams, GridSelectionModel } from '@mui/x-data-grid'
import { FormField } from '../FormField'
import { Card, Grid, LinearProgress, Typography } from '@mui/material'
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
export interface VakUlohaDataGridProps {
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
const VakUlohaDataTableGridViewReadForForm: React.FC<VakUlohaDataGridProps> = ({
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
    (type) => type?.name === 'vak_uloha'
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
      field: 'kontrolny_bod.name',
      type: getColumnType(entityIntrospection, 'kontrolny_bod.name'),
      renderHeader: () => (
        <Translate
          entityName="vak_uloha"
          fieldName={'kontrolny_bod.name'}
          defaultMessage="Kontrolny bod name"
        />
      ),
      minWidth: 150,
      flex: 3,
      renderCell: (params: GridCellParams) => {
        const index = params?.api?.getRowIndex(params.row.id)
        return (
          <div
            data-test="table-row-vak_uloha"
            data-test-id={`table-row-vak_uloha-${params.row.id}`}
          >
            <FormField
              fieldName="kontrolny_bod.name"
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
        'kontrolny_bod.name'
      ),
    },
    {
      field: 'uloha_typ.name',
      type: getColumnType(entityIntrospection, 'uloha_typ.name'),
      renderHeader: () => (
        <Translate
          entityName="vak_uloha"
          fieldName={'uloha_typ.name'}
          defaultMessage="Uloha typ name"
        />
      ),
      minWidth: 150,
      flex: 4,
      renderCell: (params: GridCellParams) => {
        const index = params?.api?.getRowIndex(params.row.id)
        return (
          <div
            data-test="table-row-vak_uloha"
            data-test-id={`table-row-vak_uloha-${params.row.id}`}
          >
            <FormField
              fieldName="uloha_typ.name"
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
      columnType: getColumnGraphQlType(entityIntrospection, 'uloha_typ.name'),
    },
    {
      field: 'poradie',
      type: getColumnType(entityIntrospection, 'poradie'),
      renderHeader: () => (
        <Translate
          entityName="vak_uloha"
          fieldName={getRelationshipField('poradie')}
          defaultMessage="Poradie"
        />
      ),
      minWidth: 60,
      flex: 1,
      renderCell: (params: GridCellParams) => {
        const index = params?.api?.getRowIndex(params.row.id)
        return (
          <div
            data-test="table-row-vak_uloha"
            data-test-id={`table-row-vak_uloha-${params.row.id}`}
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
      field: 'done',
      type: getColumnType(entityIntrospection, 'done'),
      renderHeader: () => (
        <Translate
          entityName="vak_uloha"
          fieldName={getRelationshipField('done')}
          defaultMessage="Done"
        />
      ),
      minWidth: 100,
      flex: 1,
      renderCell: (params: GridCellParams) => {
        const index = params?.api?.getRowIndex(params.row.id)
        return (
          <div
            data-test="table-row-vak_uloha"
            data-test-id={`table-row-vak_uloha-${params.row.id}`}
          >
            <FormField
              fieldName="done"
              rootName={rootName}
              relationshipName={relationshipName}
              index={index}
            >
              {(fieldProps: FieldProps) => {
                return (
                  <Translate
                    entityName="vak_uloha"
                    fieldName={`done.${!!fieldProps.field.value}`}
                    defaultMessage={
                      fieldProps.field.value ? 'done' : `Not ${'done'}`
                    }
                  />
                )
              }}
            </FormField>
          </div>
        )
      },
      columnType: getColumnGraphQlType(entityIntrospection, 'done'),
    },
    {
      field: 'vstup_text',
      type: getColumnType(entityIntrospection, 'vstup_text'),
      renderHeader: () => (
        <Translate
          entityName="vak_uloha"
          fieldName={getRelationshipField('vstup_text')}
          defaultMessage="Vstup text"
        />
      ),
      minWidth: 400,
      flex: 6,
      renderCell: (params: GridCellParams) => {
        const index = params?.api?.getRowIndex(params.row.id)
        return (
          <FormField
            fieldName="vstup_text"
            rootName={rootName}
            relationshipName={relationshipName}
            index={index}
          >
            {(fieldProps: FieldProps) => {
              return (
                <Typography sx={{ height: '100%', width: '100%', whiteSpace: 'break-spaces' }}>
                  {fieldProps.field.value ?? ''}
                </Typography>
              )
            }}
          </FormField>
        )
      },
      columnType: getColumnGraphQlType(entityIntrospection, 'vstup_text'),
    },
    {
      field: 'vstup_cislo',
      type: getColumnType(entityIntrospection, 'vstup_cislo'),
      renderHeader: () => (
        <Translate
          entityName="vak_uloha"
          fieldName={getRelationshipField('vstup_cislo')}
          defaultMessage="Vstup cislo"
        />
      ),
      minWidth: 120,
      flex: 1,
      renderCell: (params: GridCellParams) => {
        const index = params?.api?.getRowIndex(params.row.id)
        return (
          <div
            data-test="table-row-vak_uloha"
            data-test-id={`table-row-vak_uloha-${params.row.id}`}
          >
            <FormField
              fieldName="vstup_cislo"
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
      columnType: getColumnGraphQlType(entityIntrospection, 'vstup_cislo'),
    },
  ]
  if (fromLookup) {
    data = data?.vak_uloha ?? []
  }
  return (
    <Card>
      {filterPropsProp && (
        <Toolbar filterProps={filterProps} introspection={entityIntrospection}>
          <CreateButton entityName="vak_uloha" />
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
        rowHeight={60}
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
export default VakUlohaDataTableGridViewReadForForm
