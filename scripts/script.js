var vat;

var setup = function () {
    var country = document.getElementById("country").value;
    console.info("Country selected: " + country);

}

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('setup').addEventListener('click', setup, false);
    console.log("Setup completed :3");
}, false);



var vatConverter = function (price) {
    price = parseFloat(price);
    return (price * 1.2).toFixed(2).toString() + "€";
}

var prePrices = document.getElementsByClassName('price');
var preTotals = document.getElementsByClassName('total');

for (let i = 1; i < prePrices.length; i++) {
    if (prePrices[i].childNodes.length > 1) {
        prePrices[i].childNodes[9].textContent = prePrices[i].childNodes[1].textContent + " (" + vatConverter(prePrices[i].childNodes[1].textContent) + ")";
    } else {
    prePrices[i].textContent = prePrices[i].textContent + " (" + vatConverter(prePrices[i].textContent) + ")";
    }
}

for (let i = 0; i < preTotals.length; i++) {
    if (preTotals[i].textContent == "Total") {
        continue;
    } else {
    preTotals[i].textContent = preTotals[i].textContent + " (" + vatConverter(preTotals[i].textContent) + ")";
    }
}

console.log("VAT prices pushed ;)");

