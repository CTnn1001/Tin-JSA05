
var button = document.getElementById('btn-l');
button.addEventListener('click', function() {
    
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    
    if (username === "d22" && password === "123") {
        localStorage.setItem('username', username)
        localStorage.setItem('password', password)
    
        var greetingElment = document.createElement('p');
        greetingElment.textContent = 'xin chào, ' + username + '!'
        document.body.appendChild(greetingElment);
    }
    else {
        alert("sai tk hay mk")
    }
});

document.addEventListener('DOMContentLoaded', function(){
    var username = localStorage.getItem('username');
    if (username) {
        var greetingElment = document.createElement('p');
        greetingElment.textContent = 'xin chao, ' + username + '!';
        document.body.appendChild(greetingElment);
    }
});

// localStorage.clear();