

import { axios } from '../index.js';
const BASE_URL = 'https://pixabay.com/api/';
const KEY = '30078306-2ba5f79c85dc6ca60b6a24118';



export default class ImageService {
  constructor() {
    this.searchingImg = '';
    this.page = 1;
    this.simpleLightbox = null;
  }

  async fetchImages() {
    try {
    const url = `${BASE_URL}?key=${KEY}&q=${this.searchingImg}&image_type=photo&orientation=horizontal&safesearch=true&per_page=40&page=${this.page}`;

    const { data } = await axios.get(url);
    this.page += 1;
    return data;
  } catch (error) {
    throw new Error(error);
  }
  }

  resetPage() {
    this.page = 1;
  }

  get query() {
    return this.searchingImg;
  }

  set query(newSearchingImg) {
    this.searchingImg = newSearchingImg;
  }
}
