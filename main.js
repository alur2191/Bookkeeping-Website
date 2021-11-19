// Active nav item style changer
const links = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('section');

const changeLinkState=()=> {
    let index = sections.length;

    while(--index && window.scrollY + 200 < sections[index].offsetTop) {}
    
    links.forEach((link) => link.classList.remove('active'));
    links[index].classList.add('active');
}

changeLinkState();
window.addEventListener('scroll', changeLinkState);

// Scroll to top
const toTop=()=> {
    window.scrollTo({
        top: 0
    });
}

// Mobile nav enabler
const nav = document.getElementById('nav-mobile')
const navMenu = document.getElementById('nav-menu')

let enabled = false;
const mobileMenu=()=> {
    enabled ? enabledNav() : disabledNav()
    enabled = !enabled
}

const enabledNav=()=> {
    navMenu.classList.add('icofont-navigation-menu')
    navMenu.classList.remove('icofont-close')
    nav.style.display = 'none'
}

const disabledNav=()=> {
    navMenu.classList.add('icofont-close')
    navMenu.classList.remove('icofont-navigation-menu')
    nav.style.display = 'flex'
}


// Close mobile dropdown on nav item click
const mobileLinks = document.querySelectorAll('.nav-mobile-link');

mobileLinks.forEach(link =>  {
    link.addEventListener("click",()=>{
        nav.style.display = 'none'
        enabled = !enabled
    })
})





