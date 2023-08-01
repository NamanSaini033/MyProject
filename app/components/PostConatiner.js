import { View, Text, Image, ImageBackground } from 'react-native'
import React from 'react'
import OIcon from 'react-native-vector-icons/Octicons';
import MIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import HIcon from 'react-native-vector-icons/Entypo';
import { styles } from '../../styles';
const PostConatiner = () => {
    return (
        <View style={styles.postInnerContainer}>
            <View style={styles.postTopContainer}>
                <View style={styles.flexDirection}>
                    <Image source={require("../assests/images/capture.png")}
                        resizeMode='contain'
                        style={styles.postImage}
                    />
                    <ImageBackground source={require("../assests/images/Untitled1.png")} style={styles.backgroundImage}>
                        <View style={styles.userInfo}>
                            <Text style={styles.username}>Username</Text>
                            <Text style={styles.back}>35 mins back</Text>
                        </View>
                        <Text style={styles.offline}>OFFLINE</Text>
                    </ImageBackground>
                </View>

                <View style={styles.followContainer}>
                    <OIcon style={styles.oicon} name="paper-airplane" size={15} color="black" />
                    <Text style={styles.follow}>Follow</Text>
                    <MIcon style={styles.micon} name="dots-square" size={25} color="black" />
                </View>
            </View>
            <View style={styles.textView}>
                <Text style={styles.desc}>
                    Hi guys my new video is out on my Youtube channel, Please view, like, share and comment
                </Text>
                <Text style={styles.link}>
                    https://youtube.com/shorts/rc-mRnJztqC?feature=share
                </Text>
            </View>
            <View style={styles.commentContainer}>
                <ImageBackground source={require("../assests/images/Untitled2.png")} style={styles.likeBackground}>
                    <View style={styles.likeConatiner}>
                        <HIcon name="heart" size={18} color="white" />
                        <Text style={styles.likes}>5,275 Likes</Text>
                    </View>
                </ImageBackground>

                <View style={styles.chatConatiner}>
                    <View style={styles.postIconsContainer}>
                        <MIcon name="comment-text-outline" size={20} />
                        <Text>Comment</Text>
                    </View>
                    <View style={styles.postIconsContainer}>
                        <MIcon name="comment-processing-outline" size={20} />
                        <Text>Chat</Text>
                    </View>
                    <View style={styles.postIconsContainer}>
                        <MIcon name="share-outline" size={20} />
                        <Text>Share</Text>
                    </View>
                </View>
            </View>
            <View style={styles.bottomConatiner}>
                <Text style={styles.blackText}><Text style={styles.heading}>Heading </Text> this is a text placeholder and will be replaced</Text>
                <Text>250 comments</Text>
                <Text style={styles.blackText}><Text style={styles.heading}>Username </Text> this is the comment by this user!!</Text>
            </View>
        </View>
    )
}

export default PostConatiner