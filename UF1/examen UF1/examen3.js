window.onload=function valida(fecha){
      var fechasep = fecha.split("/");
      var dia = fechasep[0];
      var mes = fechasep[1];
      var any = fechasep[2];
      var date = new Date(any,mes,dia);
      if (mes <= 12 && dia <=31 && any <= 9999)
      {
      	return true;
      }
      else
      {
      	return false;
      }
}


var data = prompt('Escribe una fecha con este formato dd/mm/aaaa');

      if(valida(fecha) == true){
            alert("La fecha introducida es correcta.");

      }else{
            alert("La fecha introducida no existe.");
      }