
export function genererWorkModale(works = []) {
  const contenu_modale = document.querySelector('.modale_delete_work');
  
  if (works.length === 0) {
    contenu_modale.style.display = 'none';
    return;
  }
  
  contenu_modale.style.display = 'block';
  
  works.forEach(work => {
    const workCardModale = document.createElement('figure');
    workCardModale.classList.add('work-card-modale');

    const workImageModale = document.createElement('img');
    workImageModale.src = work.imageUrl;
  
    workCardModale.appendChild(workImageModale);
  
    contenu_modale.appendChild(workCardModale);
  });
}