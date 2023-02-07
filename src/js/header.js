const headerNav = document.querySelector('.header__nav');
const header = document.querySelector('.header');
const headerHome = document.querySelector('.header__searcher');
const headerLibrary = document.querySelector('.header__btn');
const watchedBtn = document.querySelector('[data-action="watched"]');
const queueBtn = document.querySelector('[data-action="queue"]');
const homeBtn = document.querySelector('[data-action="home"]');
const libraryBtn = document.querySelector('[data-action="library"]');
const filmMainHome = document.querySelector('.film-list');
const filmLibraryWatched = document.querySelector('.film-list__watched');
const filmLibraryQueue = document.querySelector('.film-list__queue');
const headerNavBtn = document.querySelector('.header__nav-btn');
const pagination = document.querySelector('.tui-pagination');
const headerLibraryBtnEl = document.querySelector('.header__item-btn');


headerNav.addEventListener('click', changeHeader);
headerLibrary.addEventListener('click', changeLibrary);

function changeHeader(e) {
    switch (e.srcElement.dataset.action) {
    case 'library':
        selectLibraryBtn();
      break;
    case 'home':
      selectHomeBtn();
      break;
  }
}

function changeLibrary(e) {
  switch (e.srcElement.dataset.action) {
    case 'watched':
      selectWatchedBtn();
      break;
    case 'queue':
      selectQueueBtn();
      break;
  }
}

function selectLibraryBtn() {
  header.classList.replace('header__home-bckg', 'header__library-bckg');

  choseActiveEl(headerHome, headerLibrary, 'visually-hidden');
  choseActiveEl(libraryBtn, homeBtn, 'header__nav-item--active');
  choseActiveEl(homeBtn, libraryBtn, 'header__nav-item--no-active');

  choseActiveEl(filmMainHome, filmLibraryWatched, 'visually-hidden');
  choseActiveEl(pagination, filmLibraryWatched, 'visually-hidden');

  choseActiveEl(watchedBtn, queueBtn, 'header__item-btn--active');
}

function selectHomeBtn() {
  header.classList.replace('header__library-bckg', 'header__home-bckg');

  choseActiveEl(headerLibrary, headerHome, 'visually-hidden');
  choseActiveEl(homeBtn, libraryBtn, 'header__nav-item--active');
  choseActiveEl(libraryBtn, homeBtn, 'header__nav-item--no-active');

  choseActiveEl(filmLibraryWatched, filmMainHome, 'visually-hidden');
  choseActiveEl(filmLibraryWatched, pagination, 'visually-hidden');

}

function selectWatchedBtn() {
  choseActiveEl(watchedBtn, queueBtn, 'header__item-btn--active')
  choseActiveEl(queueBtn, watchedBtn, 'header__item-btn--no-active')

  choseActiveEl(filmLibraryQueue, filmLibraryWatched, 'visually-hidden')
}

function selectQueueBtn() {
  choseActiveEl(queueBtn, watchedBtn, 'header__item-btn--active')
  choseActiveEl(watchedBtn, queueBtn, 'header__item-btn--no-active')
  
  choseActiveEl(filmLibraryWatched, filmLibraryQueue, 'visually-hidden')
}

function choseActiveEl(activate, deactivate, condition) {
  activate.classList.add(condition);
  deactivate.classList.remove(condition);
}
