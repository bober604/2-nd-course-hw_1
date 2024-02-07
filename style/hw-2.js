let n = 20;
alert (n);

let Iphone = 'Январь 2007';
alert (Iphone);

let JS = 'Брендан Эйх';
alert (JS);

let n1 = 10;
let n2 = 2;
alert (n1+n2);
alert (n1-n2);
alert (n1*n2);
alert (n1/n2);

let degree = 2**5;
let result = degree;
alert(result);

let a = 9;
let b = 2;
let NewResult = 9%2;
alert(NewResult);

let num = 1;
num = num + 5;
num = num - 3;
num = num * 7;
num = num / 3;
num = num + 1;
num = num - 1;
alert(num);

let age = Number(prompt('Сколько вам лет?'));
alert(`${age} хороший возраст!`);

const user = { // const защищает от изменений только саму переменную user, а не её содержимое.
    name: String('Фёдор'),
    age: Number("97"),
    isAdmin: Boolean(true),
    "city of residence": 'Moscow',
};
user["city of residence"] = 'Omsk';
delete user["city of residence"]; // мы удалили строку с информацией о городе, поэтому в следующей строке будет выдавать undefined
let info = prompt("Какую информацию вы хотите узнать о пользователе?", "name", "age", "isAdmin", user["city of residence"]);
alert(user[info]);

let input = prompt('Введите ваше имя')
alert(`Привет, ${input}!`)