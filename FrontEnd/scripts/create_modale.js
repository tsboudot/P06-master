import { genererBoutonsModaleMenueDelete } from "./boutons_modale.js";
import { genererWorkModale } from "./genererWorks_modale.js";

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
  genererBoutonsModaleMenueDelete();
  genererWorkModale();
});
