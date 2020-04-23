import * as LoginTypes from '../types/LoginTypes';

export const loginSuccces =()=>({
    type:LoginTypes.LOGIN_SUCCES,
    payload :true
})

export const loginFailere =()=>({
    type:LoginTypes.LOGIN_FAILERE,
    payload :true
})
