let totalProfit = 0;
let monthProfit = 0;

let savedSales =
JSON.parse(localStorage.getItem("sales")) || [];

let table;

window.onload = function(){

table =
document.getElementById("salesTable");

savedSales.forEach(s =>
addRow(
s.product,
s.quantity,
s.cost,
s.price,
s.date
));

}

function addSale(){

let product =
document.getElementById("product").value;

let quantity =
document.getElementById("quantity").value;

let cost =
document.getElementById("cost").value;

let price =
document.getElementById("price").value;

let date =
document.getElementById("date").value;

savedSales.push({
product,
quantity,
cost,
price,
date
});

localStorage.setItem(
"sales",
JSON.stringify(savedSales)
);

addRow(
product,
quantity,
cost,
price,
date
);

}
function addRow(
product,
quantity,
cost,
price,
date
){

let profit =
(price - cost) * quantity;

totalProfit += profit;

let saleMonth =
date.substring(0,7);

let currentMonth =
new Date().toISOString().substring(0,7);

if(saleMonth == currentMonth){
monthProfit += profit;
}

document.getElementById(
"totalSales"
).innerText = totalProfit;

document.getElementById(
"monthProfit"
).innerText = monthProfit;

}

function report(){

window.location =
"report.html";

}