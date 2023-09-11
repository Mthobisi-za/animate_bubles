var allBubles = document.querySelectorAll('.buble');

allBubles.forEach(buble => {
    console.log('change is linked')
    buble.addEventListener('click', (e) => {
        console.log('changine')
        console.log(e.target.classList[2]);
        if ('white' === e.target.classList[2]) {
            document.getElementById("cursor").style.background = 'white'
        } else if ('orange' === e.target.classList[2]) {
            document.getElementById("cursor").style.background = '#FFA672'
        } else if ('pitch' === e.target.classList[2]) {
            document.getElementById("cursor").style.background = '#E7D2D8'
        }
    })
});



var allBottles = document.querySelectorAll('.product-img');
allBottles.forEach(bottle => {
    bottle.addEventListener('mousemove', () => {
        document.getElementById("cursor").style.background = 'transparent';
        document.getElementById("cursor").style.border = '#FFA672 3px solid';
    });
    bottle.addEventListener('mouseout', () => {
        document.getElementById("cursor").style.background = '#FFA672';
        document.getElementById("cursor").style.border = 'none';
    });
})