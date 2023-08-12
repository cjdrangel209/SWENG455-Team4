document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const fname = document.getElementById('firstName').value
    const lname = document.getElementById('lastName').value
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const newUser = {
        fname: fname,
        lname: lname,
        email: email,
        password: password  // In a real-world application, you'd never save plain passwords. Always hash & salt.
    };

    fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newUser)
    })
        .then(response => response.json())
        .then(data => {
            alert('Account created successfully!');
            // You can also redirect the user to the login page or wherever you like
            window.location.href = '/MainPage.html';
        })
        .catch(error => {
            console.error('There was an error!', error);
            alert('Failed to create the account. Please try again.');
        });
});