
const myGlobal = 'My Global';

function myFunction() {
	
	const myNumber = 'My Number';

	console.log(myGlobal);

	// Función interna
	function parent() {
		
		const inner = 'Inner';

		console.log(myGlobal);
		console.log(myNumber);

		// Función interna
		function child() {
		
		console.log(myGlobal);	
		console.log(myNumber);
		console.log(inner);
		}

		return child();
	}

	return parent();
}

myFunction();