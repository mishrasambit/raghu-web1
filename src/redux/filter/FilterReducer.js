import {DIVISION_FILTER_REQUEST, DIVISION_FILTER_SUCCESS, DIVISION_FILTER_FAILED, SET_SELECTED_DIVISION } from './FilterActionType'

const initialState = {
    filterDivisions:[],
    loading: false,
    error: undefined
}

export default function filterReducer(state=initialState, action){
    switch(action.type){
        case DIVISION_FILTER_REQUEST : return {
            ...state, loading: true, error: undefined
        }
        case DIVISION_FILTER_SUCCESS : 
                let filterDivisions = state.filterDivisions
                //filterDivisions.push(action.payload.data)
                filterDivisions[action.payload.brandName] = action.payload.data
                return {
                    ...state, loading: false, filterDivisions: filterDivisions, error: undefined
                }        
        case DIVISION_FILTER_FAILED : return {
            ...state, loading: false, filterDivisions: undefined, error: action.payload
        }
        case SET_SELECTED_DIVISION : 
            let filterDivisions1 = state.filterDivisions
            let brandDivision= filterDivisions1[action.payload.brandName]
            const selectedOption='selectedOption'
            brandDivision[selectedOption]=action.payload.selectedOption
            filterDivisions1[action.payload.brandName]=brandDivision
            return {
                ...state, loading: false, error: undefined, filterDivisions: filterDivisions1
            }
        default : return state
    }
}