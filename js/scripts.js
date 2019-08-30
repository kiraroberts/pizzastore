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
    $("#priceHider").show();
    var inputSize = parseInt($("#formSize").val());
    var inputCheese = parseInt($("#formCheese").val());
    var inputMeat = parseInt($("#formMeat").val());
    var inputVegetable = parseInt($("#formVegetables").val());
    var inputSauce = parseInt($("#formSauce").val());

    pizza1 = new Pizza();
    pizza1.addSize(inputSize);
    pizza1.addToppings(inputCheese, inputMeat, inputVegetable, inputSauce);
    var cost = pizza1.findCost();
    var finalPrice = pizza1.total;
    $("#displayCost").text(finalPrice)
  });
});
