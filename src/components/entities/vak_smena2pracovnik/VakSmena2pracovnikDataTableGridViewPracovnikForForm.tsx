import { useFormikContext, FieldProps } from 'formik'
import React, { useEffect, useState } from 'react'
import AdapterDateFns from '@date-io/date-fns'
import { DatePicker, LocalizationProvider } from '@mui/lab'
import { DataGrid, GridCellParams, GridSelectionModel } from '@mui/x-data-grid'
import { useIntl } from 'react-intl'
import { FormField } from '../FormField'
import { Card, Grid, LinearProgress, TextField, Typography } from '@mui/material'
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
  saveDate,
} from '@iteria-app/component-templates'
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
const VakSmena2pracovnikDataTableGridViewPracovnikForForm: React.FC<VakSmena2pracovnikDataGridProps> =
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
    const columns = [
      {
        field: 'smena.termin_od',
        type: getColumnType(entityIntrospection, 'smena.termin_od'),
        renderHeader: () => (
          <Translate
            entityName="vak_smena2pracovnik"
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
              data-test="table-row-vak_smena2pracovnik"
              data-test-id={`table-row-vak_smena2pracovnik-${params.row.id}`}
            >
              <FormField
                fieldName="smena.termin_do"
                rootName={rootName}
                relationshipName={relationshipName}
                index={index}
              >
                {(fieldProps: FieldProps) => {
                  return (
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                      <Grid container alignItems="center" paddingY={1}>
                        <DatePicker
                          value={fieldProps.field.value ?? null}
                          onChange={(val: Date | null) => {
                            setFieldValue(
                              fieldProps.field.name,
                              saveDate(val),
                              false
                            )
                          }}
                          renderInput={(params) => (
                            <TextField
                              fullWidth
                              variant="standard"
                              {...params}
                            />
                          )}
                        />
                      </Grid>
                    </LocalizationProvider>
                  )
                }}
              </FormField>
            </div>
          )
        },
        columnType: getColumnGraphQlType(
          entityIntrospection,
          'smena.termin_od'
        ),
      },

      {
        field: 'smena.termin_do',
        type: getColumnType(entityIntrospection, 'smena.termin_do'),
        renderHeader: () => (
          <Translate
            entityName="vak_smena2pracovnik"
            fieldName={getRelationshipField('smena.termin_do')}
            defaultMessage="Smena termin datum do"
          />
        ),
        minWidth: 150,
        flex: 2,
        renderCell: (params: GridCellParams) => {
          const index = params?.api?.getRowIndex(params.row.id)
          return (
            <div
              data-test="table-row-vak_smena2pracovnik"
              data-test-id={`table-row-vak_smena2pracovnik-${params.row.id}`}
            >
              <FormField
                fieldName="smena.termin_do"
                rootName={rootName}
                relationshipName={relationshipName}
                index={index}
              >
                {(fieldProps: FieldProps) => {
                  return (
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                      <Grid container alignItems="center" paddingY={1}>
                        <DatePicker
                          value={fieldProps.field.value ?? null}
                          onChange={(val: Date | null) => {
                            setFieldValue(
                              fieldProps.field.name,
                              saveDate(val),
                              false
                            )
                          }}
                          renderInput={(params) => (
                            <TextField
                              fullWidth
                              variant="standard"
                              {...params}
                            />
                          )}
                        />
                      </Grid>
                    </LocalizationProvider>
                  )
                }}
              </FormField>
            </div>
          )
        },
        columnType: getColumnGraphQlType(
          entityIntrospection,
          'smena.termin_do'
        ),
      },
      {
        field: 'smena.smena_typ.name',
        type: getColumnType(entityIntrospection, 'smena.smena_typ.name'),
        renderHeader: () => (
          <Translate
            entityName="vak_smena2pracovnik"
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
              data-test="table-row-vak_smena2pracovnik"
              data-test-id={`table-row-vak_smena2pracovnik-${params.row.id}`}
            >
              <FormField
                fieldName="smena.smena_typ.name"
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
          'smena.smena_typ.name'
        ),
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
export default VakSmena2pracovnikDataTableGridViewPracovnikForForm
