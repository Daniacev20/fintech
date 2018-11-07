// colores para el fondo
var colores = ["red", "green", "blue", "yellow", "white", "black", "cyan", "magenta", "navy", "olive", "pink", "purple", "brown", "skyblue", "lightgreen", "gray"];
var llaveTituloDinamico = null;
var lado = null;

// botones
var btnCambiarFondo = document.getElementById("cambiar-fondo")
var btnNumerosPrimos = document.getElementById("n-primos")
var btnTituloDinamico = document.getElementById("titulo-dinamico")
var btnFormIntro = document.getElementById("form-intro")
var btnAgregarParrafo = document.getElementById("agregar-parrafo");

window.addEventListener("load", function() {
	btnCambiarFondo.addEventListener("click", function() {
		var color = colores[numeroRandom(0, colores.length - 1)];

		document.body.style.backgroundColor = color;
	});

	btnNumerosPrimos.addEventListener("click", function() {
		var anterior = parseInt(btnNumerosPrimos.innerHTML);
		var actual = parseInt(btnNumerosPrimos.innerHTML);
		
		if (actual < 3)  {
			btnNumerosPrimos.innerHTML = ++actual;
		}
		else {
			do {
				actual += 2;
				if (!(actual % parseInt(btnNumerosPrimos.innerHTML) == 0))
					btnNumerosPrimos.innerHTML = actual;
			} while (btnNumerosPrimos.innerHTML == anterior)
		}
	});

	btnTituloDinamico.addEventListener("click", function() {
		if (!llaveTituloDinamico) {
			llaveTituloDinamico = setInterval(function() {
				var titulo = document.getElementById("titulo");
				var texto = titulo.innerHTML.split("").shift();
				titulo.innerHTML = titulo.innerHTML.substring(1) + texto;
			}, 500);
		}
		else {
			clearInterval(llaveTituloDinamico);
			llaveTituloDinamico = null;
		}
	});

	btnFormIntro.addEventListener("click", function() {
		document.location = "formulario.html";
	});

	btnAgregarParrafo.addEventListener("click", function() {
		var texto = prompt("Ingrese texto de nuevo parrafo");
		var p = document.createElement("p");
		p.innerHTML = texto;
		document.body.appendChild(p);
	});
});

function numeroRandom(i, f) {
	return i + Math.floor((f - i + 1) * Math.random());
}