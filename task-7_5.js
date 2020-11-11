/*Задание 5
Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input),
подставляет его текущее значение в span#name-output. Если инпут пустой, в спане должна отображаться строка 'незнакомец'. */

const inputRef = document.querySelector('#name-input')
const nameToChange = document.querySelector('span')
inputRef.addEventListener('input', readInput)

function readInput(event) {  
        nameToChange.textContent = event.currentTarget.value;
}
    
