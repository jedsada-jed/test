import { GET_DATA, CLEAR_DATA } from '../constants/action-type'

export const initialState = {
  restaurants: []
}

export const restaurantReducer = (state, action) => {
  switch (action.type) {
    case GET_DATA:
      return {
        ...state,
        restaurants: [...action.restaurants]
      };
    case CLEAR_DATA:
    default:
      return {
        ...state,
        restaurants: []
      }
  }
};
