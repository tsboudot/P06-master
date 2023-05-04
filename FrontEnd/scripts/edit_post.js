
export function edit_post() {
    const modale_delete = document.querySelector('.modale_delete');
    const modale_post = document.querySelector('.modale_post');
    const modale = document.querySelector('.modale');
    modale_delete.style.display = 'none';
    modale_post.style.display = 'block';
    modale_post.innerHTML = " ";
    const post_section_titre = document.createElement('h2');
    post_section_titre.innerHTML = 'Ajout photo';
    const post_section = document.createElement('div');
    post_section.setAttribute('id', 'post_section');
    modale_post.appendChild(post_section_titre);
    modale_post.appendChild(post_section);
    const post_section_input = document.createElement('input');
    post_section_input.setAttribute('type', 'file');
    post_section_input.setAttribute('id', 'post_section_input');
    post_section_input.style.display ='none';
    post_section.appendChild(post_section_input);
    const post_section_label = document.createElement('label');
    post_section_label.setAttribute('for', 'imageInput');
    post_section_label.innerHTML = 'choisir une image';
    post_section.appendChild(post_section_label);
  }