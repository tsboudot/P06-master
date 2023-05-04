import { genererWorkModale } from "./genererWorks_modale.js";
import { fetchWorks } from "./fetch_works.js";

document.addEventListener('DOMContentLoaded', function() {
  if (localStorage.getItem('token')) {
    let adminSection = document.querySelector(".admin_section");
    adminSection.style.display = "flex";
  }
});

const mode_edition = document.querySelector('#mode_edition');
const modale = document.querySelector('.modale');
const modale_titre = document.querySelector('.modale_titre');
mode_edition.addEventListener('click', function() {
  modale.style.display = "flex";

  fetchWorks()
  const modale_boutons= document.querySelector('.modale-bouton');
  const bouton_Post = document.createElement('button');
  bouton_Post.classList.add('bouton');
  bouton_Post.innerHTML = 'Ajouter une photo';
  modale_boutons.appendChild(bouton_Post);
  modale_boutons.setAttribute('id', 'bouton_Post');
});
  //delete_sign.addEventListener('click', edit_delete{id});