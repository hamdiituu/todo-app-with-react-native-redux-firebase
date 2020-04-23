import React ,{Component} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {
        Login,
        Register
        } from '../screens';

const AuthStack = createStackNavigator();

class AuthNav extends Component{
    render(){
        return(
            <AuthStack.Navigator
            screenOptions={{
                headerShown :false
            }}
            >
                    <AuthStack.Screen name="login" component={Login} />
                    <AuthStack.Screen name="register" component={Register} />
            </AuthStack.Navigator>
        );
    }
}
export default AuthNav;