
var editando = false;

function transformarEnEditable(nodo){
	//El no recibido es SPAN
	if(editand == false){
		var nodoTd = nodo.parentNode; //Nodo TD
		var nodoTr = nodoTd.parentNode; //Nodo TR
		var nodoContenedorForm = document.getElementById('ContenedorForm'); //Nodo DIV
		var nodosEnTr = nodoTr.getElementsByTagName('td');
		var alimento = nodosEnTr[0].textContent;
		var calorias = nodosEnTr[1].textContent;
		var grasas = nododsEnTr[2].textContent;
		var proteina = nododsEnTr[3].textContent;
		var carbohidratos = nododsEnTr[4].textContent;
		var opciones = nododsEnTr[5].textContent;
		var nuevoCodigoHtml = 
			'<td><input type="text" name="alimento" id="alimento" value="+alimento+" size="10"></td>'+
			'<td><input type="text" name="calorias" id="calorias" value="+calorias+" size="5"></td>'+
			'<td><input type="text" name="grasas" id="grasas" value="+grasas+" size="5"></td>'+
			'<td><input type="text" name="proteina" id="proteina" value="+proteina+" size="5"></td>'+
			'<td><input type="text" name="carbohidratos" id="carbohidratos" value="+carbohidratos+" size="5"></td><td>En edición</td>';

		nodoTr.innerHTML = nuevoCodigoHtml;

		nodoContenedorForm.innerHTML = 'Pulse Aceptar para guardar los cambios o cancelar para anularlos'+
		'<form name = "formulario" action="http://aprenderaprogramar.com" method="get" onsubmit="capturarEnvio()" onreset="anular()">'+
		editando="true";			
	}
	else{
		alert('Solo se puede editgar una línea. Recargue la página para poder editar otra');
	}
}