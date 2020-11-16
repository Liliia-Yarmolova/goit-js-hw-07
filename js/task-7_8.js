/*Задание 8 - дополнительное, выполнять не обязательно
Напиши скрипт создания и очистки коллекции элементов. Пользователь вводит количество элементов в input и 
нажимает кнопку Создать, после чего рендерится коллекция. При нажатии на кнопку Очистить, коллекция элементов очищается.

Создай функцию createBoxes(amount), которая принимает 1 параметр amount - число.
 Функция создает столько div, сколько указано в amount и добавляет их в div#boxes.

Каждый созданный div:

Имеет случайный rgb цвет фона
Размеры самого первого div - 30px на 30px
Каждый следующий div после первого, должен быть шире и выше предыдущего на 10px
Создай функцию destroyBoxes(), которая очищает div#boxes.*/

const inputRef = document.querySelector('input[type="number"]')
const btnRender = document.querySelector('button[data-action="render"]')
const btnDestroy = document.querySelector('button[data-action="destroy"]')
const boxesRef = document.querySelector('#boxes')

btnRender.addEventListener('click', renderElements)
btnDestroy.addEventListener('click', destroyBoxes )

function renderElements() {
    const countOfElements = inputRef.value;
    const divItemArr = []
     for (let i = 1; i <= countOfElements; i++){
        const divItem = document.createElement('div');
        divItem.style.width = i * 10 + 20 + 'px';
        divItem.style.height = i * 10 + 20 + 'px';
        divItem.style.background = randomColor()
         divItemArr.push(divItem)
 }
    boxesRef.append(...divItemArr)
}

function destroyBoxes() {
    boxesRef.textContent =''
}

function randomColor() {
    let r = ('0'+(Math.random()*256|0).toString(16)).slice(-2),
    g = ('0'+(Math.random()*256|0).toString(16)).slice(-2),
    b = ('0'+(Math.random()*256|0).toString(16)).slice(-2);
    return '#' +r+g+b;

}
