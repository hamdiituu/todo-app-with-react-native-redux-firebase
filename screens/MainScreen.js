import React,{Component} from 'react';
import {View,Text, Button, SafeAreaView,TouchableOpacity} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import TodoView from '../components/TodoView';

class MainScreen extends Component{

  state={
    todoList :[{todoTitle :"Todo 1",todoId:1},{todoTitle :"Todo 2",todoId:2},{todoTitle :"Todo 3",todoId:3}]
  }

  render(){
    return(
      <SafeAreaView style={{flex:1,flexDirection:"column"}}>
        <View style={{flex:1,flexDirection:"column"}}>
          <Text style={{backgroundColor:"#FF5733",color:"#E3E3E3",fontSize:20,paddingLeft:60,width:200}} >Yapılacaklar</Text>  
          <TouchableOpacity
       
        onPress={()=>this.props.navigation.navigate('addTodo')}
      >
        <Text
        style={{backgroundColor:"#96B487",color:"#E3E3E3",fontSize:17,paddingLeft:30,paddingRight:30,width:100}}
        >Yeni Ekle</Text>
      </TouchableOpacity>
        </View>


      <View style={{flex:5}}>
  
       <ScrollView>
         {
         this.state.todoList.map((todoData)=>{
            console.log(todoData)
            // <TodoView todo={todoData} />
            return(
              <TodoView key={todoData.todoId} todo={todoData}/>
            )
         }) 
         }
       </ScrollView>
       
      </View>

      </SafeAreaView>
    );
  }
}

export default MainScreen;