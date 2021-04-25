const sliderReview = () => {
    // var $this = $(this);
    console.log('asdasasdaskjdcndskklsdmsdm');
    var group = document.querySelector('.reviews-slider__inner');
    var slides = document.querySelectorAll('.reviews-slider__slide');
    var bulletArray = [];
    var currentIndex = 0;
    var timeout;

    function move(newIndex) {
        var animateLeft, slideLeft;

        advance();

        //   if (group.is(':animated') || currentIndex === newIndex) {
        //     return;
        //   }

        bulletArray[currentIndex].classList.remove('active');
        bulletArray[newIndex].classList.add('active');

        if (newIndex > currentIndex) {
            slideLeft = '100%';
            animateLeft = '-100%';
        } else {
            slideLeft = '-100%';
            animateLeft = '100%';
        }

        slides[newIndex].textCss = `
            display: 'block';
            left: slideLeft;  
        `

        group.animate({
            left: animateLeft
        }, function () {
            slides.eq(currentIndex).css({
                display: 'none'
            });
            slides.eq(newIndex).css({
                left: 0
            });
            group.css({
                left: 0
            });
            currentIndex = newIndex;
        });
    }

    function advance() {
        clearTimeout(timeout);
        timeout = setTimeout(function () {
            if (currentIndex < (slides.length - 1)) {
                move(currentIndex + 1);
            } else {
                move(0);
            }
        }, 4000);
    }

    document.querySelector('.next_btn').addEventListener('click', function () {
        if (currentIndex < (slides.length - 1)) {
            move(currentIndex + 1);
        } else {
            move(0);
        }
    });

    document.querySelector('.previous_btn').addEventListener('click', function () {
        if (currentIndex !== 0) {
            move(currentIndex - 1);
        } else {
            move(3);
        }
    });

    slide.forEach(slides, (index) => {
        var button = document.querySelector('<a class="slide_btn">&bull;</a>');

        if (index === currentIndex) {
            button.classList.add('active');
        }
        // button.addEventListener('click', function () {
        //     move(index);
        // }).appendTo('.slide_buttons');

        bulletArray.push(button);
    });

    advance();
}