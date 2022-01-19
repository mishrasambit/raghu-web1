import {LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILED, AUTHENTICATE, LOGOUT} from './LoginActionTypes'

const initialState = {
    userData: undefined,
    loading: false,
    error: undefined
}

export default function authReducer(state=initialState, action){
    switch(action.type){
        case LOGIN_REQUEST : return {
            ...state, loading: true, userData: undefined, error: undefined
        }
        case LOGIN_SUCCESS : return {
            ...state, loading: false, userData: action.payload, error: undefined
        }        
        case LOGIN_FAILED : return {
            ...state, loading: false, userData: undefined, error: action.payload
        }
        case LOGOUT : return {
            ...initialState
        }
        default : return state
    }
}