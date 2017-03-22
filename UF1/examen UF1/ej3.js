function correcta(d,m,y){
	var c= false;
	if ((d>0 && d<=31) && (m>0 && m<=12) && y>0 ){		
		if (m==1||m==3||m==5||m==7||m==8||m==10||m==12){
			if (d<=31){
				c= true;
			}
		}else if (m==4||m==6||m==9||m==11){
			if (d<=30){
				c=true;
			}

		}else if (m==2){
			if (es_any_traspas(y)){
				if (d<=29){
					c=true;
				}
			}else{
				if (d<=28){
					c=true;
				}
			}
		}
	}
	return c;
}

function es_posterior(d1,m1,y1,d2,m2,y2){
	var posterior= false;

	if (y1<y2){
		posterior= true;
	}else if( y1==y2){
		if(m1<m2){
			posterior=true;
		}else if(m1==m2){
			if(d1<d2){
				posterior=true;
			}
		}
	}
	return posterior;
}

function es_any_traspas(a){
	if (a % 4==0){
		if(a%100==0){
			if (a%400==0){
				return true;
			}
			else{
				return false;
			}
		}else{
			return true;
		}
	}else{
		return false;
	}
}

function diaDeLaSemana(d1,m1,y1){
	var d = new Date(y1,m1,d1);
	var w=["Dilluns","Dimarts","Dimecres","Dijous","Divendres","Disapte","Diumenge"];
	return w[d.getDay()];
}

function diferenciaFechas(d2,m2,y2,d1,m1,y1){
	 var msf1 = Date.UTC(y1,m1-1,d1); 
	 var msf2 = Date.UTC(y2,m2-1,d2); 
	 var diferencia = msf1 - msf2;
	 var dias = Math.floor(diferencia / (1000 * 60 * 60 * 24)); 
	 return dias;
}

function fechas(){
	var correct= false;
	var d1;
	var m1;
	var y1
	var d2;
	var m2;
	var y2;

	while(!correct){
		d1= prompt("Introdueix un dia: ");
		m1= prompt("Introdueix un mes: ");
		y1= prompt("Introdueix un any: ");

		if (correcta(d1,m1,y1)){
			correct=true;
			alert("Aquest dia es: "+diaDeLaSemana(d1,m1,y1));
		}else{
			alert("Fecha incorrecte!")
		}
	}
	correct= false;
	while(!correct){
		d2= prompt("Introdueix un dia: ");
		m2= prompt("Introdueix un mes: ");
		y2= prompt("Introdueix un any: ");

		if (correcta(d2,m2,y2)){
			if(es_posterior(d1,m1,y1,d2,m2,y2)){
				correct=true;
				alert("Aquest dia es: "+diaDeLaSemana(d2,m2,y2));
				alert("Hi ha "+diferenciaFechas(d1,m1,y1,d2,m2,y2)+" dies de diferencia.");
			}
			else{
				alert("Fecha no posterior!");
			}
		}else{
			alert("Fecha incorrecte!")
		}
	}

}