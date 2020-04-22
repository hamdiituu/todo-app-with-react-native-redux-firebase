import React,{Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {AuthNav,MainNav} from '../navigation';

class AppNav extends Component{
    render(){
        return(
            <NavigationContainer>
                {/* <AuthNav/> */} 
                <MainNav/>
            </NavigationContainer>
        );
    }
}

export default AppNav;