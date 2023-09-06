var tl = gsap.timeline({
    scrollTrigger: ".top_placeholder",
    // stagger: true,
    defaults: {
        duration: 1,
        ease: Back.easeOut.config(2),
        opacity: 1,
        // reverse: true,
        yoyo: true,
        stagger: 0.1,
        // scrub: 0.1,

    }
});
var direction_white_left_bubles;
var direction_white_right_bubles;

var direction_orange_left_bubles;
var direction_orange_right_bubles;

var direction_pitch_left_bubles;
var direction_pitch_right_bubles;

function mousemovemethod_white(e) {
    let white_animation_left = async() => {
        var oldx = 0;
        var oldy = 0;
        if (e.movementX < oldx && e.movementY > oldy) {
            direction_white_left_bubles = "left down"
        } else if (e.movementX > oldx && e.movementY < oldy) {
            direction_white_left_bubles = "right up"
        } else if (e.movementX > oldx && e.movementY > oldy) {
            direction_white_left_bubles = "right down";
        } else if (e.movementX < oldx && e.movementY < oldy) {
            direction_white_left_bubles = "left up";
        } else if (e.movementX < oldx) {
            direction_white_left_bubles = "left";
        } else if (e.movementX > oldx) {
            direction_white_left_bubles = "right";
        } else if (e.movementY < oldy) {
            direction_white_left_bubles = "up";
        } else if (e.movementY > oldy) {
            direction_white_left_bubles = "down";
        }
        oldx = e.pageX;
        oldy = e.pageY;
        console.log(direction_white_left_bubles);
        if (direction_white_left_bubles == 'left down') {
            gsap.to(".left_white_bubles", {
                x: 10,
                y: -10,
                stagger: 0.01
            });
        } else if (direction_white_left_bubles == 'left up') {
            gsap.to(".left_white_bubles", {
                x: 10,
                y: 10,
                stagger: 0.01
            });
        } else if (direction_white_left_bubles == 'right down') {
            gsap.to(".left_white_bubles", {
                x: -10,
                y: -10,
                stagger: 0.01
            });
        } else if (direction_white_left_bubles == 'right up') {
            gsap.to(".left_white_bubles", {
                x: 10,
                y: 10,
                stagger: 0.01
            });
        } else if (direction_white_left_bubles == 'left') {
            gsap.to(".left_white_bubles", {
                x: 10,
                // y: 10,
                stagger: 0.01
            });
        } else if (direction_white_left_bubles == 'right') {
            gsap.to(".left_white_bubles", {
                x: -10,
                // y: 10,
                stagger: 0.01
            });
        } else if (direction_white_left_bubles == 'up') {
            gsap.to(".left_white_bubles", {
                // x: -10,
                y: 10,
                stagger: 0.01
            });
        } else if (direction_white_left_bubles == 'down') {
            gsap.to(".left_white_bubles", {
                // x: -10,
                y: -10,
                stagger: 0.01
            });
        }
    }

    let orange_animation_left = async() => {
        var oldx = 0;
        var oldy = 0;
        if (e.movementX < oldx && e.movementY > oldy) {
            direction_orange_left_bubles = "left down"
        } else if (e.movementX > oldx && e.movementY < oldy) {
            direction_orange_left_bubles = "right up"
        } else if (e.movementX > oldx && e.movementY > oldy) {
            direction_orange_left_bubles = "right down";
        } else if (e.movementX < oldx && e.movementY < oldy) {
            direction_orange_left_bubles = "left up";
        } else if (e.movementX < oldx) {
            direction_orange_left_bubles = "left";
        } else if (e.movementX > oldx) {
            direction_orange_left_bubles = "right";
        } else if (e.movementY < oldy) {
            direction_orange_left_bubles = "up";
        } else if (e.movementY > oldy) {
            direction_orange_left_bubles = "down";
        }
        oldx = e.pageX;
        oldy = e.pageY;
        console.log(direction_orange_left_bubles);
        if (direction_orange_left_bubles == 'left down') {
            gsap.to(".left_orange_bubles", {
                x: 15,
                y: -15,
                stagger: 0.01,
                duration: .9
            });
        } else if (direction_orange_left_bubles == 'left up') {
            gsap.to(".left_orange_bubles", {
                x: 15,
                y: 15,
                stagger: 0.01,
                duration: .9
            });
        } else if (direction_orange_left_bubles == 'right down') {
            gsap.to(".left_orange_bubles", {
                x: -15,
                y: -15,
                stagger: 0.01,
                duration: .9
            });
        } else if (direction_orange_left_bubles == 'right up') {
            gsap.to(".left_orange_bubles", {
                x: 15,
                y: 15,
                stagger: 0.01,
                duration: .9
            });
        } else if (direction_orange_left_bubles == 'left') {
            gsap.to(".left_orange_bubles", {
                x: 15,
                // y: 15,
                stagger: 0.01,
                duration: .9
            });
        } else if (direction_orange_left_bubles == 'right') {
            gsap.to(".left_orange_bubles", {
                x: -15,
                // y: 15,
                stagger: 0.01,
                duration: .9
            });
        } else if (direction_orange_left_bubles == 'up') {
            gsap.to(".left_orange_bubles", {
                // x: -15,
                y: 15,
                stagger: 0.01,
                duration: .9
            });
        } else if (direction_orange_left_bubles == 'down') {
            gsap.to(".left_orange_bubles", {
                // x: -15,
                y: -15,
                stagger: 0.01,
                duration: .9
            });
        }
    }


    let pitch_animation_left = async() => {
        var oldx = 0;
        var oldy = 0;
        if (e.movementX < oldx && e.movementY > oldy) {
            direction_pitch_left_bubles = "left down"
        } else if (e.movementX > oldx && e.movementY < oldy) {
            direction_pitch_left_bubles = "right up"
        } else if (e.movementX > oldx && e.movementY > oldy) {
            direction_pitch_left_bubles = "right down";
        } else if (e.movementX < oldx && e.movementY < oldy) {
            direction_pitch_left_bubles = "left up";
        } else if (e.movementX < oldx) {
            direction_pitch_left_bubles = "left";
        } else if (e.movementX > oldx) {
            direction_pitch_left_bubles = "right";
        } else if (e.movementY < oldy) {
            direction_pitch_left_bubles = "up";
        } else if (e.movementY > oldy) {
            direction_pitch_left_bubles = "down";
        }
        oldx = e.pageX;
        oldy = e.pageY;
        console.log(direction_pitch_left_bubles);
        if (direction_pitch_left_bubles == 'left down') {
            gsap.to(".left_pitch_bubles", {
                x: 15,
                y: -15,
                stagger: 0.01,
                duration: 1
            });
        } else if (direction_pitch_left_bubles == 'left up') {
            gsap.to(".left_pitch_bubles", {
                x: 15,
                y: 15,
                stagger: 0.01,
                duration: 1
            });
        } else if (direction_pitch_left_bubles == 'right down') {
            gsap.to(".left_pitch_bubles", {
                x: -15,
                y: -15,
                stagger: 0.01,
                duration: 1
            });
        } else if (direction_pitch_left_bubles == 'right up') {
            gsap.to(".left_pitch_bubles", {
                x: 15,
                y: 15,
                stagger: 0.01,
                duration: 1
            });
        } else if (direction_pitch_left_bubles == 'left') {
            gsap.to(".left_pitch_bubles", {
                x: 15,
                // y: 15,
                stagger: 0.01,
                duration: 1
            });
        } else if (direction_pitch_left_bubles == 'right') {
            gsap.to(".left_pitch_bubles", {
                x: -15,
                // y: 15,
                stagger: 0.01,
                duration: 1
            });
        } else if (direction_pitch_left_bubles == 'up') {
            gsap.to(".left_pitch_bubles", {
                // x: -15,
                y: 15,
                stagger: 0.01,
                duration: 1
            });
        } else if (direction_pitch_left_bubles == 'down') {
            gsap.to(".left_pitch_bubles", {
                // x: -15,
                y: -15,
                stagger: 0.01,
                duration: 1
            });
        }
    }



    let white_animation_right = async() => {
        var oldx = 0;
        var oldy = 0;
        if (e.movementX < oldx && e.movementY > oldy) {
            direction_white_right_bubles = "left down"
        } else if (e.movementX > oldx && e.movementY < oldy) {
            direction_white_right_bubles = "right up"
        } else if (e.movementX > oldx && e.movementY > oldy) {
            direction_white_right_bubles = "right down";
        } else if (e.movementX < oldx && e.movementY < oldy) {
            direction_white_right_bubles = "left up";
        } else if (e.movementX < oldx) {
            direction_white_right_bubles = "left";
        } else if (e.movementX > oldx) {
            direction_white_right_bubles = "right";
        } else if (e.movementY < oldy) {
            direction_white_right_bubles = "up";
        } else if (e.movementY > oldy) {
            direction_white_right_bubles = "down";
        }
        oldx = e.pageX;
        oldy = e.pageY;
        console.log(direction_white_right_bubles);
        if (direction_white_right_bubles == 'left down') {
            gsap.to(".right_white_bubles", {
                x: -10,
                y: 10,
                stagger: 0.01
            });
        } else if (direction_white_right_bubles == 'left up') {
            gsap.to(".right_white_bubles", {
                x: -10,
                y: -10,
                stagger: 0.01
            });
        } else if (direction_white_right_bubles == 'right down') {
            gsap.to(".right_white_bubles", {
                x: 10,
                y: 10,
                stagger: 0.01
            });
        } else if (direction_white_right_bubles == 'right up') {
            gsap.to(".right_white_bubles", {
                x: -10,
                y: -10,
                stagger: 0.01
            });
        } else if (direction_white_right_bubles == 'left') {
            gsap.to(".right_white_bubles", {
                x: -10,
                // y: 10,
                stagger: 0.01
            });
        } else if (direction_white_right_bubles == 'right') {
            gsap.to(".right_white_bubles", {
                x: 10,
                // y: 10,
                stagger: 0.01
            });
        } else if (direction_white_right_bubles == 'up') {
            gsap.to(".right_white_bubles", {
                // x: -10,
                y: -10,
                stagger: 0.01
            });
        } else if (direction_white_right_bubles == 'down') {
            gsap.to(".right_white_bubles", {
                // x: -10,
                y: 10,
                stagger: 0.01
            });
        }
    }

    let orange_animation_right = async() => {
        var oldx = 0;
        var oldy = 0;
        if (e.movementX < oldx && e.movementY > oldy) {
            direction_orange_right_bubles = "left down"
        } else if (e.movementX > oldx && e.movementY < oldy) {
            direction_orange_right_bubles = "right up"
        } else if (e.movementX > oldx && e.movementY > oldy) {
            direction_orange_right_bubles = "right down";
        } else if (e.movementX < oldx && e.movementY < oldy) {
            direction_orange_right_bubles = "left up";
        } else if (e.movementX < oldx) {
            direction_orange_right_bubles = "left";
        } else if (e.movementX > oldx) {
            direction_orange_right_bubles = "right";
        } else if (e.movementY < oldy) {
            direction_orange_right_bubles = "up";
        } else if (e.movementY > oldy) {
            direction_orange_right_bubles = "down";
        }
        oldx = e.pageX;
        oldy = e.pageY;
        console.log(direction_orange_right_bubles);
        if (direction_orange_right_bubles == 'left down') {
            gsap.to(".right_orange_bubles", {
                x: -15,
                y: 15,
                stagger: 0.01,
                duration: .9
            });
        } else if (direction_orange_right_bubles == 'left up') {
            gsap.to(".right_orange_bubles", {
                x: -15,
                y: -15,
                stagger: 0.01,
                duration: .9
            });
        } else if (direction_orange_right_bubles == 'right down') {
            gsap.to(".right_orange_bubles", {
                x: 15,
                y: 15,
                stagger: 0.01,
                duration: .9
            });
        } else if (direction_orange_right_bubles == 'right up') {
            gsap.to(".right_orange_bubles", {
                x: -15,
                y: -15,
                stagger: 0.01,
                duration: .9
            });
        } else if (direction_orange_right_bubles == 'left') {
            gsap.to(".right_orange_bubles", {
                x: -15,
                // y: 15,
                stagger: 0.01,
                duration: .9
            });
        } else if (direction_orange_right_bubles == 'right') {
            gsap.to(".right_orange_bubles", {
                x: 15,
                // y: 15,
                stagger: 0.01,
                duration: .9
            });
        } else if (direction_orange_right_bubles == 'up') {
            gsap.to(".right_orange_bubles", {
                // x: -15,
                y: -15,
                stagger: 0.01,
                duration: .9
            });
        } else if (direction_orange_right_bubles == 'down') {
            gsap.to(".right_orange_bubles", {
                // x: -15,
                y: 15,
                stagger: 0.01,
                duration: .9
            });
        }
    }

    let pitch_animation_right = async() => {
        var oldx = 0;
        var oldy = 0;
        if (e.movementX < oldx && e.movementY > oldy) {
            direction_pitch_right_bubles = "left down"
        } else if (e.movementX > oldx && e.movementY < oldy) {
            direction_pitch_right_bubles = "right up"
        } else if (e.movementX > oldx && e.movementY > oldy) {
            direction_pitch_right_bubles = "right down";
        } else if (e.movementX < oldx && e.movementY < oldy) {
            direction_pitch_right_bubles = "left up";
        } else if (e.movementX < oldx) {
            direction_pitch_right_bubles = "left";
        } else if (e.movementX > oldx) {
            direction_pitch_right_bubles = "right";
        } else if (e.movementY < oldy) {
            direction_pitch_right_bubles = "up";
        } else if (e.movementY > oldy) {
            direction_pitch_right_bubles = "down";
        }
        oldx = e.pageX;
        oldy = e.pageY;
        console.log(direction_pitch_right_bubles);
        if (direction_pitch_right_bubles == 'left down') {
            gsap.to(".right_pitch_bubles", {
                x: -15,
                y: 15,
                stagger: 0.01,
                duration: 1
            });
        } else if (direction_pitch_right_bubles == 'left up') {
            gsap.to(".right_pitch_bubles", {
                x: -15,
                y: -15,
                stagger: 0.01,
                duration: 1
            });
        } else if (direction_pitch_right_bubles == 'right down') {
            gsap.to(".right_pitch_bubles", {
                x: 15,
                y: 15,
                stagger: 0.01,
                duration: 1
            });
        } else if (direction_pitch_right_bubles == 'right up') {
            gsap.to(".right_pitch_bubles", {
                x: -15,
                y: -15,
                stagger: 0.01,
                duration: 1
            });
        } else if (direction_pitch_right_bubles == 'left') {
            gsap.to(".right_pitch_bubles", {
                x: -15,
                // y: 15,
                stagger: 0.01,
                duration: 1
            });
        } else if (direction_pitch_right_bubles == 'right') {
            gsap.to(".right_pitch_bubles", {
                x: 15,
                // y: 15,
                stagger: 0.01,
                duration: 1
            });
        } else if (direction_pitch_right_bubles == 'up') {
            gsap.to(".right_pitch_bubles", {
                // x: -15,
                y: -15,
                stagger: 0.01,
                duration: 1
            });
        } else if (direction_pitch_right_bubles == 'down') {
            gsap.to(".right_pitch_bubles", {
                // x: -15,
                y: 15,
                stagger: 0.01,
                duration: 1
            });
        }
    }






    white_animation_left();
    orange_animation_left();

    white_animation_right();
    orange_animation_right();

    pitch_animation_left();
    pitch_animation_right();
}



document.querySelector('.wrapper').addEventListener('mousemove', mousemovemethod_white);


// tl.to(".left_white_bubles", {
//     // x: 10,
//     // opacity: 1,
//     // y: 10,
//     scale: 1.05,
//     repeat: -1,
// });
// tl.to('.left_orange_bubles', {
//     // x: 5,
//     // opacity: 1,
//     // stagger: 0.05,
//     // y: 5,
//     scale: 1.1,
//     repeat: -1,
//     stagger: false
// })