

(() => {
	'use strict';

	// Fetch all the forms we want to apply custom Bootstrap validation styles to
	const forms = document.querySelectorAll('.needs-validation');
	const contactSuccAlert = document.querySelectorAll('.contactSuccesAlert');

	// Loop over them and prevent submission
	Array.prototype.slice.call(forms).forEach((form) => {
		form.addEventListener('submit', (event) => {
			if (!form.checkValidity()) {
				event.preventDefault();
				event.stopPropagation();
			}
			form.classList.add('was-validated');
		}, false);
	});
})();


function successMessage() {
	var form = document.querySelector('#contactForm');

	valid = true;
	console.log(form.classList);

	if (!form.checkValidity()) {
		valid = false;
		console.log(form + " false");
	} else {
		console.log(form + " true");
	}


	if (valid) {
		//alert("Nachricht erfolgreich gesendet.");
		changeBtnColor();

	}

	console.log("output of is-valid: " + valid);
	console.log("________________________");

}

function changeBtnColor() {
	var btn = document.querySelector('#submitButton');
	var form = document.querySelector('#contactForm');
	var vorname = document.querySelector('#vorname');
	var nachname = document.querySelector('#nachname');
	var email = document.querySelector('#email');
	var message = document.querySelector('#message');


	$(btn).addClass("successBtn");
	btn.innerHTML = "Nachricht erfolgreich gesendet!";


	setTimeout(function () {
		//Reset everything after success message
		$(btn).removeClass("successBtn");
		btn.innerHTML = "Absenden";

		$(form).removeClass("was-validated");
		form.reset();

		vorname.value = "";
		nachname.value = "";
		email.value = "";
		message.value = "";

	}, 4000);
}





// ================================= Hilfefunktionen =================================
function updateHeroHeight() {
	var heroHeight = document.getElementById('hero').offsetHeight;
	var heroBG = document.getElementsByClassName("hero-background");
	var heroGrad = document.getElementsByClassName("hero-gradient");

	console.log(heroHeight);
	console.log(heroBG);
	console.log(heroGrad);

	for(var i=0;i<heroGrad.length;i++){
		heroGrad[i].style.height = heroHeight + "px";
	}

	for(var i=0;i<heroBG.length;i++){
		heroBG[i].style.height = heroHeight + "px";
	}
}




(function (window, document, undefined) {

	// code that should be taken care of right away

	window.onload = init;

	function init() {
		// the code to be called when the dom has loaded
		

		// update variables on resize
		window.addEventListener('resize', function (event) {
			console.log('resized');
			updateHeroHeight()
		});

		updateHeroHeight()

		// ============= Scroll-in Viewport Animation =============
		$(document).on("scroll", function () {
			var pageTop = $(document).scrollTop();
			var pageBottom = pageTop + $(window).height();
			var tags = $(".scroll-fade-in"); //war mal ".tag"
		
			var width = (window.innerWidth > 0) ? window.innerWidth : screen.width; // Device screen size
		
			for (var i = 0; i < tags.length; i++) {
				var tag = tags[i];
				if ($(tag).position().top < pageBottom) {
					$(tag).addClass("visible");
				} else {
					$(tag).removeClass("visible"); //hiermit animiert es immer wieder
				}
			}
		});

		// ============= Navbar Platzhalter =============
		//sets the placeholder to the height of the navbar
		//const navbar = document.querySelector('#navbar');
		//var newHeight = navbar.clientHeight * 2.2;
		//document.querySelector('.placeholderNavbar').setAttribute("style","height:" + newHeight + "px;");

		// ============= Navbar Schließen =============
		/// When you click everywhere in the document
		$(document).click(function (event) {
			/// If *navbar-collapse* is not among targets of event
			if (!$(event.target).is('.navbar-collapse *')) {

				/// Collapse every *navbar-collapse*
				$('.navbar-collapse').collapse('hide');

			}
		});
	}

})(window, document, undefined);


function closeNavbar() {
	$('.navbar-collapse').collapse('hide');
}


// ================================= Dropdown =================================
function showGenre(item) {
	document.getElementById("dropdownContact").innerHTML = item.innerHTML; //Changes the shown selected Reason
}  

