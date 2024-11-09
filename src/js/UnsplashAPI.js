import axios from 'axios';
export default class UnsplashAPI {
  #API_KEY = 'gcevo00lZKvSMKLnZZJPKYS5xNbpbsP_4i6E-BVlG58';
  #BASE_URL = 'https://api.unsplash.com/search/photos';

  async fetchPopularPhotos(page = 1) {
    const response = await axios(this.#BASE_URL, {
      params: {
        query: 'popular',
        page,
        per_page: 12,
        orientation: 'portrait',
      },
      headers: {
        Authorization: `Client-ID ${this.#API_KEY}`,
      },
    });

    return response.data;
  }
}