$(document).ready(function()
{
	$(".things").hide();

function Find_your_fit(){


	$("#Find_your_fit").show();
	$("#Social").hide();	
	$("#Location").hide();	
	$("#Vote").hide();
	$(".Find_your_fit").css("background-color", 'gold');
	$(".Social").css("background-color", '#868e96');
	$(".Location").css("background-color", '#868e96');
	$(".Vote").css("background-color", '#868e96');
} 


function Location()
{
	$("#Location").show();
	$("#Find_your_fit").hide();
	$("#Social").hide();
	$("#Vote").hide();
	$(".Location").css("background-color", 'gold');
	$(".Social").css("background-color", '#868e96');
	$(".Find_your_fit").css("background-color", '#868e96');
	$(".Vote").css("background-color", '#868e96');
}



function Social(){


	$("#Social").show();	
	$("#Location").hide();
	$("#Find_your_fit").hide();
	$("#Vote").hide();
	$(".Social").css("background-color", 'gold');
	$(".Find_your_fit").css("background-color", '#868e96');
	$(".Location").css("background-color", '#868e96');
	$(".Vote").css("background-color", '#868e96');
} 

function Vote(){


	$("#Vote").show();	
	$("#Social").hide();
	$("#Location").hide();
	$("#Find_your_fit").hide();
	$(".Vote").css("background-color", 'gold');
	$(".Social").css("background-color", '#868e96');
	$(".Find_your_fit").css("background-color", '#868e96');
	$(".Location").css("background-color", '#868e96');
} 



	
	$(".Location").click(Location);
	$(".Find_your_fit").click(Find_your_fit);
	$(".Social").click(Social);
	$(".Vote").click(Vote);

});
