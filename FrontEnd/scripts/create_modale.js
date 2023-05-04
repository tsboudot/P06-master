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

mode_edition.addEventListener('click', function() {
  modale.style.display = "flex";

  fetchWorks()

});
  //delete_sign.addEventListener('click', edit_delete{id});