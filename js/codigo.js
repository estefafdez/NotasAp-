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
    var container = document.getElementById("idContenido");
    container.textContent = "";
    for (var idPos = 0; idPos < storage.length; idPos++) {
        var key = storage.key(idPos);
        var title = document.createElement("li");
        var note = document.createElement("li");
        title.setAttribute("data-role", "list-divider");
        title.textContent = key;
        var button = document.createElement("button");
        button.type = "button";
        button.className = "foto";
        button.setAttribute("aria-label", "Eliminar nota " + key);
        var image = document.createElement("img");
        image.className = "fotoEliminar";
        image.src = "imagen/botonDelete.png";
        image.alt = "Eliminar";
        button.appendChild(image);
        (function(noteKey) {
            button.addEventListener("click", function() {
                storage.removeItem(noteKey);
                refresh();
            });
        })(key);
        title.appendChild(button);
        note.setAttribute("data-theme", "c");
        note.textContent = storage.getItem(key);
        container.appendChild(title);
        container.appendChild(note);
    }
}

function eliminar(idPos) {
	var deleteKey = storage.key(idPos);
	alert('Se ha borrado la nota guardada ' + deleteKey);
	localStorage.removeItem(deleteKey);
	refresh();
}
