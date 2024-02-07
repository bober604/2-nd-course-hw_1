// const ret = (a, b) => { //  Задание 1
//     if (a > b) {
//         return b;
//     } else {
//         return a;
//     }
// }

// console.log(ret(7, 14))



// let personNum = prompt('Введите число'); // Задание 2
// function num(personNum) {
//     return personNum % 2 === 0 ? 'Число чётное' : 'Число нечётное'
// }

// console.log(num(personNum));



// n1() // Задание 3.1

// function n1() {
//     let personNumber = prompt('Введите число');

//     console.log(personNumber * personNumber);
// }


// function squareNumber(number) { // Задание 3.2
//   return number ** 2;
// }

// let result = squareNumber(7);
// console.log(result);



// function age() {  // Задание 4
//     let personAge = Number(prompt('Сколько вам лет?'));
//     if (personAge < 0) {
//         alert('Вы ввели неправильное значение.');
//     } else if (personAge >= 0 && personAge <= 12) {
//         alert('Привет, друг!');
//     } else {
//         alert('Добро пожаловать!');
//     }
// }

// age()



// function multiplyNumbers(num1, num2) { // Задание 5
//     if (isNaN(num1) || isNaN(num2)) {
//         return 'Одно или оба значения не являются числом';
//     } else {
//         return num1 * num2;
//     }
// }

// let result = multiplyNumbers(14, 789);
// console.log(result);



// function threeNumber() {  // Задание 6
//     let num = Number(prompt('Введите число'));
//     if (isNaN(num)) {
//         return 'Переданный параметр не является числом';
//     } else {
//         return `${num} в кубе равняется ${num ** 3}`;
//     }
// }

// console.log(threeNumber())



// function getArea() {  // Задание 7
//     return Math.PI * this.radius * this.radius;
// }

// function getPerimeter() {
//     return 2 * Math.PI * this.radius;
// }

// const circle1 = {
//     radius: 5,
//     getArea,
//     getPerimeter
// };

// const circle2 = {
//     radius:10,
//     getArea,
//     getPerimeter
// };



function getSeason() {  // Задание 8
    let month = prompt('Введите номер месяца')
    if (month >= 3 && month <= 5) {
        return "Весна";
    } else if (month >= 6 && month <= 8) {
        return "Лето";
    } else if (month >= 9 && month <= 11) {
        return "Осень";
    } else if (month == 12 || month == 1 || month == 2) {
        return "Зима";
    } else {
        return "Неизвестное значение";
    }
}