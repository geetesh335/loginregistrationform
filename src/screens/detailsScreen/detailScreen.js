import React from 'react'
import { View, Text, Button,StyleSheet } from 'react-native'

const DetailScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text>this is detailScreen</Text>
            <Button title="go to details screen"
                onPress={()=> navigation.push('Details')}
            />
            <Button title="go to home"
                onPress={()=> navigation.navigate('Home')}
            />
            <Button title="go to back"
                onPress={()=> navigation.goBack()}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1, 
      alignItems: 'center', 
      justifyContent: 'center'
    },
  });
export default DetailScreen
