// let buton=document.getElementById("btn");

// buton.addEventListener("click",()=>{
//       document.body.style.backgroundColor="blue";
// })

const form = document.getElementById("signupForm");

const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");

function setError(element, message) {
  const parent = element.parentElement;
  const small = parent.querySelector("small");

  element.classList.add("error");
  element.classList.remove("success");

  small.innerText = message;
}

function setSuccess(element) {
  const parent = element.parentElement;
  const small = parent.querySelector("small");

  element.classList.add("success");
  element.classList.remove("error");

  small.innerText = "";
}

function isValidEmail(value) {
  const regex = /^[\w.-]+@[\w.-]+\.\w{2,7}$/;
  return regex.test(value);
}

function isStrongPassword(value) {
  // At least 1 uppercase, 1 lowercase, 1 number, 1 symbol, 8+ chars
  const regex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[\W_]).{8,}$/;
  return regex.test(value);
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let usernameValue = username.value.trim();
  let emailValue = email.value.trim();
  let passwordValue = password.value.trim();
  let confirmValue = confirmPassword.value.trim();

  // Username
  if (usernameValue === "") {
    setError(username, "Username is required");
  } else if (usernameValue.length < 4) {
    setError(username, "Username must be at least 4 characters");
  } else {
    setSuccess(username);
  }

  // Email
  if (emailValue === "") {
    setError(email, "Email is required");
  } else if (!isValidEmail(emailValue)) {
    setError(email, "Enter a valid email");
  } else {
    setSuccess(email);
  }

  // Password
  if (!isStrongPassword(passwordValue)) {
    setError(
      password,
      "Password must include uppercase, lowercase, number, symbol, 8 chars"
    );
  } else {
    setSuccess(password);
  }

  // Confirm Password
  if (passwordValue !== confirmValue) {
    setError(confirmPassword, "Passwords do not match");
  } else {
    setSuccess(confirmPassword);
  }
});

