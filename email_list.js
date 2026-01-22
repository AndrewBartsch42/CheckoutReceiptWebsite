"use strict";

// define a function that gets an HTML element
function getElement(selector) { 
    return document.querySelector(selector);
}

// define a function that handles the click event of the Join button
function joinButtonClick(event) {
    // get user entries from text boxes
    //const email1 = getElement("#email_1").value;
    //const email2 = getElement("#email_2").value;
    const customer_name = getElement("#customer_name").value;
    const grocery_item = getElement('#grocery_item').value;
    const unit_price = parseFloat(getElement('#unit_price').value);
    const quantity = parseInt(getElement('#quantity').value);
    const cash = parseFloat(getElement('#cash').value);
    console.log(customer_name);
    console.log(grocery_item);
    console.log(unit_price);
    console.log(quantity);
    console.log(cash);
    // check user entries
    let invalid = false;
    //if (email1 == "") { 
    //    getElement("#email_1_error").textContent = "Email is required.";
    //    invalid = true;
    //} else { 
    //    getElement("#email_1_error").textContent = ""; 
    //}
    if (customer_name == ""){
        getElement("#customer_name_error").textContent = "Customer name is required";
        invalid = true;
    } else {
        getElement("#customer_name_error").textContent = "";
    }

    if (grocery_item == ""){
        getElement("#grocery_item_error").textContent = "Grocery item is required";
        invalid = true;
    } else {
        getElement("#grocery_item_error").textContent = "";
    }

    if (unit_price.isNaN()){
        console.log("unit price is null");
        getElement("#unit_price_error").textContent = "Unit price must be a number and is required";
        invalid = true;
    } else {
        getElement("#unit_price_error").textContent = "";
    }

    if (quantity.isNaN()){
        console.log("quantity is null");
        getElement("#quantity_error").textContent = "Quantity must be a number and is required";
        invalid = true;
    } else {
        getElement("#quantity_error").textContent = "";
    }

    if (cash.isNaN()){
        console.log("cash is null");
        getElement("#cash_error").textContent = "Cash must be a number and is required";
        invalid = true;
    } else {
        getElement("#cash_error").textContent = "";
    }

    // cancel form submit if any user entries are invalid
    if (invalid) {
        event.preventDefault(); 
    }
};

// add code that's run when the web page is loaded
document.addEventListener("DOMContentLoaded", () => {
    // specify the function that's run when the Join button is clicked
    getElement("#display_receipt").addEventListener("click", joinButtonClick);
});