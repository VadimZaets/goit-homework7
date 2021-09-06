const list = document.querySelector('#categories');
const allItem = list.querySelectorAll('.item');

allItem.forEach((item) => {
    const h2 = item.querySelector('h2');
    const array = item.querySelectorAll("li");
    console.log(`В списке ${allItem.length} категории.`);
    console.log(`Категория: ${h2.textContent}
    Количество элементов: ${array.length}`);
});