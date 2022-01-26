export const ADD_SELECTED_FILTER = 'SET_SELECTED_FILTER'
export const REMOVE_SELECTED_FILTER = 'REMOVE_SELECTED_FILTER'

export const addSelectedFilter=(payload)=>{
    return {
        type : ADD_SELECTED_FILTER,
        payload : payload
    }
}

export const removeSelectedFilter=(payload)=>{
    return {
        type : REMOVE_SELECTED_FILTER,
        payload : payload
    }
}

const initialState = {
    selectedFilters:{}
}

export default function selectedFilterReducer(state=initialState, action){
    switch(action.type){
        case ADD_SELECTED_FILTER :
            const selectedFilters = state.selectedFilters
            if(selectedFilters[action.payload.brandValue] && selectedFilters[action.payload.brandValue].length>0){
                selectedFilters[action.payload.brandValue].push(action.payload.data)
            }else{
                selectedFilters[action.payload.brandValue]=[]
                selectedFilters[action.payload.brandValue].push(action.payload.data)
            }
            return {
                ...state, selectedFilters
            }
        case REMOVE_SELECTED_FILTER:
            let selectedFilters1 = state.selectedFilters
            let brandSelectedFilters= selectedFilters1[action.payload.brandValue]
            brandSelectedFilters.splice(action.payload.index, 1)
            selectedFilters1[action.payload.brandValue]=brandSelectedFilters
            return {...state, selectedFilters: selectedFilters1}
        default : return state
    }
}


