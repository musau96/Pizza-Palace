
var Orders = function (size, crust, toppings, number, addition) {
    this.size = size;
    this.crust = crust;
    this.toppings = toppings;
    this.amount = number;
    this.comment = addition;
};
Orders.prototype.fullOrder = function () {
    return (
        this.amount +
        " " +
        this.size +
        ", " +
        this.crust +
        ",with( " +
        this.toppings +
        ") toppings. Comments: " +
        this.comment
    );
};
var toppingsArray = [
    "Mushrooms, onions, vegertarian",
    "cheese, sausage, shrimp",
    "spinanch, blackpeppers,blackolives",
    "mincedbeef, tomato,sauce,red pepper",
    "artichoke,ricorta,crispy bacon"
];
var sizePrice, crustPrice, toppingsPrice;
var totalPrice = [];
var sumTotal = 0;
function price(size, crust, toppings) {
    if (size === "Small") {
        sizePrice = 100;
        if (crust === "Thin Crust") {
            crustPrice = 40;
            if (toppings === toppingsArray[0] || toppings === toppingsArray[1]) {
                toppingsPrice = 100;
            } else if (
                toppings === toppingsArray[2] ||
                toppings === toppingsArray[4]
            ) {
                toppingsPrice = 120;
            } else if (
                toppings === toppingsArray[3] ||
                toppings === toppingsArray[5]
            ) {
                toppingsPrice = 80;
            }
        } else if (crust === "Thick Crust" || crust === "Stuffed Crust") {
            crustPrice = 40;
            if (toppings === toppingsArray[0] || toppings === toppingsArray[1]) {
                toppingsPrice = 50;
            } else if (
                toppings === toppingsArray[2] ||
                toppings === toppingsArray[4]
            ) {
                toppingsPrice = 80;
            } else if (
                toppings === toppingsArray[3] ||
                toppings === toppingsArray[5]
            ) {
                toppingsPrice = 80;
            }
        } else if (crust === "Pan Crust") {
            crustPrice = 30;
            if (toppings === toppingsArray[0] || toppings === toppingsArray[1]) {
                toppingsPrice = 100;
            } else if (
                toppings === toppingsArray[2] ||
                toppings === toppingsArray[4]
            ) {
                toppingsPrice = 120;
            } else if (
                toppings === toppingsArray[3] ||
                toppings === toppingsArray[5]
            ) {
                toppingsPrice = 80;
            }
        } else if (crust === "Deep Crust") {
            crustPrice = 40;
            if (toppings === toppingsArray[0] || toppings === toppingsArray[1]) {
                toppingsPrice = 50;
            } else if (
                toppings === toppingsArray[2] ||
                toppings === toppingsArray[4]
            ) {
                toppingsPrice = 120;
            } else if (
                toppings === toppingsArray[3] ||
                toppings === toppingsArray[5]
            ) {
                toppingsPrice = 80;
            }
        } else if (crust === "Cheese Filled Crust") {
            crustPrice = 150;
            if (toppings === toppingsArray[0] || toppings === toppingsArray[1]) {
                toppingsPrice = 100;
            } else if (
                toppings === toppingsArray[2] ||
                toppings === toppingsArray[4]
            ) {
                toppingsPrice = 120;
            } else if (
                toppings === toppingsArray[3] ||
                toppings === toppingsArray[5]
            ) {
                toppingsPrice = 80;
            }
        }
    } else if (size === "Medium") {
        sizePrice = 150;
        if (crust === "Thin Crust") {
            crustPrice = 200;
            if (toppings === toppingsArray[0] || toppings === toppingsArray[1]) {
                toppingsPrice = 100;
            } else if (
                toppings === toppingsArray[2] ||
                toppings === toppingsArray[4]
            ) {
                toppingsPrice = 120;
            } else if (
                toppings === toppingsArray[3] ||
                toppings === toppingsArray[5]
            ) {
                toppingsPrice = 80;
            }
        } else if (crust === "Thick Crust" || crust === "Stuffed Crust") {
            crustPrice = 80;
            if (toppings === toppingsArray[0] || toppings === toppingsArray[1]) {
                toppingsPrice = 100;
            } else if (
                toppings === toppingsArray[2] ||
                toppings === toppingsArray[4]
            ) {
                toppingsPrice = 120;
            } else if (
                toppings === toppingsArray[3] ||
                toppings === toppingsArray[5]
            ) {
                toppingsPrice = 80;
            }
        } else if (crust === "Pan Crust") {
            crustPrice = 60;
            if (toppings === toppingsArray[0] || toppings === toppingsArray[1]) {
                toppingsPrice = 100;
            } else if (
                toppings === toppingsArray[2] ||
                toppings === toppingsArray[4]
            ) {
                toppingsPrice = 120;
            } else if (
                toppings === toppingsArray[3] ||
                toppings === toppingsArray[5]
            ) {
                toppingsPrice = 80;
            }
        } else if (crust === "Deep Crust") {
            crustPrice = 40;
            if (toppings === toppingsArray[0] || toppings === toppingsArray[1]) {
                toppingsPrice = 100;
            } else if (
                toppings === toppingsArray[2] ||
                toppings === toppingsArray[4]
            ) {
                toppingsPrice = 120;
            } else if (
                toppings === toppingsArray[3] ||
                toppings === toppingsArray[5]
            ) {
                toppingsPrice = 80;
            }
        } else if (crust === "Cheese Filled Crust") {
            crustPrice = 150;
            if (toppings === toppingsArray[0] || toppings === toppingsArray[1]) {
                toppingsPrice = 100;
            } else if (
                toppings === toppingsArray[2] ||
                toppings === toppingsArray[4]
            ) {
                toppingsPrice = 120;
            } else if (
                toppings === toppingsArray[3] ||
                toppings === toppingsArray[5]
            ) {
                toppingsPrice = 80;
            }
        }
    } else if (sizePrice === "Large") {
        sizePrice = 250;
        if (crust === "Thin Crust") {
            crustPrice = 40;
            if (toppings === toppingsArray[0] || toppings === toppingsArray[1]) {
                toppingsPrice = 100;
            } else if (
                toppings === toppingsArray[2] ||
                toppings === toppingsArray[4]
            ) {
                toppingsPrice = 120;
            } else if (
                toppings === toppingsArray[3] ||
                toppings === toppingsArray[5]
            ) {
                toppingsPrice = 80;
            }
        } else if (crust === "Thick Crust" || crust === "Stuffed Crust") {
            crustPrice = 80;
            if (toppings === toppingsArray[0] || toppings === toppingsArray[1]) {
                toppingsPrice = 100;
            } else if (
                toppings === toppingsArray[2] ||
                toppings === toppingsArray[4]
            ) {
                toppingsPrice = 120;
            } else if (
                toppings === toppingsArray[3] ||
                toppings === toppingsArray[5]
            ) {
                toppingsPrice = 80;
            }
        } else if (crust === "Pan Crust") {
            crustPrice = 50;
            if (toppings === toppingsArray[0] || toppings === toppingsArray[1]) {
                toppingsPrice = 100;
            } else if (
                toppings === toppingsArray[2] ||
                toppings === toppingsArray[4]
            ) {
                toppingsPrice = 120;
            } else if (
                toppings === toppingsArray[3] ||
                toppings === toppingsArray[5]
            ) {
                toppingsPrice = 80;
            }
        } else if (crust === "Deep Crust") {
            crustPrice = 80;
            if (toppings === toppingsArray[0] || toppings === toppingsArray[1]) {
                toppingsPrice = 100;
            } else if (
                toppings === toppingsArray[2] ||
                toppings === toppingsArray[4]
            ) {
                toppingsPrice = 120;
            } else if (
                toppings === toppingsArray[3] ||
                toppings === toppingsArray[5]
            ) {
                toppingsPrice = 80;
            }
        } else if (crust === "Cheese Filled Crust") {
            crustPrice = 150;
            if (toppings === toppingsArray[0] || toppings === toppingsArray[1]) {
                toppingsPrice = 100;
            } else if (
                toppings === toppingsArray[2] ||
                toppings === toppingsArray[4]
            ) {
                toppingsPrice = 120;
            } else if (
                toppings === toppingsArray[3] ||
                toppings === toppingsArray[5]
            ) {
                toppingsPrice = 80;
            }
        }
    }
    var pricing = (sizePrice + toppingsPrice + crustPrice) * amount;
    console.log("pricing: " + pricing);
    totalPrice.push(pricing);
    console.log(totalPrice);
    if (totalPrice.length > 0) {
        for (var i = 0; i < totalPrice.length; i++) {
            sumTotal += totalPrice[i];
            console.log("sum " + sumTotal);
        }
    }
    return (sizePrice + toppingsPrice + crustPrice) * amount;
}

// UI LOGIC CODE
function resetInputs() {
    $("#size").val("");
    $("#crust").val("");
    $("#toppings").val("");
    $("#comment").val("");
    $("#num").val("");
}

var pizzaSize, pizzaCrust, pizzaToppings, comments, amount;
$(document).ready(function () {
    $("#order").click(function (event) {
        event.preventDefault();
        alert(
            "Please enter a new order, if this was your last... select deliver or reservation to proceed to checkout"
        );
        pizzaSize = $("#size").val();
        console.log(pizzaSize);
        pizzaCrust = $("#crust").val();
        console.log(pizzaCrust);
        pizzaToppings = $("#toppings").val();
        console.log(pizzaToppings);
        comments = $("#comment").val();
        console.log(comments);
        amount = $("#num").val();
        console.log(amount);

        var newOrder = new Orders(
            pizzaSize,
            pizzaCrust,
            pizzaToppings,
            amount,
            comments
        );

        $("ol#ordered").append(
            "<li><span>" + newOrder.fullOrder() + "</span></li>"
        );
        $("ol#prices").append(
            "<li><span>" +
            "cost: " +
            price(pizzaSize, pizzaCrust, pizzaToppings) +
            "ksh" +
            "</span></li>"
        );
        resetInputs();
    });
    $("#checkout").click(function () {
        $(".background").show();
        $("h5.grandprice").append(" sumTotal" + +"sum");
    });
    $("#chooseDeliver").click(function (event) {
        event.preventDefault();
        alert(
            "You will be charged ksh 200 for the pizza delivery. Click 'OK' to complete the ordering process"
        );
        $("#deliver").show();
        $("#chooseReservation").hide();
    });
    $("#chooseReservation").click(function (event) {
        event.preventDefault();
        alert(
            "You will be charged ksh 50 for reservation. Click 'OK' to complete the ordering process."
        );
        $("#reserve").show();
        $("#chooseDeliver").hide();
    });
    $("#submitDeliver").click(function (event) {
        event.preventDefault();
        alert("your order will be delivered to your location");
        $("#checkout").show();
    });
    $("#submitRes").click(function (event) {
        event.preventDefault();
        alert("your table has been reserved.");
        $("#checkout").show();
    });
});