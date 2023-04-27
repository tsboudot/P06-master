
export function genererWorkModale(works =[])
{
    const contenu_modale = document.querySelector('modale_delete_work');
    if (works.length === 0) {
        contenu_modale.style.display = 'none';
      } else {
        contenu_modale.style.display = '';
}
works.forEach(work => {
    const workCard = document.createElement('figure');
    workCard.classList.add('work-card');

    const workImage = document.createElement('img');
    workImage.src = work.imageUrl;
    
    

    workCard.appendChild(workImage);



    contenu_modale.appendChild(workCard);
  }

}