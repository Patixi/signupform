const submit = document.getElementById("submit__button1");
const validacion = /[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{2,5}/;
const email = document.querySelector(".input__email");
let alert = document.querySelector(".text__submit-alert");
const newScreen = document.querySelector(".success__conteiner");
const loginScreen = document.querySelector(".login__conteiner");



function validarCampos(e) {
e.preventDefault();    
if(validacion.test(email.value)) {
    loginScreen.classList.add("inactive");
    newScreen.classList.remove("inactive");
    email.classList.remove("error");
    document.querySelector(".success__description").innerHTML = `A confirmation email has been sent to: ${email.value}
    Please open it and click the button inside to confirm your subscription`;

}else {
    email.classList.add("error");
    alert.innerHTML = "Please, enter a valid email";
    alert.style.color = "red"; 
}};

submit.addEventListener("click",validarCampos);

email.addEventListener("focus",(e)=>{
email.classList.remove("error");
alert.innerHTML = "";
});




