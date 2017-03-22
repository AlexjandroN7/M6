<!-- clase triangulo
			lado1
			lado2
		metodos
			calcular area()
			calcular perimetro()
-->

function Rectangulo(lado1,lado2){

	this.lado1 = lado1;
	this.lado2 = lado2;
	this.area = area;
	this.perimetro = perimetro;
}

function area() {

	return this.lado1 * this.lado2 ;
}

function perimetro() {

	return	(2 * this.lado1) + (2 *this.lado2) ;
}