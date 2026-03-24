let totalProfit = 0;

let savedSales =
JSON.parse(localStorage.getItem("sales")) || [];

let table;

window.onload = function(){

table =
document.getElementById("salesTable");

savedSales.forEach(s => {

addRow(
s.product,
s.quantity,
s.cost,
s.price,
s.date
);

});

};

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

if(product == "") return;

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

document.getElementById(
"totalSales"
).innerText = totalProfit;

let row =
table.insertRow();

row.insertCell(0).innerHTML = product;
row.insertCell(1).innerHTML = quantity;
row.insertCell(2).innerHTML = cost;
row.insertCell(3).innerHTML = price;
row.insertCell(4).innerHTML = profit;
row.insertCell(5).innerHTML = date;

let btn =
document.createElement("button");

btn.innerText = "Delete";

btn.onclick = function(){

totalProfit -= profit;

document.getElementById(
"totalSales"
).innerText = totalProfit;

table.deleteRow(
row.rowIndex
);

};

row.insertCell(6).appendChild(btn);

}

function logout(){

localStorage.removeItem("login");

window.location = "login.html";

}

function report(){

window.location = "report.html";

}