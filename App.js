import React,{Component} from 'react';
import {AppNav} from './navigation'
import {Provider} from 'react-redux'
import configureStore from './redux/store';
const store = configureStore();
class App extends Component{
  render(){
    return(
    <Provider store={store}>
     <AppNav/>
     </Provider>
    );
  }
}

export default App;