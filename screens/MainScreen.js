import React,{Component} from 'react';

import {View,Text, Button} from 'react-native';

class MainScreen extends Component{
  render(){
    return(
      <View style={{margin:150}}>
          <Text>MainScreen!</Text>

          <Button title="Profil"  onPress={()=>this.props.navigation.navigate('profile')}/>
          
      </View>
    );
  }
}

export default MainScreen;