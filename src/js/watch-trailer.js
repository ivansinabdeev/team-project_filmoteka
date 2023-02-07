import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';
import ApiService from './apiService';

const movieApi = new ApiService();

export async function launchTrailer(event) {
  try {
    const id = event.target.closest('.modal-window').dataset.id;
    const key = await movieApi.fetchTrailer(id);
    const lightBox = basicLightbox.create(`
  <iframe width="680" height="415" src="https://www.youtube.com/embed/${key}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`);
    lightBox.show();
    // console.log(lightBox);
  } catch (error) {
    console.log(error);
  }
}
