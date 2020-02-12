import React from 'react'
import StackNavigator from '../navigation/StackNavigator'

export default class HomeScreen extends React.Component {
  render() {
    return <StackNavigator />
  }
}

HomeScreen.navigationOptions = {
  headerShown: false,
}

//Ponto de acesso inicial a StackNavigator contendo a 
//navegação primária utilizando os elementos nativos
// do "react-native-gesture-handler": "~1.5.0".