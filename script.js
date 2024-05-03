const email = document.querySelector(".email");
const form = document.querySelector(".form");
const errorEmail = document.querySelector(".errorLabel");

form.addEventListener("submit", (e) => {
  e.preventDefault(); // Prevents the form from submitting by default

  const emailValue = email.value.trim();

  if (!emailValue) { // Check if email field is empty
    errorEmail.textContent = "You must type in an email";
    email.classList.add("error-input"); // Apply error styling
  } else if (!isValidEmail(emailValue)) { // Check if email format is invalid
    errorEmail.textContent = "Email is invalid";
    email.classList.add("error-input"); // Apply error styling
  } else {
    // If the email is not empty and is in valid format, clear error message and styling
    errorEmail.textContent = "";
    email.classList.remove("error-input"); // Remove error styling
    // Here you can add code to submit the form or perform further actions
  }
});

function isValidEmail(email) {
  // Regular expression to validate email format
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return regex.test(email);
}
