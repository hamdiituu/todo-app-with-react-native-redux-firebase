import React,{Component} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Main,Profile,Trash,CreateTodo,UpdateTodo} from '../screens';

const MainStack = createStackNavigator();

class MainNav extends Component{
    render(){
        return(
            <MainStack.Navigator>
               
                <MainStack.Screen name="main" component={Main} />
                <MainStack.Screen name="profile" component={Profile} />
                <MainStack.Screen name="createTodo" component={CreateTodo} />
                <MainStack.Screen name="updateTodo" component={UpdateTodo}/>
                <MainStack.Screen name="trashTodo" component={Trash} />
                
            </MainStack.Navigator>

        );
    }
}

export default MainNav;