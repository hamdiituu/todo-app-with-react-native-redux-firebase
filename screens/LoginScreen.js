import React,{Component} from 'react';

import {View,Text,TextInput, Button} from 'react-native';

class LoginScreen extends Component{
  render(){
    return(
      <View style={{flex:1,justifyContent:"center",alignItems:"center",alignContent:"center"}}>
          

        <TextInput
        style={{paddingLeft:15,marginBottom:20,height:40,borderColor:'gray',borderWidth:1,borderRadius:16,width:300}}
        placeholder ="   E-mail adresiniz.."
        />

       <TextInput
        style={{paddingLeft:15,marginBottom:20,height:40,borderColor:'gray',borderWidth:1,borderRadius:16,width:300}}
        placeholder ="  Şifreniz.."
        secureTextEntry={true}
        />
        <View style={{flexDirection:"row"}}>
        <Button title="Giriş Yap" />
        <Button title="Kayıt Ol" onPress={()=>this.props.navigation.navigate('register')} /> 
        </View>
        

      </View>
    );
  }
}

export default LoginScreen;