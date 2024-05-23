
  
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


    setTimeout(function(){
        //Reset everything after success message
        $(btn).removeClass("successBtn")
        btn.innerHTML = "Absenden";

        $(form).removeClass("was-validated");
        form.reset();

        vorname.value = "";
        nachname.value = "";
        email.value = "";
        message.value = "";

    }, 4000);
}

// Set copyright year
function setCopyrightYear() {
  var div = document.getElementById("copyright");
  div.textContent += new Date().getFullYear();
  div.textContentt += "asdasd";
}

setCopyrightYear();