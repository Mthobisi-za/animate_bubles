var props = {
    scale: 1
}
if (window.screen.width <= 700) {
    props.scale = 0.6
}
document.addEventListener('resize', () => {
    if (window.screen.width <= 700) {
        props.scale = 0.6
    }
})

function tracker(element) {
    var location = document.querySelector(`.${element}`).getBoundingClientRect();
    // console.log(location.top);
    if (location.top == 0) {
        console.log('append some white bubles');
    }
}
async function animate_top() {
    if (screen.width > 700) {
        gsap.to('.left_white_bubles', {
            duration: 10,
            y: -200 + 'vh',
            stagger: .2,
            repeat: -1,
            scale: props.scale,
            onUpdate: () => {
                tracker('left_white_bubles');
            }
        });
        gsap.to('.left_orange_bubles', {
            duration: 17,
            y: -200 + 'vh',
            stagger: .2,
            repeat: -1,
            scale: props.scale,
        });
        gsap.to('.left_pitch_bubles', {
            duration: 12,
            y: -200 + 'vh',
            stagger: .2,
            repeat: -1,
            scale: props.scale,
        });

        gsap.to('.right_white_bubles', {
            duration: 10,
            y: -200 + 'vh',
            stagger: .2,
            repeat: -1,
            scale: props.scale,
        });
        gsap.to('.right_orange_bubles', {
            duration: 17,
            y: -200 + 'vh',
            stagger: .2,
            repeat: -1,
            scale: props.scale,
        });
        gsap.to('.right_pitch_bubles', {
            duration: 12,
            y: -200 + 'vh',
            stagger: .2,
            repeat: -1,
            scale: props.scale,
        });

    }

    // clones
    gsap.to('.left_white_bubles_clone', {
        duration: 10,
        y: -200 + 'vh',
        stagger: .2,
        repeat: -1,
        scale: props.scale,
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
        scale: props.scale,
        delay: 4,
    });
    gsap.to('.left_pitch_bubles_clone', {
        duration: 12,
        y: -200 + 'vh',
        stagger: .2,
        repeat: -1,
        scale: props.scale,
        delay: 6,
    });

    gsap.to('.right_white_bubles_clone', {
        duration: 10,
        y: -200 + 'vh',
        stagger: .2,
        repeat: -1,
        scale: props.scale,
        delay: 5,
    });
    gsap.to('.right_orange_bubles_clone', {
        duration: 17,
        y: -200 + 'vh',
        stagger: .2,
        repeat: -1,
        scale: props.scale,
        delay: 9,
    });
    gsap.to('.right_pitch_bubles_clone', {
        duration: 12,
        y: -200 + 'vh',
        stagger: .2,
        repeat: -1,
        scale: props.scale,
        delay: 5,
    });
}
animate_top();