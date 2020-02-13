Array.prototype.forEach = function (callback, thisArg){

	if(arguments.length>1){ 

		for (let elem in this) {

			if( this[elem] == undefined ) continue;

			callback.call( thisArg, this[elem], elem, this )

		}

	}else{

		for (let elem in this) {

			if(this[elem] == undefined) continue;

			callback( this[elem], elem, this )

		}

	}

	return;	

}
