// var tl_first = gsap.timeline({
//     repeat: -1,
//     // repeatDelay: 1,
// stagger: .2,
//     repeat: -1,
//     scale: 1,
// });

function tracker(element) {
    var location = document.querySelector(`.${element}`).getBoundingClientRect();
    // console.log(location.top);
    if (location.top == 0) {
        console.log('append some white bubles');
    }
}
async function animate_top() {

    gsap.to('.left_white_bubles', {
        duration: 10,
        y: -200 + 'vh',
        stagger: .2,
        repeat: -1,
        scale: 1,
        onUpdate: () => {
            tracker('left_white_bubles');
        }
    });
    gsap.to('.left_orange_bubles', {
        duration: 17,
        y: -200 + 'vh',
        stagger: .2,
        repeat: -1,
        scale: 1,
    });
    gsap.to('.left_pitch_bubles', {
        duration: 12,
        y: -200 + 'vh',
        stagger: .2,
        repeat: -1,
        scale: 1,
    });

    gsap.to('.right_white_bubles', {
        duration: 10,
        y: -200 + 'vh',
        stagger: .2,
        repeat: -1,
        scale: 1,
    });
    gsap.to('.right_orange_bubles', {
        duration: 17,
        y: -200 + 'vh',
        stagger: .2,
        repeat: -1,
        scale: 1,
    });
    gsap.to('.right_pitch_bubles', {
        duration: 12,
        y: -200 + 'vh',
        stagger: .2,
        repeat: -1,
        scale: 1,
    });

    // clones
    gsap.to('.left_white_bubles_clone', {
        duration: 10,
        y: -200 + 'vh',
        stagger: .2,
        repeat: -1,
        scale: 1,
        delay: 6,
        onUpdate: () => {
            tracker('left_white_bubles_clone');
        }
    });
    gsap.to('.left_orange_bubles_clone', {
        duration: 17,
        y: -200 + 'vh',
        stagger: .2,
        repeat: -1,
        scale: 1,
        delay: 4,
    });
    gsap.to('.left_pitch_bubles_clone', {
        duration: 12,
        y: -200 + 'vh',
        stagger: .2,
        repeat: -1,
        scale: 1,
        delay: 6,
    });

    gsap.to('.right_white_bubles_clone', {
        duration: 10,
        y: -200 + 'vh',
        stagger: .2,
        repeat: -1,
        scale: 1,
        delay: 5,
    });
    gsap.to('.right_orange_bubles_clone', {
        duration: 17,
        y: -200 + 'vh',
        stagger: .2,
        repeat: -1,
        scale: 1,
        delay: 9,
    });
    gsap.to('.right_pitch_bubles_clone', {
        duration: 12,
        y: -200 + 'vh',
        stagger: .2,
        repeat: -1,
        scale: 1,
        delay: 5,
    });
}
animate_top();