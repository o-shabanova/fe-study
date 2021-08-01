/* function checkAge(age) {
    if (age > 18) {
        return true;
    } else {
        // ...
        return confirm('Родители разрешили?');
    }
}
checkAge(19);
*/



/* function checkAge(age) {
    return (age > 18) ? true : confirm("Родители разрешили?");
}
checkAge(19);
*/



/* var ourFirstFunction = function () {
    alert("Привет, мир!");
};
ourFirstFunction();
*/

var sayHelloTo = function (name) {
    console.log("Привет, " + name + "!");
};
sayHelloTo("Olga");

var sayHelloMultipleTimes = function (howManyTimesToSay, whatToSay, name) {
    for (var i = 0; i < howManyTimesToSay; i++) {
        console.log(i + " " + whatToSay + name + "!");
    }
}
sayHelloMultipleTimes(3, "Hello,", "Olga")



var drawCats = function (howManyTimes) {
    for (var i = 0; i < howManyTimes; i++) {
        console.log(i + " =^.^=");
    }
};
drawCats(3);

var printMultipleTimes = function (howManyTimes, whatToDraw) {
    for (var i = 0; i < howManyTimes; i++) {
        console.log(i + " " + whatToDraw);
    }
};
printMultipleTimes(3, "=^.^=");

//наглядный пример для чего нужен return
/* function sum(a, b) {
    var sum = a + b;
    if (sum > 10) {
        return "Возврат по условию 1";
    } else if (sum < 5) {
        return "Возврат по условию 2";
    }
    return sum;
}
*/
var medalForScore = function (score) {
    if (score < 3) {
        return alert("Бронзовая");
    }
    if (score < 7) {
        return alert("Серебряная");
    }
    return alert("Золотая");
};
medalForScore(30);

var fifthLetter = function (name) {
    if (name.length < 5) {
        return alert("В Вашем имени меньше 5 букв");
    }
    return alert("Пятая буква вашего имени: " + name[4] + ".");
};
fifthLetter("Olga");