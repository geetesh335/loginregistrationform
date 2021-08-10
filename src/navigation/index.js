import React, {useState, useEffect,useMemo} from 'react';
import {View, Text, ActivityIndicator} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { AuthContext } from '../component/context';
import MainTabScreen from '../screens/mainTabScreen/mainTabScreen'
 import {createDrawerNavigator} from '@react-navigation/drawer';
 import SupportScreen from '../screens/supportScreen/supportScreen';
 import SettingsScreen from '../screens/settingScreen/settingScreen';
 import BookmarkScreen from '../screens/BookMarkScreen/bookMarkScreen';
import RootStackScreen from '../screens/rootStackScreen/rootStackScreen';
 const Drawer = createDrawerNavigator();

const Navigation = () => {
  const [isLoading, setisLoading] = useState(true);
  const [userToken, setuserToken] = useState(null);

  const authContext = useMemo(
    () => ({
      signIn: () => {
        setisLoading(false);
        setuserToken('kfdfk');
      },
      signOut: () => {
        setisLoading(false);
        setuserToken(null);
      },
      signUp: () => {
        setisLoading(false);
        setuserToken('kfdfk');
      },
    }),
    
  );

  useEffect(() => {
    setTimeout(() => {
      setisLoading(false);
    }, 2000);
  });

  if (isLoading) {
    return (
      <View>
        <ActivityIndicator size="large" color="red" />
      </View>
    );
  }

  return (
    <AuthContext.Provider value={authContext}>
    <NavigationContainer>
      {userToken != null ? (
        <Drawer.Navigator>
        <Drawer.Screen name="Home" component={MainTabScreen}/>
        <Drawer.Screen name="Support" component={SupportScreen} />
        <Drawer.Screen name="Settings" component={SettingsScreen} />

        <Drawer.Screen name="Bookmark" component={BookmarkScreen} />
        </Drawer.Navigator>
      ):
      <RootStackScreen />
      }
     
     
    </NavigationContainer>
    </AuthContext.Provider>
  );
};

export default Navigation;
