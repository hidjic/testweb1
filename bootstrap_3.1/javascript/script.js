window.onload = function(){
	var btn = document.getElementById('btnSubmit');
	btn.onclick = nextPage;
}

function nextPage(){
	console.log("next page...");
	var test = Math.floor((Math.random() * 2) + 0);
	
	if(test === 1){
		location.href = "allGood.html";
	}else{
		location.href = "error.html";
	}
    
}

