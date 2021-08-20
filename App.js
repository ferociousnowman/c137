
import React from 'react';
import {createAppContainer} from "react-navigation"
import {createStackNavigator} from "react-navigation-stack"
import Home from "./Screens/home"
import Details from "./Screens/details"

export default function App() {
  return (
  <AppContainer/>
  );
}
const appStackNavigator=createStackNavigator(
  {
    Home:{
      screen:Home,
      navigationOptions:{headerShown:false}
    },
    Details:{
      screen:Details
    }
  },
  {
    initialRouteName:"Home"

  }
)
const AppContainer=createAppContainer(appStackNavigator)
