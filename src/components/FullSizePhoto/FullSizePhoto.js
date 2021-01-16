import {Image, View, StyleSheet} from "react-native"
import {styles} from "./stylesFullSizePhoto"
import React from "react";

const FullSizePhoto = ({link}) => {
    return (
        <View style={styles.container}>
            <Image
                style={styles.photo}
                source={{
                    uri: link
                }}
            />
        </View>
    );
}


export default FullSizePhoto
