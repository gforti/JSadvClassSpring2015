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
   
    
    if ( email.value === '' ) {
       emailError.add('error');
    } else {
       emailError.remove('error');
    }
    
    
}