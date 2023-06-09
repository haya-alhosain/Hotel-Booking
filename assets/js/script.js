var bar = document.getElementById('bar');
var close = document.getElementById('close');
var nav = document.getElementById('navbar-two');

if (bar) {
   bar.onclick = function () {
      bar.style.display = "none";
      close.style.display = "block";
      nav.classList.add('show')
      nav.classList.remove('hide')

   }
}
if (close) {
   close.onclick = function () {
      close.style.display = "none";
      bar.style.display = "block"
      nav.classList.add('hide')
      nav.classList.remove('show')

   }
}