import { genererWorks } from './genererWorksGallery.js';
import { fetchWorks } from './fetch_works.js';

let works;

export function filtrerTout() {
  console.log(works);
  genererWorks(works);
}

export function filtrerObjets() {
  const worksFiltre = works.filter(function (work) {
    return work.category.name === "Objets";
  });
  genererWorks(worksFiltre);
}

export function filtrerAppartements() {
  const worksFiltre = works.filter(function (work) {
    return work.category.name === "Appartements";
  });
  genererWorks(worksFiltre);
}

export function filtrerHotelsEtRestaurants() {
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
    { name: 'Objets', id: 'objets', action: filtrerObjets },
    { name: 'Appartements', id: 'appartements', action: filtrerAppartements },
    { name: 'Hotels et Restaurants', id: 'hotels-et-restaurants', action: filtrerHotelsEtRestaurants }
  ];

  filterButtons.forEach(button => {
    const filterButton = document.createElement('button');
    filterButton.textContent = button.name;
    filterButton.className="filter_btn";
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

}).catch(error => console.error(error));