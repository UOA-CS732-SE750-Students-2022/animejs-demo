// let path = anime.path('#demo-svg path');
// anime({
//     targets: '#emoji',
//     translateX: path('x'),
//     translateY: path('y'),
//     // rotate: path('angle'),
//     easing: 'linear',
//     duration: 5000,
//     loop: true
// })


// anime({
//     targets: '#demo-svg polygon',
//     points: [
//         { value: '87 472,87 91,267 80,501 78,489 304,500 450,293 457' },
//         { value: '126 263,281 317,475 132,405 417,530 535,29 490,202 365' }
//     ],
//     easing: 'easeOutQuad',
//     duration: 2500,
//     loop: true,
//     direction: 'alternate'
// })

anime({
    targets: '#demo-svg path',
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutQuad',
    duration: 5000,
    direction: 'alternate',
    loop: true

})