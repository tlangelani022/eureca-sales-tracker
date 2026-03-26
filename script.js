let totalProfit = 0;
let weekProfit = 0;
let monthProfit = 0;

let savedSales =
JSON.parse(localStorage.getItem("sales")) || [];

let products =
JSON.parse(localStorage.getItem("products")) || [];

let table;

window.onload = function(){

table =
document.getElementById("salesTable");

loadProducts();

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


// ---------- LOAD PRODUCTS ----------

function loadProducts(){

let select =
document.getElementById("product");

products.forEach(p => {

let option =
document.createElement("option");

option.text = p.name;

option.value = p.name;

option.setAttribute(
"data-cost",
p.cost
);

option.setAttribute(
"data-price",
p.price
);

select.appendChild(option);

});

select.onchange = function(){

let option =
select.options[
select.selectedIndex
];

let cost =
option.getAttribute("data-cost");

let price =
option.getAttribute("data-price");

document.getElementById("cost").value = cost;
document.getElementById("price").value = price;

};

}


// ---------- ADD SALE ----------

function addSale(){

let productSelect =
document.getElementById("product");

let product =
productSelect.options[
productSelect.selectedIndex
].text;

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


// ---------- ADD ROW ----------

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

let today = new Date();

let saleDate = new Date(date);

let weekAgo = new Date();
weekAgo.setDate(today.getDate() - 7);

let currentMonth =
today.getMonth();

if(saleDate >= weekAgo){

weekProfit += profit;

}

if(saleDate.getMonth() ==
currentMonth){

monthProfit += profit;

}

document.getElementById(
"totalSales"
).innerText = totalProfit;

document.getElementById(
"weekProfit"
).innerText = weekProfit;

document.getElementById(
"monthProfit"
).innerText = monthProfit;

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

table.deleteRow(
row.rowIndex
);

};

row.insertCell(6)
.appendChild(btn);

}


// ---------- NAVIGATION ----------

function logout(){

localStorage.removeItem("login");

window.location =
"login.html";

}

function report(){

window.location =
"report.html";

}

function products(){

window.location =
"product.html";

}