import { genererWorks } from './works.js';
import { fetchWorks } from './affichage.js';

let works;

export function filtrerTout() {
  console.log(works);
  genererWorks(works);
}

export function filtrerObjets() {
  console.log(works);
  const worksFiltre = works.filter(function (work) {
    return work.category.name === "Objets";
  });
  genererWorks(worksFiltre);
}

export function filtrerAppartements() {
  console.log(works);
  const worksFiltre = works.filter(function (work) {
    return work.category.name === "Appartements";
  });
  genererWorks(worksFiltre);
}

export function filtrerHotelsEtRestaurants() {
  console.log(works);
  const worksFiltre = works.filter(function (work) {
    return work.category.name === "Hotels & restaurants";
  });
  genererWorks(worksFiltre);
}

export function genererFiltres() {
  const portfolioSection = document.getElementById('portfolio');
  const filtersContainer = document.createElement('div');
  filtersContainer.id = 'filters';
  portfolioSection.appendChild(filtersContainer);

  const filterButtons = [
    { name: 'Tous', id: 'all', action: filtrerTout },
    { name: 'objets', id: 'objets', action: filtrerObjets },
    { name: 'Appartements', id: 'appartements', action: filtrerAppartements },
    { name: 'Hotels et Restaurants', id: 'hotels-et-restaurants', action: filtrerHotelsEtRestaurants }
  ];

  filterButtons.forEach(button => {
    const filterButton = document.createElement('button');
    filterButton.textContent = button.name;
    filterButton.id = button.id;
    filtersContainer.appendChild(filterButton);

    button.element = filterButton;

    filterButton.addEventListener('click', () => {
      filterButtons.forEach(button => {
        button.element.classList.remove('active');
      });

      filterButton.classList.add('active');
      button.action();
    });
  });
}

fetchWorks().then(data => {
  works = data;
  genererWorks(works);
  genererFiltres();
}).catch(error => console.error(error));