import { combineReducers } from "redux";
import tokenReducer from './token/tokenReducer'
import snackbarReducer from './snackbar/snackbarReducer';
const rootReducer = combineReducers({
  //   Pass all reducer in key value system
  token:tokenReducer,
  snackbar:snackbarReducer,
});

export default rootReducer;
