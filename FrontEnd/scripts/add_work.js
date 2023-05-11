export function add_work(image, title, category, authToken) {
    const formData = new FormData();
    formData.append('image', image.files[0]);
    formData.append('title', title.value);
    formData.append('category', category.value);
  
    return fetch('/api/works', {
      method: 'POST',
      headers: {
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
      return data;
    })
    .catch(error => {
      console.error('Error adding work:', error);
      throw error;
    });
  }