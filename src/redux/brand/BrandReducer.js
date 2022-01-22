import {SET_BRAND } from './BrandActionType'

const initialState = {
    brandName : undefined
}

export default function brandReducer(state=initialState, action){
    switch(action.type){
        case SET_BRAND : return {
            ...state, brandName: action.payload
        }
        default : return state
    }
}