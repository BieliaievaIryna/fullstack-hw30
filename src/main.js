console.log('#13. JavaScript homework example file')

/*
 * #1
 *
 * Написати функцію, яка приймає рядок як вхідний параметр і перевіряє, чи є цей рядок валідною електронною адресою за допомогою регулярного виразу.
 * Функція повертає true, якщо електронна адреса валідна, і false в іншому випадку.
 *
 */

function isValidEmail(email) {
  return (/^[a-zA-Z][a-zA-Z-.+0-9]*@[a-z0-9]+\.([a-z0-9]+\.)*[a-z]{2,3}$/).test(email);
}

// Тестові випадки
console.log(isValidEmail('example@example.com')) // Повинно вивести: true
console.log(isValidEmail('example.com'))        // Повинно вивести: false (немає @)
console.log(isValidEmail('example@'))           // Повинно вивести: false (немає домену)
console.log(isValidEmail('example@example.abcdef')) // Повинно вивести: false (довгий TLD)
console.log(isValidEmail('mail@.mail.com.ua'))  // Повинно вивести: false (крапка на початку домену)
console.log(isValidEmail(''))                   // Повинно вивести: false (пустий рядок)
console.log(isValidEmail(undefined))            // Повинно вивести: false (undefined)
console.log(isValidEmail('user@sub.domain.com')) // Повинно вивести: true (коректна адреса)
console.log(isValidEmail('u.ser+123@domain.org')) // Повинно вивести: true (допустимі символи)
console.log(isValidEmail('example@domain.c'))   // Повинно вивести: false (TLD занадто короткий)
console.log(isValidEmail('example@-domain.com')) // Повинно вивести: false (дефіс на початку домену)
console.log(isValidEmail('example@domain..com')) // Повинно вивести: false (подвійна крапка в домені)
console.log(isValidEmail('.example@domain.com')) // Повинно вивести: false (крапка на початку локальної частини)

/*
 * #2
 *
 * Написати функцію, яка приймає рядок як вхідний параметр і перевіряє, чи є цей рядок валідним URL веб-сайту за допомогою регулярного виразу.
 * Функція повертає true, якщо URL валідний, і false в іншому випадку.
 *
 */

/*

*/

function isValidUrl(url) {
  return (/^https:\/\/(www.)?[a-zA-Z-.]+\.[a-z]{2,}$/).test(url);
}

console.log(isValidUrl('https://www.example.com')) // Повинно вивести: true
console.log(isValidUrl('invalid-url'))             // Повинно вивести: false

// Експорт функції для використання та тестування
export { isValidEmail, isValidUrl }
