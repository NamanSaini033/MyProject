import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    oicon: {
        borderColor: "black",
        transform: [{ rotate: '-45deg' }],
    },
    blackText: {
        color: "#000"
    },
    heading: {
        fontWeight: "bold",
        color: "#000"
    },
    bottomConatiner: {
        paddingHorizontal: 10
    },
    topImage: {
        width: '100%',
        height: 40,
        marginVertical: 8
    },
    follow: {
        paddingLeft: 2
    },
    desc: {
        color: "black"
    },
    link: {
        color: "#f07035",
        fontWeight: "bold"
    },
    backgroundImage: {
        width: 150,
        height: 45
    },
    chatConatiner: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    userInfo: {
        borderRadius: 1,
        paddingLeft: 10
    },
    textView: {
        paddingHorizontal: 10
    },
    username: {
        color: "white",
        fontWeight: "bold",
    },
    postImage: {
        width: 60,
        height: 60,
        borderWidth: 4,
        borderRadius: 10,
    },
    followContainer: {
        alignItems: "center",
        flexDirection: "row",
        marginRight: 10
    },
    postTopContainer: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    bannerImage: {
        width: '100%',
        height: 150
    },
    profileImageContianer: {
        alignItems: "center",
        flex: 1,
        justifyContent: "flex-end",
    },
    profileImage: {
        width: 90,
        height: 90,
        position: "absolute",
        bottom: -40,
        borderWidth: 4,
        borderRadius: 20,
        borderColor: "white"
    },
    micon: {
        borderColor: "black",
        paddingLeft: 10
    },
    offline: {
        fontSize: 10,
        letterSpacing: 5,
        marginTop: 2
    }
    ,
    back: {
        color: "white"
    },
    commentContainer: {
        flexDirection: "row",
        marginTop: 10,
        justifyContent: "space-between",
    },
    likeConatiner: {
        alignItems: "center",
        flexDirection: "row",
        flex: 1,
        paddingLeft: 5
    },
    likeBackground: {
        width: 130,
        height: 46,
    },
    likes: {
        color: "white",
        fontSize: 12
    },
    infoContainer: {
        alignItems: "center",
        marginTop: 18
    },
    flexDirection: {
        flexDirection: "row"
    },
    postContainer: {
        backgroundColor: "#ddd",
        padding: 10,
    },
    userName: {
        color: "#f06a23",
        fontSize: 18,
        fontWeight: "bold"
    },
    subheading: {
        color: "grey",
        fontSize: 12,
    },
    socialContainer: {
        flexDirection: "row",
        paddingVertical: 5,
        borderRadius: 10,
        justifyContent: "space-around",
        marginTop: 10,
        marginHorizontal: 40,
        backgroundColor: "#ffe7db",
    },
    postInnerContainer: {
        borderRadius: 20,
        borderColor: "#e0753d",
        borderWidth: 2,
        borderBottomWidth: 0,
        backgroundColor: "#fafafa",
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        marginBottom: 15
    },
    socialIcon: {
        borderRightWidth: 1,
        borderColor: "#f35d23",
        paddingRight: 10
    },
    followerContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
        marginTop: 10
    },
    followerBox: {
        borderRightWidth: 1,
        alignItems: "center",
        flex: 1
    },
    clanIcon: {
        borderRightWidth: 1,
        borderColor: "#f35d23",
        paddingRight: 10
    },
    count: {
        fontSize: 16,
        fontWeight: "bold",
        color: "black"
    },
    subText: {
        fontSize: 12,
        fontWeight: "bold"
    },
    tabContainer: {
        flexDirection: 'row',
        justifyContent: "space-around",
        marginTop: 5,
        paddingBottom: 10
    },
    activeTab: {
        color: "#f07035",
        fontWeight: "bold",
        borderBottomWidth: 2,
        borderColor: "#f07035"
    },
    tabs: {
        color: "#edae87",
        fontWeight: "bold"
    },
    postIconsContainer: {
        flexDirection: "row",
        marginRight: 10,
        alignItems: "center",
    },
    bottomImage: {
        width: '100%',
        height: 40
    }
})