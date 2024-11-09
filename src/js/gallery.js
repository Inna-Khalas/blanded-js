import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';

import UnsplashAPI from './UnsplashAPI';
import renderMarkup from './renderFn';
const options = {
  totalItems: 0,
  itemsPerPage: 12,
  visiblePages: 5,
  page: 1,
};

const gallery = document.querySelector('.gallery');
const container = document.getElementById('pagination');
const pagination = new Pagination(container, options);
const page = pagination.getCurrentPage();

pagination.on('afterMove', event => {
  const currentPage = event.page;

  api.fetchPopularPhotos(currentPage).then(res => {
    gallery.innerHTML = renderMarkup(res.results);
  });
});

const api = new UnsplashAPI();

api
  .fetchPopularPhotos(page)
  .then(res => {
    gallery.innerHTML = renderMarkup(res.results);
    pagination.reset(res.total);
  })
  .catch(console.log);