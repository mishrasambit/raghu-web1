import axios from 'axios'
import {DIVISION_FILTER_REQUEST, DIVISION_FILTER_SUCCESS, DIVISION_FILTER_FAILED, SET_SELECTED_DIVISION } from './FilterActionType'


export const divisionFilterReqeust=()=>{
    return {
        type : DIVISION_FILTER_REQUEST
    }
}

export const divisionFilterSuccess=(payload)=>{
    return {
        type : DIVISION_FILTER_SUCCESS,
        payload : payload
    }
}

export const divisionFilterFailed=()=>{
    return {
        type : DIVISION_FILTER_FAILED
    }
}

export const setSelectedDivision=(selectedDivsion)=>{
    return {
        type : SET_SELECTED_DIVISION,
        payload: selectedDivsion
    }
}

export const fetchDivisionFilter= (brandName)=>{
    return async (dispatch) => {
        dispatch(divisionFilterReqeust())
        try{
            const response = await axios.get(`http://localhost:3003/division/${brandName}`)
            const data = response.data
            dispatch(divisionFilterSuccess({brandName, data}))
        }catch(err){
            dispatch(divisionFilterFailed())
        }
    }
}