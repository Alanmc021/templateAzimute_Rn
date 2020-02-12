import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeStack from '../screensStack/HomeStack'
import DetailStack from '../screensStack/DetailStack'
 


const RootStack = createStackNavigator(
    {
        Home: { screen: HomeStack },
        Details: { screen: DetailStack },
    },
    {
        //initialRouteName: 'Home', 
    }
);

const AppContainer = createAppContainer(RootStack);

export default AppContainer

//Nesse componente StackNavigator concentramos todas 
//as rotas e maneira individual
//As screen setão vindo diretamente da pasta screensStack