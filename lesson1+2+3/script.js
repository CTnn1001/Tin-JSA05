const dataBtn = document.getElementById('input');
const saveBtn = document.getElementById('save');
const deleBtn = document.getElementById('dele');
const checkBtn = document.getElementById('check');
save.addEventListener('click', () => {
    const inputData = dataBtn.value;
    if (inputData) {
        localStorage.setItem('Lesson1+2+3', inputData);
        dataBtn.value = '';
    }
});
dele.addEventListener('click', () => {
    localStorage.removeItem('Lesson1+2+3');
});
check.addEventListener('click', () => {
    const savedData = localStorage.getItem('Lesson1+2+3');
    if (savedData) {
        alert('ĐẦY:)');
    } else {
        alert('TRỐNG!');
    }
});