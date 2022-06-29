import {menuToggler, navMenu, togglerBars, menuLinks} from './constants'
let last_known_scroll_position = 0;
let ticking = false;

function toggleMenuBtnState() {
    menuToggler.classList.toggle('menu-toggler_state_active');
    togglerBars.forEach(bar => {
        bar.classList.toggle('menu-toggler__bar_state_active');
    });
    navMenu.classList.toggle('header__menu-list_state_active');
}
function closeMenu(scroll_pos) {
    menuToggler.classList.remove('menu-toggler_state_active');
    navMenu.classList.remove('header__menu-list_state_active');
    togglerBars.forEach(bar => {
        bar.classList.remove('menu-toggler__bar_state_active');
    });
}

window.addEventListener('scroll', function(e) {
  last_known_scroll_position = window.scrollY;
  if (!ticking) {
    window.requestAnimationFrame(function() {
        closeMenu(last_known_scroll_position);
      ticking = false;
    });
    ticking = true;
  }
});

menuToggler.addEventListener('click', () => {
    toggleMenuBtnState();
})
menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        closeMenu();
    })
})