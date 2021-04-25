'use strict';

const navMenu = (headerSelector, toggleMenuSelector, headerTopInfo) => {

    const header = document.querySelector(headerSelector),
        toggleMenu = document.querySelector(toggleMenuSelector),
        headerTop = document.querySelector(headerTopInfo);

    function fixedMenu() {
        window.addEventListener('scroll', (e) => {
            let headerHeight = header.getBoundingClientRect().bottom;

            function scrollY() {
                return window.pageYOffset || docElem.scrollTop;
            }

            let pageScroll = scrollY();
            headerTop.classList.remove('header-social--hide');

            // if (window.innerWidth < 1025) {
            //     header.classList.add('header-social--hide');
            // }

            if (pageScroll >= (headerHeight / 2)) {
                headerTop.classList.add('header-social--hide');
                header.classList.add('navigation--fixed');
            } else {
                headerTop.classList.remove('header-social--hide');
                header.classList.remove('navigation--fixed');
            }

        });
    }

    function toggleMobileMenu() {
        toggleMenu.classList.remove('menu-toggle--active');
        header.classList.remove('navigation--active');
        document.body.classList.remove('scroll--hidden');
        headerTop.classList.remove('header-social--hide');
        header.classList.remove('navigation--fixed');

        toggleMenu.addEventListener('click', (e) => {
            if (!headerTop.classList.remove('header-social--hide')) {
                header.classList.remove('navigation--fixed');
            }
            toggleMenu.classList.toggle('menu-toggle--active');
            header.classList.toggle('navigation--active');
            document.body.classList.toggle('scroll--hidden');
        });


    }

    toggleMobileMenu();
    fixedMenu();

}

export default navMenu;