var add = function(a){
		return function(b){
			return function(c){
				return function(d){
					return a + b + c + d;					
				}
			}
		}
}

console.log(add(55)(1500)(2000)(950));