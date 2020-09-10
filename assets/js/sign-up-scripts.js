//  window.onload = function() {
//             document.getElementById('contact-form').addEventListener('submit', function(event) {
//                 event.preventDefault();
//                 // generate the contact number value
//                 this.contact_number.value = Math.random() * 100000 | 0;
//                 emailjs.sendForm('gmail', 'bielefeld', '#contact-form', "user_eWrL0zPfiwLFrEZOHu8uj")
//                     .then(function (response) {
//                         console.log('SUCCESS!', response.status, response.text);
//                     }, function (error) {
//                         console.log('FAILED...', error);
//                     });
//             });
//         }
        
const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Sending...';

   const serviceID = 'default_service';
   const templateID = 'bielefeld';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Send Email';
      alert('Sent!');
    }, (err) => {
      btn.value = 'Send Email';
      alert(JSON.stringify(err));
    });
});