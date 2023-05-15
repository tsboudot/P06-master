/*export async function edit_delete(id) {
  const token = localStorage.getItem('token'); // Récupère le jeton d'authentification depuis le stockage local
  const requestOptions = {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}` // Inclut le jeton d'authentification dans l'en-tête Authorization avec le préfixe Bearer
    }
  };

  try {
    const response = await fetch(`http://localhost:5678/api/works/${id}`, requestOptions);
    console.log(response.ok); // Vérifie si la requête a réussi
    console.log(response); // Affiche la réponse complète
    const data = await response.json();
    console.log(data); // Affiche les données renvoyées par l'API
    return data;
  } catch (error) {
    console.error('Error:', error);
  }
}
  
  export function edit_delete_sign(id, container) {
    const delete_sign = document.createElement('button');
    delete_sign.innerHTML = '<i class="fa-light fa-trash"></i>';
    delete_sign.addEventListener('click', () => edit_delete(id));
    container.appendChild(delete_sign);
  }
  */
