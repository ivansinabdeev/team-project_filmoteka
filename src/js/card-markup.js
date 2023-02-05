const galleryEl = document.querySelector('.film-list');
import { findGenresOfFilms } from './genres';
import img from '../images/film_poster_not_found.png';
import { playSpinner, stopSpinner } from "./spinner";

export function markupFilm(films) {
    const markup = films
        .map(data => {
            const { poster_path, title, genre_ids, release_date, id, vote_average, } = data;
            const filmData = encodeURIComponent(JSON.stringify(data))
            const date = new Date(release_date).getFullYear();

            if (poster_path) {
                return `
            <li class="film-card" id="${id}" data-film=\"${filmData}\">
            <img class="film-card__img" src="https://image.tmdb.org/t/p/w500${poster_path}" alt="${title}" loading="lazy" />
            <div class="card-wrap">
            <p class="film-card__title">${title.toUpperCase()} <br />
            <span class="film-card__info">${findGenresOfFilms(
                    genre_ids
                )} | ${date} </span><span class="film-card__rating">${vote_average.toFixed(1) || '-'}</span>
            </p>
            </div>
            </li>`;
            }
            return `
        <li class="film-card" id="${id}" data-film=\"${filmData}\">
        <img class ="film-card__img" src="${img}" alt="${title.toUpperCase()}" />
        <div class="card-wrap">
        <p class ="film-card__title">${title.toUpperCase()} <br/>
        <p class ="film-card__info"><span>${findGenresOfFilms(
                genre_ids
            )} | ${date} </span> <span class="films__rating">${vote_average.toFixed(1) || '-'}</span>
        </p>
        
        </div></li>`;
        })
        .join('');
    galleryEl.insertAdjacentHTML('beforeend', markup);
}
// 