/* eslint-disable dot-notation */
import React from 'react'
import { SortTab, useTabs } from '@iteria-app/component-templates'
import { filebasedRouting } from '../../../routes'
import Tabs from '../Tabs'
const VakSmenaTypTabsList = (): JSX.Element => {
  const sortTabs: SortTab[] = []
  const { tabs, handleTabChange, selectedTab } = useTabs(
    filebasedRouting,
    'vak_smena_typ',
    false,
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
export default VakSmenaTypTabsList
