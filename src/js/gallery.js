import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

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
const form = document.querySelector('.search-form');

pagination.on('afterMove', getPopular);

const api = new UnsplashAPI();

api
  .fetchPopularPhotos(page)
  .then(res => {
    gallery.innerHTML = renderMarkup(res.results);
    pagination.reset(res.total);
  })
  .catch(console.log);

form.addEventListener('submit', event => {
  event.preventDefault();
  const inputValue = event.target.elements.query.value.trim();
  if (inputValue === '') {
    iziToast.info({
  message: 'Sorry, enter that you want to find'
})
    return;
  }
  pagination.off('afterMove', getPopular);
  pagination.off ('afterMove', getByQuery)
  api.query = inputValue;
  api
    .fetchPhotosByQuery(page)
    .then(res => {
      if (res.results.length === 0) {
iziToast.info({
  message: 'Sorry, enter other query'
})
return;
      }
      gallery.innerHTML = renderMarkup(res.results);
      pagination.reset(res.total);
      
    })
    .catch(error => console.log(error));
pagination.on ('afterMove', getByQuery)
});

function getPopular (event) {
  const currentPage = event.page;
  api.fetchPopularPhotos(currentPage).then(res => {
    gallery.innerHTML = renderMarkup(res.results);
  });
}

function getByQuery (event) {
  const currentPage = event.page;
  api.fetchPhotosByQuery(currentPage).then(res => {
    gallery.innerHTML = renderMarkup(res.results);
  });
}