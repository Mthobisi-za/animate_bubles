var counterY = 0;
var counterX = 0;
var left_white_bubles_duration = 1;
var left_orange_bubles_duration = 1;
var left_pitch_bubles_duration = 1.1;
var right_white_bubles_duration = 1;
var right_orange_bubles_duration = 1;
var right_pitch_bubles_duration = 1.1;
var reapet_yoyo = false;
var repeat_reverse = false;
if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    // true for mobile device
    // document.write("mobile device");
    left_white_bubles_duration += 5;
    left_orange_bubles_duration += 5;
    left_pitch_bubles_duration += 5.2;
    right_white_bubles_duration += 5;
    right_orange_bubles_duration += 5;
    right_pitch_bubles_duration += 5;
    // var reapet_yoyo = true;
    // var repeat_reverse = true;
} else {
    // false for not mobile device
    // document.write("not mobile device");
}


var animate_x = 5;
var animate_Y = 5;
if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {

    // mobile no animation

} else {
    // false for not mobile device
    // document.write("not mobile device");

    gsap.utils.toArray('.left').forEach(section => {
        const elems = section.querySelectorAll('.left_white_bubles');

        // Set things up
        gsap.set(elems, { y: 0, opacity: 0, x: 0, });

        ScrollTrigger.create({
            trigger: section,
            start: 'top 60%',
            onEnter: () => gsap.to(elems, {
                y: -20,
                opacity: 1,
                duration: left_white_bubles_duration,
                stagger: 0.01,
                delay: 0.01,
                ease: 'power3.out',
                overwrite: 'auto',
                scale: 1
            }),
            onLeaveBack: () => gsap.to(elems, {
                y: 0,
                opacity: 0,
                duration: left_white_bubles_duration,
                stagger: 0.01,
                delay: 0.01,
                ease: 'power3.out',
                overwrite: 'auto',
                scale: 0
            })
        });


    })

    gsap.utils.toArray('.left').forEach(section => {
        const elems = section.querySelectorAll('.left_orange_bubles');

        // Set things up
        gsap.set(elems, { y: 0, opacity: 0, x: 0, scale: 0 });

        ScrollTrigger.create({
            trigger: section,
            start: 'top 60%',
            onEnter: () => gsap.to(elems, {
                y: 0,
                opacity: 1,
                duration: left_orange_bubles_duration,
                stagger: 0.02,
                delay: 0.02,
                ease: 'power3.out',
                overwrite: 'auto',
                scale: 1
            }),
            onLeaveBack: () => gsap.to(elems, {
                y: 0,
                opacity: 0,
                duration: left_orange_bubles_duration,
                stagger: 0.02,
                delay: 0.02,
                ease: 'power3.out',
                overwrite: 'auto',
                scale: 0
            })
        });
    })



    gsap.utils.toArray('.left').forEach(section => {
        const elems = section.querySelectorAll('.left_pitch_bubles');

        // Set things up
        gsap.set(elems, { y: 0, opacity: 0, x: 0, scale: 0 });

        ScrollTrigger.create({
            trigger: section,
            start: 'top 60%',
            onEnter: () => gsap.to(elems, {
                y: 0,
                opacity: 1,
                duration: left_pitch_bubles_duration,
                stagger: 0.02,
                delay: 0.02,
                ease: 'power3.out',
                overwrite: 'auto',
                scale: 1
            }),
            onLeaveBack: () => gsap.to(elems, {
                y: 0,
                opacity: 0,
                duration: left_pitch_bubles_duration,
                stagger: 0.02,
                delay: 0.02,
                ease: 'power3.out',
                overwrite: 'auto',
                scale: 0
            })
        });
    })


    // other side


    gsap.utils.toArray('.right').forEach(section => {
        const elems = section.querySelectorAll('.right_white_bubles');

        // Set things up
        gsap.set(elems, { y: 0, opacity: 0, x: 0, scale: 0 });

        ScrollTrigger.create({
            trigger: section,
            start: 'top 60%',
            onEnter: () => gsap.to(elems, {
                y: 0,
                opacity: 1,
                duration: right_white_bubles_duration,
                stagger: 0.01,
                delay: 0.01,
                ease: 'power3.out',
                overwrite: 'auto',
                scale: 1
            }),
            onLeaveBack: () => gsap.to(elems, {
                y: 0,
                opacity: 0,
                duration: right_white_bubles_duration,
                stagger: 0.01,
                delay: 0.01,
                ease: 'power3.out',
                overwrite: 'auto',
                scale: 0,
                x: 10
            })
        });
    })

    gsap.utils.toArray('.right').forEach(section => {
        const elems = section.querySelectorAll('.right_orange_bubles');

        // Set things up
        gsap.set(elems, { y: 0, opacity: 0, x: 0, scale: 0 });

        ScrollTrigger.create({
            trigger: section,
            start: 'top 60%',
            onEnter: () => gsap.to(elems, {
                y: 0,
                opacity: 1,
                duration: right_orange_bubles_duration,
                stagger: 0.02,
                delay: 0.02,
                ease: 'power3.out',
                overwrite: 'auto',
                scale: 1
            }),
            onLeaveBack: () => gsap.to(elems, {
                y: 0,
                opacity: 0,
                duration: right_orange_bubles_duration,
                stagger: 0.02,
                delay: 0.02,
                ease: 'power3.out',
                overwrite: 'auto',
                scale: 0,
                x: 10
            })
        });
    })



    gsap.utils.toArray('.right').forEach(section => {
        const elems = section.querySelectorAll('.right_pitch_bubles');

        // Set things up
        gsap.set(elems, { y: 0, opacity: 0, x: 0, scale: 0 });

        ScrollTrigger.create({
            trigger: section,
            start: 'top 60%',
            onEnter: () => {
                gsap.to(elems, {
                    y: 0,
                    opacity: 1,
                    duration: right_pitch_bubles_duration,
                    stagger: 0.02,
                    delay: 0.02,
                    ease: 'power3.out',
                    overwrite: 'auto',
                    scale: 1
                });

            },
            onLeaveBack: () => gsap.to(elems, {
                y: 0,
                opacity: 0,
                duration: right_pitch_bubles_duration,
                stagger: 0.02,
                delay: 0.02,
                ease: 'power3.out',
                overwrite: 'auto',
                scale: 0,
                x: 10
            })
        });
    });
}