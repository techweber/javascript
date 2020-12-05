function Bike(model, color){
	this.model = model,
	this.color = color
}

Bike.prototype.getDetails = function(){
	return this.model + ' bike is ' + this.color;
}

var bike1 = new Bike('BMW','BLUE')
var bike2 = new Bike('MERCEDES','RED')

console.log(bike1.__proto__ === Bike.prototype);

//console.log(bike1.getDetails());
//console.log(bike2.getDetails());


// dunder proto or __proto__