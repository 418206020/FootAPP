function creatTable() {
	console.log("新建数据库");
	websqlOpenDB();
	websqlCreatTable(websqlTable);
}

function insterData() {
	console.log("插入数据");
	websqlInsterDataToTable(websqlTable, "小明", "18", "175cm", "60kg");
	websqlInsterDataToTable(websqlTable, "小红", "17", "160cm", "45kg");
	websqlInsterDataToTable(websqlTable, "小强", "19", "185cm", "70kg");
}

function updateData() {
	console.log("修改数据");
	websqlUpdateAData(websqlTable, "小明", "1000")
}

function deleteAData() {
	console.log("删除一条数据");
	websqlDeleteADataFromTable(websqlTable, "小明");
}

function deleteAllData() {
	console.log("删除全部数据");
	websqlDeleteAllDataFromTable(websqlTable);
}

function selectAData() {
	console.log("查找一条数据");
	websqlGetAData(websqlTable, "小明");
}

function selectALlData() {
	console.log("查找全部数据");
	websqlGetAllData(websqlTable);
}
