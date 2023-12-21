const formEl = document.querySelector('form');
const nameEl = document.getElementById('name');
const emailEl = document.getElementById('email');
const phoneNoEl = document.getElementById('phoneNo');
const msgEl = document.getElementById('message');

const  nameErrorEl = document.getElementById('name-error');
const  phoneErrorEl = document.getElementById('phoneNo-error');

//form validation---------------------------

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
    console.log('clicke');
    e.preventDefault();
    // sendEmail();
});