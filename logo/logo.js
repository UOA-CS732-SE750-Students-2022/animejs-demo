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
    translateX: [
        { value: 410, duration: 0 },
        { value: 0, duration: 500 }
    ],


    duration: 1000,
    direction: 'reverse',
}
const fillLeftHeart = {
    targets: "#left-heart path",
    fill: "#FB7299",
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
    .add(fillLeftHeart, '-=500')
    .add(drawCharOutlines)
    .add(fillChars, '-=500')
    .add(staggerTranslateY, '-=1000')
    .add(heartsDown)



var tapHeart = anime({
    targets: '#left-heart',
    translateY: [
        { value: 320, duration: 0 },
        { value: 220, duration: 500 },
        { value: 320, duration: 800 }
    ],
    rotate: {
        value: '1turn',
        easing: 'easeInOutSine'
    },
    autoplay: false,
});

document.querySelector('#left-heart').onclick = tapHeart.play