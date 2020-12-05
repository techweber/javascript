var obj = {
	num : 2
}

var add = function ( num2, num3, num4 ){
	return this.num + num2 + num3 + num4 ;
}

var arr = [ 3, 4, 5 ];

// Call method
console.log( add.call( obj, 3 , 4, 5 ) );


// Apply method
console.log ( add.apply( obj, arr ) );


// Bind method
var bound = add.bind ( obj );
console.log( bound( 3, 4, 5 ));