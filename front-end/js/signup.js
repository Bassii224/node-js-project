"use strict";

function signUpUser(event) {
  event.preventDefault();

  // Perform the sign-up logic here
  let email = document.getElementById("email").value;
  let firstName = document.getElementById("firstName").value;
  let lastName = document.getElementById("lastName").value;

  // Validate first name and last name (allowing only letters)
  if (!isValidName(firstName) || !isValidName(lastName)) {
    alert("Please enter valid first and last names with only letters.");
    return;
  }

  // For demonstration, update the content of the 'signupMessage' div
  let signUpMessageElement = document.getElementById("signUpMessage");
  signUpMessageElement.innerHTML = `Welcome ${firstName} ${lastName}! Your user created successfully.`;
  setTimeout(function () {
    // Redirect to signin.html after 2 seconds (2000 milliseconds)
    window.location.href = "index.html";
  }, 2000);
}

function isValidName(name) {
  // Allow only letters and spaces, and ensure that the name ends with a letter
  return /^[A-Za-z]+(?: [A-Za-z]+)*[A-Za-z]$/.test(name);
}
