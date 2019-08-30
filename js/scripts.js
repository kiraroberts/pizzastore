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
    var inputVegetable = parseInt($("#formVegetables").val());
    var inputSauce = parseInt($("#formSauce").val());

    pizza1 = new Pizza();
    console.log(pizza1);
    pizza1.addSize(inputSize);
    console.log(pizza1.size);
    pizza1.addToppings(inputCheese, inputMeat, inputVegetable, inputSauce);
    console.log(pizza1.toppings);
    var cost = pizza1.findCost();
    console.log(pizza1.total);
    var finalPrice = pizza1.total;


    $("#displayCost").text(finalPrice)
  });
});
