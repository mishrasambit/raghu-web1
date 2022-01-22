import {LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILED, AUTHENTICATE, LOGOUT} from './LoginActionTypes'

export const loginReqeust=()=>{
    return {
        type : LOGIN_REQUEST,
        payload : payload
    }
}

export const loginSuccess=()=>{
    return {
        type : LOGIN_SUCCESS
    }
}

export const loginFailed=()=>{
    return {
        type : LOGIN_FAILED
    }
}

export const authenticate =(payload)=>{
    return {
        type : AUTHENTICATE,
        payload : payload
    }
}

export const logout =()=>{
    return {
        type : LOGOUT
    }
}