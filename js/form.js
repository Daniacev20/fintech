// botones
var nombre = document.getElementById("nombre");
var edad = document.getElementById("edad");
var colores = document.getElementById("colores");
var btnContinuar = document.getElementById("continuar");
var btnVolver = document.getElementById("volver");

window.addEventListener("load", function() {
	btnContinuar.addEventListener("click", function() {
		if (nombre.value != "" && edad.value != "") {
			var opc = colores.options[colores.selectedIndex].innerHTML;
			alert("Mi nombre es " + nombre.value + ", tengo " + edad.valueAsNumber + " años y me gusta el " + opc + ".");
		}
		else {
			alert("Los campos nombre y edad son obligatorios.")
		}
	});

	btnVolver.addEventListener("click", function() {
		document.location = "index.html"
	});
});