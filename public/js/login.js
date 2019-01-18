var Register = document.querySelector('.Form-register');
var Login = document.querySelector('.Form-login');
var BtnRegister = document.querySelector('#Register');
var BtnLogin = document.querySelector('#Login');
var loginAlert = document.querySelector('.login-alert');

function toggleForm() {
  Register.classList.toggle('inactive');
  Login.classList.toggle('inactive');
}

function hideLoginAlert() {
  loginAlert.classList.add('inactive');
}

function showLoginAlert(content) {
  var succes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  if (succes) {
    loginAlert.classList.add('success');
  } else {
    loginAlert.classList.remove('success');
  }

  loginAlert.textContent = content;
  loginAlert.classList.remove('inactive');
}

function getFormData() {
  var inputFields = Login.querySelectorAll('input');
  var formData = {};
  inputFields.forEach(function (inputField) {
    formData[inputField.name] = inputField.value;
  });
  return formData;
}

function handleLoginRequest(event) {
  var request = event.target;

  if (request.readyState === 4) {
    var response = JSON.parse(request.responseText);

    if (request.status >= 200 && request.status < 300) {
      showLoginAlert('joepie je bent ingelogd', true);
      /*
        1 - check the response
        2 - sla de token op in localstorage
        3 - redirect naar closed.html
      */

      if (response.access_token) {
        window.localStorage.setItem('token', response.access_token);
        window.location = 'closed.html';
      }
    } else if (request.status === 401) {
      showLoginAlert(response.error);
    }
  }
}

function login(event) {
  event.preventDefault();
  var formData = getFormData(Login);
  var request = new XMLHttpRequest();
  request.addEventListener('readystatechange', handleLoginRequest);
  request.open('POST', 'http://connect4.pienter.space/api/auth/login');
  request.setRequestHeader('Content-Type', 'application/json');
  request.send(JSON.stringify(formData));
  console.log(formData);
}

function register(event) {
  event.preventDefault();
  var formData = getFormData(register);
  var request = new XMLHttpRequest();
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
//# sourceMappingURL=login.js.map