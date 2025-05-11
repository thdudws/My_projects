document.addEventListener("DOMContentLoaded", function () {

    var textWrapper = document.querySelector(".intro-title");
    if (textWrapper) {
        textWrapper.innerHTML = textWrapper.textContent.replace(
            /([^\x00-\x80]|\w)/g,
            "<span class='letter'>$&</span>"
        );
    }

    anime
        .timeline({ loop: false })
        .add({
            targets: ".intro-title .letter",
            translateX: [140, 0],
            translateZ: 0,
            opacity: [0, 1],
            easing: "easeOutExpo",
            duration: 1600,
            delay: function(el, i) {
                return 500 + 50 * i;
            }
        })
        .add({
            targets: ".intro-title .letter",
            translateX: [0, -140],
            opacity: [1, 0],
            easing: "easeInExpo",
            duration: 1400,
            delay: function(el, i) {
                return 700 + 50 * i;
            }
        });

    TweenMax.to(".loader", 3, {
        delay: 5,
        top: "-100%",
        ease: Expo.easeInOut
    });

    TweenMax.from(".logo", 2, {
        delay: 6,
        y: 10,
        opacity: 0,
        ease: Expo.easeInOut
    });

    TweenMax.from(".lang", 2, {
        delay: 6.1,
        y: 10,
        opacity: 0,
        ease: Expo.easeInOut
    });

    TweenMax.from(".left-img-cap", 2, {
        delay: 6.2,
        y: 10,
        opacity: 0,
        ease: Expo.easeInOut
    });

    TweenMax.from(".left-bottom-text", 2, {
        delay: 6.4,
        y: 10,
        opacity: 0,
        ease: Expo.easeInOut
    });

    TweenMax.from(".left-img-btn", 2, {
        delay: 6.4,
        scale: 0,
        ease: Expo.easeInOut
    });

    TweenMax.from(".right-bottom-text", 2, {
        delay: 6.7,
        y: 10,
        opacity: 0,
        ease: Expo.easeInOut
    });
});
