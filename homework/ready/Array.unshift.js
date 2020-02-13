Array.prototype.unshift = function (...arr){

  //code
  let newLen = this.length + arr.length;
  	  prevLen = this.length;

  for( let i = 1; i <= this.length; i++ ){

  	this[newLen-i] = this[prevLen-i];

  }

  for( let elem in arr){

  	this[elem] = arr[elem];
  }

  return newLen;
}