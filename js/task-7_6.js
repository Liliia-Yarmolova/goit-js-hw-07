/*Задание 6
Напиши скрипт, который бы при потере фокуса на инпуте, проверял его содержимое на правильное количество символов.
Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
Если введено подходящее количество, то border инпута становится зеленым, если неправильное - красным.
Для добавления стилей, используй CSS-классы valid и invalid.
*/

const inputRef = document.querySelector('#validation-input')

inputRef.addEventListener('blur', checkInput)

function checkInput(event) {  
 let checkLength = inputRef.getAttribute('data-length')
    let inputLength = event.target.value.length
    if (inputLength == checkLength) {
       event.target.classList.add('valid')
       event.target.classList.remove('invalid')
    } else {
       event.target.classList.add('invalid')
       event.target.classList.remove('valid')
   }
   
 }


