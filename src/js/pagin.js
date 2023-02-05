// import Pagination from 'tui-pagination';
// import { fetchApi, reloadPage } from './apiService';
// import { markupFilm } from './card-markup';
import { playSpinner, stopSpinner } from "./spinner";
// const container = document.getElementById('tui-pagination-container');

// const options = {
//     totalItems: 20000,
//     itemsPerPage: 20,
//     visiblePages: 5,
//     centerAlign: true,
//     page: Number(localStorage.getItem('page') || 1),
//     firstItemClassName: 'tui-first-child',
//     lastItemClassName: 'tui-last-child',
// };
// export let pagination;
// if (container) {
//     pagination = new Pagination(container, options);

//     pagination.on('afterMove', event => {
//         const galleryEl = document.querySelector('.movieList');
//         galleryEl.innerHTML = '';
//         fetchApi.page = event.page;
//         fetchApi.fetchMovies().then(handleSucces).catch(handleError);
//     });

//     fetchApi.fetchMovies().then(handleSucces).catch(handleError);
// }

// function handleSucces(data) {
//     const movies = data.results;
//     markupFilm(movies);
// }

// function handleError(error) {
//     console.error(error);
// }

// export function resetPagination() {
//     pagination.reset();
// }

// const currentPage = document.querySelector('.tui-pagination');
// if (currentPage) currentPage.addEventListener('click', onPageClick);

// function onPageClick(event) {
//     const page = event.target.textContent;
//     localStorage.setItem('page', page);
//     options.page = event.target.textContent;
// }




// import Pagination from 'tui-pagination';
// import { fetchApi, reloadPage } from './apiService';
// import { markupFilm } from './card-markup';

// const container = document.getElementById('tui-pagination-container');

// const options = {
//     totalItems: 20000,
//     itemsPerPage: 20,
//     visiblePages: 5,
//     centerAlign: true,
//     page: Number(localStorage.getItem('page') || 1),
//     firstItemClassName: 'tui-first-child',
//     lastItemClassName: 'tui-last-child',
// };

// let pagination;
// if (container) {
//     pagination = new Pagination(container, options);

//     pagination.on('afterMove', event => {
//         const galleryEl = document.querySelector('.movieList');
//         if (galleryEl) {
//             galleryEl.innerHTML = '';
//             fetchApi.page = event.page;
//             fetchApi.fetchMovies().then(handleSucces).catch(handleError);
//         }
//     });

//     fetchApi.fetchMovies().then(handleSucces).catch(handleError);
// }

// function handleSucces(data) {
//     const movies = data.results;
//     markupFilm(movies);
// }

// function handleError(error) {
//     console.error(error);
// }

// export function resetPagination() {
//     pagination.reset();
// }

// const currentPage = document.querySelector('.tui-pagination');
// if (currentPage) currentPage.addEventListener('click', onPageClick);

// function onPageClick(event) {
//     const page = Number(event.target.textContent);
//     localStorage.setItem('page', page);
//     pagination.movePageTo(page);
// }


// import Pagination from 'tui-pagination';
// import { fetchApi } from './apiService';
// import { markupFilm } from './card-markup';

// const container = document.getElementById('tui-pagination-container');
// const galleryEl = document.querySelector('.movieList');

// const options = {
//     totalItems: 20000,
//     itemsPerPage: 20,
//     visiblePages: 5,
//     centerAlign: true,
//     page: Number(localStorage.getItem('page') || 1),
//     firstItemClassName: 'tui-first-child',
//     lastItemClassName: 'tui-last-child',
// };

// let pagination;
// if (container) {
//     pagination = new Pagination(container, options);


//     pagination.on('afterMove', event => {
//         if (galleryEl) {
//             galleryEl.innerHTML = '';
//             fetchApi.page = event.page;
//             fetchApi.fetchMovies().then(handleSuccess).catch(handleError);
//         }
//     });
// }

// fetchApi.fetchMovies().then(handleSuccess).catch(handleError);

// function handleSuccess(data) {
//     const movies = data.results;
//     markupFilm(movies);
// }

// function handleError(error) {
//     console.error(error);
// }

// const currentPage = document.querySelector('.tui-pagination');
// if (currentPage) currentPage.addEventListener('click', onPageClick);

// function onPageClick(event) {
//     const page = Number(event.target.textContent);
//     localStorage.setItem('page', page);
//     pagination.movePageTo(page);
// }

// import Pagination from 'tui-pagination';
// import { fetchApi, reloadPage } from './apiService';
// import { markupFilm } from './card-markup';

// const container = document.getElementById('tui-pagination-container');
// const galleryEl = document.querySelector('.movieList');

// const options = {
//     totalItems: 20000,
//     itemsPerPage: 20,
//     visiblePages: 5,
//     centerAlign: true,
//     page: Number(localStorage.getItem('page') || 1),
//     firstItemClassName: 'tui-first-child',
//     lastItemClassName: 'tui-last-child',
// };

// let pagination;
// if (container) {
//     pagination = new Pagination(container, options);


//     pagination.on('afterMove', event => {
//         fetchApi.page = event.page;
//         fetchMovies();
//     });

//     fetchMovies();
// }

// async function fetchMovies() {
//     try {
//         const data = await fetchApi.fetchMovies();
//         const movies = data.results;
//         markupFilm(movies, galleryEl);
//     } catch (error) {
//         console.error(error);
//     }
// }

// export function resetPagination() {
//     pagination.reset();
// }

// const currentPage = document.querySelector('.tui-pagination');
// if (currentPage) currentPage.addEventListener('click', onPageClick);

// function onPageClick(event) {
//     const page = Number(event.target.textContent);
//     localStorage.setItem('page', page);
//     pagination.movePageTo(page);
// }


// import Pagination from 'tui-pagination';
// import { fetchApi } from './apiService';
// import { markupFilm } from './card-markup';

// const container = document.getElementById('tui-pagination-container');
// const filmListEl = document.querySelector('.film-list');

// const options = {
//     totalItems: 20000,
//     itemsPerPage: 20,
//     visiblePages: 5,
//     centerAlign: true,
//     page: Number(localStorage.getItem('page') || 1),
//     firstItemClassName: 'tui-first-child',
//     lastItemClassName: 'tui-last-child',
// };

// let pagination;
// if (container) {
//     pagination = new Pagination(container, options);


//     pagination.on('afterMove', event => {
//         fetchApi.page = event.page;
//         clearFilmList();
//         fetchMovies();
//     });

//     fetchMovies();
// }

// async function fetchMovies() {
//     try {
//         const data = await fetchApi.fetchMovies();
//         const movies = data.results;
//         markupFilm(movies, filmListEl);
//     } catch (error) {
//         console.error(error);
//     }
// }

// function clearFilmList() {
//     while (filmListEl.firstChild) {
//         filmListEl.removeChild(filmListEl.firstChild);
//     }
// }

// const currentPage = document.querySelector('.tui-pagination');
// if (currentPage) currentPage.addEventListener('click', onPageClick);

// function onPageClick(event) {
//     const page = Number(event.target.textContent);
//     localStorage.setItem('page', page);
//     pagination.movePageTo(page);
// }


import Pagination from 'tui-pagination';
import { fetchApi } from './apiService';
import { markupFilm } from './card-markup';

const container = document.getElementById('tui-pagination-container');
const galleryEl = document.querySelector('.film-list');

const options = {
    totalItems: 20000,
    itemsPerPage: 20,
    visiblePages: 5,
    centerAlign: true,
    page: Number(localStorage.getItem('page') || 1),
    firstItemClassName: 'tui-first-child',
    lastItemClassName: 'tui-last-child',
};

export let pagination;
if (container) {
    pagination = new Pagination(container, options);

    pagination.on('afterMove', event => {
        fetchApi.page = event.page;
        fetchMovies();
    });
}

let isFetching = false;
async function fetchMovies() {
    if (isFetching) {
        return;
    }
    isFetching = true;

    galleryEl.innerHTML = '';

    try {
        playSpinner()
        const data = await fetchApi.fetchMovies();
        const movies = data.results;
        markupFilm(movies, galleryEl);
        
    } catch (error) {
        console.error(error);
    }
stopSpinner()
    isFetching = false;
}

export function resetPagination() {
    pagination.reset();
}

const currentPage = document.querySelector('.tui-pagination');
if (currentPage) currentPage.addEventListener('click', onPageClick);

function onPageClick(event) {
    const page = Number(event.target.textContent);
    localStorage.setItem('page', page);
}

if (container) {
    fetchMovies();
}