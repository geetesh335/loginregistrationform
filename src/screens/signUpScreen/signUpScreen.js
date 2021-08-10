import React from 'react'
import { View, Text, TextInput, TouchableOpacity, StyleSheet, StatusBar } from 'react-native'
import * as Animatable from 'react-native-animatable';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

const SignUpScreen = () => {
    return (
        <View style={styles.container}>
           <StatusBar backgroundColor="#009387"/>
            <Text style={styles.text_input}>Register Now!</Text>
            <Animatable.View style={styles.footer} animation="fadeInUpBig">
                <Text style={styles.name}> Username</Text>
                <View style={styles.inputbox}>
                    <FontAwesome name="user-o"  color="grey" size={20}/>
                    <TextInput 
                        placeholder="Your Username"
                        style={styles.inputField}
                    />
                </View>
                <Text style={styles.name}> Password</Text>
                <View style={styles.inputbox}>
                <Feather name="lock" color="grey" size={20} />
                    <TextInput 
                        placeholder="Your Password"
                        style={styles.inputField}
                    />
                    <TouchableOpacity>
                    <Feather name="eye-off" color="grey" size={20}/>
                    </TouchableOpacity>
                </View>
                <Text style={styles.name}> Confirm Password</Text>
                <View style={styles.inputbox}>
                <Feather name="lock" color="grey" size={20} />
                    <TextInput 
                        placeholder="confirm your password"
                        style={styles.inputField}
                    />
                     <TouchableOpacity>
                    <Feather name="eye-off" color="grey" size={20}/>
                    </TouchableOpacity>
                </View>
                <View style={styles.termtext}>
                <Text> By signing up you agree to our Terms of service
                    Privacy policy
                </Text>
                </View>
                <TouchableOpacity style={[styles.signIn,{backgroundColor:'#009387'}]}>
                    <Text style={styles.btntext}>Sign UP</Text>
                </TouchableOpacity>
            </Animatable.View>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
      flex:1,
      backgroundColor: '#009387'
    },
    text_input:{
        color:'white',
        fontSize:30,
        fontWeight:'bold',
        marginVertical:53,
        marginHorizontal:22
         },
         footer:{
           flex:1,
           backgroundColor:'white',
           paddingVertical:20,
           paddingHorizontal:22 ,
           borderTopLeftRadius:36,
           borderTopRightRadius:36 
         },
         inputField:{
         paddingLeft:8,
         marginTop:-14,
         flex:1
            
         },
         name:{
             fontWeight:'bold',
             fontSize:22,
             marginTop:22
         },
         inputbox:{
             flexDirection:'row',
             paddingVertical:7
             
         },
         signIn:{
            width: '100%',
            height: 50,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 10,
            marginVertical:43
         },
         btntext:{
             color:'white',
             fontSize:18,
             fontWeight:'bold'
         },
         termtext:{
             marginVertical:22
         }
})
export default SignUpScreen
