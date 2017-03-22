window.onload = function ex2() {
	n = prompt("elige un numero del 1 al 10");
	
	
			document.write("<table border = 1px; ><tr><td>Producto</td><td>Resultado</td></tr>");
	for(i = 0 ; i <= 10; i++)
	{
		result = n * i;
		
		document.write("<tr><td>"+ n + "X" + i +"</td><td>"+ result +"</td></tr>");
	}
	document.write("</table>")
}