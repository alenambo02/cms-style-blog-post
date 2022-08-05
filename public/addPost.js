// create a function that will create a post 
//form handlers

const editPostHandler = async (event) => {
    event.preventDefault();
  
    // Uses query selectors to grab html generated with handlebars
    const title = document.querySelector('#edit-post-title').value.trim();
    const content = document.querySelector('#edit-post-content').value.trim();
  
    if (title && content) {
      const response = await fetch('/dashbaord/update/${id}', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        
        document.location.replace('/profile');
      } else {
        alert(response.statusText);
      }
    }
  };
  
