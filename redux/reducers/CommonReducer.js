import {combineReducers} from 'redux';

import loginReducer from './LoginReducer';
import registerReducer from './RegisterReducer';
import addTodoReducer from './AddTodoReducer';

const reducers = combineReducers({
    loginReducer,
    registerReducer,
    addTodoReducer
});

export default reducers;