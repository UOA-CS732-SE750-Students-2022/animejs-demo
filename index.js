// Move in a square while changing size, 1 
// anime({
//     targets: '.item',
//     keyframes: [
//         { translateX: 250, scale: 1 },
//         { translateY: 50, scale: 1.5 },
//         { translateX: -250, scale: 2 },
//         { translateY: -50, scale: 2.5 },
//     ],
//     duration: 3000,
//     loop: true
// })

// Staggering X translation, 5
// anime({
//     targets: '.item',
//     translateX: anime.stagger(150),
//     delay: anime.stagger(500, { from: 'last' }),
//     duration: 3000,
//     loop: true
// })

// Grid of items, 70
// anime({
//     targets: '.item',
//     translateX: anime.stagger(10, { grid: [10, 7], from: 'center', axis: 'x' }),
//     translateY: anime.stagger(10, { grid: [10, 7], from: 'center', axis: 'y' }),
//     rotateZ: anime.stagger([0, 90], { grid: [10, 7], from: 'center', axis: 'x' }),
//     delay: anime.stagger(200, { grid: [10, 7], from: 'center', }),
//     loop: true,
//     direction: 'alternate',
//     easing: 'easeInOutQuad',
// })


// let timeline = anime.timeline({
//     duration: 750,
//     loop: true,
//     diretion: 'alternate'
// })
// timeline.add({
//     targets: '.item',
//     translateX: anime.stagger(10, { grid: [10, 7], from: 'center', axis: 'x' }),
//     translateY: anime.stagger(10, { grid: [10, 7], from: 'center', axis: 'y' }),
//     rotateZ: anime.stagger([0, 90], { grid: [10, 7], from: 'center', axis: 'x' }),
//     delay: anime.stagger(200, { grid: [10, 7], from: 'center', }),
//     easing: 'easeInOutQuad',
// }).add({
//     targets: '.item',
//     translateX: anime.stagger(20, { grid: [10, 7], from: 'center', axis: 'x' }),
//     translateY: anime.stagger(20, { grid: [10, 7], from: 'center', axis: 'y' }),
//     rotateZ: anime.stagger([90, 180], { grid: [10, 7], from: 'center', axis: 'x' }),
//     delay: anime.stagger(200, { grid: [10, 7], from: 'center', }),
//     easing: 'easeInOutQuad',
// })