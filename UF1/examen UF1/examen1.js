window.onload=function ex1() {


	var lista1 = [4,4,6];
	var lista2 = [3,6,6];
	var lista1g = 0;
	var lista2g = 0;

	for( i = 0; i<lista1.length; i++)
	{
		
		
			lista1g = lista1g + lista1[i];
		
		
			

	}

	for(j = 0; j<lista2.length;j++){

		lista2g = lista2g +lista2[j];
	}
		if(lista1g > lista2g)
		{
			document.write("La lista 1 es mayor");
		}
		else if(lista1g == lista2g)
		{
			document.write("las listas son iguales");
		}
		else
		{
			document.write("La lista 2 es mayor");
		}

}
