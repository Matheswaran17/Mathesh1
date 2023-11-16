function validateLogin() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // You can add your authentication logic here
    // For simplicity, let's check if both fields are filled
    if (username !== "" && password !== "") {
        alert("Login successful! Welcome, " + username + "!");
        // You can redirect the user to another page or perform other actions here
    } else {
        alert("Please enter both username and password.");
    }
}