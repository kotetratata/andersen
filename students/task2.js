class Group extends Array{

	attendance(surname){

		let attendList = [];

		let curStudentAttend;

		for(student of this){

			attendList.push(student.getAvAttend());

			if(student.surname === surname) curStudentAttend = student.getAvAttend();
		}

		if(arguments.length>0) return (1+attendList.sort((a,b)=>b-a).indexOf(curStudentAttend));

		return (attendList.reduce((acum,elem)=>acum+elem,0)/this.length);


	}

	perfomance(surname){

		let avMarkList = [];

		let curStudentAvMark;

		for(student of this){

			avMarkList.push(student.getAvMarks());

			if(student.surname === surname) curStudentAvMark = student.getAvMarks();
		}

		if(arguments.length>0) return (1+avMarkList.sort((a,b)=>b-a).indexOf(curStudentAvMark));

		return (avMarkList.reduce((acum,elem)=>acum+elem,0)/this.length);

	}

}


/////////////////////////////////////////////////////////

function Group(){}

Group.prototype.__proto__ = Array.prototype;


Group.prototype.attendance = function(surname){

		let attendList = [];

		let curStudentAttend;

		for(student of this){

			attendList.push(student.getAvAttend());

			if(student.surname === surname) curStudentAttend = student.getAvAttend();
		}

		if(arguments.length>0) return (1+attendList.sort((a,b)=>b-a).indexOf(curStudentAttend));

		return (attendList.reduce((acum,elem)=>acum+elem,0)/this.length);

}


Group.prototype.perfomance = function(surname){

		let avMarkList = [];

		let curStudentAvMark;

		for(student of this){

			avMarkList.push(student.getAvMarks());

			if(student.surname === surname) curStudentAvMark = student.getAvMarks();
		}

		if(arguments.length>0) return (1+avMarkList.sort((a,b)=>b-a).indexOf(curStudentAvMark));

		return (avMarkList.reduce((acum,elem)=>acum+elem,0)/this.length);
		
}