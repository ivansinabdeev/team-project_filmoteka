import { findGenresOfMovie } from './genres';
import img from '../images/film_poster_not_found.png';
import { fetchApi } from './apiService';

const movieList = document.querySelector('.film-list');
const overlay = document.querySelector('.overlay');
const closeOverlay = document.querySelector('.modal-close');
const overlayBg = document.querySelector('.overlay-bg');
const imgCard = document.querySelector('.cinema-card img');
const cardTitle = document.querySelector('.card-title');
const cardVote = document.querySelector('#modal-vote');
const cardVotes = document.querySelector('#modal-votes');
const cardPopularity = document.querySelector('#modal-popularity');
const cardOriginal = document.querySelector('#modal-original');
const cardGenre = document.querySelector('#modal-genre');
const cardContent = document.querySelector('#modal-content');
const modalLess = document.querySelector('#modal-less');
const cardBlock = document.querySelector('.card-block');
const watchedEl = document.querySelector('#addToWatchedBtn');
const deleteEl = document.querySelector('.card-btn-delete');
const queuedEl = document.querySelector('#addToQueuedBtn');
const deleteQEl = document.querySelector('.card-btn-delete-queued');
const readMore = document.querySelector('.read-more');
const textContent = document.querySelector('.text-content');

movieList.addEventListener('click', openModal);
readMore.addEventListener('click', function () {
  modalLess.classList.toggle('active');
  readMore.classList.toggle('active');
  if (modalLess.classList.contains('active')) {
    readMore.innerHTML = 'Read less';
  } else {
    readMore.innerHTML = 'Read more';
  }
});
function openModal(e) {
  const movie = e.target.closest('.film-card');
  readMore.innerHTML = 'Read more';
  modalLess.classList.remove('active');
  readMore.classList.remove('active');
  if (movie) {
    overlay.classList.remove('is-hidden');
    window.addEventListener('keydown', function mdClose(e) {
      if (e.key !== 'Escape') return;
      modalClose();
      this.removeEventListener('keydown', mdClose);
    });
    const movieData = JSON.parse(decodeURIComponent(movie.dataset.movie));
    if (!movieData.overview || movieData.overview.length <= 0) {
      cardContent.innerHTML =
        'Description for this movie has not yet been added.';
      readMore.style.display = 'none';
    } else if (movieData.overview.length > 151) {
      const arr1 = movieData.overview.slice(0, 150);
      const arr2 = movieData.overview.slice(150);
      readMore.style.display = 'inline';
      cardContent.innerHTML = arr1;
      modalLess.innerHTML = arr2;
    } else {
      cardContent.innerHTML = movieData.overview;
      readMore.style.display = 'none';
    }

    imgCard.src = movieData.poster_path
      ? 'https://image.tmdb.org/t/p/w500' + movieData.poster_path
      : img;
    cardTitle.innerHTML = movieData.title;
    cardVote.innerHTML = movieData.vote_average;
    cardVotes.innerHTML = movieData.vote_count;
    cardPopularity.innerHTML = movieData.popularity;
    cardOriginal.innerHTML = movieData.original_title;
    cardGenre.innerHTML = fetchApi.findGenresById(movieData.genre_ids);

    const dataWatched = localStorage.getItem('watched');
    const dataQueued = localStorage.getItem('queued');
    const dataWatchedParsed = JSON.parse(dataWatched);
    const dataQueuedParsed = JSON.parse(dataQueued);

    if (dataWatchedParsed) {
      const findWatched = dataWatchedParsed.find(el => el.id == movieData.id);
      if (findWatched) {
        watchedEl.style.display = 'none';
        deleteEl.style.display = 'block';
      } else {
        watchedEl.style.display = 'block';
        deleteEl.style.display = 'none';
      }
    }

    if (dataQueuedParsed) {
      const findQueued = dataQueuedParsed.find(el => el.id == movieData.id);
      if (findQueued) {
        queuedEl.style.display = 'none';
        deleteQEl.style.display = 'block';
      } else {
        queuedEl.style.display = 'block';
        deleteQEl.style.display = 'none';
      }
    }
  }
}

closeOverlay.addEventListener('click', modalClose);
overlayBg.addEventListener('click', modalClose);

function modalClose() {
  overlay.classList.add('is-hidden');
}

// import img from '../images/film_poster_not_found.png';
// import { fetchApi } from "./apiService";

// const movieList = document.querySelector('.film-list');
// const overlay = document.querySelector('.overlay');
// const closeOverlay = document.querySelector('.modal-close');
// const overlayBg = document.querySelector('.overlay-bg');
// const imgCard = document.querySelector('.cinema-card img');
// const cardTitle = document.querySelector('.card-title');
// const cardVote = document.querySelector('#modal-vote');
// const cardVotes = document.querySelector('#modal-votes');
// const cardPopularity = document.querySelector('#modal-popularity');
// const cardOriginal = document.querySelector('#modal-original');
// const cardGenre = document.querySelector('#modal-genre');
// const cardContent = document.querySelector('#modal-content');
// const modalLess = document.querySelector('.modal-less');
// const cardBlock = document.querySelector('.card-block');
// const watchedEl = document.querySelector('#addToWatchedBtn');
// const deleteEl = document.querySelector('.card-btn-delete');
// const queuedEl = document.querySelector('#addToQueuedBtn');
// const deleteQEl = document.querySelector('.card-btn-delete-queued');
// const readMore = document.querySelector('.read-more');
// const textContent = document.querySelector('.text-content');

// movieList.addEventListener('click', openModal);

// readMore.addEventListener('click', function () {
//     modalLess.classList.toggle('active');
//     readMore.classList.toggle('active');
//     if (modalLess.classList.contains('active')) {
//         readMore.innerHTML = "Read less"
//     } else {
//         readMore.innerHTML = "Read more"
//     }
// })

// function openModal(e) {
//     const movie = e.target.closest('.film-card');
//     readMore.innerHTML = "Read more";
//     modalLess.classList.remove('active');
//     readMore.classList.remove('active');
//     if (movie) {
//         overlay.classList.remove('is-hidden');
//         window.addEventListener('keydown', function mdClose(e) {
//             if (e.keyCode !== 27) return;
//             modalClose();
//             this.removeEventListener('keydown', mdClose);
//         });
//         const movieData = JSON.parse(decodeURIComponent(movie.dataset.movie));

//         if (!movieData.overview || movieData.overview.length <= 0) {
//             cardContent.innerHTML = "Description for this movie has not yet been added."
//             readMore.style.display = 'none'
//         } else if (movieData.overview.length > 151) {
//             const arr1 = movieData.overview.slice(0, 150)
//             const arr2 = movieData.overview.slice(150)
//             readMore.style.display = 'inline'
//             cardContent.innerHTML = arr1;
//             modalLess.innerHTML = arr2;
//         } else {
//             cardContent.innerHTML = movieData.overview;
//             readMore.style.display = 'none'
//         }

//         imgCard.src = movieData.poster_path ? 'https://image.tmdb.org/t/p/w500' + movieData.poster_path : img;
//         cardTitle.innerHTML = movieData.title;
//         cardVote.innerHTML = movieData.vote_average;
//         cardVotes.innerHTML = movieData.vote_count;
//         cardPopularity.innerHTML = movieData.popularity;
//         cardOriginal.innerHTML = movieData.original_title;
//         cardGenre.innerHTML = fetchApi.findGenresById(movieData.genre_ids)

//         cardBlock.dataset.movie = movie.dataset.movie;/// --- КТО это добавил и зачем?????

//         const dataWatched = localStorage.getItem('watched');
//         const dataQueued = localStorage.getItem('queued');
//         const dataWatchedParsed = JSON.parse(dataWatched);
//         const dataQueuedParsed = JSON.parse(dataQueued);

//         if (dataWatchedParsed) {
//             const findWatched = dataWatchedParsed.find(el => el.id == movieData.id);
//             if (findWatched) {
//                 watchedEl.style.display = 'none';
//                 deleteEl.style.display = 'block';
//             } else {
//                 watchedEl.style.display = 'block';
//                 deleteEl.style.display = 'none';
//             }
//         }

//         if (dataQueuedParsed) {
//             const findQueued = dataQueuedParsed.find(el => el.id == movieData.id);
//             if (findQueued) {
//                 queuedEl.style.display = 'none';
//                 deleteQEl.style.display = 'block';
//             } else {
//                 queuedEl.style.display = 'block';
//                 deleteQEl.style.display = 'none';
//             }
//         }
//     }
// }

// closeOverlay.addEventListener('click', modalClose);
// overlayBg.addEventListener('click', modalClose);

// function modalClose() {
//     overlay.classList.add('is-hidden');
// }

// import axios from 'axios';
// import imageURL from '../images/film_poster_not_found.png';
// import { addEventsOnModalBtn } from './local-storage';
// const API_KEY = 'ddec42efa7dad57904cab0b807fa902e';

// const IMG_REGUEST = 'https://image.tmdb.org/t/p/w342';
// let movieId = null;
// const closeModal = document.querySelector('.close-modal');
// console.log(closeModal);
// const moviesList = document.querySelector('.film-list');
// const modalRef = document.querySelector('.backdrop_modal_film');
// console.log(modalRef);
// const modalConteinerRef = document.querySelector('.modal-conteiner');
// const body = document.querySelector('body');
// closeModal.addEventListener('click', onCloseModal);
// moviesList.addEventListener('click', openModal);
// modalRef.addEventListener('click', clickModal);

// function clickModal(event) {
//     if (event.currentTarget === event.target) {
//         onCloseModal();
//     }
// }

// async function getFullMoveInformation(id) {
//     const informtionAboutMovie = await axios
//         .get(
//             `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`
//         )
//         .then(response => response.data);
//     return informtionAboutMovie;
// }

// function renderFullInformationAboutMovies(informtionAboutMovie) {
//     let watchedText = 'add to watched';
//     let queueText = 'add to queue';
//     const {
//         poster_path,
//         title,
//         vote_average,
//         vote_count,
//         popularity,
//         original_title,
//         genres,
//         overview,
//         id,
//     } = informtionAboutMovie;
//     let genresArr = [];
//     for (let i = 0; i < genres.length; i += 1) {
//         genresArr.push(genres[i].name);
//     }
//     const genresString = genresArr.join(', ');
//     const voteAverageRounding = vote_average.toFixed(1);
//     const localStorageWatchedId = JSON.parse(
//         localStorage.getItem('STORAGE_KEY_WATCHED')
//     );
//     if (localStorageWatchedId === null) {
//         watchedText = 'add to watched';
//     } else if (localStorageWatchedId.some(value => value == id)) {
//         watchedText = 'remove from watched';
//     }

//     const localStorageQueueId = JSON.parse(
//         localStorage.getItem('STORAGE_KEY_QUEUE')
//     );
//     if (localStorageQueueId === null) {
//         queueText = 'add to queue';
//     } else if (localStorageQueueId.some(value => value == id)) {
//         queueText = 'remove from queue';
//     }

//     const markapInformation = `
//   <img src=${poster_path ? IMG_REGUEST + poster_path : imageURL
//         } alt="${title}" class="modal-img" />
// <div class="right-wrap">
//   <h2 class="modal-title">${title}</h2>
//   <div class="general-wrap">
//     <div class="name-wrap">
//       <p class="name">Vote / Votes</p>
//       <p class="name">Popularity</p>
//       <p class="name">Original Title</p>
//       <p class="name">Genre</p>
//     </div>
//     <div class="value-wrap">
//       <p class='name'><span class='vote_average'>${voteAverageRounding}</span>/<span class='vote_count'>${vote_count}</span></p>
//       <p class='value p'>${popularity}</p>
//       <p class='value '>${original_title}</p>
//       <p class='value '>${genresString}</p>
//     </div>
//   </div>
//   <div class='text-wrap'>
//     <p class='about'>About</p>
//     <p class='overview'>${overview}</p>
//   </div>
//   <div class="button-wrap">
//     <button type="button" class="btn add-to-watched" data-watched data-id = ${id}>${watchedText}</button>
//     <button type="button" class="btn add-to-queue" data-queue data-id = ${id}>${queueText}</button>
//   </div>
// </div>
// `;
//     modalConteinerRef.insertAdjacentHTML('afterbegin', markapInformation);
// }

// function onCloseModal(event) {
//     window.removeEventListener('keydown', onEscClose);
//     modalRef.classList.add('is-hidden');
//     body.classList.remove('no-scroll');
//     modalConteinerRef.innerHTML = '';
// }

// function openModal(event) {
//     window.addEventListener('keydown', onEscClose);
//     const li = event.target.closest('.films__item');
//     body.classList.add('no-scroll');

//     if (li === null) {
//         return;
//     }
//     const id = li.attributes[1].value;
//     modalRef.classList.remove('is-hidden');
//     movieId = id;
//     getFullMoveInformation(id)
//         .then(renderFullInformationAboutMovies)
//         .then(addEventsOnModalBtn);
// }

// function onEscClose(event) {
//     if (event.code === 'Escape') onCloseModal();
// }
