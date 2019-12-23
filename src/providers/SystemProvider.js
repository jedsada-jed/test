import React from 'react';
import { systemReducer, initialState } from '../reducers/systemReducer'
import { useImmerReducer } from 'use-immer'

export const SystemContext = React.createContext();
export const SystemProvider = ({ children }) => {
  const [systemState, systemDispatch] = useImmerReducer(systemReducer, initialState)

  return (
    <SystemContext.Provider
      value={{
        systemState,
        systemDispatch
      }}
    >
      {children}
    </SystemContext.Provider>
  )
}
