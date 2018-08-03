let pagination = document.querySelectorAll(".pagination");
let pageButton = document.querySelectorAll(".page-button");
let listContainer = document.querySelectorAll(".list-container");

startPagination();

function startPagination(){
	reset();

	pagination[0].children[0].style.background = "#FFDC00";
	pagination[1].children[0].style.background = "#FFDC00";
	listContainer[0].style.display = "block";
}

function reset(){
	for(let i=0; i<pageButton.length; i++){
		pageButton[i].style.background = "white";
	}
	for(let i=0; i<listContainer.length; i++){
		listContainer[i].style.display = "none";
	}
}

pagination[0].addEventListener("click" , changePage);
pagination[1].addEventListener("click" , changePage);

function changePage(x){
	if(x.target.className == "page-button"){
		reset();

		for(let i=0; i<pageButton.length/2; i++){
			if(x.target == pagination[0].children[i] || x.target == pagination[1].children[i]){
				listContainer[i].style.display = "block";
				pagination[0].children[i].style.background = "#FFDC00";
				pagination[1].children[i].style.background = "#FFDC00";
			}
		}
	}

	//console.log(x.target);
}





























