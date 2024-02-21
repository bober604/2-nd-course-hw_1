// // Задание 1
// const people = [
//     { name: 'Глеб', age: 29 },
//     { name: 'Анна', age: 17 },
//     { name: 'Олег', age: 7 },
//     { name: 'Оксана', age: 47 }
// ];

// people.sort((person1, person2) => {
//     return person1.age - person2.age;
// });

// console.log(people);



// // Задание 2
// function isPositive(number) {
//     return number > 0;
// }

// function isMale(person) {
//     return person.gender === 'male';
// }

// function filter(array, ruleFunction) {
//     const filteredArray = [];

//     for (let i = 0; i < array.length; i++) {
//         const currentItem = array[i];
//         if (ruleFunction(currentItem)) {
//             filteredArray.push(currentItem);
//         }
//     }

//     return filteredArray;
// }

// console.log(filter([3, -4, 1, 9], isPositive)); // Должен выводить [3, 1, 9]

// const people = [
//    {name: 'Глеб', gender: 'male'},
//    {name: 'Анна', gender: 'female'},
//    {name: 'Олег', gender: 'male'},
//    {name: 'Оксана', gender: 'female'}
// ];

// console.log(filter(people, isMale));



// // Задание 3
// console.log('Сейчас пойдёт обратный отсчёт, подождите секунду)');
// let timerId = setTimeout(function tick() {
//     console.log(new Date());
//     timerId = setTimeout(tick, 3000);
// }, 1500);

// setTimeout (function() {
//     clearTimeout (timerId);
//     console.log('30 секунд прошло')
// }, 30_000);



// // Задание 4
// function delayForSecond(callback) {
//     setTimeout (callback, 1000);
// }

// delayForSecond(function () {
//     console.log('Привет, Глеб!');
// })



// // Задание 5
// function delayForSecond(cb) {
//     setTimeout(() => {
//         console.log('Прошла одна секунда');
// 				if(cb) { 	cb(); }

//     }, 1000)
// }

// function sayHi (name) {
//     console.log(`Привет, ${name}!`);
// }

// // Код выше менять нельзя
// delayForSecond(() => sayHi('Глеб'));