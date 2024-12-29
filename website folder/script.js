function showSection(sectionId){
    const sections = document.querySelectorAll('section');
    sections.forEach(section =>{
        section.classList.remove('active');
    });

    const activeSection =document.getElementById(sectionId);
    activeSection.classList.add('active');

    const navLinks= document.querySelectorAll('nav-links li a');
    navLinks.forEach(link =>{
        link.classList.remove('active-nav');
    });

    const activeLink =document.querySelectorAll('a[href="#${sectionId}"]');

    activeLink.classList.add('active-nav');
}

document.addEventListener("DOMContentLoaded", ()=> {
    showSection('home');
});