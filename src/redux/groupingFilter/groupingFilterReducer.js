import axios from 'axios'
export const GROUPING_FILTER_REQUEST = 'GROUPING_FILTER_REQUEST ' 
export const GROUPING_FILTER_SUCCESS = 'GROUPING_FILTER_SUCCESS'
export const GROUPING_FILTER_FAILED = 'GROUPING_FILTER_FAILED'
export const SET_SELECTED_GROUPING_FILTER = 'SET_SELECTED_GROUPING_FILTER'


export const groupingFilterReqeust=()=>{
    return {
        type : GROUPING_FILTER_REQUEST
    }
}

export const groupingFilterSuccess=(payload)=>{
    return {
        type : GROUPING_FILTER_SUCCESS,
        payload : payload
    }
}

export const groupingFilterFailed=()=>{
    return {
        type : GROUPING_FILTER_FAILED
    }
}

export const setSelectedGroupingFilter=(whatToComapre)=>{
    return {
        type : SET_SELECTED_GROUPING_FILTER,
        payload: whatToComapre
    }
}


export const fetchGroupingFilter= (brandName)=>{
    return async (dispatch) => {
        dispatch(groupingFilterReqeust())
        try{
            const response = await axios.get(`http://localhost:3003/grouping`)
            const data = response.data
            dispatch(groupingFilterSuccess({brandName, data }))
        }catch(err){
            dispatch(groupingFilterFailed())
        }
    }
}

const initialState = {
    groupingFilters:{},
    loading: false,
    error: undefined
}

export default function groupingFilterReducer(state=initialState, action){
    switch(action.type){
        case GROUPING_FILTER_REQUEST : return {
            ...state, loading: true, error: undefined
        }
        case GROUPING_FILTER_SUCCESS : 
                let groupingFilters = state.groupingFilters
                groupingFilters[action.payload.brandName]= action.payload.data
                return {
                    ...state, loading: false, groupingFilters: groupingFilters, error: undefined
                }        
        case GROUPING_FILTER_FAILED : return {
            ...state, loading: false, groupingFilters: undefined, error: action.payload
        }
        case SET_SELECTED_GROUPING_FILTER : 
            let groupingFilters1 = state.groupingFilters
            let brandGroupingFilters= groupingFilters1[action.payload.brandName]
            const selectedOption='selectedOption'
            brandGroupingFilters[selectedOption]=action.payload.selectedOption
            groupingFilters1[action.payload.brandName]=brandGroupingFilters
            return {
                ...state, loading: false, error: undefined, whatToComapres: groupingFilters1
            }
        default : return state
    }
}