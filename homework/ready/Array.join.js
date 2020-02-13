Array.prototype.join = function (separator = ",") {

	let res = "";
	let length = 0;

	for(elem of this){

		if(elem === undefined || elem === null){
			
			elem = "";

		}else{

			elem = String(elem);

		}

		res += elem;
		length++;
		if(length < this.length){

			res += separator;
			
		}
	}

	return res;
}