
function formSubmitEvent() {

    let size = document.forms["mainForm"]["pizzaSize"].value;
    let topping = document.forms["mainForm"]["topping"].value;

    let total = 0;

    if (size == "small") {
        total = total + 7;
    } else if (size == "medium") {
        total = total + 10;
    } else if (size == "large") {
        total = total + 14;
    } if (topping == "no topping") {
        total = total + 0;
    } if (topping == "one topping") {
        total = total + 2;
    } if (topping == "2 toppings") {
        total = total + 3;
    }

    let ok = confirm("Calculate your order? ");

    if (ok) {
        alert("Your total price for pizza: " + total + ".");
    } else {
        alert("Your order was not submitted.");
    }
}


