var Register = document.querySelector('.Form-register');
var Login = document.querySelector('.Form-login');
var BtnRegister = document.querySelector('#Register');
var BtnLogin = document.querySelector('#Login');
var apiDomain = 'connect4.pienter.space/api/';

function toggleForm() {
  Register.classList.toggle('inactive');
  Login.classList.toggle('inactive');
}

function getFormData(event) {
  var inputFields = Login.querySelectorAll('input');
  var formData = {};
  inputFields.forEach(function (inputField) {
    formData[inputField.name] = inputField.value;
  });
  console.log(formData);
}

function login(event) {
  event.preventDefault();
  var formData = getFormData(Login);
  var request = new XMLHttpRequest();
  request.addEventListener('readystatechange', function () {
    console.log(event);
  });
  request.open('POST', 'http://connect4.pienter.space/api/auth/login');
  request.setRequestHeader('Content-Type', 'application.json');
  request.send(JSON.stringify(formData));
  console.log(formData);
}

function register(event) {
  event.preventDefault();
  var formData = getFormData(register);
  var request = new XMLHttpRequest();
  request.addEventListener('readystatechange', function () {});
}

BtnRegister.addEventListener('click', toggleForm);
BtnLogin.addEventListener('click', toggleForm);
Login.addEventListener('submit', login);
Register.addEventListener('submit', register);
console.log("123");
//# sourceMappingURL=login.js.map