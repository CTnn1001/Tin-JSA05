const loginForm = document.getElementById('login-form');
const registerForm = document.getElementById('register-form');
const loginUsername = document.getElementById('login-username');
const loginPassword = document.getElementById('login-password');
const registerUsername = document.getElementById('reg-form');
const registerPassword = document.getElementById('register-password');

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = loginUsername.value;
    const password = loginPassword.value;
    const storedUser = localStorage.getItem(username);

    if (storedUser && JSON.parse(storedUser).password === password) {
        alert('Đăng nhập thành công!');
    } else {
        alert('Sai tên đăng nhập hoặc mật khẩu.');
    }
});

registerForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = registerUsername.value;
    const password = registerPassword.value;
    const user = { username, password };

    if (localStorage.getItem(username)) {
        alert('Tên đăng nhập đã tồn tại. Vui lòng chọn tên đăng nhập khác.');
    } else {
        localStorage.setItem(username, JSON.stringify(user));
        alert('Đăng ký thành công!');
    }
});