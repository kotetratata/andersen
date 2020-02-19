 let todoItem = {

 	subject = "str", ////////строка название пункта

 	description = "str", //////////вспомогательная строка с описанием если нужно (уточняющее)

 	initDate = "date", ////////////////дата создания пункта

 	startDate = "date", ///////////ориентировочная дата начала

 	expiringDate = "date", ///////////////ориентировочная дата  окончания

 	priority = "num",/////////// приоритет задачи выраженый числом ( чем больше число тем выше приоритет)

 	/////////////////статус выполнения пункта
 	status = {
 		planned:true,
 		started:true,
 		finished:{
 			resolved:false,
 			failed:false
 		}
 	},

 	////////елементы управления каждого пункта
 	controls = {

 		changePriority(),
 		editStartDate(),
 		editExpiringDate(),
 		removeItem(),
 		clearStatus(),
 		markAsResolved(),

 	},
 	/////// хтмл структура
 	htmlFrame = {

 	}





 }