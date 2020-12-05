var promise1 = new Promise(function(resolve, reject){
	isDbOperationCompleted = true;
	if(isDbOperationCompleted){
		resolve('Completed');
	} else {
		reject('Not Completed');
	}
});

promise1.then(function(result){
	console.log(result); // Output : Completed
}).catch(function(error){
	console.log(error); // if isDbOperationCompleted = false;
	// OUTPUT not completed
});

