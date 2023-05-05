import { fetchWorks } from "./fetch_works.js";
import { edit_delete_sign } from "./edit_delete.js";
import { edit_post } from "./edit_post.js";
export function genererWorkModale(works = []) {
  const contenu_modale = document.querySelector('.modale_contenu');
  contenu_modale.innerHTML = '';
  let i = 0;
  if (works.length === 0) {
    contenu_modale.style.display = 'none';
  } else {
    contenu_modale.style.display = 'block';

    const worksCards = works.map(work => {
      
      const workCard = document.createElement('div');
      workCard.classList.add('work-card');
      const workImage = document.createElement('img');
      workImage.src = work.imageUrl;
      workCard.appendChild(workImage);
      edit_delete_sign(work.id, workCard);
      return workCard;
    });

    worksCards.forEach(workCard => {
      contenu_modale.appendChild(workCard);
      workCard.setAttribute('id', `work-card${i}`);
      i++;
    });
  }

}

const mode_edition = document.querySelector('#mode_edition');
const modale = document.querySelector('.modale');

mode_edition.addEventListener('click', function() {
  modale.style.display = "flex";

  fetchWorks()
    .then(data => {
      console.log(data);
      genererWorkModale(data);
    })
    .catch(error => console.error(error));
});

const mode_post = document.getElementById('bouton_Post');
mode_post.addEventListener('click', edit_post);