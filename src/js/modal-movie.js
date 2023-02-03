// treiler
import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';
import { MovieApi } from './movieApi';

const movieApi = new MovieApi();

export async function launchTrailer(e) {
  try {
    const id = e.target.closest('#film-modal').dataset.id;
    const key = await movieApi.fetchMovieTrailerById(id);
    const lightBox = basicLightbox.create(`
  <iframe width="680" height="415" src="https://www.youtube.com/embed/${key}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`);
    lightBox.show();
  } catch (error) {
    console.log(error);
  }
}

const refs = {
  closeModalBtn: document.querySelector('[data-modal-close]'),
  filmCard: document.querySelector('.films__list'),
  backdropEl: document.querySelector('.modal__backdrop'),
  startTrailerBtn: document.querySelector('.trailer__btn'),
};
const instance = basicLightbox.create(`
    <img src="assets/images/image.png" width="800" height="600">
`);

instance.show();

let openedMovieId = null;
const btn = [addToWatchedBtn, addToQueueBtn, btnCloseFilm];
