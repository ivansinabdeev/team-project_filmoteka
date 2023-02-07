// treiler

import { ApiService } from './apiService.js';

// closeModalBtn: document.querySelector('[data-modal-close]'),
const filmList = document.querySelector('.films__list');
filmList.addEventListener('click', onGalleryClick);

let watchedAdd;
let queueAdd;
let currentMovie;

async function onGalleryClick(e) {
  console.log(e.target);
  if (e.target === e.currentTarget) {
    return;
  }

  const card = e.target.closest('li');
  ApiService.id = card.dataset.id;
}
