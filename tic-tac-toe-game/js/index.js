$(document).ready(function() {
	var user = confirm("Escolha OK para 'O' ou Cancel para 'X'");
	$("button").click(function(){
		if(user == true){
			$(this).html("O");
		}else{
			$(this).html("X");
		}
	});
});