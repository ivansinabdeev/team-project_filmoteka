const galleryEl = document.querySelector('.film-list');
import { findGenresOfFilms } from './genres';
import img from '../images/film_poster_not_found.png';
import { playSpinner, stopSpinner } from "./spinner";

export function markupFilm(films) {
    const markup = films
        .map(data => {
            const { poster_path, title, genre_ids, release_date, id } = data;
            const filmData = encodeURIComponent(JSON.stringify(data))
            const date = new Date(release_date).getFullYear();
            if (poster_path) {
                return `
            <li class="filmCard" id="${id}" data-film=\"${filmData}\">
            <img class="filmCard__img" src="https://image.tmdb.org/t/p/w500${poster_path}" alt="${title}" loading="lazy" />
            <div class="card_wrap">
            <p class="filmCard__title">${title.toUpperCase()} <br />
            <span class="filmCard__info">${findGenresOfFilms(
                    genre_ids
                )} | ${date}</span>
            </p>
            </div>
            </li>`;
            }
            return `
        <li class="filmCard" id="${id}" data-film=\"${filmData}\">
        <img class ="filmCard__img" src="${img}" alt="${title.toUpperCase()}" />
        <div class="card_wrap">
        <p class ="filmCard__title">${title.toUpperCase()} <br/>
        <p class ="filmCard__info"><span>${findGenresOfFilms(
                genre_ids
            )} | ${date}</span>
        </p>
        </div></li>`;
        })
        .join('');
    galleryEl.insertAdjacentHTML('beforeend', markup);
}
// 