import {photoApi} from "../photoApi/photoApi";
import {SET_PHOTOS} from "./rootReducer";

export const setPhotos = (photos) => {
    return {
        type: SET_PHOTOS,
        photos
    }
}

export const setPhotosThunk = (query) => {
    return async (dispatch) => {
        let photos = await photoApi.getPhotos(query)
        dispatch(setPhotos(photos))
    }
}
