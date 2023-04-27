document.addEventListener('DOMContentLoaded', function() {
    if (localStorage.getItem('token')) {
        let adminSection = document.querySelector(".admin_section");
        adminSection.style.display = "flex";
    }
  })