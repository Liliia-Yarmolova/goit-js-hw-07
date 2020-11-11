/*Задание 4
Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

Создай переменную counterValue в которой будет хранится текущее значение счетчика.
Создай функции increment и decrement для увеличения и уменьшения значения счетчика
Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса */

let counterValue = 0;

function increment() {
    counterValue += 1
    showResult()
}

function decrement() {
    counterValue -= 1
 showResult()
} 

function showResult() {
    htmlValue.textContent = counterValue;
}

const buttonDecrement = document.querySelector('button[data-action="decrement"]')
const buttonIncrement = document.querySelector('button[data-action="increment"]')
const htmlValue = document.querySelector('#value')

buttonIncrement.addEventListener('click', increment)
buttonDecrement.addEventListener('click', decrement)


 