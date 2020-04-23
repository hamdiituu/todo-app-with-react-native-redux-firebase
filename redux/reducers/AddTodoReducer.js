import * as  AddTodoTypes from '../types/AddTodoTypes';

const addTodoReducer =(state={},action)=>{
    switch(action.type){
        case AddTodoTypes.ADDTODO_SUCCES:
            return {...state,addTodoSucces:action.payload};
        case AddTodoTypes.ADDTODO_FAILERE:
            return {...state,addTodoFailere:action.payload};
        default:
            return state;
    }
}
export default addTodoReducer;

