function greeting(name, age){
	console.log('Hello ' + name + ' Your age is ' + age);
}

function processUserInput(callback){
	name = 'John Doe';
	age  = 25;
	callback(name, age);
}

processUserInput(greeting);