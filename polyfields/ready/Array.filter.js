Array.prototype.filter = function (callback, thisArg){

	let res = [];

	if(arguments.length>1){ 

		for (let elem in this) {

			if( this[elem] == undefined ) continue;

			if( callback.call( thisArg, this[elem], elem, this )) {

				res.push(this[elem]);

			}

		}

	}else{

		for (let elem in this) {

			if(this[elem]==undefined) continue;

			if(callback( this[elem], elem, this )) {

				res.push(this[elem])

			}

		}

	}

	return res;	

}
