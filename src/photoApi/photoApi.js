export const photoApi = {
    async getPhotos(textQuery) {
        let photos = []
        let response = await fetch(`https://api.unsplash.com/search/photos/?client_id=cf49c08b444ff4cb9e4d126b7e9f7513ba1ee58de7906e4360afc1a33d1bf4c0&query=${textQuery}&per_page=10`)
        let json = await response.json()
        let results = await json.results
        results.forEach(item => {
            let author = item.user.name
            let url = {small: item.urls.thumb, full: item.urls.full}
            let namePhoto = item.alt_description
            let id = item.id
            photos.push({id, author, namePhoto, url})
        })
        return photos
    }
}
