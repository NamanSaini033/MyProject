import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const Button = ({name,onPress}) => {
    return (
        <TouchableOpacity style={styles.btnConatiner} onPress={onPress}>
            <Text style={styles.btnText}>{name}</Text>
        </TouchableOpacity>
    )
}

export default Button

const styles = StyleSheet.create({
    btnConatiner: {
        backgroundColor: "#f06a23",
        borderRadius: 5,
        paddingVertical: 5,
        paddingHorizontal: 20,
        marginTop: 5
    },
    btnText: {
        color: "white",
        fontWeight: "bold"
    }
})