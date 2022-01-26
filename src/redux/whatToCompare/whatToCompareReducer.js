import axios from 'axios'
export const WHAT_TO_COMPARE_REQUEST = 'WHAT_TO_COMPARE_REQUEST ' 
export const WHAT_TO_COMPARE_SUCCESS = 'WHAT_TO_COMPARE_SUCCESS'
export const WHAT_TO_COMPARE_FAILED = 'WHAT_TO_COMPARE_FAILED'
export const SET_SELECTED_WHAT_TO_COMPARE = 'SET_SELECTED_WHAT_TO_COMPARE'


export const whatToComapreReqeust=()=>{
    return {
        type : WHAT_TO_COMPARE_REQUEST
    }
}

export const whatToComapreSuccess=(payload)=>{
    return {
        type : WHAT_TO_COMPARE_SUCCESS,
        payload : payload
    }
}

export const whatToComapreFailed=()=>{
    return {
        type : WHAT_TO_COMPARE_FAILED
    }
}

export const setSelectedWhatToComapre=(whatToComapre)=>{
    return {
        type : SET_SELECTED_WHAT_TO_COMPARE,
        payload: whatToComapre
    }
}


export const fetchWhatToComapre= (brandName)=>{
    return async (dispatch) => {
        dispatch(whatToComapreReqeust())
        try{
            const response = await axios.get(`http://localhost:3003/whatToCompare`)
            const data = response.data
            dispatch(whatToComapreSuccess({brandName, data }))
        }catch(err){
            dispatch(whatToComapreFailed())
        }
    }
}

const initialState = {
    whatToComapres:{},
    loading: false,
    error: undefined
}

export default function whatToCompareReducer(state=initialState, action){
    switch(action.type){
        case WHAT_TO_COMPARE_REQUEST : return {
            ...state, loading: true, error: undefined
        }
        case WHAT_TO_COMPARE_SUCCESS : 
                let whatToComapres = state.whatToComapres
                whatToComapres[action.payload.brandName]= action.payload.data
                return {
                    ...state, loading: false, whatToComapres: whatToComapres, error: undefined
                }        
        case WHAT_TO_COMPARE_FAILED : return {
            ...state, loading: false, whatToComapres: undefined, error: action.payload
        }
        case SET_SELECTED_WHAT_TO_COMPARE : 
            let whatToComapres1 = state.whatToComapres
            let brandWhatToComapres= whatToComapres1[action.payload.brandName]
            const selectedOption='selectedOption'
            brandWhatToComapres[selectedOption]=action.payload.selectedOption
            whatToComapres1[action.payload.brandName]=brandWhatToComapres
            return {
                ...state, loading: false, error: undefined, whatToComapres: whatToComapres1
            }
        default : return state
    }
}