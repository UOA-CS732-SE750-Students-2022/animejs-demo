// Timeline is something you can use to chain animations together. 
let timeline = anime.timeline({
    duration: 750,
    loop: true,
})

// Add animations to the timeline
// Try changing the values below to see what effect you get!
timeline.add({
    targets: '.item',
    // Stagger makes it so that its effect is relative to the previous item. 
    // E.g. The first item moves 10px, and so the second item will move 10px relative to the first item, which will be 20px.
    // The grid property tells AnimeJS that we have a grid of 10x7 items. This will help it understand the layout of our items.
    translateX: anime.stagger(10, { grid: [10, 7], from: 'center', axis: 'x' }),
    translateY: anime.stagger(10, { grid: [10, 7], from: 'center', axis: 'y' }),
    rotateZ: anime.stagger([0, 90], { grid: [10, 7], from: 'center', axis: 'x' }),
    delay: anime.stagger(200, { grid: [10, 7], from: 'center', }),
    easing: 'easeInOutQuad',
}).add({
    targets: '.item',
    translateX: anime.stagger(20, { grid: [10, 7], from: 'center', axis: 'x' }),
    translateY: anime.stagger(20, { grid: [10, 7], from: 'center', axis: 'y' }),
    rotateZ: anime.stagger([90, 180], { grid: [10, 7], from: 'center', axis: 'x' }),
    delay: anime.stagger(200, { grid: [10, 7], from: 'center', }),
    easing: 'easeInOutQuad',
})