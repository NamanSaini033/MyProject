import { View, Text } from 'react-native'
import React from 'react'
import { styles } from '../../styles'

const TabConatiner = () => {
    return (
        <View style={styles.tabContainer}>
            <Text style={styles.activeTab}>Posts</Text>
            <Text style={styles.tabs}>Social</Text>
            <Text style={styles.tabs}>About</Text>
            <Text style={styles.tabs}>Gallery</Text>
            <Text style={styles.tabs}>Device</Text>
        </View>
    )
}

export default TabConatiner