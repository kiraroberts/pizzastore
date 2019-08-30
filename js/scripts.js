//BACK END
var pizza1;

function Pizza() {
  this.size = 0,
  this.toppings = [],
  this.total = 0
}

Pizza.prototype.addSize = function(size) {
  this.size = size;
}

Pizza.prototype.addToppings = function(cheese, meat, vegetable, sauce) {
  this.toppings.push(cheese, meat, vegetable, sauce);
}

Pizza.prototype.findCost = function() {
  var totalOfToppings = 0;
  this.toppings.forEach(function(i) {
    totalOfToppings += i;
  });
  this.toppings = 0;
  totalOfToppings += this.toppings;
  this.total = totalOfToppings + this.size;
}

//FRONT END

$(document).ready(function() {
  $("#formPizza").submit(function(event) {
    event.preventDefault();
    var inputSize = parseInt($("#formSize").val());
    console.log(inputSize);
    var inputCheese = parseInt($("#formCheese").val());
    console.log(inputCheese);
    var inputMeat = parseInt($("#formMeat").val());
    console.log(inputMeat);
    var inputVegetable = parseInt($("#formVegetables").val());
    console.log(inputVegetable);
    var inputSauce = parseInt($("#formSauce").val());
    console.log(inputSauce);

    pizza1 = new Pizza();
    // console.log(pizza1);
    pizza1.addSize(inputSize);
    // console.log(pizza1.size);
    pizza1.addToppings(inputCheese, inputMeat, inputVegetable, inputSauce);
    console.log(pizza1.toppings);
    var cost = pizza1.findCost();
    // console.log(pizza1.total);
    var finalPrice = pizza1.total;
    // console.log(finalPrice);


    $("#displayCost").text(finalPrice)
  });
});
