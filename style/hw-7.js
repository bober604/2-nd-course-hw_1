// // Задание 1
// let item = 'js';
// let itemPerfect = item.toUpperCase();

// console.log(itemPerfect);



// // Задание 2
// function search(array, str) {
//     const searchStr = str.toLowerCase();
//     const result = array.filter(item => item.toLowerCase().startsWith(searchStr));
    
//     return result;
// }

// console.log(searchStart(['Кошка', 'Кит', 'Комар', 'Носорог'], 'ко'));
// console.log(searchStart(['яблоко', 'груша', 'гриб', 'огурец'], 'гру'));
// console.log(searchStart(['Дом', 'Банк', 'Больница', 'Театр'], 'Кино'));



// // Задание 3
// const num = 32.58884;

// // 3.1
// console.log(Math.floor(num));

// // 3.2
// console.log(Math.ceil(num));

// // 3.3
// console.log(Math.round(num));



// // Задание 4
// console.log(Math.min(52, 53, 49, 77, 21, 32));
// console.log(Math.max(52, 53, 49, 77, 21, 32));



// // Задание 5
// console.log(Math.floor(Math.random() * 10));



// // Задание 6
// function generateRandomArray(num) {
//     const length = num * 2;
//     const randomArray = [];

//     for (let i = 0; i < length; i++) {
//         randomArray.push(Math.floor(Math.random() * (num + 1)));
//     }

//     return randomArray;
// }

// const resultArray = generateRandomArray(5);
// console.log(resultArray);



// // Задание 7
// function getRandomInt(min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// const minNumber = 1;
// const maxNumber = 10;
// const randomNumber = getRandomInt(minNumber, maxNumber);
// console.log(randomNumber);



// // Задание 8
// console.log(new Date());



// // Задание 9
// const currentDate = new Date("2/17/2024");

// currentDate.setDate(currentDate.getDate() + 73);
// console.log(currentDate);



// // Задание 10
// function formatDate(date) {
//     const months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
//     const daysOfWeek = ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'];

//     const day = date.getDate();
//     const month = months[date.getMonth()];
//     const year = date.getFullYear();
//     const dayOfWeek = daysOfWeek[date.getDay()];

//     let hours = date.getHours();
//     let minutes = date.getMinutes();
//     let seconds = date.getSeconds();

//     hours = hours < 10 ? '0' + hours : hours;
//     minutes = minutes < 10 ? '0' + minutes : minutes;
//     seconds = seconds < 10 ? '0' + seconds : seconds;

//     const formattedDate = `Дата: ${day} ${month} ${year} - это ${dayOfWeek}.`;
//     const formattedTime = `Время: ${hours}:${minutes}:${seconds}`;

//     return `${formattedDate}\n${formattedTime}`;
// }

// const currentDate = new Date();
// console.log(formatDate(currentDate));



// // Задание 11
// function guessFruits() {
//     let fruits = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];

//     // Перемешиваем элементы массива
//     fruits = fruits.sort(() => Math.random() - 0.5);

//     // Выводим массив пользователю
//     alert('Перемешанный массив: ' + fruits.join(', '));

//     // Задаем вопросы пользователю
//     const firstGuess = prompt('Чему равнялся первый элемент массива?');
//     const lastGuess = prompt('Чему равнялся последний элемент массива?');

//     // Проверяем угаданные ответы
//     if (firstGuess === fruits[0] && lastGuess === fruits[fruits.length - 1]) {
//         alert('Поздравляем! Вы угадали оба элемента!');
//     } else if (firstGuess === fruits[0] || lastGuess === fruits[fruits.length - 1]) {
//         alert('Вы были близки к победе!');
//     } else {
//         alert('Вы ответили неверно!');
//     }
// }
