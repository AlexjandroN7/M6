//escribir una funcion que coja un array de palabras y encuentre y imprima la mas larga
function array() {
    
    
    var palabras = ['Alejandro', 'Marc', 'Dani', 'Alvaro'];
    var palabralarga = '';
    
for(var i = 0; i < palabras.length; i++){
    
    if(palabras[i].length > palabralarga.length){
        
        palabralarga = palabras[i];
    }
}
    console.log(palabralarga);

}


//funcion codificar palabra que le pasamos un string y devuelve su version codificada
// 7 = T, 4 = A, 5 = S, 0 = O.

function codificarpalabra() {
    
    
    var palabra = ['A','T','O','S','I','G','A','R']
    var letra = '';
    
   for(var i = 0; i < palabra.length; i++) {
       

       if(palabra[i] == 'A') {
           letra=letra+'4';
       }
       else if(palabra[i] == 'T') {
           letra = letra+'7';
       }
       else if(palabra[i] == 'S') {
           letra = letra+ '5';
       }
       else if(palabra[i] == 'O'){
           letra = letra+'0';
       }
       else {
           letra = letra+palabra[i];
       }


     

   } console.log(letra);
}

function cambiarpalabra(palabra){

    var nuevaPalabra='';

    for(var i = 0; i<palabra.length;i++) {
        var letra = palabra[i];
        if(letra=='T') {
            nuevaPalabra=nuevaPalabra+'7';
        }
            if(letra=='A') {
            nuevaPalabra=nuevaPalabra+'4';
            }
            if(letra=='S') {
            nuevaPalabra=nuevaPalabra+'5';
            }
            if(letra=='O') {
            nuevaPalabra=nuevaPalabra+'0';
            }
        
        else { 
            nuevaPalabra=nuevaPalabra+palabra[i];
        }
    } console.log(nuevaPalabra);
            }


function saludoPersonal(nombre) {

	var hola = "Hola";

	function saludo() {
		return hola+nombre; }
return saludo;
	}
	

function saludo(){
	return hola+nombre;}
	typeof(diHola);

var heroe={raza :'tortuga', trabajo : 'Ninja'};

var perro = {
	nombre:'Benji',
	ladrar:function(){
		alert('GUAU');
	}
}

//Realizar un programa que permita cargar una dirección de mail
//e implementar una función que verifique si el String tiene cargado el caracter @. 

function arroba() {
var mail=prompt('ingresa un correo');
var cant=0;
var i;
for (i = 0; i<mail.length;i++) {
	if(mail.charAt(i)== '@') {
		cant++;
	}
}

if (cant!=0)
{
	document.write('el mail ' + mail + ' tiene arroba')
}
else{
	document.write('el mail ' + mail + ' no tiene arroba')
}
}







