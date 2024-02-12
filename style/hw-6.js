// // задание 1
// const numbs = [1, 5, 4, 10, 0, 3];

// for (let i = 0; i < numbs.length; i++) {
//     if (numbs[i] === 10) {
//         console.log(numbs[i]);
//         break;
//     } else {
//         console.log(numbs[i]);
//     }
// }


// // Задание 2
// const n = [1, 5, 4, 10, 0, 3]

// n.forEach ((el, index) => {
//     if (el === 4) {
//         console.log(`${index}`);
//     }
// })


// // Задание 3
// let a = [1, 3, 5, 10, 20];
// a = a.join(' ');
// console.log(a);



// // Задание 4
// const rows = 3; // количество строк
// const cols = 3; // количество столбцов

// const multiArray = []; // создаем пустой массив

// // внешний цикл для создания строк
// for (let i = 0; i < rows; i++) {
//     const innerArray = []; // создаем вложенный массив для каждой строки
//     // внутренний цикл для создания элементов в каждой строке
//     for (let j = 0; j < cols; j++) {
//         innerArray.push(1); // добавляем в каждую строку элемент со значением 1
//     }
//     multiArray.push(innerArray); // добавляем внутренний массив во внешний массив
// }

// console.log(multiArray);

// // Это написал Чат gpt, задание не очень понятно написано,
// // поэтому я в течении 20 минут даже предположить не мог 
// // как его вообще выполнить, если можете, то объясните пожалуйста((



// // Задание 5
// const item = [1, 1, 1];

// item.push(2, 2, 2);
// console.log(item);



// // Задание 6
// const arr = [9, 8, 7, 'a', 6, 5];

// const filterArr = arr.filter(element => typeof element === 'number');
// filterArr.sort((a, b) => a - b);

// console.log(filterArr);



// // Задание 7
// const array = [9, 8, 7, 6, 5];
// const userGuess = parseInt(prompt('Угадайте число:'));

// if (array.includes(userGuess)) {
//     alert('Угадал');
// } else {
//     alert('Не угадал');
// }



// // Задание 8
// const string = 'abcdef';

// let arrString = string.split(''); // Разбиваем
// arrString = arrString.reverse(); // Разворачиваем
// arrString = arrString.join(''); // Объединяем
// console.log(arrString);



// // Задание 9
// const b = [[1, 2, 3],[4, 5, 6]];

// const c = b[0].concat(b[1]);
// console.log(c);


// // Задание 9 (альтернативное решение)
// const b = [[1, 2, 3],[4, 5, 6]];

// const c = b.flat();
// console.log(c);



// // Задание 10
// const numbers = [3, 7, 2, 9, 5, 4, 8, 1, 6, 10];

// for (let i = 0; i < numbers.length - 1; i++) {
//     const sum = numbers[i] + numbers[i + 1];
//     console.log(`Сумма элементов ${numbers[i]} и ${numbers[i + 1]}: ${sum}`);
// }



// // Задание 11
// const num = [14, 6, 7];

// const result = num.map((n) => {
//     return n * n;
// });
// console.log(result);



// // Задание 12
// function wordLengths(arr) {
//     // Создаем новый массив для хранения длин слов
//     const lengths = [];

//     arr.map((word) => {
//       lengths.push(word.length);
//     });

//     return lengths;
//   }

// const words = ['абзац','гороскоп','дежавю','','двенадцать'];
// const lengths = wordLengths(words);
// console.log(lengths);



// // Задание 13
// function filterPositive(array) {
//     const positiveNumbers = array.filter(number => number < 0);
//     return positiveNumbers;
//   }
  
// filterPositive([-1, 0, 5, -10, 56]); // => [-1, -10]
// filterPositive([-25, 25, 0, -1000, -2]); // => [-25, -1000, -2]