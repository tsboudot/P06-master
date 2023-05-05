import { genererWorkModale } from "./genererWorks_modale.js";
import { fetchWorks } from "./fetch_works.js";
import { edit_post } from "./edit_post.js";

document.addEventListener('DOMContentLoaded', function() {
  if (localStorage.getItem('token')) {
    let adminSection = document.querySelector(".admin_section");
    adminSection.style.display = "flex";
  }
});

const mode_edition = document.querySelector('#mode_edition');
const modale = document.querySelector('.modale');

mode_edition.addEventListener('click', function() {
  const modale_titre = document.querySelector('.modale_titre');
  modale_titre.innerHTML = "galerie photo";
  modale.style.display = "flex";
  
  genererWorkModale();
});
const bouton_Post = document.querySelector('#bouton_Post');

bouton_Post.addEventListener('click', function() {
  edit_post();
});
  //delete_sign.addEventListener('click', edit_delete{id});