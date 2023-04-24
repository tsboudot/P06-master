
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let form = document.getElementById('login-form');

    form.addEventListener('submit', async function(event)  {
      event.preventDefault();
    try {
      let response = await fetch('http://localhost:5678/api/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: email,
          password: password
        })
      });
  console.log('response');}
  catch (error) {
    console.error('Erreur lors de la requête de login :', error);}
  });
      /*if (response.ok) {
        let result = await response.json();
        localStorage.setItem('token', result.token);
        console.log('Token stored in localStorage:', result.token);
        // Traitement de la réponse si l'utilisateur est authentifié
      } else {
        const messageErreur = document.createElement('div');
        messageErreur.classList = ('errorMessage');
        messageErreur.textContent = 'erreur : Utiliasteur inconnu ou mot de passe incorrect';
        body.appenChild(messageErreur);// Traitement de la réponse si l'utilisateur n'est pas authentifié
      }
    } catch (error) {
      console.error('Erreur lors de la requête de login :', error);
    }
  }*/