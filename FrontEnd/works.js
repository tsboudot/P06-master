import {genererFiltres} from './filters.js';

export function genererWorks(works = []) {
    const portfolioSection = document.querySelector('#portfolio');
    portfolioSection.innerHTML = '';
  
    if (works.length === 0) {
      portfolioSection.style.display = 'none';
    } else {
      portfolioSection.style.display = '';
  
      const projectsTitle = document.createElement('h2');
      projectsTitle.textContent = 'Mes projets';
      portfolioSection.appendChild(projectsTitle);
        genererFiltres();
      const gallery = document.createElement('div');
      gallery.classList.add('gallery');
  
      works.forEach(work => {
        const workCard = document.createElement('figure');
        workCard.classList.add('work-card');
  
        const workImage = document.createElement('img');
        workImage.src = work.imageUrl;
  
        const workTitle = document.createElement('h3');
        workTitle.textContent = work.title;

  
        workCard.appendChild(workImage);
        workCard.appendChild(workTitle);


        gallery.appendChild(workCard);
      });
  
      portfolioSection.appendChild(gallery);
    }
  }