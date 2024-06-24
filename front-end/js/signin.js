// signin.js

"use strict";

function signInUser(event) {
  event.preventDefault();

  // Perform the sign-in logic here
  let email = document.getElementById("signInEmail").value;
  let password = document.getElementById("signInPassword").value;

  // Here, you should implement your actual sign-in logic, such as sending a request to your server to authenticate the user
  // For demonstration purposes, I'll assume a simple authentication
  if (email === "sapiredri16@gmail.com" && password === "Ariel1607!") {
    // Display success message
    let signInMessageElement = document.getElementById("signInMessage");
    signInMessageElement.innerHTML = "You have successfully signed in.";

    // Redirect to orders.html after 2 seconds
    setTimeout(function () {
      window.location.href = "orders.html";
    }, 2000);
  } else {
    // Display an error message if authentication fails
    let signInMessageElement = document.getElementById("signInMessage");
    signInMessageElement.innerHTML =
      "Invalid email or password. Please try again.";
  }
}
