import * as types from '../types'


export const listAll=()=>({
    type:types.LIST_ALL
})

export const clickShow=(e)=>({
    type:types.CLICK,
    mess:e

})

export const Login=(email,pass)=>({
    type:types.LOGIN,
    payload:{
        email:email,
        password:pass
    }
    
})