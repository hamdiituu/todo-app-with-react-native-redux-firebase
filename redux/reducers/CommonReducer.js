import {combineReducers} from 'redux';

import loginReducer from './LoginReducer';
import registerReducer from './RegisterReducer';

const reducers = combineReducers({
    loginReducer,
    registerReducer
});

export default reducers;