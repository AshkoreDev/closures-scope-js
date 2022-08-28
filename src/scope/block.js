function fruits() {
	
	if (true) {

		var fruit1 = 'apple'; // Function scope.
		let fruit2 = 'kiwi'; // Block scope.
		const fruit3 = 'banana'; // Block scope.

		console.log(fruit2);
		console.log(fruit3);
	}

	console.log(fruit1);
	console.log(fruit2);
	console.log(fruit3);
}

// La variable fruit1 es accesible fuera del condicional if, porque es una variable con function scope y al usar var permite acceder fuera del condicional if.

// Las variables fruit2  y fruit3  no son accesibles fuera del condicional if, porque son variables con block scope y solo son accesibles dentro del condicional if.