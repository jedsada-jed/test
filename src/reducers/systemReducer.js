import { LOADING, UNLOADING } from '../constants/action-type'

export const initialState = {
  isLoading: false
}

export const systemReducer = (state, action) => {
  switch (action.type) {
    case LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case UNLOADING:
    default:
      return {
        ...state,
        isLoading: false,
      }
  }
};
