function Homem(){
	let opHomem = document.getElementById("hom").value;
	let result = document.getElementById("resultado").value;

	console.log (opHomem)

	if (opHomem) {
		if (result <= 19.9) {
			document.getElementById("status").value = "ABAIXO DO PESO";
		}
		else if ((result >= 20) && (result <= 24.9)) {
			document.getElementById("status").value = "NORMAL";
		}
		else if ((result >= 25) && (result <= 29.9)) {
			document.getElementById("status").value = "OBESIDADE I";
		}
		else if ((result >= 30) && (result <= 39.9)) {
			document.getElementById("status").value = "OBESIDADE II";
		}
		else if (result >= 40) {
			document.getElementById("status").value = "OBESIDADE III";
		}
	};
};


function Mulher(){
	let opMulher = document.getElementById("mul").value;
	let result = document.getElementById("resultado").value;

	if (opMulher) {
		if (result <= 18.9) {
			document.getElementById("status").value = "ABAIXO DO PESO";
		}
		else if ((result >= 19) && (result <= 23.9)) {
			document.getElementById("status").value = "NORMAL";
		}
		else if ((result >= 24) && (result <= 28.9)) {
			document.getElementById("status").value = "OBESIDADE I";
		}
		else if ((result >= 29) && (result <= 38.9)) {
			document.getElementById("status").value = "OBESIDADE II";
		}
		else if (result >= 39) {
			document.getElementById("status").value = "OBESIDADE III";
		}
	};
};


function calcular() {
	let altura = document.getElementById("altura").value;
	let peso = document.getElementById("peso").value; 
	let result = eval (peso / (altura * altura)).toFixed(1);
	document.getElementById("resultado").value = result;
}