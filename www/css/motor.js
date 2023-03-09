var hist = 0;
var hist6 = 0;
var hist5 = 0;
var hist4 = 0;
var hist3 = 0;
var hist2 = 0;

function calcular() {


	var valor1 = parseFloat(document.getElementById("valor1").value);
	var valor2 = parseFloat(document.getElementById("valor2").value);
	var valor3 = parseFloat(document.getElementById("valor3").value);
	var valor4 = parseFloat(document.getElementById("valor4").value);
	var valor5 = parseFloat(document.getElementById("valor5").value);

	var vl6 = (valor2 * valor5) ;
	var vl7 = (valor3 * valor4) * valor1 ;
	var resultado = (vl7 / vl6) ;
	document.getElementById("resultado").innerHTML = "Resultado: " + resultado.toFixed(2);

}