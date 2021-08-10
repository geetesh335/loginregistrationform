import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from '../splashScreen/splashScreen';
import SignUpScreen from '../signUpScreen/signUpScreen';
import SignScreen from '../signInScreen/signScreen';
import { NavigationContainer } from '@react-navigation/native';

const RootStack = createStackNavigator();

const RootStackScreen = ({navigation}) => {
  console.log("navigation me aaya")
  return(
    // <NavigationContainer>
    <RootStack.Navigator headerMode="none" >   
      <RootStack.Screen name="Splash" component={SplashScreen} />
      <RootStack.Screen name="SignUP" component={SignUpScreen} />
      <RootStack.Screen name="Sign" component={SignScreen} />
    </RootStack.Navigator>
    // </NavigationContainer>
  )
};

export default RootStackScreen;
