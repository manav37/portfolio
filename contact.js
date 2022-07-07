let items=document.querySelectorAll("a");
let name=document.getElementById("name");
let email=document.getElementById("email");
let submit=document.querySelector(".submit");

submit.addEventListener('click',function(){
	console.log(name.innerText);
	if(name.value!=='' && email.value!==''){
		if(email.value.includes('@') && email.value.includes(".com")){
			alert("Thank You for your submission");
		}
		else{
			alert("Invalid email");
		}
	}
})

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