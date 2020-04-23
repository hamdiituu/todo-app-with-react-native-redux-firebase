import React,{Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {addTodo} from '../redux/actions/AddTodoActions';
import {View,Text, SafeAreaView,TouchableOpacity} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

class AddTodoScreen extends Component{
  state={
    todo:""
  }
  render(){
    return(
      <SafeAreaView style={{flex:1,flexDirection:"column"}}>
       <View style={{flex:1,backgroundColor:"#F9CC16",flexDirection:"row",justifyContent:"space-between"}}>
         

       <View>
                <TouchableOpacity
                onPress={()=>this.props.navigation.goBack()}
                >
                  <Text style={{fontSize:35}}>
                  &larr;
                  </Text>
                </TouchableOpacity> 
           </View>

         
            <View > 
            <Text style={{fontSize:30,textAlign:"center"}} >Görev Ekle</Text>
           </View>
         
  
           <View>
          <Text>
          &nbsp;
          </Text>
           </View>
  
   </View>
      
      <View style={{flex:15,alignItems:"center",marginTop:70}}>
         
         <TextInput onChangeText={(newTodo)=>this.setState({todo :newTodo})} placeholder="ekle bir şey" style={{borderWidth:1,width:250,height:50,borderRadius:16,borderWidth:2,borderColor:"#F9CC16",paddingLeft:10,fontSize:20}} />
         <TouchableOpacity
                onPress={()=>this.props.dispatch(addTodo(this.state.todo))}
                style={{backgroundColor:"#F9CC16",marginTop:30,width:250,borderWidth:0,borderRadius:16,alignItems:"center",height:50}}
                >
                  <Text style={{fontSize:25,paddingLeft:20,justifyContent:"center",textAlign:"center",paddingTop:11}}>
                  Ekle
                  </Text>
                </TouchableOpacity> 
      </View>
      </SafeAreaView>
    );
  }
}
function mapDispacthToProps(dispatch){
  return{
    action : bindActionCreators(addTodo,dispatch)
  };
}

export default connect(mapDispacthToProps)(AddTodoScreen);