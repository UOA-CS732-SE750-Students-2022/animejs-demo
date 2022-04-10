const staggerTranslateY = {
    targets: [".char"],
    translateY: 30,
    delay: anime.stagger(50),
    direction: 'alternate',
}


const drawCharOutlines = {
    targets: '.char path',
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutQuad',
    delay: anime.stagger(150),
    stroke: '#000'
}

const fillChars = {
    targets: '.char path',
    delay: anime.stagger(50),
    easing: 'easeInOutQuad',
    fill: '#000',

}


const heartsDrop = {
    targets: '.heart',
    translateY: 290,
    duration: '1000',
    direction: 'reverse'
}

const heartLeftSplit = {
    targets: '#left-heart',
    translateX: -410,
    duration: 1000
}

const heartsDown = {
    targets: '.heart',
    translateY: 320,
    duration: 300,
}



const timeline = anime.timeline({
})

timeline
    .add(heartsDrop)
    .add(heartLeftSplit)
    .add(drawCharOutlines)
    .add(fillChars, '-=500')
    .add(staggerTranslateY, '-=1000')
    .add(heartsDown)

