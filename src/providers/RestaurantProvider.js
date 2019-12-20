import React from 'react';
import { restaurantReducer, initialState } from '../reducers/restaurantReducer'
import { useImmerReducer } from 'use-immer'

export const RestaurantContext = React.createContext();
export const RestaurantProvider = ({ children }) => {
  const [restaurantState, restaurantDispatch] = useImmerReducer(restaurantReducer, initialState)

  return (
    <RestaurantContext.Provider
      value={{
        restaurantState,
        restaurantDispatch
      }}
    >
      {children}
    </RestaurantContext.Provider>
  )
}
