// Un closure permite acceder al scope de una función exterior desde una función interior.
// Se crean cada vez que una función es creada y no son tan usados.
// Es una función dentro de otra función que utiliza variables de la función exterior, debe ser retornada dentro de la función exterior.


// Alcancía sin closure, no funciona porque no recuerda lo que tenia en la variable.
function moneyBox(coins) {
	
	let saveCoins = 0;
	saveCoins += coins;

	console.log(`Money box: ${saveCoins}`);
}

moneyBox(4);
moneyBox(5);
moneyBox(1);



// Alcancía con closure.
function moneyBoxClosure() {
	
	let saveCoins = 0;

	function countCoins(coins) {
		
		saveCoins += coins;
		console.log(`Money box: $${saveCoins}`);
	}

	return countCoins;
}

const myMoneyBox = moneyBoxClosure();

myMoneyBox(5);
myMoneyBox(5);
myMoneyBox(15);
myMoneyBox(30);


const moneyBoxAnna = moneyBoxClosure();

moneyBoxAnna(10);
moneyBoxAnna(20);

// La suma de cada instancia es diferente.