/*import { genererBoutonsModaleMenueDelete } from "./boutons_modale.js";
import { genererWorkModale } from "./genererWorks_modale.js";
*/
document.addEventListener('DOMContentLoaded', function() {
  if (localStorage.getItem('token')) {
    let adminSection = document.querySelector(".admin_section");
    adminSection.style.display = "flex";
  }
});

let modal = null;

const openModal = function(e) {
  e.preventDefault();
  const target = document.querySelector(e.target.getAttribute('href'));
  target.style.display = "flex";
  target.removeAttribute('aria-hidden');
  target.setAttribute('aria-modal', 'true');
  modal = target;
  modal.addEventListener('click', closeModal);
  modal.querySelector('.js-modal-close').addEventListener('click', closeModal);
};

const closeModal = function(e) {
  e.preventDefault();
  modal.style.display = "none";
  modal.setAttribute('aria-hidden', 'true');
  modal.removeAttribute('aria-modal');
  modal.removeEventListener('click', closeModal);
  modal.querySelector('.js-modal-close').removeEventListener('click', closeModal);
  modal = null;
};

document.querySelectorAll('.js-modal').forEach(a => {
  a.addEventListener('click', openModal);
});

document.addEventListener('click', function(e) {
  if (modal && !modal.contains(e.target) && !e.target.classList.contains('js-modal')) {
    closeModal(e);
  }
});