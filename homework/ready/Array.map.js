Array.prototype.map = function (callback, thisArg){

	let res = [];

	if(arguments.length>1){ 

		for (let elem in this) {

			if(this[elem]===undefined) continue;

			res.push(callback.call( thisArg, this[elem], elem, this ));

		}

	}else{

		for (let elem in this) {

			if(this[elem]===undefined) continue;

			res.push(callback( this[elem], elem, this ));
		}

	}

	return res;	

}
