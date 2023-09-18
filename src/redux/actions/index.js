export const ADD_TO_FAVOURITES = "ADD_TO_FAVOURITES";
export const REMOVE_FROM_FAVOURITES = "REMOVE_FROM_FAVOURITES";

export const addToFavouriteAction = (companyName) => ({ type: ADD_TO_FAVOURITES, payload: companyName });
export const removeFromFavouriteAction = (companyName) => ({ type: REMOVE_FROM_FAVOURITES, payload: companyName });
