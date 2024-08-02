import { applyMiddleware, createStore } from "redux";

import   {thunk} from 'redux-thunk'
//import  all reducers from reducers.jsx
import Reducers from "./Reducers";
const store =createStore(Reducers,{},applyMiddleware(thunk))

export default store;