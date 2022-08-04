// create a function that will create a post 
//form handlers
const addPostFormHandler = async (event) => {
    event.preventDefault();
  
    // Uses query selectors to grab html generated with handlebars
    const email = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();
  
    if (email && password) {
      const response = await fetch('/api/user/login', {
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
  
