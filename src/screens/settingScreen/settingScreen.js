import React from 'react'
import { View, Text, Button } from 'react-native'

const SettingScreen = () => {
    return (
        <View>
            <Text>Setting screen</Text>
            <Button 
                title="click here"
                onPress={()=> alert('button clicked')}
            />
        </View>
    )
}

export default SettingScreen
