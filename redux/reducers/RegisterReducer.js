import * as  RegisterTypes from '../types/RegisterTypes';

const registerReducer =(state={},action)=>{
    switch(action.type){
        case RegisterTypes.REGISTER_SUCCES:
            return {...state,registerSucces:action.payload};
        case RegisterTypes.REGISTER_FAILERE:
            return {...state,registerFailere:action.payload};
        default:
            return state;
    }
}
export default registerReducer;