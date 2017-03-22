function generar_tabla(){


	if (url.options[1].selected) {
		
		var dia = ["09:00", "10:00", "11:00", "11:30", "12:30", "13:30"];
		

		for (var i = 0; i < 6; i ++) {
	
			document.getElementById(i).innerHTML = dia[i] + "-" + dia[i+1];
		} 

}
		//La referencia
		 var body = document.getElementsByTagName("main")[0];

		 var tabla   = document.createElement("table");
		 tabla.setAttribute("id", "tabla2");

		 var tblBody = document.createElement("tbody");
		 


		 
		

		if(url.options[2].selected){

			var tardes = ["16:00", "17:00", "18:00", "18:30", "19:30", "20:30", "21:30"];

				for (var y = 0; y < 5; y++) {
					
					document.getElementById(y).innerHTML = tardes[y] + "-" + tardes[y+1];

				}
			}

		


			if(url.options[3].selected) {

				var dia = ["09:00", "10:00", "11:00", "11:30", "12:30", "13:30"];
				var tardes = ["16:00", "17:00", "18:00", "18:30", "19:30", "20:30", "21:30"];

				for (var x= 0; x < 5; x++){

					document.getElementById(x).innerHTML = dia[x] + "-" + dia[x+1];
				}

				

			for (var  w = 0; w < 3; w++) {
			var hilera = document.createElement("tr");
			
			var celda = document.createElement("td");
			var textoCelda = document.createTextNode(tardes[w]+"-"+tardes[w+1]);
			celda.setAttribute("id", w);
			celda.appendChild(textoCelda);
			hilera.appendChild(celda);
			tabla.appendChild(hilera);
			tblBody.appendChild(hilera);


			for(var j = 1; j < 6; j++){

				var celda1 = document.createElement("td");
			var textoCelda1 = document.createTextNode("");
			
			celda1.appendChild(textoCelda1);
			hilera.appendChild(celda1);
			tabla.appendChild(hilera);
			tblBody.appendChild(hilera);	
			celda1.setAttribute("id", "patio");

			}
			}
		
		}
			
			 
	
		

		tabla.appendChild(tblBody);
		body.appendChild(tabla);



}