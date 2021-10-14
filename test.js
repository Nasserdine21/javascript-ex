const form = document.forms;
const email = document.getElementById('mail');
const fname = document.getElementById("fname");
const cin   = document.getElementById("cin");
let label   = document.getElementsByTagName("label");
const niveau = document.getElementById("flexRadioDefault1");
niveau.checked = true;
const regex =  /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)$/;


form[0].addEventListener('submit' ,(e) => {



 if(!regex.test(email.value)){
    label[0].innerHTML = "Email not correct !!";
    label[0].classList.add("error_message");
    email.classList.add("border_error");
    e.preventDefault();

}

else{
    label[0].innerHTML = "Email";
    label[0].classList.add("succes_message");
    email.classList.add("border_succes");
}

if(fname.value === "" || fname.value === null){
    label[1].innerHTML = "enter your name!!";
    label[1].classList.add("error_message");
    fname.classList.add("border_error");
    e.preventDefault();

}

else{
    label[1].innerHTML = "Nom et Prenom";
    label[1].classList.add("succes_message");
    fname.classList.add("border_succes");
}

if(cin.value === "" || cin.value === null){
    label[2].innerHTML = "enter your cin!!";
    label[2].classList.add("error_message");
    cin.classList.add("border_error");
    e.preventDefault();

}

else if(cin.value.length != 8){
    label[2].innerHTML = "cin must contien 8 chars!!";
    label[2].classList.add("error_message");
    cin.classList.add("border_error");
    e.preventDefault();
}

else{
    label[2].innerHTML = "CIN";
    label[2].classList.add("succes_message");
    cin.classList.add("border_succes");
}



})