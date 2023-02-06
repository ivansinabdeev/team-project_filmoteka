
import Pagination from 'tui-pagination';
import { fetchApi } from './apiService';
import { markupFilm } from './card-markup';
import { playSpinner, stopSpinner } from "./spinner";



const container = document.getElementById('tui-pagination-container');
container.classList.add('position');
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


