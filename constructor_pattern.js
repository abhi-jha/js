var Task = function(data){
	this.name = data.name;
	this.completed = false;
}


Task.prototype.complete = function(){
		console.log('completing task: '+this.name);
		this.completed = true;
}
Task.prototype.save = function(){
		console.log('saving Task: '+ this.name);
}




module.exports = Task;



var k = function(param1, param2){
	this.param1 = param1;
	this.param2 = param2;
	this.toString = function(){
		return this.param1 + ' ' + this.param2;
	}
}