global.__isDebugMode = true;		//console debug message νμ μ¬λΆ

var util = {};
  

util.log = function(msg) {
	if(__isDebugMode) console.log(msg);
}
	

util.userData = {
	username: "",
	name: "",
	email: ""
}

module.exports = util;