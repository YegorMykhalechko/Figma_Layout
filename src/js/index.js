'use strict'
const mobileMenu = document.querySelector('.icon-menu');
const menuBody = document.querySelector('.menu__body')

const menuActive = () => {
    if (!menuBody.classList.contains('_active')){
        return menuBody.classList.add('_active');
    }
    menuBody.classList.remove('_active');
    
}


mobileMenu.addEventListener('click', menuActive);


