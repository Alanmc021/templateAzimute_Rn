import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import MainTabNavigator from './MainTabNavigator'
import StackNavigator from './StackNavigator'
import LoginScreen from '../auth/LoginScreen'

export default createAppContainer(
  createSwitchNavigator({
    First: StackNavigator,
    Main: MainTabNavigator,
    Login: LoginScreen
  },
    {
      initialRouteName: 'Main'
    })
)

//SISTEMA DE NAVEGAÇÃO AZIMUTE 

//StackNavigator: contém todas as screens responsáveis 
//pelas as transações básicas de navegação entre duas telas.

//MainTabNavigator: contém elementos de navegação do menu 
//da tela inicial.

//OBS : MainTabNavigator pode virar um DrawerNavigator 
// alterando createBottomTabNavigator por createDrawerNavigator no arquivo
//NAVIGATOR/MainTabNavigator.js


