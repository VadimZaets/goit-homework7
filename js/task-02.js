const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
const ulRef = document.querySelector('#ingredients');
const ingredientsItems = ingredients.map(ingr => {
  const list = document.createElement('li');
  list.textContent = ingr;
  return list;


});

ulRef.append(...ingredientsItems)
console.log(ulRef);
