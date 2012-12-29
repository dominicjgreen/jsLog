function JS_Logger(logLevel,logArray){
	this.logLevel = logLevel;
	var urlParam = this.useUrl("log");
	if(urlParam!=false){
		this.logLevel = urlParam;
	}
	if(logArray === undefined){
		this.logArray;
		this.logLevel = false;
	}else{
		this.logArray = logArray;
	}
}
JS_Logger.prototype.useUrl = function(name){
 		name = name.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
 		var regexS = "[\\?&]"+name+"=([^&#]*)";
 		var regex = new RegExp( regexS );
 		var results = regex.exec( window.location.href );
 		 if( results == null )    return false;
 		else    return results[1];
}
JS_Logger.prototype.out = function (logNum,value){
	if(this.logLevel != false){
			console.log(this.compileMsg(logNum,value));
		}
	}
JS_Logger.prototype.error = function (logNum,value){
	if(this.logLevel != false){
			console.error(this.compileMsg(logNum,value));
		}
	}
JS_Logger.prototype.warn = function (logNum,value){
	if(this.logLevel != false){
			console.warn(this.compileMsg(logNum,value));
		}
	}
JS_Logger.prototype.info = function (logNum,value){
	if(this.logLevel != false){
			console.info(this.compileMsg(logNum,value));
		}
	}
JS_Logger.prototype.group = function (logNum){
	if(this.logLevel != false){
			console.group(this.compileMsg(logNum));
		}
	}
JS_Logger.prototype.groupEnd = function (){
	if(this.logLevel != false){
			console.groupEnd();
			}
	}
JS_Logger.prototype.compileMsg = function(logNum,value){
		if(value === undefined){
			value = "";
		}
		if(this.logArray[logNum]===undefined){
			return value;
		}else{
			return this.logArray[logNum]+" "+value;
		}
}