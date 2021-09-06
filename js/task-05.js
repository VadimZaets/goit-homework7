const inputForm = document.querySelector('#name-input');
const userName = document.querySelector('#name-output');
console.log(inputForm);
console.log(userName);

inputForm.addEventListener('input', changeName);

function changeName() {
    if (inputForm.value !== '') {
        userName.textContent = inputForm.value;

    } else {
        userName.textContent = 'незнакомец';
    }
}