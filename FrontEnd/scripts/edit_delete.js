export async function edit_delete(id) {

    try {
      let response = await fetch(`http://localhost:5678/api/works/${id}`, 
      {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json; charset=UTF-8'
        },
      });
      let data = await response.json();
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