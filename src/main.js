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

const loginForm = document.querySelector('.login-form');
const emailInput = document.querySelector('[name="email"]');
const passwordInput = document.querySelector('[name="password"]');
const btnInput = document.querySelector('.login-form button');

// loginForm.addEventListener('submit', handleLogin);
// const KEY_LOGIN = 'user-data';

// const savedData = localStorage.getItem(KEY_LOGIN);
// if (savedData) {
//   const parsedData = JSON.parse(savedData);
//   emailInput.value = parsedData.email ?? '';
//   passwordInput.value = parsedData.password ?? '';
//   btnInput.textContent = 'Logout';
//   emailInput.setAttribute('readonly', true);
//   passwordInput.setAttribute('readonly', true);
// }

// function handleLogin(event) {
//   event.preventDefault();
//   if (btnInput.textContent === 'Logout') {
//     localStorage.removeItem(KEY_LOGIN);
//     loginForm.reset();
//     emailInput.removeAttribute('readonly');
//     passwordInput.removeAttribute('readonly');
//     btnInput.textContent = 'Login';
//     return;
//   }
//   const emailValue = emailInput.value.trim();
//   const passwordValue = passwordInput.value.trim();
//   if (emailValue === '' || passwordValue === '') {
//     alert('Fill all fields');
//     return;
//   }
//   if (emailValue !== USER_DATA.email || passwordValue !== USER_DATA.password) {
//     alert('Incorrect data');
//     return;
//   }

//   localStorage.setItem(
//     KEY_LOGIN,
//     JSON.stringify({ email: emailValue, password: passwordValue })
//   );
//   btnInput.textContent = 'Logout';
//   emailInput.setAttribute('readonly', true);
//   passwordInput.setAttribute('readonly', true);
// }

// TASK 2
// Створіть функцію countdown(seconds), яка приймає кількість секунд і повертає проміс.
// Проміс виконується після того, як пройде зазначений час. Функція має виводити у консоль кожну секунду до завершення.
// countdown(5).then(res => console.log(res));
// 4...
// 3...
// 2...
// 1...

// Час вийшов!
// function countdown(seconds) {
//   let count = seconds - 1;

//   const interval = setInterval(() => {
//     console.log(`${count}...`);
//     count -= 1;
//     if (count === 0) clearInterval(interval);
//   }, 1000);

//   return new Promise(resolve => {
//     setTimeout(() => {
//       resolve('Час вийшов');
//     }, seconds * 1000);
//   });
// }
// ????
// function countdown(seconds) {
//   return new Promise(resolve => {
//     const interval = setInterval(() => {
//       console.log(`${seconds - 1}...`);
//       seconds--;
//       if (seconds === 0) {
//         clearInterval(interval);
//         resolve('Час вийшов');
//       }
//     }, 1000);
//   });
// }
// countdown(5).then(res => console.log(res));

// - Використовуй prompt та повертай значення звідти.
// - Створи функцію, яка буде набувати значення з prompt і повертатиме проміс.
// Якщо значення не є числом, відхиляй проміс та логіруй "error".
// Якщо значення парне, вирішуй проміс та повертай "even" через 1 секунду.
// Якщо значення не парне, вирішуй проміс та повертай "odd" через 2 секунди.

// const promptValue = +prompt('Enter something');
// function checkValue (promptValue) {
//     return new Promise ((resolve, reject) => {
// if(isNaN(promptValue)) {
// reject('error')
// }
// if(promptValue % 2 === 0) {
//   setTimeout(() => resolve('even'), 1000)
// }
// if(promptValue % 2 !== 0) {
//     setTimeout(() => resolve('odd'), 2000)
// }
//     })
// }

// checkValue(promptValue)
// .then(value => console.log(value))
// .catch(error => console.log(error))

// Додай відображення дати і часу в реальному часі
// const timeCurrent = document.querySelector(".date span");
// timeCurrent.textContent = new Date().toLocaleString("uk-UA");
// setInterval(() => timeCurrent.textContent = new Date().toLocaleString("uk-UA"), 1000);
////////////////////////////////////////////////
// Напишіть функцію calculateAge(birthDate), яка приймає дату народження у форматі YYYY-MM-DD і повертає поточний вік.
// Підказка: Використайте об'єкт Date для обчислення різниці між сьогоднішньою датою і датою народження.

// function calculateAge(birthDate) {
//   const currentDate = new Date();
//   const birthDateF = new Date(birthDate);

//   let years = currentDate.getFullYear() - birthDateF.getFullYear();
//   const months = currentDate.getMonth() - birthDateF.getMonth();
//   const days = currentDate.getDate() - birthDateF.getDate();

//   if (months < 0 || (months === 0 && days < 0)) years -= 1;
//   return years;
// }

// console.log(calculateAge('2000-09-01'));
// console.log(calculateAge('2000-11-21'));
// console.log(calculateAge('2000-10-27'));
/////////////////////////////////////////////////////////////////////////////
// Створи перелік справ.
// Є інпут, в який вводиться назва завдання.
// Після натискання на кнопку "Додати" завдання додається до списку #list.
// Список із завданнями має бути доступним після перезавантаження сторінки.
// * Поруч із кожним завданням знаходиться кнопка "Видалити", щоб можна було
// Забрати завдання зі списку.
