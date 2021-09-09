const singleEmpty = {
	"title": "",
	"type": "单选题",
	"options": [{
		"option": "",
		"blank": false
	}],
	"link": {
		"hasLink": false,
		"que": "0",
		"opt": "0"
	}
}
const multiEmpty = {
	"title": "",
	"type": "多选题",
	"options": [{
		"option": "",
		"blank": false
	}],
	"link": {
		"hasLink": false,
		"que": "0",
		"opt": "0"
	}
}
const fillEmpty = {
	"title": "",
	"type": "简答题",
	// 这里多个blank，不知道对后面有没有影响。
	"blank": "",
	"options": [{
		"option": "",
		"blank": false
	}],
	"link": {
		"hasLink": false,
		"que": "0",
		"opt": "0"
	}
}
const state = {
	"title": "",
	"type": "说明",
	"options": [{
		"option": "",
		"blank": false
	}],
	"link": {
		"hasLink": false,
		"que": "0",
		"opt": "0"
	}
}
var questionsSample = {
	"basic": {
		"name": "",
		"author": "",
		"date": "",
		"type": "queItem"
	},
	contents:[]
}

function DeepClone(obj) {
	let _obj = JSON.stringify(obj),
		objClone = JSON.parse(_obj);
	return objClone
}
