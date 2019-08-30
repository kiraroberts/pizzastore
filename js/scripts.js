//BACK END

function Pizza() {
  this.size = 0,
  this.toppings = []
}

Pizza.prototype.addSize = function(size) {
  this.size = size;
}

Pizza.prototype.addToppings = function(topping) {
  this.toppings.push(topping);
}
