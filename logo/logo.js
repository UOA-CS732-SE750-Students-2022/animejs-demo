const staggerTranslateY = {
    targets: ".char",
    translateY: 30,
    delay: anime.stagger(50),
    direction: 'alternate',
    easing: 'easeInOutSine',
}


const drawCharOutlines = {
    targets: '.char path',
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutQuad',
    delay: anime.stagger(150)
}

const fillChars = {
    targets: '.char path',
    delay: anime.stagger(50),
    easing: 'easeInOutQuad',
    fill: '#000',

}

const timeline = anime.timeline({
    loop: true,
})

timeline.add(drawCharOutlines).add(fillChars, '-=1000').add(staggerTranslateY, '-=1500')

