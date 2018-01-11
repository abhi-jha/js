var task = {};

task.title = 'title';
task.description = 'description';

console.log(task.title);

var anotherobject = Object.create(Object.prototype);

anotherobject.title = 'title';
anotherobject.description = 'description';

console.log(anotherobject.title);
console.log(anotherobject.description);

anotherobject.toString = function(){
	return this.title + ' ' + this.description;
}

console.log(anotherobject.toString());


var obj = new Object();
obj.title = 'title';
obj.description = 'description';

console.log(obj.title);
console.log(obj.description);

obj.toString = function(){
        return this.title + ' ' + this.description;
}

console.log(obj.toString());

console.log('Printing object o now');

var o = {
	title:"hello",
	lesson:"less",
	//toString: function(){
	//	return this.title+' '+this.lesson;
	//}
};

//console.log(o.toString());

Object.defineProperty(o,'toString',
{
	//value:"new hello",
	writable:false,
	enumerable:false,
	configurable:true,
	value : function(){
		return this.title+' '+this.lesson;
	}
});

//o.toString = 'he';
//console.log(o.toString());


Object.defineProperty(o,'toString',{configurable:'false'});

Object.defineProperty(o,'toString',{enumerable:'true'});

console.log(o.toString());
//console.log(Object.keys(o));
