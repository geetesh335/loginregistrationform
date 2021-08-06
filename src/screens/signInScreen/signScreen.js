import React,{useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
  TouchableOpacity,
  Pressable,
  StatusBar,
  Platform,
  Alert,
} from 'react-native';
import {useTheme} from 'react-native-paper';
// import LinearGradient from 'react-native-linear-gradient';
import * as Animatable from 'react-native-animatable';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import {Colors} from 'react-native/Libraries/NewAppScreen';


const SignScreen = () => {
  
  const [data,setData] = useState({
   
    username:'',
    password:'',
    check_textInputChange:false,
    secureTextEntry:true,
    isValidUser:true,
    isValidPassword:true,
  
  })

  const updateSecureTextEntry = () => {

    setData({
      ...data,
      secureTextEntry:!data.secureTextEntry,
    })
  }
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#009387" barStyle="light-content" />
      <View style={styles.header}>
        <Text style={styles.text_header}> Welcome !</Text>
      </View>

      {/* <animitable/> */}
      <Animatable.View
        animation="fadeInUpBig"
        style={[styles.footer, {color: 'green'}]}>
        <Text style={styles.text_footer}> Username</Text>
        <View style={styles.action}>
          <FontAwesome name="user-o" size={20} />
          <TextInput
            style={styles.textinput}
            placeholder="Your Username"
            placeholderTextColor="#666666"
            autoCapitalize="none"
          />
          {data.check_textInputChange?(
            <Animatable.View animation="bounceIn">
              <Feather name="check-circle" color="green" size={20}/>
            </Animatable.View>
          ):null}
          {data.isValidPassword ?null:(
            <Animatable.View animation="fadeInLeft" duration={500} >
              <Text style={styles.errorMsg}>
                userName must be 4 characters long.
              </Text>
            </Animatable.View>
          )}
          {/* <animitable/> */}
        </View>
        <Text style={styles.text_footer}>Password</Text>
        <View style={styles.action}>
          <Feather name="lock" color="grey" size={20} />
          <TextInput
            placeholder="Your Password"
            placeholderTextColor="#666666"
            autoCapitalize="none"
            style={styles.textinput}
          />
          <TouchableOpacity  onPress={updateSecureTextEntry}>
          {data.secureTextEntry?(
            <Feather name="eye-off" color="grey" size={20}/>
          ):(<Feather name="eye" color="grey" size={20}/>)}

          </TouchableOpacity>
        </View>
        {data.isValidPassword ? null : (
          <Animatable.View  animation="fadeInLeft" duration={500}>
             <Text style={styles.errorMsg}>
               Password must be 8 charachters long
             </Text>
          </Animatable.View>
        )

        }
        <TouchableOpacity>
          <Text style={{color: '#009387', marginTop: 15}}>
            Forgot Password ?
          </Text>
        </TouchableOpacity>
        <View style={styles.button}>
          <TouchableOpacity style={styles.signIn}>
            <Text style={styles.textsign}>Sign In</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={
              ([styles.signIn],
              {borderColor: '#009387', borderWidth: 1, marginTop: 15})
            }>
            <Text style={([styles.textsign], {color: '#009387'})}>sign up</Text>
          </TouchableOpacity>
        </View>
        
      </Animatable.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#009387',
  },
  header: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 50,
  },
  text_header: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 30,
  },
  footer: {
    flex: 3,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
    borderTopRightRadius: 30,
  },
  text_footer: {
    color: '#05375a',
    fontSize: 18,
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ff0000',
    paddingBottom: 5,
  },
  textinput: {
    flex: 1,
    paddingLeft: 10,
    color: '#05375a',
    marginTop: Platform.OS === 'ios' ? 0 : -12,
  },
  button: {
    alignItems: 'center',
    marginTop: 50,
  },
  signIn: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  textsign: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  errorMsg:{
    color:'#ff0000',
    fontSize:14,
  }
});
export default SignScreen;
