const Register = document.querySelector('.Form-register');
const Login = document.querySelector('.Form-login');
const BtnRegister = document.querySelector('#Register');
const BtnLogin = document.querySelector('#Login');
const loginAlert = document.querySelector('.login-alert');

function toggleForm() {
  Register.classList.toggle('inactive');
  Login.classList.toggle('inactive');
}

function hideLoginAlert() {
  loginAlert.classList.add('inactive');
}

function showLoginAlert(content, succes = false) {
  if (succes) {
    loginAlert.classList.add('success');
  } else {
    loginAlert.classList.remove('success');
  }
  loginAlert.textContent = content;
  loginAlert.classList.remove('inactive');
}

function getFormData() {
  const inputFields = Login.querySelectorAll('input');
  const formData = {};
  inputFields.forEach(function (inputField) {
    formData[inputField.name] = inputField.value;
  });
  return formData;

}

function handleLoginRequest(event) {
  const request = event.target;
  if (request.readyState === 4) {
    const response = JSON.parse(request.responseText);
    if (request.status >= 200 && request.status < 300) {
      showLoginAlert('joepie je bent ingelogd', true);
    } else if (request.status === 401) {
      showLoginAlert(response.error);
    }
  }
}

function login(event) {
  event.preventDefault();
  const formData = getFormData(Login);
  const request = new XMLHttpRequest();
  request.addEventListener('readystatechange', handleLoginRequest);
  request.open('POST', 'http://connect4.pienter.space/api/auth/login');
  request.setRequestHeader('Content-Type', 'application/json');
  request.send(JSON.stringify(formData));
  console.log(formData);
}

function register(event) {
  event.preventDefault();
  const formData = getFormData(register);
  const request = new XMLHttpRequest();
  request.addEventListener('readystatechange', function () {
    console.log(event);
  });
  request.open('POST', 'connect4.pienter.space/api/auth/register');
  request.setRequestHeader('Content-Type', 'application/json');
  request.send(JSON.stringify(formData));
  console.log(formData);
}


BtnRegister.addEventListener('click', toggleForm);
BtnLogin.addEventListener('click', toggleForm);
Login.addEventListener('submit', login);
Register.addEventListener('submit', register);
Login.addEventListener('input', hideLoginAlert);
