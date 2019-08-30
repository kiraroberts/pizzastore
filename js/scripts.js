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

Pizza.prototype.addToppings = function(toppingChoices) {
  this.toppings.push(toppingChoices);
}

Pizza.prototype.findCost = function() {
  var totalOfToppings = 0;
  this.toppings.forEach(function(val) {
    totalOfToppings = totalOfToppings + val;
  })
  this.toppings += totalOfToppings;
  this.total = this.toppings + this.size;
}

//FRONT END

$(document).ready(function() {
  $("#formPizza").submit(function(event) {
    event.preventDefault();
    var inputSize = parseInt($("#formSize").val());
    var inputCheese = parseInt($("#formCheese").val());
    var inputMeat = parseInt($("#formMeat").val());
    var inputVegetable = parseInt($("#formVegetable").val());
    var inputSauce = parseInt($("#formSauce").val());

    pizza1 = new Pizza();
    pizza1.addSize(inputSize);
    pizza1.addToppings(inputCheese, inputMeat, inputVegetable, inputSauce);
    var cost = pizza1.findCost();
    var finalPrice = pizza1.total;


    $("#displayCost").text(finalPrice)
  });
});
