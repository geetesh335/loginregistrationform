import React from 'react'
import { View, Text, Button } from 'react-native'

const ProfileScreen = () => {
    return (
        <View>
            <Text>this is profileScreen </Text>
            <Button 
                title="click here"
                onPress={()=> alert('button clicked')}
            />
        </View>
    )
}

export default ProfileScreen
