/*
 * #1
 *
 * Создайте переменные со значениями
 */
 // имя переменной: myNum, значение: 10
var myNum; 
myNum = 10;
 // имя переменной: myStr, значение: 'строка'
var myStr; 
myStr = 'строка';
 // имя переменной: myBool, значение: true
var myBool; 
myBool = true;
// имя переменной: myArr, значения: 1, 2, 3, 4, 5
var myArr;  
myArr = [1, 2, 3, 4, 5];
 // имя переменной myObj, значения: first: 'First Name', last: 'Last Name'
var myObj = {
 first:'First Name', 
 last:'Last Name'
}
console.log (myNum);
console.log (myStr);
console.log (myBool);
console.log (myArr);
console.log (myObj);
/*
 * #2
 *
 * Отформатируйте целое число, которое хранится в переменной myNum,
 * чтобы получить результат с 2 знаками после запятой.
 * Результат сохраните в переменную decimal2.
 */
var decimal2;
decimal2 = myNum.toFixed(2);
console.log(decimal2);
/*
 * #3
 *
 * Создайте переменную i для которой выполните префиксный
 * и постфиксный инкремент и декремент.
 * Поэкспериментируйте с результатами, выводя их в консоль.
 */

var i = 20;
console.log(i++);
console.log(i);
var i = 20;
console.log(++i);
var i = 20;
console.log(i--);
console.log(i);
console.log(--i);
/*
 * #4
 *
 * Создайте новую переменную myTest и присвойте ей значение 20.
 * Выполните присваивание с операцией, используя операторы: +=, –=, *=, /=, %=.
 * Результаты присваиваются в myTest, затем выводятся в консоль.
 * В вычислениях можно использовать объявленную ранее переменную myNum и/или числа.
 */

var myTest = 20;
myTest += myNum;
console.log(myTest);

var myTest = 30;
myTest -= myNum;
console.log(myTest);

var myTest = 40;
myTest *= myNum;
console.log(myTest);

var myTest = 50;
myTest /= myNum;
console.log(myTest);

var myTest = 60;
myTest %= myNum;
console.log(myTest);

/*
 * #5
 *
 * Используя свойства и методы объекта Math, присвойте переменным и отобразите в консоли
 */
myPi = Math.PI;// константа Pi → myPi
console.log(myPi);
myRound = Math.round(89.279);// округленное значение числа 89.279 → myRound
console.log(myRound);
myRandom = Math.random() * 10;// случайное число между 0..10 → myRandom
console.log(myRandom);
myPow = Math.pow(3,5);// 3 в 5 степени → myPow
console.log(myPow);
/*
 * #6
 *
 * Создайте объект с именем strObj.
 * Присвойте ключу str строку текста "Мама мыла раму, рама мыла маму", ключу length установите длину этой строки.
 */
var strObj = {
str: 'Мама мыла раму, рама мыла маму'
};
strObj.length = strObj.str.length;
console.log(strObj);

/*
 * #7
 *
 * Проверьте наличие текста 'рама' в поле str объекта strObj (см.п.6),
 * результат сохраните в переменную isRamaPos и выведите ее в консоль.
 */
var isRamaPos = strObj.str.indexOf('рама');
console.log(isRamaPos);
/*
 * #8
 *
 * Выполните переименование подстроки в строке.
 * В качестве исходной строки используйте значение поля str объекта strObj (см.п.6), результат сохраните в переменную strReplace и отобразите в консоли.
 * Исходная строка: 'Мама мыла раму, рама мыла маму'
 *       Результат: 'Мама моет раму, Рама держит маму'
 */
var strReplace = strObj.str.replace('мыла', 'моет');
strReplace = strReplace.replace('рама', 'Рама');
strReplace = strReplace.replace('мыла', 'держит');
console.log('strReplace:',strReplace);
/*
 * #9
 *
 * Преобразуйте любую строку в верхний, затем в нижний регистры, результат отобразите в консоли.
 */
var yourStr = 'любая строка';
console.log(yourStr.toUpperCase());
console.log(yourStr.toLowerCase());