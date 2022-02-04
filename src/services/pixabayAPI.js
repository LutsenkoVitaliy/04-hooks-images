const API_KEY = '24021062-33a986e16cffce2cd7c29eb8f'

function fetchPicture(name, page = 1) {
  return fetch(`https://pixabay.com/api/?q=${name}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`)
    .then(response => {
      if (response.ok) {
        return response.json()
      }
          
    return Promise.reject(
      new Error(`Error search result, try again`)
    );
  })
}

const api = {
  fetchPicture,
}

export default api;