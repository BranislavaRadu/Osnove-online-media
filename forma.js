




   let firstName = document.getElementById('name');
let lastName = document.getElementById('last-name');
let email = document.getElementById('email');
let password = document.getElementById('password');
let phone = document.getElementById('phone');
let message = document.getElementById('message');
let adress = document.getElementById('adress');


let errorMain = document.querySelector('.error-main');
let errorName = document.querySelector('.error-name');
let errorLastName = document.querySelector('.error-last-name');
let errorEmail = document.querySelector('.error-email');
let errorPassword = document.querySelector('.error-password');
let errorPhone = document.querySelector('.error-phone');
let errorMessage = document.querySelector('.error-message');
let errorAdress=document.getElementById ('.error-adress');
const btnSubmit = document.getElementById('submit');


let validPhone = /[\D]/;
let validName = /[\d]/;



btnSubmit.addEventListener('click', function (e) {
    e.preventDefault();

    let nameValue = firstName.value;
    let lastNameValue = lastName.value;
    let emailValue = email.value;
	 let passwordValue = password.value;
    let phoneValue = phone.value;
    let messageValue = message.value;
	 let adressValue = adress.value;
	

    if (nameValue === '' || lastNameValue === '' || emailValue === '' || passwordValue==='' || phoneValue==='' || messageValue==='' || adressValue==='') {
        errorMain.textContent = 'Popunite sva polja.';
		
    }
    if (nameValue === '' || nameValue.match(validName)) {
        errorName.textContent = 'Unesite ime.';
   
		
    }
    if (lastNameValue === '' || lastNameValue.match(validName)) {
        errorLastName.textContent = 'Unesite prezime.';
    }
    if (emailValue === '' || !emailValue.includes('@') || !emailValue.includes('.')) {
        errorEmail.textContent = 'Unesite mejl.';
    }
	 if (passwordValue === '' || password.value.length < 8) {
	 
        errorPassword.textContent = 'Unesite lozinku. Lozinka mora da sadrži najmanje osam karaktera.';
    }
	 if (adressValue==='') {
        errorPhone.textContent = 'Unesite adresu.';
    }
    if (phoneValue.match(validPhone)) {
        errorPhone.textContent = 'Unesite broj telefona.';
    }
    if (messageValue === '') {
        errorMessage.textContent = 'Unesite poruku.';
    }
});
 function myFunction() {
  let nameValue = firstName.value;
    let lastNameValue = lastName.value;
    let emailValue = email.value;
	 let passwordValue = password.value;
	  let adressValue = adress.value; 
    let phoneValue = phone.value;
    let messageValue = message.value;
	
	if (nameValue === '' || lastNameValue === '' || emailValue === ''|| phoneValue==='' || messageValue==='' || passwordValue==='' || password.value.length < 8  || adressValue===''
	|| !emailValue.includes('@') ||  !emailValue.includes('.') || phoneValue.match(validPhone) || nameValue.match(validName) || lastNameValue.match(validName))
	{alert ("popunite sva polja");}
	else {
  alert("Vaše ime je:" + "" + nameValue + "\n" + "Vase prezime je:" +  "" + lastNameValue + "\n" + "Vaš email je:" + "" + emailValue + "\n" + "Vasa lozinka je:" +  "" + passwordValue + "\n" +"Vaša adresa je:" + "" + adressValue + "\n"+ "Vaše broje telefona  je:" + "" + phoneValue + "\n" + "Vase prouka je:" +  "" + messageValue)
  ;}
}

let btnRed = document.querySelector('#btnRed');
let btnBlue = document.querySelector('#btnBlue');
let btnGreen = document.querySelector('#btnGreen');

let changeName = document.querySelector('#name');
let changeLastName = document.querySelector('#last-name');
let changeEmail = document.querySelector('#email');
let changeMessage = document.querySelector('#message');
let changePhone= document.querySelector('#phone');
let changePassword = document.querySelector('#password');
let changeAdress = document.querySelector('#adress');





btnRed.addEventListener('click',() => changeName.style.color = 'red');
btnBlue.addEventListener('click',() => changeName.style.color = 'blue');
btnGreen.addEventListener('click',() => changeName.style.color = 'green');

btnRed.addEventListener('click',() => changeLastName.style.color = 'red');
btnBlue.addEventListener('click',() => changeLastName.style.color = 'blue');
btnGreen.addEventListener('click',() =>changeLastName.style.color = 'green');

btnRed.addEventListener('click',() =>changeEmail.style.color = 'red');
btnBlue.addEventListener('click',() => changeEmail.style.color = 'blue');
btnGreen.addEventListener('click',() => changeEmail.style.color = 'green');

btnRed.addEventListener('click',() =>changePassword.style.color = 'red');
btnBlue.addEventListener('click',() => changePassword.style.color = 'blue');
btnGreen.addEventListener('click',() => changePassword.style.color = 'green');

btnRed.addEventListener('click',() =>changePhone.style.color = 'red');
btnBlue.addEventListener('click',() => changePhone.style.color = 'blue');
btnGreen.addEventListener('click',() => changePhone.style.color = 'green');

btnRed.addEventListener('click',() =>changeMessage.style.color = 'red');
btnBlue.addEventListener('click',() => changeMessage.style.color = 'blue');
btnGreen.addEventListener('click',() => changeMessage.style.color = 'green');

btnRed.addEventListener('click',() =>changeAdress.style.color = 'red');
btnBlue.addEventListener('click',() => changeAdress.style.color = 'blue');
btnGreen.addEventListener('click',() => changeAdress.style.color = 'green');
