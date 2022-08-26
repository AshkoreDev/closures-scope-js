function greeting() {
	
	let userName = 'Ana';
	console.log(userName);

	if (userName === 'Ana') {

		console.log(`Hola ${userName}`);
	}
}

greeting();
console.log(userName);

// La variable userName es accesible dentro de la función greeting y dentro del condicional if que está dentro de la función, pero no es accesible fuera de la función greeting.