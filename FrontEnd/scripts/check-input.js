export function checkInputs() {
    const postInput = document.querySelector("#post_input");
    const titleInput = document.querySelector("#ajoutez_photo_titre");
    const categorySelect = document.querySelector("#ajoutez_photo_categorie");
    const validateButton = document.querySelector(".modale_valider");
  
    postInput.addEventListener("change", checkIfAllInputsFilled);
    titleInput.addEventListener("input", checkIfAllInputsFilled);
    categorySelect.addEventListener("change", checkIfAllInputsFilled);
  
    function checkIfAllInputsFilled() {
      if (postInput.files.length > 0 && titleInput.value && categorySelect.value) {
        validateButton.style.opacity = "1";
      } else {
        validateButton.style.opacity = "0.5";
      }
    }
  }