import { combineReducers } from 'redux';
import favoriteReducer from '../slice/favoriteSlice';

const rootReducer = combineReducers({
  favorite: favoriteReducer,
  // Add other reducers here
});

export default rootReducer;