/* eslint-disable dot-notation */
import React from 'react'
import { SortTab, useTabs } from '@iteria-app/component-templates'
import { filebasedRouting } from '../../../routes'
import Tabs from '../Tabs'
const VakSmenaTypTabsDetail = (): JSX.Element => {
  const sortTabs: SortTab[] = []
  const { tabs, handleTabChange, selectedTab } = useTabs(
    filebasedRouting,
    'vak_smena_typ',
    true,
    sortTabs
  )
  return (
    <Tabs
      tabs={tabs}
      handleTabChange={handleTabChange}
      selectedTab={selectedTab}
    />
  )
}
export default VakSmenaTypTabsDetail
