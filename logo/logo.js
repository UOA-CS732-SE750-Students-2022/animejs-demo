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

const timeline = anime.timeline({})

timeline
    .add(heartsDrop)
    .add(heartLeftSplit)
    .add(fillLeftHeart, '-=500')
    .add(drawCharOutlines)
    .add(fillChars, '-=500')
    .add(staggerTranslateY, '-=1000')
    .add(heartsDown)


const tapLeftHeart = anime({
    targets: '#left-heart',
    translateY: [
        { value: 320, duration: 0 },
        { value: 120, duration: 500 },
        { value: 320, duration: 800 }
    ],
    rotate: {
        value: '1turn',
        easing: 'easeInQuad'
    },
    autoplay: false,
});

const tapRightHeart = anime({
    targets: '#right-heart',
    keyframes: [
        { translateY: 320, duration: 0 },
        { translateY: 120, duration: 100, },
        { translateY: 320, duration: 150, scaleY: 0.85 },
        { translateY: 180, duration: 170 },
        { translateY: 320, duration: 190, scaleY: 0.9 },
        { translateY: 260, duration: 200 },
        { translateY: 320, duration: 210, scaleY: 1 },
    ],
    autoplay: false,
});



document.querySelector('#left-heart').onclick = tapLeftHeart.play
document.querySelector('#right-heart').onclick = tapRightHeart.play