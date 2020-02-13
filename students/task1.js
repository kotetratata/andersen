function Student (name,surname,age,marks){
	this.name = name;
	this.surname = surname;
	this.age = age;
	this.marks = marks||[0];
	this.attendance = new Array(25);  //или можно превент екстеншн но я захотел так попробовать
	this.attendance.check = 0;
}

Student.prototype.getAge = function(){
	return this.age;
}

Student.prototype.getAvMarks = function(){
	return (this.marks.reduce((sum,elem)=>sum+=elem)/this.marks.length);
}

Student.prototype.getAvAttend = function(){

	let visited = 0;
	
	for(day of this.attendance){

		if(day===undefined) break;
		if(day==="true") visited++;

	}

	let res = visited/this.attendance.check || 0;

	return res;

}

Student.prototype.present = function(){
	if(this.attendance.check<25){
		this.attendance[this.attendance.check] = "true";
		this.attendance.check++;
	}
}

Student.prototype.absent = function(){
		if(this.attendance.check<25){
		this.attendance[this.attendance.check] = "false";
		this.attendance.check++;
	}
}

Student.prototype.summary = function(){

	let avMark = this.getAvMarks();

	let avAttend = this.getAvAttend();

	return (avMark > 90 && avAttend > .9 ? "Ути какой молодчинка!" :
				avMark <= 90 && avAttend <= .9 ? "Редиска!" : "Норм, но можно лучше")

}



/////////////////////////////////////
class Student {

	constructor(name,surname,age,marks){
		this.name = name;
		this.surname = surname;
		this.age = age;
		this.marks = marks||[0];
		this.attendance = new Array(25);  //или можно превент екстеншн но я захотел так попробовать
		this.attendance.check = 0;

	}

	getAge(){
		return this.age;
	}

	getAvMarks(){
		return (this.marks.reduce((sum,elem)=>sum+=elem)/this.marks.length);
	}

	getAvAttend(){

		let visited = 0;
		
		for(let day of this.attendance){

			if(day===undefined) break;
			if(day==="true") visited++;

		}

		let res = visited/this.attendance.check || 0;

		return res;

	}

	present(){
		if(this.attendance.check<25){
			this.attendance[this.attendance.check] = "true";
			this.attendance.check++;
		}
	}

	absent(){
		if(this.attendance.check<25){
			this.attendance[this.attendance.check] = "false";
			this.attendance.check++;
		}
	}

	summary(){

		let avMark = this.getAvMarks();

		let avAttend = this.getAvAttend();

		return (avMark > 90 && avAttend > .9 ? "Ути какой молодчинка!" :
					avMark <= 90 && avAttend <= .9 ? "Редиска!" : "Норм, но можно лучше")

	}

}