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
   
    
    if ( email.value === '' ) {
        document.querySelector('.emailError').classList.add('error');
    } else {
        document.querySelector('.emailError').classList.remove('error');
    }
    
    
}