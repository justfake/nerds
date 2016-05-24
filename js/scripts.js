var showLink = document.querySelector(".write-us");
var popup = document.querySelector(".modal-content");
var closeForm = popup.querySelector(".cancel");

var myName = popup.querySelector("[name=myname]");

	showLink.addEventListener("click", function(){
		popup.classList.add("modal-content-show");
		myName.focus();
	})

	closeForm.addEventListener("click", function(){
		popup.classList.remove("modal-content-show");
	})

window.addEventListener("keydown", function(event) {
	if(event.keyCode == 27) {
		if (popup.classList.contains("modal-content-show")) {
			popup.classList.remove("modal-content-show");
		}
	}
});


/*Активный пункт главного меню

var activeLink = document.querySelectorAll('.main-navigation a');
	

		activeLink.addEventListener('click', function(event){
			event.preventDefault();
			if (activeLink.classList.contains('active')) {
				console.log('test');
			} else {
				activeLink.classList.add('active');
			}
			
		});*/