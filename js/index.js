		//找到id为dishStyleImg的div;
		var div01=document.getElementById("div01");
		var div02=document.getElementById("div02");
		var div03=document.getElementById("div03");
		var divbtn=document.getElementsByClassName("moreBtn")[0];
		//console.log(divbtn.firstElementChild);
		div01.style.display="block";
		div02.style.display="none";
		div03.style.display="none";
		cai01.onmouseover=begin;
		var secondbtn=divbtn.firstElementChild.nextElementSibling;
		//cai01.onmouseout=begin;
		div01.onmouseover=function(){
			divbtn.firstElementChild.style.border="1px solid #C40000";
		}
		div02.onmouseover=function(){
			secondbtn.style.border="1px solid #C40000";
		}
		div03.onmouseover=function(){
			divbtn.lastElementChild.style.border="1px solid #C40000";
		}
		cai01.onmouseover=function(){
			div01.style.display="block";
			div02.style.display="none";
			div03.style.display="none";
			divbtn.firstElementChild.style.border="1px solid #C40000";
			secondbtn.style.border="1px solid #666";
			divbtn.lastElementChild.style.border="1px solid #666";
		}
		cai02.onmouseover=function(){
			div01.style.display="none";
			div02.style.display="block";
			div03.style.display="none";
			divbtn.firstElementChild.style.border="1px solid #666";
			secondbtn.style.border="1px solid #C40000";
			divbtn.lastElementChild.style.border="1px solid #666";
		}
		//cai02.onmouseout=begin;
		cai03.onmouseover=function(){
			div01.style.display="none";
			div02.style.display="none";
			div03.style.display="block";
			divbtn.firstElementChild.style.border="1px solid #666";
			secondbtn.style.border="1px solid #666";
			divbtn.lastElementChild.style.border="1px solid #C40000";
		}
		//cai03.onmouseout=begin;
		function begin(){
			div01.style.display="block";
			div02.style.display="none";
			div03.style.display="none";
		}
