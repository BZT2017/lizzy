
$(document).ready(function(){
    $("#fullpage").fullpage({ 
    	'anchors':["page1","page2","page3","page4","page5","page6","page7"], 
    	'menu':$("#menu"),
    	'navigation':true,
		'resize':false,
		'afterRender':function(){
			var thisId = window.location.hash;
			if(thisId){
				$(thisId).addClass('active');
			}
		},
		'onLeave':function(index,nextIndex,direction){
			//alert("index:"+index+"  nextIndex:"+nextIndex+"  direction:"+direction);
			if(nextIndex==1){
	 			$("#nav_menu a").css("color","#fff");
			}else{
	 			$("#nav_menu a").css("color","#8585bf");
			}
		}
	});
});
