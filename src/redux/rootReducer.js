import { combineReducers } from "redux";

import filterReducer from './filter/FilterReducer'
import brandReducer from './brand/BrandReducer'
import comparisonOperatorReducer from './comparison/ComparisonReducer'
import selectedFilterReducer from './selectedFilter/selectedFilterReducer'
import whatToCompareReducer from './whatToCompare/whatToCompareReducer'
import groupingFilterReducer from './groupingFilter/groupingFilterReducer'
const rootReducer = combineReducers({
    filterReducer : filterReducer,
    brandReducer,
    comparisonOperatorReducer,
    selectedFilterReducer,
    whatToCompareReducer,
    groupingFilterReducer
})

export default rootReducer