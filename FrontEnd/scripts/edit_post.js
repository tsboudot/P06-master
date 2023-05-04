export function edit_post() {
    const modale_delete = document.querySelector('.modale_delete');
    const modale_post = document.querySelector('.modale_post');
    const modale = document.querySelector('.modale');
    modale_delete.style.display = 'none';
    modale_post.style.display = 'block';
    modale_post.innerHTML = " ";
    const post_section_titre = document.createElement('h2');
    post_section_titre.innerHTML = 'Ajout photo';
    const post_section = document.createElement('form');
    post_section.setAttribute('id', 'post_section');
    modale_post.appendChild(post_section_titre);
modale_post.appendChild(post_section);
  }