import React from 'react';

import Navigation from './src/navigation'
import { configAxios } from './configs/axios'
import ContextProvider from './src/providers/ContextProvider'

configAxios()

const App = () => {
  return (
    <ContextProvider>
      <Navigation />
    </ContextProvider>
  )
}

export default App;
