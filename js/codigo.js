// Put your custom code here
var storage = localStorage;

function refresh() {
	document.location.reload();
}

function save() {
	var key = $("#titulo").val();
	var value = $("#descripcionNota").val();
	storage.setItem(key, value);
}

function taskList() {
	var taskList = $("#idContenido");

	for ( var idPos = 0; idPos < storage.length; idPos++) {

		var key = storage.key(idPos);
		var value = storage.getItem(key);
		var listTitle = document.createElement("li");
		var list = document.createElement("li");

		listTitle.setAttribute("data-role", "list-divider");
		listTitle.setAttribute("role", "heading");
		listTitle.innerHTML = key + "<div class='foto' onclick ='eliminar("
				+ idPos + ");'>"
				+ "<img class='fotoEliminar' src='imagen/botonDelete.png'/>"
				+ "</div>";

		list.setAttribute("data-theme", "c");
		list.innerHTML = value;

		taskList.append(listTitle);
		taskList.append(list);
	}
}

function eliminar(idPos) {
	var deleteKey = storage.key(idPos);
	alert('Se ha borrado la nota guardada ' + deleteKey);
	localStorage.removeItem(deleteKey);
	refresh();
}