var employee = new Employee('john');

// override function
Employee.prototype.getDetails = function() {
	return this.name.toUpperCase();
}

console.log( employee.getDetails() );


// object and prototype function
function Employee(name) {
	this.name = name;
}

Employee.prototype.getDetails = function() {
	return this.name;
}

