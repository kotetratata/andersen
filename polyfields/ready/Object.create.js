Object.create = function (curProto,descObj){

	let obj = {};

	if( !(typeof curProto == "object") ) throw "first arg should be obj";

	Object.setPrototypeOf(obj, curProto);

	if(arguments.length>1){

		if( typeof descObj == "object"){

			for(let prop in descObj){
				Object.defineProperty(obj, prop, descObj[prop]);
			}

		}else{ throw "second arg should be descriptor object"}
	}

	return obj;

}