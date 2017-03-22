window.onload=function ex4() {
		var x = new Array ();
		var result = 1;
		y = prompt("Escribe un numero: ");

for(i = 0;i<y.length;i++)
		{
			y[i] = parseInt(y[i])
			x.push (y[i]);
			result *= x[i];

		}

		document.write(result);

}