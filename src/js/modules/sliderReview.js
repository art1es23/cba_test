import gsap from 'gsap';
const sliderReview = () => {
    const slider = document.querySelector(".slider")
    const trail = document.querySelector(".trail").querySelectorAll("div")
    let value = 0
    let trailValue = 0
    let interval = 7000

    // Function to slide forward
    const slide = (condition) => {
        clearInterval(start)
        condition === "increase" ? initiateINC() : initiateDEC()
        move(value, trailValue)
        animate()
        start = setInterval(() => slide("increase"), interval);
    }

    // function for increase(forward, next) configuration
    const initiateINC = () => {
        trail.forEach(cur => cur.classList.remove("active"))
        value === 75 ? value = 0 : value += 25
        trailUpdate()
    }

    // function for decrease(backward, previous) configuration
    const initiateDEC = () => {
        trail.forEach(cur => cur.classList.remove("active"))
        value === 0 ? value = 75 : value -= 25
        trailUpdate()
    }

    // function to transform slide 
    const move = (S, T) => {
        slider.style.transform = `translateX(-${S}%)`
        trail[T].classList.add("active")
    }

    const tl = gsap.timeline({
        defaults: {
            duration: 0.6,
            ease: "power2.inOut"
        }
    })

    const animate = () => tl.restart()

    // function to update trailValue based on slide value
    const trailUpdate = () => {
        if (value === 0) {
            trailValue = 0
        } else if (value === 25) {
            trailValue = 1
        } else if (value === 50) {
            trailValue = 2
        } else {
            trailValue = 3
        }
    }

    // Start interval for slides
    let start = setInterval(() => slide("increase"), interval)

    document.querySelectorAll("svg").forEach(cur => {
        cur.addEventListener("click", () => cur.classList.contains("next") ? slide("increase") : slide("decrease"))
    })

    // function to slide when trail is clicked
    const clickCheck = (e) => {
        clearInterval(start)
        trail.forEach(cur => cur.classList.remove("active"))
        const check = e.target
        check.classList.add("active")
        if (check.classList.contains("box1")) {
            value = 0
        } else if (check.classList.contains("box2")) {
            value = 25
        } else if (check.classList.contains("box3")) {
            value = 50
        } else {
            value = 75
        }
        trailUpdate()
        move(value, trailValue)
        animate()
        start = setInterval(() => slide("increase"), interval)
    }

    trail.forEach(cur => cur.addEventListener("click", (ev) => clickCheck(ev)))

    const touchSlide = (() => {
        let start, move, change, sliderWidth

        slider.addEventListener("touchstart", (e) => {
            start = e.touches[0].clientX
            sliderWidth = slider.clientWidth / trail.length
        })

        slider.addEventListener("touchmove", (e) => {
            e.preventDefault()
            move = e.touches[0].clientX
            change = start - move
        })

        const mobile = (e) => {
            change > (sliderWidth / 4) ? slide("increase") : null;
            (change * -1) > (sliderWidth / 4) ? slide("decrease"): null;
            [start, move, change, sliderWidth] = [0, 0, 0, 0]
        }
        slider.addEventListener("touchend", mobile)
    })()

};

export default sliderReview;