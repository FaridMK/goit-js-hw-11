import { axios } from '../index.js';


export default class ImageService {
  constructor() {
    this.searchingImg = '';
    this.page = 1;
    this.simpleLightbox = null;
  }

  async function fetchImages(name, page, perPage) {
    const BASE_URL = 'https://pixabay.com/api/';
    const KEY = '30078306-2ba5f79c85dc6ca60b6a24118';
    const url = `${BASE_URL}?key=${KEY}&q=${this.searchingImg}&image_type=photo&orientation=horizontal&safesearch=true&per_page=40&page=${this.page}`;

   try {
    const response = await axios.get(
      `${baseURL}?key=${key}&q=${name}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=${perPage}`
    );
    return response.data;
  } catch (error) {
    console.log('ERROR: ' + error);
  }
}
  
  export { fetchImages };
