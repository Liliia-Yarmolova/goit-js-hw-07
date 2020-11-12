/*Задание 7
Напиши скрипт, который реагирует на изменение значения input#font-size-control (событие input) и 
изменяет инлайн-стиль span#text обновляя свойство font-size. В результате при перетаскивании ползунка будет меняться размер текста.*/

const inputFontRef = document.querySelector('#font-size-control')
const textRef = document.querySelector('#text')

inputFontRef.addEventListener('input', e => console.log(e))
// inputFontRef.addEventListener('input', decrement)


// console.log(textRef.style)
// console.log(inputFontRef.attributes)