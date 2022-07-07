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


let listitems=document.querySelectorAll(".items");


for(let i=0;i<listitems.length;i++){
	listitems[i].addEventListener('mouseover',function(){
		listitems[i].style.transition="all 1s";
		
		listitems[i].style.backgroundColor="#ffff99";
		// listitems[i].style.color="yellow";
		listitems[i].style.transform="scale(1.1)";
	})
	listitems[i].addEventListener('mouseout',function(){
		listitems[i].style.transition="all 1s";
		
		listitems[i].style.backgroundColor="initial";
		listitems[i].style.color="black";
		listitems[i].style.transform="scale(1.0)";
	})
}

