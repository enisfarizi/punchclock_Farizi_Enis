
const URL = 'http://localhost:8081';

const login = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const user = {};
    user['username'] = formData.get('username');
    user['password'] = formData.get('password');


    fetch(`${URL}/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    }).then((result) => {
       if(result.status == 403){
           document.getElementById("error").innerHTML = "Invalid data!";
       }
       else if(result.status == 200){
           localStorage.setItem('token', result.headers.get('Authorization'));
           localStorage.setItem('username', user['username']);
           window.location.href = 'http://localhost:8081/index.html';
       }

    });
};

document.addEventListener('DOMContentLoaded', function(){
    const loginForm = document.querySelector('#loginForm');
    loginForm.addEventListener('submit', login);
});