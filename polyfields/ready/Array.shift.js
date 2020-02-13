Array.prototype.shift = function (){

  //code
  let res = this[0];

  for( let i = 0; i < this.length - 1; i++ ){
  	this[i] = this[i+1];
  }

  this.length -= 1;

  return res;

}