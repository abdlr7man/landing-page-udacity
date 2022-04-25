/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/


const domSections = document.querySelectorAll("section");
const navContainer = document.getElementById("navbar__list");


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

function elementIsInViewPort(element) {

    let isInViewPort = false;
    const elementBound = element.getBoundingClientRect();

    if (elementBound.top >= 0 && elementBound.left >= 0 && elementBound.right <= window.innerWidth && elementBound.bottom <= window.innerHeight) {

        isInViewPort = true;
    } else{
        isInViewPort = false;
    }

    return isInViewPort;
    

}

function activateSection () {

    for (let index = 0; index < domSections.length; index++) {
        const element = domSections[index];
        const relatedNavLink = document.getElementById(`link-for-${element.attributes.id.value}`);
        if(elementIsInViewPort(element)){
            element.classList.add("active-section");
            relatedNavLink.classList.add("active__link");
        }else{
            element.classList.remove("active-section");
            relatedNavLink.classList.remove("active__link");
        }
    }
}


function scrollToSection(section){
    section.scrollIntoView();
}

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav

for (let index = 0; index < domSections.length; index++) {
    const element = domSections[index];
    navContainer.innerHTML += `<li id='link-for-${element.attributes.id.value}' class="menu__link" onclick='scrollToSection(${element.attributes.id.value})' >${element.attributes[1].value}</li>`;
}


// Add class 'active' to section when near top of viewport

document.addEventListener("scroll", () => activateSection(), {passive:true});


// Scroll to anchor ID using scrollTO event

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


