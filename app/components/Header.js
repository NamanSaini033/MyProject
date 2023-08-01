import { View, Image, ImageBackground } from 'react-native'
import React from 'react'
import { styles } from '../../styles'

const Header = () => {
    return (
        <>
            <Image source={require("../assests/images/top.png")}
                style={styles.topImage}
            />
            <ImageBackground source={require("../assests/images/gaming.png")}
                style={styles.bannerImage}>
                <View style={styles.profileImageContianer}>
                    <Image source={require("../assests/images/profile1.png")}
                        resizeMode='contain'
                        style={styles.profileImage}
                    />
                </View>
            </ImageBackground>
        </>
    )
}

export default Header