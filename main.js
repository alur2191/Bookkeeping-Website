// Active nav item style changer
const links = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('section');

function changeLinkState() {
    let index = sections.length;

    while(--index && window.scrollY + 200 < sections[index].offsetTop) {}
    
    links.forEach((link) => link.classList.remove('active'));
    links[index].classList.add('active');
}

changeLinkState();
window.addEventListener('scroll', changeLinkState);

// Mobile nav enabler
var enabled = false;
function mobileMenu(){
    var nav = document.getElementById('nav-mobile')
    enabled ? nav.style.display = 'none' : nav.style.display = 'flex'
    enabled = !enabled
}