// TASK 1

// Якщо імейл і пароль користувача збігаються, зберігайте дані з форми при сабмите
// у локальне сховище і змінюй кнопку login на logout і роби поля введення
// Недоступними зміни.

// При перезавантаженні сторінки, якщо користувач залогінений, ми маємо бачити logout-кнопку
// та недоступні для зміни поля з даними користувача.
// Клік по кнопці logout повертає все до початкового вигляду і видаляє дані користувача
// З локального сховища.
// Якщо введені дані не збігаються з потрібними даними, викликати аlert і
// повідомляти про помилку.

const USER_DATA = {
    email: 'user@mail.com',
    password: 'secret',
};

const loginForm = document.querySelector(".login-form");
const emailInput = document.querySelector('[name="email"]');
const passwordInput = document.querySelector('[name="password"]')
const btnInput = document.querySelector(".login-form button")

loginForm.addEventListener("submit", handleLogin)
const KEY_LOGIN = "user-data"

function handleLogin(event) {
    event.preventDefault();

    const emailValue = emailInput.value.trim()
    const passwordValue = passwordInput.value.trim()
    if (emailValue === "" || passwordValue === "") {
        alert("Fill all fields")
        return;
    }
    if (emailValue !== USER_DATA.email || passwordValue !== USER_DATA.password) {
        alert("Incorrect data")
        return;
    }

    localStorage.setItem(KEY_LOGIN, JSON.stringify({ email: emailValue, password: passwordValue }))
    btnInput.textContent = "Logout"
    emailInput.setAttribute("readonly", true);
    passwordInput.setAttribute("readonly", true);

}