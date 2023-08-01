import { View, Text } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome5';
import AIcon from 'react-native-vector-icons/AntDesign';
import EIcon from 'react-native-vector-icons/Entypo';
import { styles } from '../../styles';

const SocialConatiner = () => {
    return (
        <View style={styles.socialContainer}>
            <Icon style={styles.socialIcon} name="facebook" size={22} color="#f35d23" />
            <EIcon style={styles.socialIcon} name="game-controller" size={22} color="#f35d23" />
            <Icon style={styles.socialIcon} name="youtube" size={22} color="#f35d23" />
            <Icon style={styles.socialIcon} name="instagram-square" size={22} color="#f35d23" />
            <AIcon name="linkedin-square" size={22} color="#f35d23" />
        </View>
    )
}

export default SocialConatiner