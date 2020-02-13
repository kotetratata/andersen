Array.prototype.reduce = function (callback, initVal){
	
	let acum = arguments.length > 1 ? initVal : this[0];
	
	if(arguments.length>1) {acum = callback(acum,this[0],0,this)}
	
	
	for( let i = 1; i < this.length; i++){

		acum = callback(acum,this[i],i,this)
		

	}

	return acum;	

}
