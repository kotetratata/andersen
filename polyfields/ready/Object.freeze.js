Object.freeze = function(obj){

	for(key of Object.keys(obj)){

		if(Object.getOwnPropertyDescriptor(obj,key).hasOwnProperty("writable")) {

			Object.defineProperty(obj,key,{writable:false})

		}

		Object.defineProperty(obj,key,{configurable:false})

	}

	Object.preventExtensions(obj);

	return obj;
}