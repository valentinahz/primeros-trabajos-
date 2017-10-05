
function isValidCard () {
	var aswer = prompt ("Ingrese número "+ card);
	var card =[0123456789];

	for (var i = 0; i < card.length; i++) {
		var item = card.pop();
		card.splice(i, 0, item);       //invierte el numero según la formula de luhn
	}
	if ((card + card) % 10 === 0){
		return alert ("Tarjeta Valida"); // si mi variable es divisible por 10, y da 0 , retornar que es valida
	}else{
		return alert ("ERROR");          // sino da error
	}
}

    
    

