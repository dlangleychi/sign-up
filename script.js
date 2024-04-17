

let password = document.getElementById('password');
let confirmPassword = document.getElementById('confirm-password');

let checkMatching = () => {
    if (password.value != confirmPassword.value) {
        password.classList.add('mismatch');
        confirmPassword.classList.add('mismatch');
    }
    else {
        password.classList.remove('mismatch');
        confirmPassword.classList.remove('mismatch');
    }
}

password.addEventListener('input', checkMatching);
confirmPassword.addEventListener('input', checkMatching);