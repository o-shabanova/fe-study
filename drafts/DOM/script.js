

/* //Задача 1. Как найти?…

//1.Таблицу с id="age-table".
let tableElement = document.getElementById("age-table");
console.log(tableElement);
//2. Все элементы label внутри этой таблицы (их три).
document.querySelectorAll('#age-table label')
//3.Первый td в этой таблице(со словом «Age»).
document.querySelector('#age-table td')
//4. Форму form с именем name="search".
//document.getElementsByName('search')
//правильное решение
document.querySelector('form[name="search"]')
//5.Первый input в этой форме.
document.querySelector('form[name="search"] input')
//либо
document.querySelector('form input')
//6.Последний input в этой форме.
document.querySelectorAll('form[name="search"] input')[1]
//?почему не работает document.querySelectorAll('form[name="search"] input:last-child')
*/

//Задача 3.Напишите код, как получить…

//1.элемент<div>?
console.log(document.body.firstElementChild);
//2.<ul>?
//  alert(document.body.secondElementChild); ??
console.log(document.body.children[1]);
//второй <li> (с именем Пит)?
console.log(document.body.children[1].lastElementChild);



//Задача 2
// наброски
function countChildren() {
    alert(document.body.children.length);
}
countChildren();
