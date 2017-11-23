$(document).ready(function()
{
	$(".things").hide();

function Find your fit(){


	$("#Find your fit").show();
	$("#Social").hide();	
	$("#Location").hide();	
	$(".Find your fit").css("background-color", 'gold');
	$(".Social").css("background-color", '#868e96');
	$(".Location").css("background-color", '#868e96');
} 


function Location()
{
	$("#Location").show();
	$("#Find your fit").hide();
	$("#Social").hide();
	$(".Location").css("background-color", 'gold');
	$(".Hugo").css("background-color", '#868e96');
	$(".Find your fit").css("background-color", '#868e96');
}



function Social(){


	$("#Social").show();	
	$("#Location").hide();
	$("#Find your fit").hide();
	$(".Social").css("background-color", 'gold');
	$(".Find your fit").css("background-color", '#868e96');
	$(".Location").css("background-color", '#868e96');
} 



	
	$(".Location").click(Location);
	$(".Find your fit").click(Find your fit);
	$(".Social").click(Social);

});
