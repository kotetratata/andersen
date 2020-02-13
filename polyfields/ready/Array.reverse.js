Array.prototype.reverse = function(){

	let lastIndex = this.length-1;

	for (let i = 0; i < this.length/2; i++ ){
		[this[i],this[lastIndex-i]] = [this[lastIndex-i],this[i]];
	}

	return this;
}