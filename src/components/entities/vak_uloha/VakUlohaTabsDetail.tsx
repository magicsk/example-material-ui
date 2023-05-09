/* eslint-disable dot-notation */
import React from 'react'
import { SortTab, useTabs } from '@iteria-app/component-templates'
import { filebasedRouting } from '../../../routes'
import Tabs from '../Tabs'
const VakUlohaTabsDetail = (): JSX.Element => {
  const sortTabs: SortTab[] = []
  const { tabs, handleTabChange, selectedTab } = useTabs(
    filebasedRouting,
    'vak_uloha',
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
export default VakUlohaTabsDetail
