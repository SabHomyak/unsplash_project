import Navbar from "./Navbar/Navbar";
import React from "react";
import ListPhotos from "./ListPhotos/ListPhotos";

const Gallery = props => {
    return (
        <>
            <Navbar/>
            <ListPhotos navigation={props.navigation}/>
        </>
    )
}
export default Gallery
