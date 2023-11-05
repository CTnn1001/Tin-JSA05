function reg(e) {
    event.preventDefault();
    // var email = document.getElementById('register-email').value
    var username = document.getElementById('username').value
    var pass = document.getElementById('password').value

    var user = {
        username: username,
        password: pass,
    };

    var json = JSON.stringify(user)
    localStorage.setItem(username, json)
    alert('Đã Đăng Kí!')
}

function log(e) {
    event.preventDefault();

    // var email = document.getElementById('login-email').value
    var username = document.getElementById('username').value
    var pass = document.getElementById('password').value
    var hidediv = document.getElementById('nav-c')
    var user = localStorage.getItem(username)
    var data = JSON.parse(user)
    console.log(data)

    if(user == null) {
        alert('Sai Tên Đăng Nhập')
    }
    else if (username == data.username && pass == data.password){
        hidediv.style.display = 'none';
        alert('Đã Đăng Nhập!')
        window.location.assign("main.html")
        
    }
    else{
        alert('Sai Mật Khẩu')
    }
}