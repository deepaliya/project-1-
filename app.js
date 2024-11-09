const form = document.querySelector("#form");
const username = document.querySelector("username");
const email = document.querySelector("email");
const password = document.querySelector("password");
const cpassword = document.querySelector("cpassword");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  validateinputs();
});

function validateinputs() {
  const usernameval = username.ariaValue.trim();
  const emailval = email.value.trim();
  const password = password.value.trim();
  const cpassword = cpassword.value.trim();
}
//element - password, msg- passwordd is reqiured
function setError(element, message) {
  const inputGroup = element.parentElement;
  const errorElement = inputGroup.querySelector(".error");

  errorElement.innerText = message;
  inputGroup.classlist.add("error");
  inputGroup.classlist.remove("success");
}
function setSuccess(element) {
  const inputGroup = element.parentElement;
  const errorElement = inputGroup.querySelector(".error");

  errorElement.innerText = "";
  inputGroup.classlist.add("success");
  inputGroup.classlist.remove("error");
}

const validateEmail = (email) => {
  return String(email).toLower.Case().match;
};
