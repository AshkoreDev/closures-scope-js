// Cuando una variable se declara sin asignarle ningun valor, la variable es asignada con un valor undefined.
var firstName;
firstName = 'Alex';
console.log(firstName);


// Reasignación
var lastName = 'Ramirez';
lastName = 'Moreno';
console.log(lastName);


// Redeclaración y reasignación
var secondName = 'David';
var secondName = 'Jose';
console.log(secondName);


// Let
let fruit = 'apple'; // Declaración y asignación
fruit = 'kiwi'; // Reasignar
console.log(fruit);

// Con let no se puede redeclarar una variable
let fruit = 'banana'; 
console.log(fruit);


// Const
const animal = 'dog'; // Declaración y asignación
// Con const no se puede redeclarar ni reasignar una variable
// Si se agregan datos a un array con metodos de mutabilidad de un array si lo permite, ya que no está modificando el valor de la variable que se asignó como un array
animal = 'cat'; // Reasignación
const animal = 'snake'; // Redeclarar
console.log(animal);


