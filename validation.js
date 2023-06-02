function validateForm(event) {
    event.preventDefault(); // Prevent form submission
  
    // Fetch form input values
    const name = document.getElementById('nameInput').value;
    const email = document.getElementById('emailInput').value;
    const password = document.getElementById('passwordInput').value;
  
    // Validate input values
    if (name === '') {
      alert('Please enter your name.');
      return;
    }
  
    if (email === '') {
      alert('Please enter your email address.');
      return;
    }
  
    if (!isValidEmail(email)) {
      alert('Please enter a valid email address.');
      return;
    }
  
    if (password === '') {
      alert('Please enter a password.');
      return;
    }
  
    // If all validations pass, submit the form
    document.getElementById('myForm').submit();
  }
  
  function isValidEmail(email) {
    // Basic email validation regex pattern
    const emailRegex = /^\S+@\S+\.\S+$/;
    return emailRegex.test(email);
  }
  