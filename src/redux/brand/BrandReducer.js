import {SET_BRAND } from './BrandActionType'

const initialState = {
    brandValue : undefined
}

export default function brandReducer(state=initialState, action){
    switch(action.type){
        case SET_BRAND : return {
            ...state, brandValue: action.payload
        }
        default : return state
    }
}