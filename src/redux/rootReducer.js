import { combineReducers } from "redux";
import tokenReducer from './token/tokenReducer'
import snackbarReducer from './snackbar/snackbarReducer';
import myDetailsReducer from './mydetails/myDetailsReducer';
const rootReducer = combineReducers({
  //   Pass all reducer in key value system
  token:tokenReducer,
  snackbar:snackbarReducer,
  myDetails:myDetailsReducer,
});

export default rootReducer;
