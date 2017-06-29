


$(document).ready(function() {
	$("body").keyup(function(e) {
		e.preventDefault();
		if(e.keyCode == 13) {
			var tarea = $("#tarea").val();
			if (tarea=="") {
				alert("No se ha ingresado tareas");
			} else {
				$("#lista").append("<form action='#'><input type='checkbox' id='test5'/><label for='test5'>" + tarea + "</label><a class='waves-effect waves-light btn right sacar'>remover</a></form>");
				$("#tarea").val("");
			}
		}

		$(".sacar").click(function(){
			$(this).parent().remove();
		})

		$("[type='checkbox']").click(function() {
			var p = $(this).parent("form");
			$("#terminado").append(p);
		})

		

	});

	

	
});