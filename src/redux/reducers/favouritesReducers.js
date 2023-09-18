import { ADD_TO_FAVOURITES, REMOVE_FROM_FAVOURITES } from "../actions";

const initialState = {
  list: [],
};

const favouriteReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_FAVOURITES:
      return {
        ...state,
        list: [...state.list, action.payload],
      };
    case REMOVE_FROM_FAVOURITES:
      return {
        ...state,
      };
    default:
      return {
        ...state,
        list: state.list.filter((el) => el !== action.payload),
      };
  }
};

export default favouriteReducer;
