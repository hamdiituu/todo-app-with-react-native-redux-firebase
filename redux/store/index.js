import {createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import reducers from '../reducers/CommonReducer';

function configureStore(){
    return createStore(
        reducers,
        applyMiddleware(thunk)
        );
}
export default configureStore;