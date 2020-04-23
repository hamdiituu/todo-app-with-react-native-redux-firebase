import React,{Component} from 'react';

import {View,Text,TextInput, Button,StyleSheet,TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {doLogin} from '../redux/actions/LoginActions';
import { set } from 'react-native-reanimated';
import { SafeAreaView } from 'react-native-safe-area-context';
class LoginScreen extends Component{
  state={
    email :"",
    password:""
  }
  render(){
    return(
      <SafeAreaView style={styles.Container}>
      
        <TextInput
        onChangeText={email =>this.setState({email})}
        style={styles.emailInput}
        placeholder ="me@me.com"
        />
       
       <TextInput
       onChangeText={password =>this.setState({password})}
        style={styles.passwordInput}
        placeholder ="*****"
        secureTextEntry={true}
        />
      
        <View style={{flexDirection:"row"}}>
          <View>

              <TouchableOpacity
              style={styles.loginButton}
              onPress={()=>this.props.dispatch(doLogin(this.state.email,this.state.password))}
              >
                <Text
                style={styles.loginText}
                >Giriş Yap</Text>
              </TouchableOpacity>

          </View>
          <View>
              <TouchableOpacity
              style={styles.registerButton}
              onPress={()=>this.props.navigation.navigate('register')} 
              >
                <Text
                style={styles.registerText}
                >Kayıt Ol!</Text>
              </TouchableOpacity>
          </View>
        </View>
        
        <View style={{flex:2}} ></View>
      
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  emailInput:{
    backgroundColor:"white",
    paddingLeft:15,
    marginTop:150,
    marginBottom:20,
    height:60,
    borderColor:'gray',
    borderWidth:0,
    borderTopLeftRadius:16,
    borderTopRightRadius:16,
    width:300,
    fontSize:23,
    //justifyContent:"center",
    textAlign:"center",
    color:"#8E8D7B"
  },
  passwordInput:{
    backgroundColor:"white",
    paddingLeft:15,
    marginBottom:20,
    height:60,
    borderColor:'gray',
    borderWidth:0,
    //borderBottomLeftRadius:16,
    //borderBottomRightRadius:16,
    width:300,
    fontSize:23,
    color:"#8E8D7B",
    textAlign:"center"
  },
  loginButton:{
    backgroundColor:"#7BB075",
    marginHorizontal:20,
    width:128,
    height:60,
    borderBottomLeftRadius:16,
    justifyContent:"center"
  
  },
  loginText:{
    color:"white",
    fontSize:23,
    textAlign:"center"
  },
  registerButton:{
    backgroundColor:"#F96C16",
    marginHorizontal:20,
    width:128,
    height:60,
    borderBottomRightRadius:16,
    justifyContent:"center"
  },
  registerText:{
    color:"white",
    fontSize:23,
    textAlign:"center",
    //justifyContent:"center"
  },
  Container:{
    flex:1,
    justifyContent:"center",
    alignItems:"center",
    alignContent:"center",
    backgroundColor:"#F9CC16"
  }
})
function mapDispacthToProps(dispatch){
  return{
    action : bindActionCreators(doLogin,dispatch)
  };
}

export default connect(mapDispacthToProps)(LoginScreen);