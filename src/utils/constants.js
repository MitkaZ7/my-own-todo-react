
export const tasksList = document.querySelector('.tasks__list');
export const addTaskBtn = document.querySelector('.tasks__add-button');
export const taskInput = document.querySelector('.tasks__form-input');
export const epmtyListPlug = document.querySelector('.plug');
export const addTaskFormSelector = document.querySelector('.form_add-task');
export const config = {
    formSelector: '.form',
    inputSelector: '.form-input',
    submitBtnSelector: '.tasks__add-button',
    disabledBtnClass: '.button_state_disabled',
    inputErrorClass: '.form__input-error_state_active',
    errorClass: '.form__input-error'
}
export const menuToggler = document.querySelector('.menu-toggler');
export const togglerBars = document.querySelectorAll('.menu-toggler__bar');
export const menuLinks = document.querySelectorAll('.header__menu-link');
export const navMenu = document.querySelector('.header__menu-list');
export const technologyLogo = document.querySelector('.slider__image');
export const iconsArray = [
    {
        name: 'Babel',
        link: 'https://cdn.svgporn.com/logos/babel.svg'
    },
    {
        name: 'Webpack',
        link: 'https://cdn.svgporn.com/logos/webpack.svg'
    },
    {
        name: 'Javascript',
        link: 'https://cdn.svgporn.com/logos/javascript.svg'
    },
    {
        name: 'BEM',
        link: 'https://cdn.svgporn.com/logos/bem.svg'
    },
    {
        name: 'Sass',
        link: 'https://cdn.svgporn.com/logos/sass.svg'
    },
    {
        name: 'PostCSS',
        link: 'https://cdn.svgporn.com/logos/postcss.svg'
    },

];

export const activeTaskQty = document.querySelector('.tasks__counter-current');
export const completedTaskQty = document.querySelector('.tasks__counter-completed');
export const signInBtn = document.querySelector('.header__menu-link_login');
export const registrationBtn = document.querySelector('.header__menu-link_register');

export const popupRegistrationSelector = '.popup_type_registration';
export const popupLoginSelector = '.popup_type_login';
export const startLink = document.querySelector('.section__info-link');
