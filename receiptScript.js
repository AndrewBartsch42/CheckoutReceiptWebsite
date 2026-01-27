"use strict";

// define a function that gets an HTML element
function getElement(selector) { 
    return document.querySelector(selector);
}

function calculateButtonClick(event) {
    let error_occured = true;
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

    if (customer_name === "") {
        customerErr.textContent = "Required";
        error_occured = false;
    }
    else {
        customerErr.textContent = "";
    }

    if (grocery_item === ""){
        groceryErr.textContent = "Required";
        error_occured = false;
    } else {
        groceryErr.textContent = "";
    }

    if (unit_price_Str === ""){
        priceErr.textContent = "Required";
        error_occured = false;
    } else if (!Number.isFinite(unit_price)) {
        priceErr.textContent = "Must be numeric";
        error_occured = false;
    } else if (unit_price < 0) {
        priceErr.textContent = "Must be greater than 0"
        error_occured = false;
    } else {
        priceErr.textContent = "";
    }

    if (quantity_Str === ""){
        quantityErr.textContent = "Required";
        error_occured = false;
    } else if (!Number.isFinite(quantity)) {
        quantityErr.textContent = "Must be numeric";
        error_occured = false;
    } else if (quantity < 0){
        quantityErr.textContent = "Must be greater than 0";
        error_occured - false;
    } else if (!Number.isInteger(quantity)){
        quantityErr.textContent = "Must be a whole number";
    } else {
        quantityErr.textContent = "";
    }

    if (cash_Str === ""){
        cashErr.textContent = "Required";
        error_occured = false;
    } else if (!Number.isFinite(cash)) {
        cashErr.textContent = "Must be numeric";
        error_occured = false;
    } else if (cash < 0) {
        cashErr.textContent = "Must be greater than 0"
        error_occured = false;
    } else {
        cashErr.textContent = "";
    }
}

// add code that's run when the web page is loaded
document.addEventListener("DOMContentLoaded", () => {
    // specify the function that's run when the Join button is clicked
    getElement("#display_receipt").addEventListener("click", calculateButtonClick);
});



