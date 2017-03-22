/* cliente
		propiedades
			nombre
			saldo
	metodos
			depositar()
			extraer()
			*/

function Cliente(nombre,saldo,colordeojos) {
	
	this.nombre = nombre;
	this.saldo = saldo;
	this.depositar = depositar;
	this.extraer = extraer;
	this.colordeojos = colordeojos;
}

function depositar(dinero){

	this.saldo = this.saldo + dinero;
}

function extraer(dinero) {

	this.saldo = this.saldo - dinero;
}
function sabercolordeojos() {
	return this.colordeojos;
}

