import { combineReducersombineReducers } from "redux";
import Atm_Reducers from "./Atm_Reducers";

const Reducers = combineReducers({
  //multiple reducers store here

  amount: Atm_Reducers,
});

export default Reducers;
