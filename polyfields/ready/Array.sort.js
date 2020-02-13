Array.prototype.sort = function (compareFunc){

	function defaultCompare(curVal,nextVal){

		if( String(curVal) > String(nextVal) ){
			
			return -1;

		}

	}
	if(typeof compareFunc === "function") defaultCompare = compareFunc;
	/////////
	let orderIn = 0;
	while(orderIn < this.length - 1 ){

		

		if( defaultCompare(this[orderIn],this[orderIn+1]) < 0 ){

			[this[orderIn] , this[orderIn+1]] = [this[orderIn+1] , this[orderIn]];

			orderIn = 0;

		}else{

			orderIn++;

		}
		


	}

	return this;

}
