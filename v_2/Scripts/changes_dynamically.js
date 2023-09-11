var position_changed = true;
window.onscroll = (el) => {
    var div_left = document.querySelector('.left svg');
    var div_right = document.querySelector('.right svg');
    var rect = document.querySelector('.wrapper').getBoundingClientRect();
    if (window.screen.width <= 600) {
        if (rect.top <= 0) {
            // if (position_changed) {
            //     $('.left svg').toggleClass('absolute_left', 500)
            //     $('.right svg').toggleClass('absolute_right', 500)
            //     position_changed = false;
            // }

            div_left.classList.add('absolute_left');
            div_right.classList.add('absolute_right');
            // document.querySelector('.center-content').style.marginTop = '40%';
            // $('.center-content')[0].animate({
            //     marginTop: '40%'
            // }, 700);
            // gsap.to('.center-content', {
            //     y: '40%',
            //     duration: 2
            // })
        } else {
            // if (position_changed) {
            //     $('.left svg').toggleClass('absolute_left', false)
            //     $('.right svg').toggleClass('absolute_right', false)
            //     position_changed = true;
            // }
            div_left.classList.remove('absolute_left');
            div_right.classList.remove('absolute_right');
            // document.querySelector('.center-content').style.marginTop = -50 + '%';
            // $('.center-content')[0].animate({
            //     marginTop: -50 + '%'
            // }, 700);
            // gsap.to('.center-content', {
            //     y: -50 + '%',
            //     duration: 2
            // })
        }
    }

}