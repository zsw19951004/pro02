//选择菜类，鼠标移入事件
$(".a1").mouseenter(function(){
					$(".a1").css({backgroundColor:"#C40000",
	color:"#fff"});
					
					$('[data-trigger="dropdown1"]').addClass("inner");
					
					
					$(".a2").removeClass("in");
					$('[data-trigger="dropdown2"]').removeClass("inner");
					$(".a3").removeClass("in");
					$('[data-trigger="dropdown3"]').removeClass("inner");
				
				})

$(".a2").mouseenter(function(){
					$(".a1").css({backgroundColor:"#fff",
	color:"black"});
					$(".a2").addClass("in");
					$('[data-trigger="dropdown2"]').addClass("inner");
					
					
					$(".a1").removeClass("in");
					$('[data-trigger="dropdown1"]').removeClass("inner");
					$(".a3").removeClass("in");
					$('[data-trigger="dropdown3"]').removeClass("inner");
				})
				

$(".a3").mouseenter(function(){
					$(".a1").css({backgroundColor:"#fff",
	color:"black"});
					$(".a3").addClass("in");
					$('[data-trigger="dropdown3"]').addClass("inner");
					
					
					$(".a1").removeClass("in");
					$('[data-trigger="dropdown1"]').removeClass("inner");
					$(".a2").removeClass("in");
					$('[data-trigger="dropdown2"]').removeClass("inner");
				})
//模块从右向左飞入效果
window.onload=function(){
	$("#body").addClass("hover");

}
//遮罩效果,鼠标移入时显示遮罩层
$(".a4").mouseenter(function(){
					$('[data-trigger="dropdown4"]').addClass("in");
				})
				$(".a4").mouseleave(function(){
					$('[data-trigger="dropdown4"]').removeClass("in");
				})
	
$(".a5").mouseenter(function(){
					$('[data-trigger="dropdown5"]').addClass("in");
				})
				$(".a5").mouseleave(function(){
					$('[data-trigger="dropdown5"]').removeClass("in");
				})
		
$(".a6").mouseenter(function(){
					$('[data-trigger="dropdown6"]').addClass("in");
				})
				$(".a6").mouseleave(function(){
					$('[data-trigger="dropdown6"]').removeClass("in");
				})
		
$(".a7").mouseenter(function(){
					$('[data-trigger="dropdown7"]').addClass("in");
				})
				$(".a7").mouseleave(function(){
					$('[data-trigger="dropdown7"]').removeClass("in");
				})
		
$(".a8").mouseenter(function(){
					$('[data-trigger="dropdown8"]').addClass("in");
				})
				$(".a8").mouseleave(function(){
					$('[data-trigger="dropdown8"]').removeClass("in");
				})
		
				$(".a9").mouseenter(function(){
					$('[data-trigger="dropdown9"]').addClass("in");
				})
				$(".a9").mouseleave(function(){
					$('[data-trigger="dropdown9"]').removeClass("in");
				})			

















