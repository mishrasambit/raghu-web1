import {SET_BRAND } from './BrandActionType'

export const setBrandName=(brandName)=>{
    return {
        type : SET_BRAND,
        payload : brandName
    }
}
