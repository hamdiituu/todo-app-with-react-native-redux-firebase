import React from 'react';
import {View,TouchableOpacity,Text} from 'react-native';

class TodoView extends React.Component{
    render(){
        return(
<View style={{flexDirection:"row",justifyContent:"space-between",borderWidth:1,marginBottom:10}}>
          <View style={{padding:20}}>
             <Text>{this.props.todo.todoTitle}</Text>
          </View>

           <View style={{justifyContent:"center",alignContent:"center",alignItems:"center"}}>
              <TouchableOpacity
                    style={{borderLeftWidth:1}}
                    onPress={()=>{alert(this.props.todo.todoId)}}
                  >
                    <Text
                    style={{textAlign:"center",backgroundColor:"#E37054",color:"#E3E3E3",fontSize:17,paddingTop:20,paddingLeft:30,paddingRight:30,height:70,width:100}}
                    >Sil</Text>
            </TouchableOpacity>
         </View>
          </View>  

          

        );
    }
}
export default TodoView;