/*
1) Дан массив const arr = [1, 5, 7, 9] с помощью Math.min и spread оператора, найти минимальное число в массиве, решение задание должно состоять из одной строки
2) Напишите функцию createCounter, которая создает счетчик и возвращает объект с двумя методами: increment и decrement. Метод increment должен увеличивать значение счетчика на 1, а метод decrement должен уменьшать значение счетчика на 1. Значение счетчика должно быть доступно только через методы объекта, а не напрямую.

3) Напишем функцию, которая будет находить факториал числа с использованием рекурсии:
// примеры вызова функции
console.log(factorial(5)); // выводит 120 (5 * 4 * 3 * 2 * 1)
console.log(factorial(0)); // выводит 1 (по определению факториала)
*/

// Задача 1
const arr = [1, 5, 7, 9];
console.log(Math.min(...arr));

// Задача 2
const createCounter = (number) => {
  return {
    increment() {
      console.log(number + 1);
    },
    decrement() {
      console.log(number - 1);
    },
  };
};

const counter = createCounter(6);
counter.decrement(counter);
counter.increment(counter);

// Задача 3

function factorial(number) {
  if (number === 1 || number === 0) {
    return 1;
  }
  return factorial(number - 1) * number;
}

console.log(factorial(5)); // выводит 120 (5 * 4 * 3 * 2 * 1)
console.log(factorial(0)); // выводит 1 (по определению факториала)
console.log(factorial(1)); // выводит 1 (по определению факториала)
