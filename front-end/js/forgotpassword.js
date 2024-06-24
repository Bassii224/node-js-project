"use strict";

function resetPassword(event) {
  event.preventDefault();

  // Perform the password reset logic here
  let email = document.getElementById("email").value;

  // For demonstration, update the content of the 'resetMessage' div
  let resetMessageElement = document.getElementById("resetMessage");
  resetMessageElement.innerHTML = "Password reset sent to " + email;

  // Set a timeout to delay the redirection to signin.html
  setTimeout(function () {
    // Redirect to signin.html after 2 seconds (2000 milliseconds)
    window.location.href = "index.html";
  }, 2000);
}
