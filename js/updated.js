function myFunction(size, crust, toppings,total) {
    this.size = size;
    this.crust = crust;
    this.toppings = toppings;
    this.total = total;
}

myFunction.prototype.ordered = function () {
    return "Your order summary is " + this.size + " " + this.crust + " " + this.toppings + " pizza";
}

function Address(street, estate, phoneNumber) {
    this.street = street;
    this.estate = estate;
    this.phoneNumber = phoneNumber;
}

Address.prototype.addressDetails = function () {
    return "Hello,we have received your oder and will be delivered at " + this.street + ", " + this.estate + " we'll reach you in the next couple of time. Remember:For delivery, An extra ksh.150 will be charged."
}

function PriceCalculation(priceOfSize, priceOfCrust, priceOfToppings) {
    this.priceOfSize = priceOfSize;
    this.priceOfCrust = priceOfCrust;
    this.priceOfToppings = priceOfToppings;
}

PriceCalculation.prototype.totalCost = function () {
    return "Your Order totals " + (this.priceOfSize + this.priceOfCrust + this.priceOfToppings);
}

$(document).ready(function () {

    $("#checkbox").click(function () {
        $("#delivery").show();

    });

    $("button#submit").click(function (event) {
     event.preventDefault();

        let pSize = $("#size option:selected").val();
        let pCrust = $("#crust option:selected").val();
        let pToppings = [];


        $.each($("input[name=toppings]:checked"),function(){
            pToppings.push($(this).val());
        })
       
        switch(pSize) {
            case "0":
                price = 0;
            case "Small":
                price = 300;
            case "Medium":
                price = 600;
            case "Large":
                price = 900;
            default:
                console.log("Error");
        }
       

        switch (pCrust) {
            case "0":
                c_price = 0;
            case "Crispy":
                c_price = 400;
            case "Stuffed":
                c_price = 450;
            case "Gluten-free":
                c_price = 500;
            default:
                console.log("Error");
        }
        
        topping_value = pToppings.length * 100;

        var street = $("input#street").val();
         var estate = $("input#estate").val();
         var phoneDetails = $("input#phoneDetails").val();

        let newAddress = new Address(street, estate, phoneNumber);
        alert(newAddress.addressDetails());
    })
})