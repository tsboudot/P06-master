
let form = document.getElementById('login-form');

form.addEventListener('submit', async function(event) {
  event.preventDefault();
  let email = document.getElementById('email').value;
  let password = document.getElementById('password').value;
  try {
    let response = await fetch('http://localhost:5678/api/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=UTF-8'
      },
      body: JSON.stringify({
        email: email,
        password: password,
      })
    });
    let json = await response.json();
    if (response.status === 200) {
      localStorage.setItem('token', json.token);
      window.location.href = 'index.html';
    } else {
      let loginError = document.querySelector('.login_error');
      loginError.style.display = 'block';
      console.error('Erreur lors de la requête de login :', json);
    }
  } catch (error) {
    console.error('Erreur lors de la requête de login :', error);
  }
});