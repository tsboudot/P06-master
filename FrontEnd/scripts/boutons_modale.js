import { edit_post } from './edit_post.js';
import { edit_delete } from './edit_delete.js';
import { fetchWorks } from './fetch_works.js';
import { genererWorkModale } from './genererworks_modale.js'

export function genererBoutonsModaleMenueDelete() {
  const modal_back = document.querySelector(".modal-back");
  modal_back.classList.add("hidden");
  const modal_valider = document.querySelector(".modale_valider");
  modal_valider.classList.add("hidden");
  const bouton_Post = document.querySelector(".mode_post");
  bouton_Post.addEventListener('click', function() {
    edit_post();
  });
  const bouton_deleteAll = document.querySelector(".delete_all");
  bouton_deleteAll.addEventListener('click', function() {
    fetchWorks()
      .then(data => {
        console.log(data);
        let i = 0;
        while (i < data.length) {
          edit_delete(data[i].id);
          i++;
        }
      })
      .catch(error => console.error(error));
  });
}

export function genererBoutonsModaleMenuePost() {
  const back_modale = document.querySelector(".modal-back");
  back_modale.classList.remove("hidden");
  const modal_valider = document.querySelector(".modale_valider");
  modal_valider.classList.remove("hidden");
  const openModal = document.querySelector('.js-modal');
  const modale = document.querySelector('.modal');

  openModal.addEventListener('click', function() {
    modale.style.display = "flex";
    fetchWorks()
      .then(data => {
        console.log(data);
        genererWorkModale(data);
      })
      .catch(error => console.error(error));
  });

  back_modale.addEventListener('click', function() {
    genererBoutonsModaleMenueDelete();
    fetchWorks()
      .then(data => {
        console.log(data);
        genererWorkModale(data);
      })
      .catch(error => console.error(error));
  });
}



