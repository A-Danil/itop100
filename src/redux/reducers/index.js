import { combineReducers } from "redux";

import { dataReducer } from './dataReducer';
import { loadReducer } from "./loadReducer";


export const rootReduser = combineReducers({
  dataReducer,
  loadReducer
})