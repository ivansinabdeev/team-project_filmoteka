// const refs = {
//   authModal: document.querySelector('.auth-modal'),
//   authOpen: document.querySelector('[data-auth-open]'),
//   authClose: document.querySelector('[data-auth-close]'),
// };

// refs.authOpen.addEventListener('click', toggleAuth);
// refs.authClose.addEventListener('click', toggleAuth);

// function toggleAuth() {
//   refs.authModal.classList.toggle('is-hidden');
// }

import * as basicLightbox from 'basiclightbox';
import { refs } from './refs';
import { instance } from './firebase';

refs.signInBtnEl.addEventListener('click', onSignInBtnClick);

export function onSignInBtnClick(event) {
  const modal = basicLightbox.create(
    `
   <div class="lightbox-modal lightbox-auth-modal">
       <div class="logo-container auth-logo-container">
        <a href="./index.html" class="logo-site auth-logo-link">
          <svg class="auth-logo"></svg>
          <span class="auth-logo-text">Filmoteka</span>
        </a>
       <img class="lightbox-modal__animated-img auth-logo-animated-img">
      </div>

   <button
      data-map-close
      class="lightbox-modal__close-btn"
      aria-label="close modal window"
    >
    </button>

<div class="lightbox-modal__data lightbox-modal__auth-data">

<div class="lightbox-modal__form-wrapper">
<form class="lightbox-modal__auth-form">

<div class="auth-inputs-wrapper">
<input type="email" id="auth-email" class="lightbox-modal__auth-input js-email-input">
<label class="lightbox-modal__auth-label" for="auth-email">Email</label>

<input type="password" id="auth-password" class="lightbox-modal__auth-input js-password-input">
<label class="lightbox-modal__auth-label" for="auth-password">Password</label>
<button id="js-password-reset" class="lightbox-modal__auth-reset-btn">Forgot your password?</button>
</div>

<div class="lightbox-modal__buttons lightbox-modal__auth-buttons">

<div class="auth-login-btn-wrapper">
<button type="button" id="js-signInWithEmailBtn" class="lightbox-modal__button js-signInWithEmailBtn">Log in</button>
<div class="auth-login-notify">
<p class="auth-notify">Already registered? Log in!</p>
</div>
</div>

<div class="auth-create-btn-wrapper">
<button type="button" id="js-createUserBtn" class="lightbox-modal__button">Create account</button>
<div class="auth-create-notify">
<p class="auth-notify">Newcomer? Create an account!</p>
</div>
</div>

</div>

<div class="auth-google-btn-wrapper">
<button type="button" id="js-signInWithGoogleBtn" class="lightbox-modal__button js-signInWithGoogleBtn">
<svg class="lightbox-modal__button-img"></svg>
</button>
<div class="auth-google-notify">
<p class="auth-notify">Log in with Google!</p>
</div>
</form>
</div>


</div>
</div>`,
    {
      onShow: modal => {
        document.querySelector('body').classList.add('noScroll');
        document.querySelector('.btn-up').classList.add('visually-hidden');

        modal.element().querySelector('.lightbox-modal__close-btn').onclick =
          modal.close;

        function onEscClick(event) {
          if (event.code === 'Escape' || event.code === 'Space') {
            window.removeEventListener('keydown', onEscClick);
            modal.close();
          }
        }
        window.addEventListener('keydown', onEscClick);
      },
      onClose: modal => {
        document.querySelector('.btn-up').classList.remove('visually-hidden');
        document.querySelector('body').classList.remove('noScroll');
      },
    }
  );
  modal.show();
  const signInWithEmailBtnEl = document.getElementById('js-signInWithEmailBtn');
  signInWithEmailBtnEl.addEventListener('click', onSingInBtnClick);
  const createUserBtnEl = document.getElementById('js-createUserBtn');
  createUserBtnEl.addEventListener('click', onCreateUserBtnClick);
  const singInWithGoogleBtnEl = document.getElementById(
    'js-signInWithGoogleBtn'
  );
  singInWithGoogleBtnEl.addEventListener('click', onSignInWithGoogleBtnClick);
  const resetPasswordBtn = document.getElementById('js-password-reset');
  resetPasswordBtn.addEventListener('click', onResetPasswordClick);
}

function onCreateUserBtnClick(event) {
  event.preventDefault();
  const emailInputEl = document.querySelector('.js-email-input');
  const passwordInputEl = document.querySelector('.js-password-input');
  const userEmail = emailInputEl.value.trim();
  const userPassword = passwordInputEl.value.trim();
  instance.createUserWithEmailAndPassword(userEmail, userPassword);
}

function onSingInBtnClick(event) {
  event.preventDefault();
  const emailInputEl = document.querySelector('.js-email-input');
  const passwordInputEl = document.querySelector('.js-password-input');
  const userEmail = emailInputEl.value.trim();
  const userPassword = passwordInputEl.value.trim();
  instance.signInWithEmailAndPassword(userEmail, userPassword);
}

function onSignInWithGoogleBtnClick(event) {
  event.preventDefault();
  instance.signInWithPopupGoogle();
}

function onResetPasswordClick(event) {
  event.preventDefault();
  const emailInputEl = document.querySelector('.js-email-input');
  const userEmail = emailInputEl.value.trim();
  instance.sendPasswordResetEmail(userEmail);
}
