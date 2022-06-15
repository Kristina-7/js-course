//! Homework 2
// #1

// Создайте объект userObj, описывающий человека.
// Следующие поля обязательны:
/*
var userObj = {
  firstName: 'Kristina',
  lastName: 'Astashkina',
  age: 35,
  fullName: function () {
    return userObj.firstName + ' ' + userObj.lastName;
  }
} */


var userObj = {
  firstName: 'Kristina',// firstName – любое имя, строка
  lastName: 'Astashkina', // lastName – любая фамилия, строка
  age: 35, // age – любой возраст, число
  placeOfBrth: 'Donetsk',
  fullName() {
    return `${userObj.firstName} ${userObj.lastName}`;
  }
};
console.log(userObj);
console.log('-----------------------1');

// #2
//Для объекта из п.1 создайте метод fullName, который будет возвращать полное имя,
//состоящее из firstName и lastName, склеенных в строку через пробел.

/* Например:
* userObj.firstName ← 'Имя
* userObj.lastName ← Фамилия'
* userObj.fullName() → 'Имя Фамилия'.
*/
console.log(userObj.fullName());
console.log('-----------------------2');
//#3
// Дана функция defUpperStr('My text'), которая возвращает текст, преобразованный в верхний регистр, т.е:
// defUpperStr('My text') → 'MY TEXT'.
function defUpperStr(str) {
  return (str || 'Default text').toUpperCase()
};
console.log(defUpperStr('My text')); // MY TEXT
console.log(defUpperStr());          // DEFAULT TEXT
console.log('-----------------------3');

// Если функция вызывается без параметра defUpperStr(), она не должна возвращать undefined,
// в этом случае требуется вернуть строку текста по умолчанию в верхнем регистре, т.е:
// defUpperStr() → 'DEFAULT TEXT'.
// При выполнении задачи не используйте оператор if, требуется решение с логическим оператором ||.

// #4
// Создайте функцию evenFn(n), которая принимает параметром число – количество итераций цикла,
// т.е. for 0..n. Функция должна вернуть массив, состоящий только из четных значений, генерируемых в цикле.

// Причем:
// 0 не должен попадать в результирующий массив
// цикл должен работать до n включительно
// разрешен только оператор for
function evenFn(n) {
  var arr = [];
  for (i = 1; i <= n; i++) if (i % 2 === 0) arr.push(i);
  return arr;
}
console.log(evenFn(10));
console.log(evenFn(15));
console.log(evenFn(20));
console.log('-----------------------4');
/*
 * #5
 *
 * Создайте функцию weekFn(n), которая принимает номер дня недели, а возвращает его название.
 * Если вводится строка, любое дробное число или число вне диапазона 1..7 – функция должна вернуть null.
 *
 * Например:
 * 1 → 'Понедельник'
 * 2 → 'Вторник'
 * 7 → 'Воскресенье'
 * В реализации функции обязательно должны быть использованы операторы switch / case / default.
 */
/*
function weekFn(days) {
  var str = '';
  switch (days) {
    case 1: str = 'Понедельник'; break;
    case 2: str = 'Вторник'; break;
    case 3: str = 'Среда'; break;
    case 4: str = 'Четверг'; break;
    case 5: str = 'Пятница'; break;
    case 6: str = 'Суббота'; break;
    case 7: str = 'Воскресенье'; break;
    default: str = null;
  }
  return str;
} */
function weekFn(n) {
  var str = '';
  switch (n) {
    case 1: return 'Понедельник'; break;
    case 2: return 'Вторник'; break;
    case 3: return 'Среда'; break;
    case 4: return 'Четверг'; break;
    case 5: return 'Пятница'; break;
    case 6: return 'Суббота'; break;
    case 7: return 'Воскресенье'; break;
    default: return null;
  }

}
console.log(weekFn(1)); // 'Понедельник'
console.log(weekFn(3)); // 'Среда'
console.log(weekFn(7)); // 'Воскресенье'
console.log(weekFn(9)); // null
console.log(weekFn(1.5)); // null
console.log(weekFn('2')); // null
console.log('-----------------------5');
/*
 * #6
 *
 * создайте функцию ageClassification(n), которая будет в качестве параметра принимать любые числа
 * и возвращать строку согласно следующим условиям, n:
 *           менее 0 – null
 *             0..24 – 'детский возраст'
 *           24+..44 – 'молодой возраст'
 *           44+..65 – 'средний возраст'
 *           65+..75 – 'пожилой возраст'
 *           75+..90 – 'старческий возраст'
 *          90+..122 – 'долгожители'
 *         более 122 – null
 *
 * При выполнении задания допускается использовать только тернарный оператор ?.
 * Использование операторов if, switch – запрещено.
 */
function ageClassification(n) {
  return n <= 0 ? null : n <= 24 ? 'детский возраст' : n <= 44 ? 'молодой возраст' : n <= 65 ? 'средний возраст' : n <= 75 ? 'пожилой возраст' : n <= 90 ? 'старческий возраст' : n <= 122 ? 'долгожители' : null
};
/*
function ageClassification(age) {
  return age < 0 ? null
  :age <= 24 ? 'детский возраст' 
  :age <= 44 ? 'молодой возраст'
  :age <= 65 ? 'средний возраст' 
  :age <= 75 ? 'пожилой возраст'
  :age <= 90 ? 'старческий возраст'
  :age <= 122 ? 'долгожители' : null
  }*/
console.log('-1 :', ageClassification(-1)); // -1 : null
console.log('5 :', ageClassification(5)); // 5 : детский возраст
console.log('34 :', ageClassification(34)); // 34 : молодой возраст
console.log('50 :', ageClassification(50)); // 50 : средний возраст
console.log('65.1 :', ageClassification(65.1)); // 65.1 : пожилой возраст
console.log('80 :', ageClassification(80)); // 80 : старческий возраст
console.log('110 :', ageClassification(110)); // 110 : долгожители
console.log('130 :', ageClassification(130)); // 130 : null


//Блок тестирования:
console.log(1, ageClassification(-1) === null);
console.log(2, ageClassification(1) === 'детский возраст');
console.log(3, ageClassification(24) === 'детский возраст');
console.log(4, ageClassification(24.01) === 'молодой возраст');
console.log(5, ageClassification(44) === 'молодой возраст');
console.log(6, ageClassification(44.01) === 'средний возраст');
console.log(7, ageClassification(65) === 'средний возраст');
console.log(8, ageClassification(65.01) === 'пожилой возраст');
console.log(9, ageClassification(75) === 'пожилой возраст');
console.log(10, ageClassification(75.01) === 'старческий возраст');
console.log(11, ageClassification(90) === 'старческий возраст');
console.log(12, ageClassification(90.01) === 'долгожители');
console.log(13, ageClassification(122) === 'долгожители');
console.log(14, ageClassification(122.01) === null);
console.log(15, ageClassification(150) === null);
console.log('-----------------------6');


// #7
//  Создайте функцию oddFn(n), которая принимает параметром число – количество итераций цикла.
//  Функция должна вернуть массив, состоящий только из нечетных значений, генерируемых в цикле.
//  Причем:
// 0 не должен попадать в результирующий массив
//  цикл должен работать до n включительно разрешен только оператор while
function oddFn(n) {
  var arr = [];
  var i = 0;

  while (i++ < n) if (i % 2 !== 0) arr.push(i);
  return arr;
}


console.log(oddFn(10)); // [1, 3, 5, 7, 9]
console.log(oddFn(15)); // [1, 3, 5, 7, 9, 11, 13, 15]
console.log(oddFn(20)); // [1, 3, 5, 7, 9, 11, 13, 15, 17, 19]
console.log('-----------------------7');
/*
 * #8
 * Создайте основную функцию mainFunc(a, b, func), которая принимает три параметра:
 * a – число
 * b - число
 * func –  обрабатывающая параметры a и b, возвратная (callback) функция
 * Реализуйте проверку: если третьим параметром передается не функция, нужно вернуть false.
 */

/*
 * реализуйте следующие функции, которые будут осуществлять механизм callback в основной функции,
 * возвращая ей результат собственного вычисления...
 * для возведения в степень и получения произвольного значения можете воспользоваться методами объекта Math.
 */
/*
function mainFunc(a, b, cb){
  if  ( typeof cb === 'function') 
  {return cb(a,b);}
  else{
  return false;}
  } 
  */
function mainFunc(a, b, cb) {
  if (cb && typeof cb === "function") return cb(a, b);
  return false;
}
// cbRandom(a, b) – вычисляет и возвращает произвольное целое число в диапазоне между a и b включительно.
function cbRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
// cbPow(a, b) – вычисляет и возвращает результат возведения числа a в степень b.
function cbPow(num, pow) {
  return Math.pow(num, pow);
}
// cbAdd(a, b) – вычисляет и возвращает сумму двух чисел a и b.
function cbAdd(a, b) {
  return a + b;
}
/*
 * mainFunc() должна возвращать результат работы переданной ей возвратной функции, например:
 * mainFunc(2, 5, cbRandom) → случайно от 2 до 5 включительно
 * mainFunc(10, 30, cbRandom) → случайно 10..30 включительно
 * mainFunc(2, 5, cbPow) → 32
 * mainFunc(2, 5, cbAdd) → 7
 * mainFunc(2, 5, 'not a func') → false
 */

console.log(mainFunc(2, 5, cbRandom)); // целые числа в диапазоне 2..5
console.log(mainFunc(2, 5, cbPow)); // 32
console.log(mainFunc(2, 5, cbAdd)); // 7
console.log(mainFunc(2, 5, 'not a func')); // false