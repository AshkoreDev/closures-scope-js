// El modo estricto permite ejecutar de forma estricta unas reglas para tener mucho mejor control de la asignación de una variable y algunos elementos clave para que el código cumpla con el mayor de los estándares.


// Variable que se asigna y no se declara. Automáticamente se declara como var debido al hoisting 
'use strict';
// Usando el modo estricto no permite que se haga eso, sino que se hagan las cosas como deberían ser. Funciona dentro de funciones.
pi = 3.1416;
console.log(pi);