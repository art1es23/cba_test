import {
    sliderReview,
    sliderWorks,
    // menuMobile,
    navMenu
} from './modules';

window.addEventListener('DOMContentLoaded', () => {
    console.log('GODNESS!!!');
    sliderWorks();
    // console.log(sliderReview);
    // menuMobile();
    sliderReview();
    navMenu('.navigation', '.menu-toggle', '.header-social')
});