// SMOOTH SCROLL

// Select all anchor links.
const links = document.querySelectorAll("nav a");

// Attach an click event listener to each link
for (const link of links) {
    link.addEventListener("click", clickHandler);
}


// Click handling function
function clickHandler(e) {
    e.preventDefault();
    
    // Remove all .active classes from elements
    var previous = document.getElementsByClassName("active");
    while (previous.length)
        previous[0].classList.remove("active");
    // Add active to clicked anchor element
    e.target.classList.add('active')
    changeActive(e.target)
    // Attribute of each anchor point to section ids
    const href = this.getAttribute("href");
    if(href === '#'){
        // If href returns # scroll to the top of the page
        scroll({
            top: 0,
            behavior: "smooth"
        });
    } else {
        
        // Else, place top offset position of the element into a variable
        const offsetTop = document.querySelector(href).offsetTop-70;
        scroll({
            top: offsetTop,
            behavior: "smooth"
        });
    }
}

const sections = document.querySelectorAll('section');

function changeActive(current){
    var previous = document.getElementsByClassName("active");
    while (previous.length)
        previous[0].classList.remove("active");

    // Add active to clicked anchor element
    current.classList.add('active')
}


function checkActive(currentSection) {
    
        links.forEach((link)=>{
            if("#"+currentSection === link.getAttribute('href')){
                changeActive(link)
            }
            
        })
}

const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.7,
};

observer = new IntersectionObserver((entries)=> {
    
    entries.forEach((entry,i) => {
        checkActive(entry.target.id)
    })
}, observerOptions)

sections.forEach(section=>{
    observer.observe(section)
})