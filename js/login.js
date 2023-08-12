document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    fetch('http://localhost:3000/api/users?email=' + email + '&password=' + password)
        .then(response => response.json())
        .then(data => {
            if (data.length) {
                sessionStorage.setItem("loggedInUser", JSON.stringify(data[0])); // Save logged-in user details to session storage
                window.location.href = "/MainPage.html";
            } else {
                alert("Invalid credentials. Please try again.");
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
});