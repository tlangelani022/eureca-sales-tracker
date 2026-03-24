let totalSales = 0;

let savedSales = JSON.parse(localStorage.getItem("sales")) || [];

let table;

window.onload = function(){

table = document.getElementById("salesTable");

savedSales.forEach(s =>
addRow(s.product, s.quantity, s.price)
);

}

function addSale(){

let product =
document.getElementById("product").value;

let quantity =
document.getElementById("quantity").value;

let price =
document.getElementById("price").value;

savedSales.push({
product, quantity, price
});

localStorage.setItem(
"sales",
JSON.stringify(savedSales)
);

addRow(product, quantity, price);

}

function addRow(product, quantity, price){

let total = quantity * price;

totalSales += total;

document.getElementById(
"totalSales"
).innerText = totalSales;

let row = table.insertRow();

row.insertCell(0).innerHTML = product;
row.insertCell(1).innerHTML = quantity;
row.insertCell(2).innerHTML = price;
row.insertCell(3).innerHTML = total;

let btn =
document.createElement("button");

btn.innerText = "Delete";

btn.onclick = function(){

totalSales -= total;

document.getElementById(
"totalSales"
).innerText = totalSales;

savedSales.splice(
row.rowIndex-1,1
);

localStorage.setItem(
"sales",
JSON.stringify(savedSales)
);

table.deleteRow(row.rowIndex);

};

row.insertCell(4).appendChild(btn);

}