import React from 'react'

import { ProviderComposer } from './ProviderComposer'
import { RestaurantProvider, SystemProvider } from './'

const ContextProvider = ({ children }) => {
  return (
    <ProviderComposer
      contexts={[<RestaurantProvider />, <SystemProvider />]}
    >
      {children}
    </ProviderComposer>
  )
}

export default ContextProvider
