
var div = document.querySelector('div');

div.classList.add('error');

div.style.position = 'absolute';
div.style.top = '50px';
div.style.zIndex = '3';
div.style.paddingLeft = '2em';

function hide() {
  //div.style.display = 'none';
  div.classList.remove('show');
  div.classList.add('hide');
}

var btn = document.querySelector('button');

btn.addEventListener('click', hide);