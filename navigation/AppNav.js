import React,{Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {AuthNav,MainNav} from '../navigation';

class AppNav extends Component{
    render(){
        return(
            <NavigationContainer>
                 {this.props.login ?  <MainNav/> : <AuthNav/> }
               
            </NavigationContainer>
        );
    }
}

export default AppNav;