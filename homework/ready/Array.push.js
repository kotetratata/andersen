Array.prototype.push = function (...arr){

	//code
	for (elem in arr){
		this[this.length] = arr[elem];
	}

	return this.length;
}