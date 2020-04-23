import React,{Component} from 'react';
import {View,Text, Button, SafeAreaView,TouchableOpacity} from 'react-native';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import TodoView from '../components/TodoView';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {showTodos} from '../redux/actions/ShowTodoActions';
class MainScreen extends Component{

  state={
    todoList :[{todoTitle :"Todo 1",todoId:1},{todoTitle :"Todo 2",todoId:2},{todoTitle :"Todo 3",todoId:3}]
  }

  componentDidMount(){
    this.props.dispatch(showTodos());
  }

  componentDidUpdate(){
    this.props.dispatch(showTodos());
  }

  render(){
    return(
      <SafeAreaView style={{flex:1,flexDirection:"column"}}>
       <View style={{flex:1,backgroundColor:"#F9CC16",flexDirection:"row",justifyContent:"space-between"}}>
         
       <View>
        <Text>	&nbsp;</Text>
         </View>
          <View > 
          <Text style={{fontSize:30,textAlign:"center"}} >Görevler</Text>
         </View>
       

         <View>
              <TouchableOpacity
              onPress={()=>this.props.navigation.navigate('addTodo')}
              >
                <Text style={{fontSize:35}}>
                &oplus;
                </Text>
              </TouchableOpacity> 
         </View>
        
         
  
    </View>

      <View style={{flex:15,marginTop:40}}>
  
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
function mapDispacthToProps(dispatch){
  return{
    action : bindActionCreators(showTodos,dispatch)
  };
}

export default connect(mapDispacthToProps)(MainScreen);