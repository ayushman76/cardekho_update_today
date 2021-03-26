var searchlist = document.querySelector(".mySearchList");

searchlist.addEventListener('onfocus',list);

function list(){
	if(searchlist.style.display === "none"){
		searchlist.style.display  ="none";
	}else{
		searchlist.style.display ="block";
	}
}