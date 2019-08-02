
function createId() {
	const newId = "" + Math.random().toString(36).substr(2, 9);
	
	return newId;
}

function getDate() {
	const nowDate = new Date();
	const dayToday = nowDate.getDate();
	const monthToday = nowDate.getMonth()+1;
	const yearToday = nowDate.getFullYear();
	const fullDate = "" + dayToday+"-"+ monthToday + "-" + yearToday;

	return fullDate;
}

function isEmptyString(text){
	const replaceText = text.replace(/\s+/g," ").trim();
}

export {createId, getDate, isEmptyString};	