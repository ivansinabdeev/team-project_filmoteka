// window.addEventListener("load", () => {
//   const loader = document.querySelector(".loader");
//   loader.classList.add("loader-hidden");
//   loader.addEventListener("transitionend", () => {
//     document.body.removeChild(document.body.firstChild);
//   })
// }) 

window.onload = function () {
  const preloader = document.querySelector('.spinner');
  setTimeout(function () {
    preloader.classList.add('visually-hidden');
  }, 1000);
};


//spinner async

import { Spinner } from 'spin.js';

const opts = {
  lines: 13, // The number of lines to draw
  length: 25, // The length of each line
  width: 19, // The line thickness
  radius: 45, // The radius of the inner circle
  scale: 1.2, // Scales overall size of the spinner
  corners: 1, // Corner roundness (0..1)
  speed: 1, // Rounds per second
  rotate: 0, // The rotation offset
  animation: 'spinner-line-fade-quick', // The CSS animation name for the lines
  direction: 1, // 1: clockwise, -1: counterclockwise
  color: '#fe5b5b', // CSS color or array of colors
  fadeColor: 'transparent', // CSS color or array of colors
  top: '50%', // Top position relative to parent
  left: '50%', // Left position relative to parent
  shadow: '0 0 1px transparent', // Box-shadow for the lines
  zIndex: 2000000000, // The z-index (defaults to 2e9)
  className: 'spinner', // The CSS class to assign to the spinner
  position: 'absolute', // Element positioning
};

const target = document.getElementById('foo');
const backdrop = document.querySelector('.spinner-backdrop');
const spinner = new Spinner(opts);


function playSpinner() {
  backdrop.classList.remove('is-closed');
  spinner.spin(target);
}

function stopSpinner() {
  backdrop.classList.add('is-closed');
  spinner.stop();
}

export { playSpinner, stopSpinner };
