Array.prototype.some = function (callback, thisArg){

	if(arguments.length>1){ 

		for (let elem in this) {

			if(this[elem]==undefined) continue;

			if( callback.call( thisArg, this[elem], elem, this )) return true;

		}
		
	}else{

		for (let elem in this) {

			if(this[elem]==undefined) continue;

			if(callback( this[elem], elem, this )) return true;

		}

	}

	return false;	

}


