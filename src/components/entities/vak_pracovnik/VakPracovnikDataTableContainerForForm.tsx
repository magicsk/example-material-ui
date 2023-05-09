import React from 'react'
import {
  EntitiesQuery,
  IError,
  useVak_PracovnikQuery,
} from '../../../generated/graphql'
import {
  ErrorBoundary,
  FilterProps,
  QueryBoundary,
  useFilter,
} from '@iteria-app/component-templates'
import { useNavigate, useSearchParams } from 'react-router-dom'
interface IViewProps {
  data: EntitiesQuery
  error: IError | null
  loading: boolean
  onClickRow: (state: any) => void
  filterProps: FilterProps
}
interface IEnitityListContainerProps {
  View: React.FC<IViewProps>
}
const VakPracovnikListContainer: React.FC<IEnitityListContainerProps> = ({
  View,
}) => {
  const [searchParams] = useSearchParams()
  const filterProps = useFilter(searchParams)
  const navigate = useNavigate()
  const [data]: {
    data: EntitiesQuery
    fetching: boolean
    error: IError | null
  }[] = useVak_PracovnikQuery({
    variables: {
      where: filterProps.filter,
      limit: filterProps.pageSize + filterProps.pageSize,
      offset: filterProps.offset,
      order_by: filterProps.sort,
      ...(filterProps?.constructedQueryRootVariables ?? {}),
    },
  })
  return (
    <ErrorBoundary>
      <QueryBoundary queryResponse={data}>
        <View
          data={data?.data}
          error={data?.error}
          loading={data?.fetching}
          onClickRow={(row) => {
            navigate('../' + row?.id?.toString())
          }}
          filterProps={filterProps}
        />
      </QueryBoundary>
    </ErrorBoundary>
  )
}
export default VakPracovnikListContainer
