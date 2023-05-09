import { useFormikContext, FieldProps } from 'formik'
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
const VakUlohaDataTableGridViewListForForm: React.FC<VakUlohaDataGridProps> = ({
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
      field: 'smena.termin_od',
      type: getColumnType(entityIntrospection, 'smena.termin_od'),
      renderHeader: () => (
        <Translate
          entityName="vak_smena"
          fieldName={getRelationshipField('smena.termin_od')}
          defaultMessage="Smena termin od"
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
              {`${intl.formatDate(
                params?.row?.smena?.termin_od
              )} ${intl.formatTime(params?.row?.smena?.termin_od)}`}
            </Typography>
          </div>
        )
      },
      columnType: getColumnGraphQlType(entityIntrospection, 'smena.termin_od'),
    },
    {
      field: 'smena.termin_do',
      type: getColumnType(entityIntrospection, 'smena.termin_do'),
      renderHeader: () => (
        <Translate
          entityName="vak_smena"
          fieldName={getRelationshipField('smena.termin_do')}
          defaultMessage="Smena termin do"
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
              {`${intl.formatDate(
                params?.row?.smena?.termin_do
              )} ${intl.formatTime(params?.row?.smena?.termin_do)}`}
            </Typography>
          </div>
        )
      },
      columnType: getColumnGraphQlType(entityIntrospection, 'smena.termin_do'),
    },
    {
      field: 'smena.smena_typ.name',
      type: getColumnType(entityIntrospection, 'smena.smena_typ.name'),
      renderHeader: () => (
        <Translate
          entityName="vak_smena"
          fieldName={getRelationshipField('smena.smena_typ.name')}
          defaultMessage="Smena smena typ name"
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
            <Typography>{params?.row?.smena?.smena_typ?.name ?? ''}</Typography>
          </div>
        )
      },
      columnType: getColumnGraphQlType(
        entityIntrospection,
        'smena.smena_typ.name'
      ),
    },
    {
      field: 'kontrolny_bod.name',
      type: getColumnType(entityIntrospection, 'kontrolny_bod.name'),
      renderHeader: () => (
        <Translate
          entityName="vak_kontrolny_bod"
          fieldName={getRelationshipField('kontrolny_bod.name')}
          defaultMessage="Kontrolny bod name"
        />
      ),
      minWidth: 150,
      flex: 2,
      renderCell: (params: GridCellParams) => {
        const index = params?.api?.getRowIndex(params.row.id)
        return (
          <div
            data-test="table-row-vak_kontrolny_bod"
            data-test-id={`table-row-vak_kontrolny_bod-${params.row.id}`}
          >
            <Typography>{params?.row?.kontrolny_bod?.name ?? ''}</Typography>
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
          fieldName={getRelationshipField('uloha_typ.name')}
          defaultMessage="Uloha typ name"
        />
      ),
      minWidth: 150,
      flex: 2,
      renderCell: (params: GridCellParams) => {
        const index = params?.api?.getRowIndex(params.row.id)
        return (
          <div
            data-test="table-row-vak_uloha"
            data-test-id={`table-row-vak_uloha-${params.row.id}`}
          >
            <Typography>{params?.row?.uloha_typ?.name ?? ''}</Typography>
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
      minWidth: 150,
      flex: 2,
      renderCell: (params: GridCellParams) => {
        const index = params?.api?.getRowIndex(params.row.id)
        return (
          <div
            data-test="table-row-vak_uloha"
            data-test-id={`table-row-vak_uloha-${params.row.id}`}
          >
            <Typography>{params?.row?.poradie ?? ''}</Typography>
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
      minWidth: 150,
      flex: 2,
      renderCell: (params: GridCellParams) => {
        const index = params?.api?.getRowIndex(params.row.id)
        return (
          <div
            data-test="table-row-vak_uloha"
            data-test-id={`table-row-vak_uloha-${params.row.id}`}
          >
            <Translate
              entityName="vak_uloha"
              fieldName={`done.${!!params?.row?.done}`}
              defaultMessage={params?.row?.done ? 'done' : `Not ${'done'}`}
            />
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
      minWidth: 150,
      flex: 2,
      renderCell: (params: GridCellParams) => {
        const index = params?.api?.getRowIndex(params.row.id)
        return (
          <div
            data-test="table-row-vak_uloha"
            data-test-id={`table-row-vak_uloha-${params.row.id}`}
          >
            <Typography>{params?.row?.vstup_text ?? ''}</Typography>
          </div>
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
      minWidth: 150,
      flex: 2,
      renderCell: (params: GridCellParams) => {
        const index = params?.api?.getRowIndex(params.row.id)
        return (
          <div
            data-test="table-row-vak_uloha"
            data-test-id={`table-row-vak_uloha-${params.row.id}`}
          >
            <Typography>{params?.row?.vstup_cislo ?? ''}</Typography>
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
        error={error}
        sortingMode="server"
        filterMode="server"
        onSortModelChange={handleSort}
        onFilterModelChange={(model) => handleFilter(model, columns)}
        onRowClick={(event) => {
          // if (onClickRow) onClickRow(event.row)
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
export default VakUlohaDataTableGridViewListForForm
