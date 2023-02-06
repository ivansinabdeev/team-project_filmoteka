const movieNameArry = document.querySelectorAll('.movie__name');

const icon = document.querySelector('.fas');
const switchDayNight = document.querySelector('.day-night-switch');
const moonIcon = document.querySelector('.moon');
const sunIcon = document.querySelector('.sun');

if (localStorage.getItem('darkMode') === null) {
  localStorage.setItem('darkMode', 'false');
}
checkDarkModeStatus();

function checkDarkModeStatus() {
  if (localStorage.getItem('darkMode') === 'true') {
    addDarkTheme();
    switchDayNight.checked = true;
  } else {
    removeDarkTheme();
    switchDayNight.checked = false;
  }
}

switchDayNight.addEventListener('change', () => {
  if (switchDayNight.checked) {
    addDarkTheme();
  } else {
    removeDarkTheme();
  }
  localStorage.setItem('darkMode', switchDayNight.checked);
});

function addDarkTheme() {
  document.body.classList.add('dark__theme');

  icon.classList.remove('fas', 'fa-sun');
  icon.classList.add('fa-solid', 'fa-moon', 'icon__dark');
  moonIcon.classList.remove('moon__deactive');
  moonIcon.classList.add('moon__active');
  sunIcon.classList.remove('sun__active');
  sunIcon.classList.add('sun__deactive');

  movieNameArry.forEach(movie => {
    movie.style.color = 'var(--white-text-color)';
  });
}
function removeDarkTheme() {
  document.body.classList.remove('dark__theme');

  icon.classList.remove('fa-solid', 'fa-moon', 'icon__dark');
  icon.classList.add('fas', 'fa-sun');
  moonIcon.classList.remove('moon__active');
  moonIcon.classList.add('moon__deactive');
  sunIcon.classList.add('sun__active');

  movieNameArry.forEach(movie => {
    movie.style.color = 'var(--main-text-color)';
  });
}
