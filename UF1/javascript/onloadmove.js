function ventanaBienvenida()
{
  var ventana=open('','','status=yes,width=400,height=250');
  
  ventana.document.write("Bienvenido a este sitio.");
  ventana.moveTo(20,20);
}

function ventanaDespedida()
{
  var ventana=open('','','status=yes,width=400,height=250');
  
  ventana.document.write("Hasta siempre.");
    ventana.moveTo(500,500);
}
