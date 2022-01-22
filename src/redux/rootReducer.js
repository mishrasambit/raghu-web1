import { combineReducers } from "redux";

import filterReducer from './filter/FilterReducer'
import brandReducer from './brand/BrandReducer'
const rootReducer = combineReducers({
    filterReducer : filterReducer,
    brandReducer
})

export default rootReducer