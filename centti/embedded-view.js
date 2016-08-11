$(document).ready(function(){
		$.ajaxSetup ({ cache: false });
		
		reloadData();
	
});
	
	
var timer_embedded_view;
	
function reloadData(){
	
	var id = $("#id").val();
	var t = $("#t").val();
	var c = $("#c").val();
	var o = $("#o").val();
	
	var cmd = "?command=embedded&action=load&id="+id+"&t="+t+"&c="+c+"&o="+o;
	$.get(cmd, function(data) {
		//var current_data = $("#departures-content").html();
			
		var data_cs = $(data).filter("#cs").val();
		var current_cs = $("#cs").val();
			
		var ct = $(data).filter("#ct").val();
		$("#ct-clock").html(ct);
			
		if(data_cs != current_cs){
			$("#departures-content").hide(); 
			$("#departures-content").html(data);
			$("#departures-content").fadeIn("slow");
		}
		
		var timeout = $(data).filter("#to").val();
			
		clearTimeout(timer_embedded_view);
		timer_embedded_view = setTimeout("reloadData()", timeout);
	});
}
	
	