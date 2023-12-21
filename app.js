const formEl = document.querySelector('form');
const nameEl = document.getElementById('name');
const emailEl = document.getElementById('email');
const phoneNoEl = document.getElementById('phoneNo');
const msgEl = document.getElementById('message');

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
      message => alert(message)
    //   message => alert("Your message has been successfully submitted!")
    );
}

formEl.addEventListener('submit', (e) => {
    e.preventDefault();
    sendEmail();
});