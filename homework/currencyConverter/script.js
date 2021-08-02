
function moneyConverter() {
    let money = document.getElementById("inputdol").value;

    let currency = document.getElementById("out").value;

    var result = money;
    let eur_multiplicator = 32.79;
    let hrn_multiplicator = 1;
    let usd_multiplicator = 27.45;

    if (currency == 'EUR') result = money / eur_multiplicator;
    else if (currency == 'USD') result = money / usd_multiplicator;
    else if (currency == 'UAH') result = money / hrn_multiplicator;
    document.getElementById("output").value = result.toFixed(2);

}
