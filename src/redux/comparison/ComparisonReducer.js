import axios from 'axios'
export const COMPARISON_OPERATOR_REQUEST = 'COMPARISON_OPERATOR_REQUEST ' 
export const COMPARISON_OPERATOR_SUCCESS = 'COMPARISON_OPERATOR_SUCCESS'
export const COMPARISON_OPERATOR_FAILED = 'COMPARISON_OPERATOR_FAILED'
export const SET_SELECTED_COMPARISON_OPERATOR = 'SET_SELECTED_COMPARISON_OPERATOR'


export const comparisonOperatorReqeust=()=>{
    return {
        type : COMPARISON_OPERATOR_REQUEST
    }
}

export const comparisonOperatorSuccess=(payload)=>{
    return {
        type : COMPARISON_OPERATOR_SUCCESS,
        payload : payload
    }
}

export const comparisonOperatorFailed=()=>{
    return {
        type : COMPARISON_OPERATOR_FAILED
    }
}

export const setSelectedComparisonOperator=(selectedDivsion)=>{
    return {
        type : SET_SELECTED_COMPARISON_OPERATOR,
        payload: selectedDivsion
    }
}

export const fetchComparisonOperator= (brandName)=>{
    return async (dispatch) => {
        dispatch(comparisonOperatorReqeust())
        try{
            //const response = await axios.get(`http://localhost:8083/api/operator`)
            const response = await axios.get(`http://localhost:3003/comparisonOption`)
            const data = response.data
            dispatch(comparisonOperatorSuccess({brandName, data : {data: data}}))
        }catch(err){
            dispatch(comparisonOperatorFailed())
        }
    }
}

const initialState = {
    comparisonOperators:{},
    loading: false,
    error: undefined
}

export default function comparisonOperatorReducer(state=initialState, action){
    switch(action.type){
        case COMPARISON_OPERATOR_REQUEST : return {
            ...state, loading: true, error: undefined
        }
        case COMPARISON_OPERATOR_SUCCESS : 
                let comparisonOperators = state.comparisonOperators
                comparisonOperators[action.payload.brandName]= action.payload.data
                return {
                    ...state, loading: false, comparisonOperators: comparisonOperators, error: undefined
                }        
        case COMPARISON_OPERATOR_FAILED : return {
            ...state, loading: false, comparisonOperators: undefined, error: action.payload
        }
        case SET_SELECTED_COMPARISON_OPERATOR : 
            let comparisonOperators1 = state.comparisonOperators
            let brandComparisonOperators= comparisonOperators1[action.payload.brandName]
            const selectedOption='selectedOption'
            brandComparisonOperators[selectedOption]=action.payload.selectedOption
            comparisonOperators1[action.payload.brandName]=brandComparisonOperators
            return {
                ...state, loading: false, error: undefined, comparisonOperators: comparisonOperators1
            }
        default : return state
    }
}