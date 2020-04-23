import * as  ShowTodoTypes from '../types/ShowTodoTypes';

const showTodoReducer =(state={},action)=>{
    switch(action.type){
        case ShowTodoTypes.SHOWTODO_SUCCES:
            return {...state,showTodoSucces:action.payload};
        case ShowTodoTypes.SHOWTODO_FAILERE:
            return {...state,showTodoFailere:action.payload};
        default:
            return state;
    }
}
export default showTodoReducer;