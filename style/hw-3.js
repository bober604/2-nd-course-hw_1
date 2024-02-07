let password = 'медуза'; // Задание 1
let question = prompt('Введите пароль');
question = question.toLocaleLowerCase(); // Уравняли заглавные и строчные буквы
if (question === password) {
    alert('Пароль введен верно');
} else {
    alert('Пароль введен неправильно');
}

let c = Number(prompt('Введите любое число больше 0 и меньше 10')) // Задание 2
if (c > 0 && c < 10) {
    console.log('Верно');
} else {
    console.log('Неверно');
}

let d = 1564 // Задание 3
let e = 14
if (d > 100 || e > 100) {
    console.log('Верно')
} else {
    console.log('Неверно')
}

let a = '2'; // Задание 4
let b = '3';
// Код выше изменять менять нельзя, чтобы решить задачу исправьте код ниже: 
alert(Number(a) + Number(b));

let monthNumber = prompt('Введите номер месяца'); // Задание 5
switch (monthNumber) {
    case '1':
        alert('Январь')
        break;
    case '2':
        alert('Февраль')
        break;
    case '3':
        alert('Март')
        break;
    case '4':
        alert('Апрель')
        break;
    case '5':
        alert('Май')
        break;
    case '6':
        alert('Июнь')
        break;
    case '7':
        alert('Июль')
        break;
    case '8':
        alert('Август')
        break;
    case '9':
        alert('Сентябрь')
        break;
    case '10':
        alert('Октябрь')
        break;
    case '11':
        alert('Ноябрь')
        break;
    case '12':
        alert('Декабрь')
        break;
    default:
        alert('Что-то не то')
        break;
}