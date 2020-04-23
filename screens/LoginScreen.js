import React,{Component} from 'react';

import {View,Text,TextInput, Button} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {loginSuccces} from '../redux/actions/LoginActions';
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
        <Button title="Giriş Yap"  onPress={()=>this.props.dispatch(loginSuccces())} />
        <Button title="Kayıt Ol" onPress={()=>this.props.navigation.navigate('register')} /> 
        </View>
        

      </View>
    );
  }
}

function mapDispacthToProps(dispatch){
  return{
    action : bindActionCreators(loginSuccces,dispatch)
  };
}

export default connect(mapDispacthToProps)(LoginScreen);