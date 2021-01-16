import {Image, TouchableHighlight, View} from "react-native";
import React from "react";
import {styles} from "./stylesPhoto"

const Photo = props => {
    return (
        <TouchableHighlight onPress={() => {
            props.navigation.navigate('Photo', props.url.full)
        }}>
            <Image style={styles.photo}
                   source={{
                       uri: props.url.small,
                   }}
            />
        </TouchableHighlight>
    )
}
export default Photo
