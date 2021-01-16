export const SET_PHOTOS = 'SET_PHOTOS'

const initialState = {
    title: 'Gallery',
    photos: []
}

export const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PHOTOS:
            return {...state, photos: action.photos}
        default:
            return state;
    }
}
