import { playSpinner, stopSpinner } from "./spinner";

function cardFilm() {   
   return `
   <img class = 'modal-img' src="${BASE_URL}${movie.poster_path}" alt="movie-poster" /></a>
   <h2 class = 'modal-title'>${movie.title}</h2>
   <div>
      <p>Vote / Votes ${movie.vote_average}/${movie.vote_count}</p>
      <p>Popularity ${movie.popularity}</p>
      <p>Original Title ${movie.original_title} </p>
      <p>Genre ${movie.genres}</p>
   </div>
   <h3>About </h3>
   <p>${movie.overview}</p>
   <button class="watched" type="button">add to Watched</button>
   <button class="queue" type="button">add to queue</button>
 `;
 }
 // new comment