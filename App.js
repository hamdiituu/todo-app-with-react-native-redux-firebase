import React,{Component} from 'react';
import {AppNav} from './navigation'
class App extends Component{
  render(){
    return(
     <AppNav login={true}/>
    );
  }
}

export default App;