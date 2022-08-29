// Se usa para describir que las declaraciones de variables y funciones son desplazadas a la parte superior del scope más cercano, scope global o de función.
// Sucede solamente con las declaraciones y no con las asignaciones. 
// Con variables solo sucede con las declaradas con var.


// Cuando se llama a una variable que es declarada más abajo de donde se llama, su valor es undefined.
// Con la elevación de variables la variable queda: var variable;
console.log(nameOfDog);

var nameOfDog = 'Julia';

console.log(nameOfDog);



// Con funciones, cuando se llama una función que es declarada más abajo de donde se llama, es elevada y ejecutada normalmente.
dogs();

function dogs() {
	
	console.log(`El mejor perrito es: ${dog}`);
}


var dog = 'julia';