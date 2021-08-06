import React from 'react'
import { View, Text, Button,StyleSheet } from 'react-native'

const SupportScreen = () => {
    return (
        <View style={styles.container}>
            <Text> support Screen</Text>
            <Button 
                title="click me "
                onPress={()=> alert('button clicked')}
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
export default SupportScreen
