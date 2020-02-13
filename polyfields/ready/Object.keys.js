Object.keys = function(obj) {

	let res = [];

	for(key in obj){

		if(obj.hasOwnProperty(key)){

			res.push(key)
		}
	}

	return res;
}