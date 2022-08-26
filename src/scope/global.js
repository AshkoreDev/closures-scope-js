// Variables

var a; // Declarando.
var b = 'b'; // Declarando y asignando.
b = 'bb'; // Reasignando.
var a = 'aa'; // Redeclarando.


// Global Scope
var fruit = 'apple'; // Global
console.log(fruit);

function bestFruit() {
	
	console.log(fruit);
}

bestFruit();

// La variable fruit se puede leer tanto dentro de la función como fuera de la misma.




function countries() {
	
	country = 'Colombia'; // Asignar sin declarar.
	console.log(country);
}

countries();
console.log(country);

// La variable country pasa a ser global aunque no se haya declarado como global.