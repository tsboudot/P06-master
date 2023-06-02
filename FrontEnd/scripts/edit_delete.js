import { fetchWorks } from "./fetch_works.js";
import { genererWorks } from "./genererWorksGallery.js";

export async function edit_delete(id) {
  const token = localStorage.getItem('token');
  const requestOptions = {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }
  };

  try {
    const response = await fetch(`http://localhost:5678/api/works/${id}`, requestOptions);
    if (response.status === 204) {
      console.log('Resource deleted successfully.');
      fetchWorks().then(data => {
        const works = data;
        genererWorks(works);
      });
      return;
    }
    const data = await response.json();
    console.log(data); // Affiche les données renvoyées par l'API
    return data;
  } catch (error) {
    console.error('Error:', error);
  }
}

export function edit_delete_sign(id, container) {
  const delete_sign = document.createElement('div');
  delete_sign.classList.add('delete_sign');
  delete_sign.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
  delete_sign.addEventListener('click', () => edit_delete(id));
  container.appendChild(delete_sign);
}
