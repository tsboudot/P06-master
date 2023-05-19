/*import { genererBoutonsModaleMenueDelete } from "./boutons_modale.js";
import { genererWorkModale} from "./genererWorks_modale.js";
*/
document.addEventListener('DOMContentLoaded', function() {
  if (localStorage.getItem('token')) {
    let adminSection = document.querySelector(".admin_section");
    adminSection.classList.remove('hidden');
  }
});

let modal = null;
const openModal = function(e) {
  e.preventDefault();
  const target = document.querySelector(e.target.getAttribute('href'))
  target.style.display = null;
  target.removeAttribute('aria-hidden');
  target.setAttribute('aria-modal', 'true');
  modal = target;
  modal.addEventListener('click', closeModal);
  modal.querySelector('.js-modal-close').addEventListener('click', closeModal);
}
const closeModal = function(e) {
  console.log('azerty');
  if (modal===null) return
  e.preventDefault();
  modal.style.display = "none";
  target.setAttribute('aria-hidden', 'true');
  target.removeAttribute('aria-modal');
  modal.removeEventListener('click', closeModal);
  modal.querySelector('.js-modal-close').removeEventListener('click', closeModal);

}
document.querySelectorAll('.js-modal').forEach(a => {
  a.addEventListener('click', openModal)})

/*
const modal = document.querySelector('.modal');
const openModal = function(e) {
  modal.classList.remove('hidden');
  genererWorkModale();
  genererBoutonsModaleMenueDelete();
  document.querySelector('.js-modal-close').addEventListener('click', (e) => {
    modal.classList.add('hidden');
})}
document.querySelectorAll('.js-modal').forEach(a => {
  a.addEventListener('click', openModal);
});
document.querySelector('.js-modal-close').addEventListener('click', function (){
  modal.classList.add('hidden');});

window.addEventListener('click', (e) => {
  if (e.target == modal) {
    console.log('click');
    modal.classList.add('hidden')
    console.log('close');
  }
});

*/