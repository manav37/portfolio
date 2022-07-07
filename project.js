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


let projects=document.querySelector(".projects").children;
let h3=document.querySelectorAll("h3");
let initial1=h3[0].innerText;

let initial2=h3[1].innerText;
let back=document.querySelector(".back");

let text1="A fun and responsive Tic Tac Toe game";
let text2="A calculator made using HTML,CSS and Javascript";
Array.from(projects).forEach(function(e){
	e.addEventListener('mouseover',function(){

		e.style.transition="all 1s";
		
		e.style.backgroundColor="#6600ff";
		e.style.transform="scale(1.1)";
		e.style.display="flex";
		
		
		if(e==projects[0]){
			h3[0].style.color="yellow";
			h3[0].innerText=text1;
		}
		else{
			h3[1].style.color="yellow";
			h3[1].innerText=text2;
		}

	})
	e.addEventListener('mouseout',function(){
		e.style.transition="all 1s";
		e.style.backgroundColor="initial";
		e.style.transform="scale(1.0)";

		if(e==projects[0]){
			h3[0].style.color="black";
			h3[0].innerText=initial1;
		}
		else{
			h3[1].style.color="black";
			h3[1].innerText=initial2;
		}
		
	})
})
