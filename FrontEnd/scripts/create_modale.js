import { genererBoutonsModaleMenueDelete } from "./boutons_modale.js";


document.addEventListener('DOMContentLoaded', function() {
  if (localStorage.getItem('token')) {
    let adminSection = document.querySelector(".admin_section");
    adminSection.classList.remove('hidden');

    const intro_figure = document.querySelector(".intro_figure");
    const modal_btn_intro_figure = document.createElement("div");
    modal_btn_intro_figure.innerHTML = '<i class="fa-sharp fa-solid fa-pen-to-square"></i> Modifier';
    modal_btn_intro_figure.classList.add('modal_btn_intro_figure');
    intro_figure.appendChild(modal_btn_intro_figure);

    const intro_article = document.querySelector(".intro_article");
    const modal_btn_intro_article = document.createElement("div");
    modal_btn_intro_article.innerHTML = '<i class="fa-sharp fa-solid fa-pen-to-square"></i> Modifier';
    intro_article.insertBefore(modal_btn_intro_article, intro_article.firstChild);;
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
  modal.querySelector('.js-modal-stop').addEventListener('click', stopPropagation);

  genererBoutonsModaleMenueDelete();
  
}
const closeModal = function(e) {

  if (modal===null) return
  /*if (e.target === modal || modal.contains(e.target)) {
    return;}*/
  e.preventDefault();

  modal.style.display = "none";
  modal.setAttribute('aria-hidden', 'true');
  modal.removeAttribute('aria-modal');
  modal.removeEventListener('click', closeModal);
  modal.querySelector('.js-modal-close').removeEventListener('click', closeModal);
  modal.querySelector('.js-modal-stop').removeEventListener('click', stopPropagation);

}
document.querySelectorAll('.js-modal').forEach(a => {
  a.addEventListener('click', openModal)})
  
  const stopPropagation = function (e) {
    e.stopPropagation(); return
  }


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