import React,{Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {AuthNav,MainNav} from '../navigation';
import {connect} from 'react-redux'
class AppNav extends Component{
    render(){
        return(
            <NavigationContainer>
                 {this.props.login ?  <MainNav/> : <AuthNav/> }
               
            </NavigationContainer>
        );
    }
}
function mapStateToProps(state){
    return{
        login :state.loginReducer.loginSucces
    };
}

export default connect(mapStateToProps)(AppNav);