var btn = document.querySelector('.btn');
var overlay = document.querySelector('.overlay');
var menulink = document.querySelectorAll('.menulink');


btn.addEventListener('click', function() {
    btn.classList.toggle('btn-open');
    overlay.classList.toggle('invisible');
    
    menulink.forEach(function(link) {
        link.classList.toggle('opaque');
    });
});