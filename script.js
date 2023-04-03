"use strict";

let formElement = document.getElementById("registration-form");

formElement.addEventListener("submit", function (event) {
  event.preventDefault();
  let error = {};
  let form = event.target;

  let password1 = document.getElementById("password-field").value;
  let password2 = document.getElementById("password-field2").value;

  if (password1 == "") {
    error.password = "password cannot be empty";
  }
  if (password1 != password2) {
    error.password2 = "passwords do not match";
  }
  let checkbox = document.getElementById("agree").checked;
  if (!checkbox) {
    error.agree = "U must agree terms";
  }

  document.querySelectorAll(".error-text").forEach((element) => {
    element.innerText = "";
  });
  let age = false;
  document.querySelectorAll(".agee").forEach((element) => {
    if (element.checked) {
      age = true;
    }
  });
  if (!age) {
    error.age = "please select your age";
  }
  for (const key in error) {
    let errortext = document.getElementById("error-" + key);
    errortext.innerText = error[key];
  }

  let errorArray = Object.keys(error);
  if (errorArray.length == 0) {
    form.submit();
  }
});

let passField = document.getElementById("password-field");
let togleItem = document.getElementById("show-hide");

togleItem.addEventListener("click", function () {
  if (passField.type == "password") {
    passField.setAttribute("type", "text");
    togleItem.classList.remove("fa-eye");
    togleItem.classList.add("fa-eye-slash");
  } else {
    passField.getAttribute("type", "password");
    togleItem.classList.remove("fa-eye-slash");
    togleItem.classList.add("fa-eye");
  }
});
let emailField = document.getElementById("email1");
emailField.addEventListener("keyup", function () {
  let emailValue = emailField.value;
  let Perortext = document.getElementById("error-email");
  let EmailPattern =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (emailValue.match(EmailPattern)) {
    emailField.style.border = "2px solid green";
    Perortext.innerHTML = "Your email is valid";
    Perortext.style.color = "green";
  } else {
    emailField.style.border = "2px solid red";
    Perortext.innerHTML = "Your email is invalid";
    Perortext.style.color = "red";
  }
  if (emailValue == "") {
    Perortext.innerHTML = " ";
  }
});

let username = document.getElementById("username-field");
username.addEventListener("keyup", function () {
  let usernameValue = username.value;
  let errorUserText = document.getElementById("error-username");
  let usernamePattern = "^[A-Za-z][A-Za-z0-9_]{7,29}$";

  if (usernameValue.match(usernamePattern)) {
    errorUserText.innerHTML = "username is valid";
    errorUserText.style.color = "green";
  } else {
    errorUserText.innerHTML =
      "username should start with an letter & Should me min 8character";
    errorUserText.style.color = "red";
  }
  if (usernameValue == "") {
    errorUserText.innerHTML = " ";
  }
});

