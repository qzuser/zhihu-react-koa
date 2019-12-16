import { combineReducers } from "redux-immutable";
import  headerReducer from "../common/header/reducer";
import HomeReducer from "../pages/home/reducer";
import QuesReducer from "../pages/questions/reducer"

const reducer = combineReducers({
  header: headerReducer,
  home: HomeReducer,
  questions: QuesReducer
});

export default reducer;
