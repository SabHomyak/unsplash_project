import {View, TextInput} from "react-native";
import React from "react";
import {connect} from "react-redux";
import {setPhotosThunk} from "../../../redux/actions";
import {styles} from "./stylesNavbar"


const Navbar = (props) => {
    return (

            <View style={{padding: 20}}>
                <TextInput
                    style={styles.input}
                    placeholder={'Search photo'}
                    onSubmitEditing={(event) => {
                        props.setPhotos(event.nativeEvent.text)
                    }}
                />
            </View>
    )
}

const mapStateToProps = (state) => {
    return {
        title: state.title
    }
}
const setPhotos = (query) => {
    return setPhotosThunk(query)
}

export default connect(mapStateToProps, {
    setPhotos
})(Navbar)


