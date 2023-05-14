import { edit_post } from './edit_post.js';
import { edit_delete } from './edit_delete.js';
import { fetchWorks } from './fetch_works.js';

export function genererBoutonsModaleMenueDelete() {
  const bouton_modale = document.querySelector(".modale_boutons");
  bouton_modale.innerHTML = "";
  const bouton_Post = document.createElement("button");
  bouton_Post.innerHTML = "Ajoutez des photos";
  bouton_Post.id = "bouton_Post";
  bouton_modale.appendChild(bouton_Post);
  bouton_Post.addEventListener('click', function() {
    edit_post();
  });
  const bouton_deleteAll = document.createElement("button");
  bouton_deleteAll.innerHTML = "Supprimer toutes les photos";
  bouton_deleteAll.id = "bouton_deleteAll";
  bouton_modale.appendChild(bouton_deleteAll);
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


  const nav_modale = document.querySelector(".nav_modale");
  const close_modale = document.createElement("button");
  close_modale.innerHTML = '<i class="fa-sharp fa-solid fa-xmark"></i>';
  nav_modale.appendChild(close_modale);
  close_modale.addEventListener('click', function() {
    const modale = document.querySelector(".modale");
    const nav_modale = document.querySelector(".nav_modale");
    nav_modale.innerHTML = "";
    modale.style.display = "none";
  })
}
export function genererBoutonsModaleMenuePost(){
  const bouton_modale = document.querySelector(".modale_boutons");
  bouton_modale.innerHTML = "";
  const nav_modale = document.querySelector(".nav_modale");
  nav_modale.innerHTML = "";
  const close_modale = document.createElement("button");
  close_modale.innerHTML = '<i class="fa-sharp fa-solid fa-xmark"></i>';
  nav_modale.appendChild(close_modale);
  const back_modale = document.createElement("button");
  back_modale.innerHTML = '<i class="fa-sharp fa-solid fa-arrow-left"></i>';
  nav_modale.appendChild(back_modale);
  const bouton_Post = document.createElement("button");
  bouton_Post.innerHTML = "Valider";
  bouton_Post.id = "bouton_Valider";
  bouton_modale.appendChild(bouton_Post);
}
