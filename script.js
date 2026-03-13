let totalSales = 0;

function addSale(){

let product = document.getElementById("product").value;
let quantity = document.getElementById("quantity").value;
let price = document.getElementById("price").value;

let total = quantity * price;

totalSales += total;

document.getElementById("totalSales").innerText = totalSales;

let table = document.getElementById("salesTable");

let row = table.insertRow();

row.insertCell(0).innerHTML = product;
row.insertCell(1).innerHTML = quantity;
row.insertCell(2).innerHTML = price;
row.insertCell(3).innerHTML = total;

}