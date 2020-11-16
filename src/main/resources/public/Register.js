
const URL = 'http://localhost:8081';

const register = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const user = {};
    user['username'] = formData.get('username');

    const p1 =  formData.get('password');
    const p2 =  formData.get('confirmpassword');

    if(formData.get('username').length < 5){
        document.getElementById("error").innerHTML = "The username has to be at least 5 characters long";
        return;
    }

    if(p1.valueOf() != p2.valueOf()){
        document.getElementById("error").innerHTML = "Passwords have to match";
        return;
    }

    user['password'] = p1;

    fetch(`${URL}/users/sign-up`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    }).then((result) => {
        if(result.status == 403){
            document.getElementById("error").innerHTML = "Something went wrong";
        }
        else if(result.status == 400){
            document.getElementById("error").innerHTML = "Mal formed request";
        }
        else if(result.status == 200){
            window.location.href = 'http://localhost:8081/login.html';
        }
    });
};

document.addEventListener('DOMContentLoaded', function(){
    const loginForm = document.querySelector('#registerForm');
    loginForm.addEventListener('submit', register);
});