import {Text, View, FlatList, SafeAreaView} from "react-native";
import React from "react";
import {connect} from "react-redux";
import Photo from "./Photo/Photo";
import {styles} from "./stylesListPhotos";


export const ListPhotos = props => {
    let photos
    if (props.photos.length === 0) {
        photos = <Text style={{alignSelf: 'center'}}>No results found</Text>
    } else {
        photos = <FlatList

            keyExtractor={item => item.id.toString()}
            data={props.photos}
            initialNumToRender={2}
            renderItem={({item}) => {
                return (
                    <View style={styles.photoContainer}>
                        <Text>Author: <Text style={{fontWeight: 'bold'}}>{item.author}</Text></Text>
                        <Photo url={item.url} navigation={props.navigation}/>
                        <Text style={styles.namePhoto}>{item.namePhoto}</Text>
                    </View>
                )
            }}
        />
    }
    return (
        <SafeAreaView style={styles.photosContainer}>
            {photos}
        </SafeAreaView>
    )
}
const mapStateToProps = state => {
    return {
        photos: state.photos
    }
}

export default connect(mapStateToProps)(ListPhotos)
