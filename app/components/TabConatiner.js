import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { styles } from '../../styles'

const TabConatiner = ({activeTab, setActiveTab}) => {
    
    return (
        <View style={styles.tabContainer}>
            <Text onPress={()=>setActiveTab("Posts")} style={activeTab === "Posts" ? styles.activeTab : styles.tabs }>Posts</Text>
            <Text onPress={()=>setActiveTab("Social")} style={activeTab === "Social" ? styles.activeTab : styles.tabs }>Social</Text>
            <Text onPress={()=>setActiveTab("About")} style={activeTab === "About" ? styles.activeTab : styles.tabs }>About</Text>
            <Text onPress={()=>setActiveTab("Gallery")} style={activeTab === "Gallery" ? styles.activeTab : styles.tabs }>Gallery</Text>
            <Text onPress={()=>setActiveTab("Device")} style={activeTab === "Device" ? styles.activeTab : styles.tabs }>Device</Text>
        </View>
    )
}

export default TabConatiner