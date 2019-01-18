const token=window.localStorage.getItem('token');
const request = new XMLHttpRequest();
request.addEventListener('readystatechange', function (event) {
  if (request.readyState === 4) {
    if (request.status >= 200 && request.status < 300) {
      console.log(JSON.parse(request.responseText));
    } else {
      window.location = 'login.html';
    }
  }
});
request.open('GET', 'http://connect4.pienter.space/api/auth/me');
request.setRequestHeader('Authorization', 'Bearer ' + token);
request.send();
