/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var form = document.querySelector('form');

form.addEventListener('submit', checkForm);

function checkForm(e) {
    e.preventDefault();
    
    var email = document.querySelector('input[name="email"]');
    var emailError = document.querySelector('.emailError').classList;
   
    var isValid = true;
    
    if ( email.value === '' ) {
       emailError.add('error');
       isValid = false;
    } else {
       emailError.remove('error');
    }
    
    if ( isValid === true ) {
        form.classList.add('hide');
        var conf = document.querySelector('#confirmation');
        
        var html = '<p>Email: ';
            html += email.value + '</p>';
            html += '<p> First name : ' + email.value + '</p>';
        
        conf.innerHTML = html;
        
    }
    
}