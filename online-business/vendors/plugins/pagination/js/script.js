$(document).ready(function(){
	$('#page-selection').bootpag({
            total: 100
        }).on("page", function(event, /* page number here */ num){
             $("#content").html("Insert content"); // some ajax content loading...
        });
});