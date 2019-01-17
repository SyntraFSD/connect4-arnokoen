let Register = document.querySelector('.Form-register');
let Login = document.querySelector('.Form-login');
let BtnRegister = document.querySelector('#Register');
let BtnLogin = document.querySelector('#Login');

function toggleForm() {
  Register.classList.toggle('inactive');
  Login.classList.toggle('inactive');
}

BtnRegister.addEventListener('click', toggleForm);
BtnLogin.addEventListener('click', toggleForm);
console.log("123");
