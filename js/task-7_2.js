/*Задание 2
В HTML есть пустой список ul#ingredients.

<ul id="ingredients"></ul>
В JS есть массив строк.
Напиши скрипт, который для каждого элемента массива ingredients 
создаст отдельный li, после чего вставит все li за одну операцию в список ul.ingredients. 
Для создания DOM-узлов используй document.createElement(). */

const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const listRef = document.querySelector('#ingredients') 

const listItem = ingredients.map(ingredient => {
  const listItem = document.createElement('li');
  listItem.textContent = ingredient
  return listItem
})

listRef.append(...listItem)

    
// =========== Решение задачи через функцию ============
// const createListItem = (array) => array.map(item => {
//   const listItem = document.createElement('li');
//   listItem.textContent = item;
//   return listItem
// }) 

// const listItemRef=createListItem(ingredients)
// listRef.append(...listItemRef)