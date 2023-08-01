import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from '../../styles'

const InfoContainer = () => {
    return (
        <View style={styles.infoContainer}>

            <Text style={styles.userName}>Dragon_Ballz</Text>
            <Text style={styles.subheading}>@UID007</Text>
            <Text style={styles.subheading}>Game Designation</Text>

           

        </View>
    )
}

export default InfoContainer