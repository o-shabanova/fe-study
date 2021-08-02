/* let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, '-', '='];
for (let i = 0; i < array.length; i++);
let digit = number.charAt(i);
*/
let dictionary = {
    "1": "!",
    "2": "@",
    "3": "#",
    "4": "$",
    "5": "%",
    "6": "^",
    "7": "&",
    "8": "*",
    "9": "(",
    "0": ")",
    "-": "_",
    "=": "+"
}
let input = prompt('Вибери будь-який символ від 1 до =', '');
let result = dictionary[input];
if (result == undefined) {
    alert('Oooops!');
} else {
    alert(result)
}



