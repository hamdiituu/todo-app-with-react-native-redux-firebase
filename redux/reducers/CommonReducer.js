import {combineReducers} from 'redux';

import loginReducer from './LoginReducer';
import registerReducer from './RegisterReducer';
import addTodoReducer from './AddTodoReducer';
import showTodoReducer from './ShowTodoReducer';

const reducers = combineReducers({
    loginReducer,
    registerReducer,
    addTodoReducer,
    showTodoReducer
    
});

export default reducers;