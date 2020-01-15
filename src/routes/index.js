import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {
  home,
  login,
  register,
} from '../screens/index';

const StackAuth = createStackNavigator(
  {
    login,
    register,
  },
  {
    initialRouteName: 'Login',
    headerMode: 'none',
  }
);

const StackHome = createStackNavigator(
  {
      home,
  },
  {
    initialRouteName: 'Home',
    headerMode: 'none',
  }
);

const Router = createSwitchNavigator(
  {
    StackAuth,
    StackHome,
  },
  {
    initialRouteName: 'StackAuth',
    headerMode: 'none',
  }
);

export default createAppContainer(Router);