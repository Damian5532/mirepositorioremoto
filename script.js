function showAlert() { alert ('Hola, este es una alerta desde Javascript!') } 
 
const form = document.getElementById('myForm');
form.addEventListener('submit', function(event) {
event.preventDefault();
validateForm();
});

function validateForm() {
    const emailInput = document.getElementById('email'); /*le habla al imput email*/
    const email = emailInput.value;
    if (!validateEmail(email)) {
    alert('Por favor ingrese un correo electrónico válido.');
    } else {
    alert('Correo electrónico enviado correctamente.');
    }
}

document.querySelector("button.button-menu-toggle")
.addEventListener("click", function(){
    document.querySelector(".nav-links").classList.toggle("nav-links-responsive")
})


