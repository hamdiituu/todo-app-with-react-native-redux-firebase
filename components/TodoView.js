import React from 'react';
import {View,TouchableOpacity,Text} from 'react-native';

class TodoView extends React.Component{
    render(){
        return(
<View style={{flexDirection:"row",justifyContent:"space-between",borderColor:"#F9CC16", borderWidth:2,borderRadius:16,marginBottom:10,marginHorizontal:10}}>
          <View style={{padding:20}}>
             <Text>{this.props.todo.todoTitle}</Text>
          </View>

           <View style={{justifyContent:"center",alignContent:"center",alignItems:"center"}}>
              <TouchableOpacity
                    style={{borderLeftWidth:1,borderColor:"#F9CC16",borderTopRightRadius:16,borderBottomRightRadius:16,backgroundColor:"#F9CC16"}}
                    onPress={()=>{alert(this.props.todo.todoId)}}
                  >
                    <Text
                    style={{textAlign:"center",color:"black",fontSize:17,paddingTop:20,paddingLeft:30,paddingRight:30,height:70,width:100}}
                    >Sil</Text>
            </TouchableOpacity>
         </View>
          </View>  

          

        );
    }
}
export default TodoView;