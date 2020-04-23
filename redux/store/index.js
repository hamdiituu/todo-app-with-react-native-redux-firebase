import {createStore} from 'redux';

import reducers from '../reducers/CommonReducer';

function configureStore(){
    return createStore(reducers);
}
export default configureStore;