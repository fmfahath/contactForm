const formEl = document.querySelector('form');
const nameEl = document.getElementById('name');
const emailEl = document.getElementById('email');
const phoneNoEl = document.getElementById('phoneNo');
const msgEl = document.getElementById('message');

const  nameErrorEl = document.getElementById('name-error');
const  phoneErrorEl = document.getElementById('phoneNo-error');
const  emailErrorEl = document.getElementById('email-error');
const  mesgErrorEl = document.getElementById('msg-error');
const  submitErrorEl = document.getElementById('submit-error');

//form validation---------------------------


//full name validation
function validateName(){
    let name = document.getElementById('name').value;
    
    if(name.length == 0){
        nameErrorEl.innerHTML = '*Name required';
        return false;
    }
    // else if(!name.match(/^[A-Za-a]*\s{1}[A-Za-z]*$/)){
    //     console.log("full name required",name);
    //     nameErrorEl.innerHTML = 'Full name required';
    //     return false;
    // }
    else{
        nameErrorEl.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
        return true;
    }
}

//phone number validation
function validatePhone(){
    let phoneNo = document.getElementById('phoneNo').value;

    if(phoneNo.length == 0){
        phoneErrorEl.innerHTML = '*Phone No required';
        return false;
    }
    else if(!phoneNo.match(/^[0-9]{10}$/)){
        phoneErrorEl.innerHTML = '*Phone No should be 10 digits';
        return false;
    }
    else{
        phoneErrorEl.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
        return true;
    }
}

//Email validation
function validateEmail(){
    let email = document.getElementById('email').value;

    if(email.length == 0){
        emailErrorEl.innerHTML = '*Email required';
        return false;
    }
    // else if(!email.match(/^[A-Za-z]\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
    //     emailErrorEl.innerHTML = '*Email not valid';
    //     return false;
    // }
    else{
        emailErrorEl.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
        return true;
    }
}

//message box validation
function validateMessage(){
    let msg = document.getElementById('message').value;
    let requiredChar = 30;
    let leftChar = requiredChar - msg.length; 

    if(leftChar > 0){
        mesgErrorEl.innerHTML =  leftChar + ' characters required';
        return false;
    }
    else{
        mesgErrorEl.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
        return true;
    }
}

//Submit button validation
function validateSubmit(){
    if(!validateName() || !validateEmail() || !validatePhone() || !validateMessage()){
        submitErrorEl.style.display = 'block';
        submitErrorEl.innerHTML = "Please fix the error";
        setTimeout(function(){
            submitErrorEl.style.display = 'none';
        },3000);
    }else{
        return true;
    }
    
}

//reset input fields
function reset(){
    nameEl.value = "";
    emailEl.value = "";
    phoneNoEl.value = "";
    msgEl.value = "";
    nameErrorEl.innerHTML = "";
    emailErrorEl.innerHTML = "";
    phoneErrorEl.innerHTML = "";
    mesgErrorEl.innerHTML = "";
}


// submir form data to gmail--------------------- 
function sendEmail(){
    let bodyMessage = 
        `Name:${nameEl.value}<br> 
        Email: ${emailEl.value}<br>
        Phone No; ${phoneNoEl.value}<br>
        Message: ${msgEl.value}<br>`;

    Email.send({
        SecureToken : "e41e8f9e-9705-4fb7-ad58-4c50a1ff8973",
        To : 'myweb.sync2@gmail.com',
        From : "myweb.sync2@gmail.com",
        Subject : "New Inquiry Mail",
        Body : bodyMessage,
    }).then(
      message => {
        Swal.fire({
            title: "Thanks!",
            text: "Message Sent Successfully!",
            icon: "success"
          });
      }
   
    );
}

formEl.addEventListener('submit', (e) => {
    e.preventDefault();
    // sendEmail()
});