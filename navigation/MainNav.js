import React,{Component} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Main,Profile,Trash,AddTodo,UpdateTodo} from '../screens';

const MainStack = createStackNavigator();

class MainNav extends Component{
    render(){
        return(
            <MainStack.Navigator>
               
                <MainStack.Screen name="main" component={Main} />
                <MainStack.Screen name="profile" component={Profile} />
                <MainStack.Screen name="addTodo" component={AddTodo} />
                <MainStack.Screen name="updateTodo" component={UpdateTodo}/>
                <MainStack.Screen name="trashTodo" component={Trash} />
                
            </MainStack.Navigator>

        );
    }
}

export default MainNav;