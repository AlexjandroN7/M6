/*formulario que tenga textbox para introducir 4 nombres que se van a guardar en una array nombres, despues hay un boton con un foreach y los imprimira en rojo.
*/
var nombres = new Array();

function obtenerDatos(){
	var inputs = document.getElementsByTagName("input");
	
	for( var i=0 ; i<inputs.length ; i++ ){
		nombres.push( document.getElementById("nom"+ (i +1)).value );
	}
}

function Organizar(arrTraI, i) {
	
	document.getElementById("imprimirDatos").innerHTML += "<span style=\"color: red;\">"+ arrTraI +"</span><br/>";
}