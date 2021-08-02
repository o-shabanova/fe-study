let number = prompt('Вибери будь-яке число', '');

let checkArray = [];
let saveDublicateArray = [];
for (i = 0; i < number.length; i++) {
    let digit = number.charAt(i);
    if (checkArray.includes(digit)) {
        if (!saveDublicateArray.includes(digit)) {
            saveDublicateArray.push(digit);
        }
    } else {
        checkArray.push(digit);
    }
}
if (saveDublicateArray.length == 0) {
    alert('Немає однакових цифр.');
} else {
    for (j = 0; j < saveDublicateArray.length; j++) {
        // alert(`LENGTH ${foundArray[j]}!`); // Ти ввів число
        alert(`Цифра ${saveDublicateArray[j]} повторюється декілька разів.`);
    }
}