const formEl = document.getElementsByTagName("form")[0];
const nameEl = document.getElementById("name");
const lastNameEl = document.getElementById("lastname");
const emailEl = document.getElementById("email");
const passwordEl = document.getElementById("password");


formEl.addEventListener("submit", function (event) {
  event.preventDefault();
  var error_name = document.querySelector(".error-name");
  let error_lastname = document.querySelector(".error-lastname");
  let error_email = document.querySelector(".error-email");
  let error_password = document.querySelector(".error-password");
  if (nameEl.value === "") {    
    error_name.innerHTML = "First name cannot be empty";
    error_name.style.color = "red";   
  } else {
    error_name.innerHTML = "";
  }
  if (lastNameEl.value === "") {    
    error_lastname.innerHTML = "Last name cannot be empty";
    error_lastname.style.color = "red";
  } else {
    error_lastname.innerHTML = "";  
  }
  if (emailEl.value === "") {    
    error_email.innerHTML = "Looks like this is not an email";
    error_email.style.color = "red";
    emailEl.placeholder = "email@example/com";
  } else {
    error_email.innerHTML = "";
  }
  if (passwordEl.value === "") {    
    error_password.innerHTML = "Password cannot be empty";
    error_password.style.color = "red";
  } else {
    error_password.innerHTML = "";
  }
  
}, false);