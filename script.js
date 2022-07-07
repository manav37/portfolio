let items=document.querySelectorAll("a");

Array.from(items).forEach(function(e){
	
	e.addEventListener('mouseover',function(){
		e.style.transition="all 1s";
		e.style.fontSize="30px";
		e.style.backgroundColor="white";
		e.style.color="black";
	})
	e.addEventListener('mouseout',function(){
		e.style.fontSize="20px";
		e.style.backgroundColor="black";
		e.style.color="white";
	})
})