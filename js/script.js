// // Колбэк-функция
// function greet(name) {
//     console.log(`Добро пожаловать ${name}.`);
//   }
  
//   // Функция высшего порядка
//   function registerGuest(name, callback) {
//     console.log(`Регистрируем гостя ${name}.`);
//     callback(name);
// //   }
  
// //  registerGuest("Манго", greet);

//  function registerGuest(name, callback) {
//   console.log(`Регистрируем гостя ${name}.`);
//   callback(name);
// }

// // Передаём инлайн функцию greet как колбэк
// registerGuest("Манго", function greet(name) {
//   console.log(`Добро пожаловать ${name}.`);
// });

// // Передаём инлайн функцию notify как колбэк
// registerGuest("Поли", function notify(name) {
//   console.log(`Уважаемый(ая) ${name}, ваш номер будет готов через 30 минут.`);
// });


// const numbers = [5, 10, 15, 20, 25];

// // Объявление функции
// // numbers.forEach(function (number, index) {
// //   console.log(`Индекс ${index}, значение ${number}`);
// // });
// numbers.forEach((number, index) => {
//   console.log(`Индекс ${index}, значение ${number}`);
// });

const numbers = [5, 10, 15, 20, 25];

const logMessage = (number, index) => {
  console.log(`Индекс ${index}, значение ${number}`);
};

numbers.forEach(logMessage);
