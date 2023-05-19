import { genererBoutonsModaleMenuePost } from "./boutons_modale.js";

export function edit_post() {
  const modale_titre = document.querySelector(".modale_titre");
  modale_titre.innerHTML = "Ajoutez de nouvelles photos";
  const modale_contenu = document.querySelector(".modale_contenu");
  modale_contenu.innerHTML = " ";

  const post_input = document.createElement("input");
  post_input.setAttribute("id", "post_input");
  post_input.setAttribute("type", "file");
  post_input.setAttribute("display", "none");
  post_input.classList.add("hidden");
  modale_contenu.appendChild(post_input);

  const ajoutez_photo = document.createElement("div");
  ajoutez_photo.setAttribute("id", "ajoutez_photo");
  modale_contenu.appendChild(ajoutez_photo);

  const ajoutez_photo_icone = document.createElement("div");
  ajoutez_photo_icone.innerHTML = '<i class="fa-regular fa-image"></i>';
  ajoutez_photo.appendChild(ajoutez_photo_icone);

  const ajoutez_work_bouton = document.createElement("button");
  ajoutez_work_bouton.innerHTML = "Ajouter une photo";
  ajoutez_work_bouton.setAttribute("id", "ajoutez_work_bouton");
  ajoutez_photo.appendChild(ajoutez_work_bouton);

  const ajoutez_photo_label = document.createElement("label");
  ajoutez_photo_label.setAttribute("for", "ajoutez_photo");
  ajoutez_photo.appendChild(ajoutez_photo_label);
  ajoutez_photo_label.innerHTML = "jpeg, png: 4mo max";

  const ajoutez_photo_titre_label = document.createElement("p");
  ajoutez_photo_titre_label.innerHTML = "Titre";
  modale_contenu.appendChild(ajoutez_photo_titre_label);

  const ajoutez_photo_titre = document.createElement("input");
  ajoutez_photo_titre.setAttribute("type", "text");
  modale_contenu.appendChild(ajoutez_photo_titre);

  const ajoutez_photo_categorie_label = document.createElement("p");
  ajoutez_photo_categorie_label.innerHTML = "Catégorie";
  modale_contenu.appendChild(ajoutez_photo_categorie_label);

  const ajoutez_photo_categorie = document.createElement("select");
  const cat_objet = document.createElement("option");
  cat_objet.value = 1;
  cat_objet.textContent = "Objet";
  const cat_appartement = document.createElement("option");
  cat_appartement.value = 2;
  cat_appartement.textContent = "Appartement";
  const cat_hotelRestau = document.createElement("option");
  cat_hotelRestau.value = 3;
  cat_hotelRestau.textContent = "Hotel & restaurant";
  ajoutez_photo_categorie.appendChild(cat_objet);
  ajoutez_photo_categorie.appendChild(cat_appartement);
  ajoutez_photo_categorie.appendChild(cat_hotelRestau);

  modale_contenu.appendChild(ajoutez_photo_categorie);

  genererBoutonsModaleMenuePost();

  ajoutez_work_bouton.addEventListener("click", function () {
    post_input.click();
  });
  post_input.addEventListener("change", function() {
    const file = this.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function(event) {
        const preview = document.createElement("img");
        preview.src = event.target.result; 
        preview.classList.add("image-preview");
        ajoutez_photo.innerHTML = "";
        ajoutez_photo.appendChild(preview);
      };
      reader.readAsDataURL(file);
    }
  });

  const valider = document.querySelector(".modale_valider");
  valider.addEventListener("click", function (event) {
    event.preventDefault();
  
    const image = post_input.files[0];
    const title = ajoutez_photo_titre.value;
    const category = ajoutez_photo_categorie.value;
    const authToken = localStorage.getItem('token');
  
    const formData = new FormData();
    formData.append('image', image);
    formData.append('title', title);
    formData.append('category', category);
  
    fetch('http://localhost:5678/api/works', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Authorization': `Bearer ${authToken}`
      },
      body: formData
    })
      .then(response => {
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        return response.json();
      })
      .then(data => {
        // Handle successful addition of the photo
        console.log("Photo ajoutée avec succès :", data);
      })
      .catch(error => {
        // Handle error
        console.error("Erreur lors de l'ajout de la photo :", error);
      });
  });
}