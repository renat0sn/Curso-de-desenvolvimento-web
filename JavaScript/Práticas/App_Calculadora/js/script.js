function entrada(char){
	if(char == 'C'){
		resetarVisor();
	}
	else{
		if(ehNumero(char)) 
			document.getElementById('visor').value += char;
		else if(ehNumero(ultimaTecla()))
			document.getElementById('visor').value += char;
	}
}

function ultimaTecla(){
	var caracteres = document.getElementById('visor').value;
	var tecla = caracteres.charAt(caracteres.length-1);

	return tecla;
}

function ehNumero(caracter){
	return !isNaN(parseInt(caracter));
}

function resetarVisor(){
	document.getElementById('visor').value = '';
}

function calcular(){
}
