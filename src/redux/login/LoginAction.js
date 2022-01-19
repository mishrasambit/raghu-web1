import {LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILED, AUTHENTICATE, LOGOUT} from './LoginActionTypes'

export const authenticate =(payload)=>{
    return {
        type : AUTHENTICATE,
        payload : payload
    }
}

export const authenticate =()=>{
    return {
        type : LOGOUT
    }
}