document.getElementById('compose-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form submission
    
    // Get form values
    var to = document.getElementById('to').value;
    var subject = document.getElementById('subject').value;
    var message = document.getElementById('message').value;
    
    // Perform validation
    if (to === '' || subject === '' || message === '') {
      alert('Please fill in all fields');
      return;
    }
    
    // Send email (simulate backend functionality)
    alert('Email sent!');
    
    // Reset form
    document.getElementById('compose-form').reset();
  });
  