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
    // Attribute of each anchor points to scroll section
    const href = this.getAttribute("href");
    // If href returns # scroll to the top of the page
    if(href === '#'){
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