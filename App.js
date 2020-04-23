import React,{Component} from 'react';
import {AppNav} from './navigation'
import {Provider} from 'react-redux'
import configureStore from './redux/store';
import FirebaseConnect from './firebase/firebaseConfig';
const store = configureStore();
class App extends Component{

  componentDidMount(){
      FirebaseConnect();
  }

  render(){
    return(
    <Provider store={store}>
     <AppNav/>
     </Provider>
    );
  }
}

export default App;