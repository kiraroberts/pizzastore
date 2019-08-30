//BACK END

function Pizza() {
  this.size = 0,
  this.toppings = [],
  this.total = 0
}

Pizza.prototype.addSize = function(size) {
  this.size = size;
}

Pizza.prototype.addToppings = function(topping) {
  this.toppings.push(topping);
}

Pizza.prototype.findCost() {
  var totalOfToppings = 0;
  this.toppings.forEach(function(val) {
    totalOfToppings = totalOfToppings + val;
  });
  this.toppings += totalOfToppings;
  this.total = this.toppings + this.size;
}
