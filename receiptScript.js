"use strict";

// define a function that gets an HTML element
function getElement(selector) { 
    return document.querySelector(selector);
}

function calculateButtonClick(event) {
    let error_occured = false;
    event.preventDefault();
    //reset of error text content fields
    customerErr.textContent = "*";
    groceryErr.textContent = "*";
    priceErr.textContent = "*";
    quantityErr.textContent = "*";
    cashErr.textContent = "*";

    //inputs
    const customer_name = document.querySelector("#customer_name").value.trim();
    const grocery_item = document.querySelector("#grocery_item").value.trim();
    const unit_price_Str = document.querySelector("#unit_price").value.trim();
    const quantity_Str = document.querySelector("#quantity").value.trim();
    const cash_Str = document.querySelector("#cash").value.trim();
    const unit_price = parseFloat(unit_price_Str);
    const quantity = parseInt(quantity_Str);
    const cash = parseFloat(cash_Str);
    // constant rates and money function
    const discount_rate = 0.10;
    const tax_rate = 0.0825;
    const money = (n) => n.toFixed(2);



    if (customer_name === "") {
        customerErr.textContent = "Required";
        error_occured = true;
    }
    else {
        customerErr.textContent = "";
    }

    if (grocery_item === ""){
        groceryErr.textContent = "Required";
        error_occured = true;
    } else {
        groceryErr.textContent = "";
    }

    if (unit_price_Str === ""){
        priceErr.textContent = "Required";
        error_occured = true;
    } else if (!Number.isFinite(unit_price)) {
        priceErr.textContent = "Must be numeric";
        error_occured = true;
    } else if (unit_price < 0) {
        priceErr.textContent = "Must be greater than 0"
        error_occured = true;
    } else {
        priceErr.textContent = "";
    }

    if (quantity_Str === ""){
        quantityErr.textContent = "Required";
        error_occured = true;
    } else if (!Number.isFinite(quantity)) {
        quantityErr.textContent = "Must be numeric";
        error_occured = true;
    } else if (quantity < 0){
        quantityErr.textContent = "Must be greater than 0";
        error_occured - true;
    } else if (!Number.isInteger(quantity)){
        quantityErr.textContent = "Must be a whole number";
    } else {
        quantityErr.textContent = "";
    }

    if (cash_Str === ""){
        cashErr.textContent = "Required";
        error_occured = true;
    } else if (!Number.isFinite(cash)) {
        cashErr.textContent = "Must be numeric";
        error_occured = true;
    } else if (cash < 0) {
        cashErr.textContent = "Must be greater than 0"
        error_occured = true;
    } else {
        cashErr.textContent = "";
    }

    if( error_occured == false){
        let subtotal = quantity * unit_price
        let discounted_amount = (subtotal >= 50) ? subtotal * discount_rate : 0;
        let tax = (subtotal - discounted_amount) * tax_rate
        let total = subtotal + tax
        //string templates
        const reciept = 
        `------- Reciept -------
        Customer: ${customer_name} 
        Item: ${grocery_item} 
        Unit Price: $${money(unit_price)} 
        Quantity ${quantity}
        ------------------------
        Subtotal: ${subtotal}
        Discount: -$${discounted_amount}
        Tax: ${tax}
        Total: ${total}
        ------------------------
        Cash: ${cash}
        Change: ${cash - total}`;
        alert(reciept)
    }
}

// add code that's run when the web page is loaded
document.addEventListener("DOMContentLoaded", () => {
    // specify the function that's run when the Join button is clicked
    getElement("#display_receipt").addEventListener("click", calculateButtonClick);
});



