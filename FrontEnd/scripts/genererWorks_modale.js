import { fetchWorks } from "./fetch_works.js";
import { edit_delete_sign } from "./edit_delete.js";
import { edit_post } from "./edit_post.js";

export function genererWorkModale(works = []) {
  const contenu_modale = document.querySelector('.modale_contenu');
  contenu_modale.innerHTML = '';
  const modale_titre = document.querySelector('.modale_titre');
  modale_titre.innerHTML = 'Galerie photo'
  let i = 0;
  if (works.length === 0) {
    contenu_modale.style.display = 'none';
  } else {
    contenu_modale.style.display = 'flex';

    const worksCards = works.map(work => {
      
      const workCard = document.createElement('div');
      workCard.classList.add('work-card-modale');
      const workImage = document.createElement('img');
      workImage.classList.add('work-image-modale');
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
