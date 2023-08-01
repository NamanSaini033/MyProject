import { View, Text } from 'react-native'
import React from 'react'
import { styles } from '../../styles'
import Icon from 'react-native-vector-icons/Entypo';

const FollowerConatiner = () => {
    return (
        <View style={styles.followerContainer}>
            <View style={styles.followerBox}>
                <Text style={styles.count}>500</Text>
                <Text style={styles.subText}>followers</Text>
            </View >
            <View style={styles.followerBox}>
                <Text style={styles.count}>200</Text>
                <Text style={styles.subText}>following</Text>
            </View>
            <View style={styles.followerBox}>
                <Text><Icon style={styles.clanIcon} name="shield" size={22} /></Text>
                <Text style={styles.subText}>clan</Text>
            </View>
        </View>
    )
}

export default FollowerConatiner