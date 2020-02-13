Array.prototype.pop = function (){
  //check
  if (this.length===0) return undefined;

  //code
  const popped = this[this.length-1];

  this.length = this.length-1;

  return popped;

}