let Register = document.querySelector('.Form-register');
let Login = document.querySelector('.Form-login');
let BtnRegister = document.querySelector('#Register');
let BtnLogin = document.querySelector('#Login');

function toggleForm() {
  Register.classList.toggle('inactive');
  Login.classList.toggle('inactive');
}

function getFormData(event){
  const inputFields = Login.querySelectorAll('input');
  const formData = {};
  inputFields.forEach(function(inputField) {
    formData[inputField.name] = inputField.value;
  });

  console.log(formData);
}

function handleLoginRequest(event){
  const request = event.target;
  if(request.readyState === 4) {
    if(request.status >= 200 && request.status < 300){
      console.log('succes');
      console.log(request);
    }else{
      console.log('error');
      console.log(request);
      window.alert("Login failed, try again")
    }
  }
}

function login(event) {
  event.preventDefault();
  const formData = getFormData(Login);
  const request = new XMLHttpRequest();
  request.addEventListener('readystatechange', handleLoginRequest);
  request.open('POST', 'http://connect4.pienter.space/api/auth/login');
  request.setRequestHeader('Content-Type', 'application.json');
  request.send(JSON.stringify(formData));
  console.log(formData);
}

function register(event) {
  event.preventDefault();
  const formData = getFormData(register);
  const request = new XMLHttpRequest();
  request.addEventListener('readystatechange', function(){
    console.log(event);
  });
  request.open('POST', 'connect4.pienter.space/api/auth/register');
  request.setRequestHeader('Content-Type', 'application.json');
  request.send(JSON.stringify(formData));
  console.log(formData);
}


BtnRegister.addEventListener('click', toggleForm);
BtnLogin.addEventListener('click', toggleForm);
Login.addEventListener('submit', login);
Register.addEventListener('submit', register);
console.log("123");
