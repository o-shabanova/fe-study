
function showMessage() {
    let sum = document.getElementById("inputdol").value;
    let discount = -1;
    if (sum < 500) discount = 1;
    if (sum >= 500) discount = 5;
    if (sum > 1000) discount = 10;
    alert("Your discount " + discount + "%")
    if (sum > 1000) {
        alert("Ви отримали сертифікат на 200 гривень!")
    }
}


