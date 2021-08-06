import React from 'react'
import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import SignScreen from '../screens/signInScreen/signScreen'
// import SignUpScreen from '../screens/signUpScreen/signUpScreen'
// import HomeScreen from '../screens/homeScreen'
const Stack = createNativeStackNavigator();
// const Drawer = createDrawerNavigator();
// const Tab = createBottomTabNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Sign" component={SignScreen}
          options={{headerShown:false}}
        />

      </Stack.Navigator>
      {/* <Tab.Navigator>
        <Tab.Screen name="SignUp" component={SignUpScreen }/>
      </Tab.Navigator>
      <Drawer.Navigator>
        <Drawer.Screen name=" Home" component={HomeScreen }/>
      </Drawer.Navigator> */}
    </NavigationContainer>
  )
}

export default Navigation
