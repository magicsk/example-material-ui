import { useFormikContext, FieldProps } from 'formik'
import React, {
  useEffect,
  useState,
  ChangeEventHandler,
  FocusEventHandler,
} from 'react'
import { DataGrid, GridCellParams, GridSelectionModel } from '@mui/x-data-grid'
import { FormField } from '../FormField'
import { useIntl } from 'react-intl'
import {
  Card,
  LinearProgress,
  Typography,
  Input,
  Grid,
  TextField,
  Checkbox as CheckboxInput,
  FormControlLabel,
  InputLabel,
  Autocomplete,
  IconButton,
} from '@mui/material'
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
export interface VakUlohaDataGridProps {
  data: generatedGraphql.EntitiesQuery
  filterProps?: FilterProps
  onClickRow?: (state: number) => void
  loading?: boolean
  error?: generatedGraphql.IError | null
  relationshipName?: string
  checkboxes?: boolean
  rootName?: string
  fromLookup?: boolean
}
const VakUlohaDataTableGridViewForForm: React.FC<VakUlohaDataGridProps> = ({
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

  const handleDelete = (row: any) => {
    row.platny = false
  }

  const columns = [
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
      flex: 3,
      renderCell: (params: GridCellParams) => {
        const index = data?.findIndex((row) => row?.id === params.row.id)
        return (
          <div
            data-test="table-row-vak_kontrolny_bod"
            data-test-id={`table-row-vak_kontrolny_bod-${params.row.id}`}
          >
            <FormField
              fieldName="kontrolny_bod.name"
              rootName={rootName}
              relationshipName={relationshipName}
              index={index}
            >
              {(fieldProps: FieldProps) => (
                <Typography>{fieldProps.field.value ?? ''}</Typography>
              )}
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
          fieldName={getRelationshipField('uloha_typ.name')}
          defaultMessage="Uloha typ name"
        />
      ),
      minWidth: 150,
      flex: 4,
      renderCell: (params: GridCellParams) => {
        const index = data?.findIndex((row) => row?.id === params.row.id)
        return (
          <FormField fieldName={'vak_uloha_typ'}>
            {(optionsFieldProps: FieldProps) => (
              <FormField
                fieldName="uloha_typ"
                rootName={rootName}
                relationshipName={relationshipName}
                index={index}
              >
                {(fieldProps: FieldProps) => (
                  <Autocomplete
                    fullWidth
                    autoComplete
                    autoHighlight
                    autoSelect
                    options={optionsFieldProps?.field?.value ?? []}
                    isOptionEqualToValue={(option, value) =>
                      option?.id === value?.id
                    }
                    getOptionLabel={(option) => option?.name}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        variant="standard"
                        placeholder={intl.formatMessage({
                          id: 'vak_uloha.name.placeholder',
                          defaultMessage: 'Nastavte',
                        })}
                      />
                    )}
                    value={
                      fieldProps?.field?.value?.name
                        ? fieldProps?.field?.value
                        : null
                    }
                    onChange={(_, value) =>
                      setFieldValue(
                        `${rootName}.${relationshipName}[${index}].uloha_typ`,
                        value
                      )
                    }
                  />
                )}
              </FormField>
            )}
          </FormField>
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
        const index = data?.findIndex((row) => row?.id === params.row.id)
        return (
          <FormField
            fieldName="poradie"
            rootName={rootName}
            relationshipName={relationshipName}
            index={index}
          >
            {(fieldProps: FieldProps) => {
              return (
                <Grid
                  container
                  alignItems="center"
                  justifyContent="end"
                  paddingY={1}
                >
                  <TextField
                    type="number"
                    name={fieldProps.field.name}
                    variant="standard"
                    onChange={fieldProps.field.onChange}
                    onBlur={fieldProps.field.onBlur}
                    onClick={(event) => {
                      event.stopPropagation()
                    }}
                    sx={{ width: '75px' }}
                    value={fieldProps.field.value ?? ''}
                  />
                </Grid>
              )
            }}
          </FormField>
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
        const index = data?.findIndex((row) => row?.id === params.row.id)
        return (
            <FormField
              fieldName="done"
              rootName={rootName}
              relationshipName={relationshipName}
              index={index}
            >
              {(fieldProps: FieldProps) => {
                return (
                  <Grid container alignItems="center" justifyContent="center">
                        <CheckboxInput
                          name={fieldProps.field.name}
                          onChange={fieldProps.field.onChange}
                          checked={fieldProps.field.value}
                        />
                  </Grid>
                )
              }}
            </FormField>
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
        const index = data?.findIndex((row) => row?.id === params.row.id)
        return (
          <FormField
            fieldName="vstup_text"
            rootName={rootName}
            relationshipName={relationshipName}
            index={index}
          >
            {(fieldProps: FieldProps) => {
              return (
                <Grid container alignItems="center" paddingY={1}>
                  <TextField
                    multiline
                    name={fieldProps.field.name}
                    variant="standard"
                    onChange={fieldProps.field.onChange}
                    onBlur={fieldProps.field.onBlur}
                    onClick={(event) => {
                      event.stopPropagation()
                    }}
                    rows={2}
                    InputProps={{
                      startAdornment: <></>,
                    }}
                    fullWidth
                    value={fieldProps.field.value ?? ''}
                  />
                </Grid>
              )
            }}
          </FormField>
        )
      },
      columnType: getColumnGraphQlType(entityIntrospection, 'vstup_text'),
    },
    {
      field: 'vstup_cislo',
      type: getColumnType(entityIntrospection, 'poradie'),
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
        const index = data?.findIndex((row) => row?.id === params.row.id)
        return (
          <FormField
            fieldName="vstup_cislo"
            rootName={rootName}
            relationshipName={relationshipName}
            index={index}
          >
            {(fieldProps: FieldProps) => {
              return (
                <Grid container alignItems="center" justifyContent="end">
                  <Input
                    type="number"
                    inputProps={{
                      step: '1',
                    }}
                    sx={{ width: '75px' }}
                    name={fieldProps.field.name}
                    onChange={fieldProps.field.onChange}
                    onBlur={fieldProps.field.onBlur}
                    onClick={(event) => {
                      event.stopPropagation()
                    }}
                    value={fieldProps.field.value ?? ''}
                  />
                </Grid>
              )
            }}
          </FormField>
        )
      },
      columnType: getColumnGraphQlType(entityIntrospection, 'vstup_cislo'),
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
        rows={data?.filter((row) => row?.platny) ?? []}
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
export default VakUlohaDataTableGridViewForForm
