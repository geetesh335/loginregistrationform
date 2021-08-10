import React from 'react';
import {
  View,
  Text,
  StatusBar,
  ViewBase,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Button,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
import SignScreen from '../signInScreen/signScreen';

const SplashScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#009387" />
      <View style={styles.header}>
        <Animatable.Image
          animation="bounceIn"
          duraton="1500"
          source={require('../../assets/images/love.jpg.jpg')}
          style={styles.logo}
          resizeMode="stretch"
        />
      </View>
      <Animatable.View style={styles.footer} animation="bounce">
        <Text style={styles.footertxt1}>Stay connected with everyone!</Text>
        <Text>Sign in with account</Text>
        <TouchableOpacity onPress={()=>navigation.navigate('Sign')}>
          <View style={styles.button}>
            <Text style={styles.btntext}>Get started</Text>
            <MaterialIcons name="navigate-next" color="white" size={20}/>
          </View>
        </TouchableOpacity>
      </Animatable.View>
    </View>
  );
};
const {height} = Dimensions.get('screen');
const height_logo = height * 0.28;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#009387',
  },
  logo: {
    width: height_logo,
    height: height_logo,
    borderRadius:11111
  },
  header: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    flex: 1,
    backgroundColor: 'white',
    borderTopLeftRadius: 33,
    borderTopRightRadius: 33,
    paddingVertical: 39,
    paddingHorizontal: 33,
  },
  footertxt1: {
    fontSize: 33,
    fontWeight: 'bold',
  },
  button:{
       backgroundColor:'#009387',
       flexDirection:'row',
       borderRadius:22,
       alignSelf:'flex-end',
       padding:10,
       paddingLeft:24,
       marginVertical:22
        },
        btntext:{
            color:'white',
            
        }
});
export default SplashScreen;
