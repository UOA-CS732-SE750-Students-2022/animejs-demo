/**
 * Targets both of the heart svgs, and translate them from the top of the page to drop down to the middle, over the duration of 1 second.
 * Note that at this point, the heart svgs are still in the top of the page, and both hearts are overlapped.
 */
const heartsDropInitial = {
    targets: '.heart',
    translateY: 290,
    duration: '1000',
}

/**
 * Offsets the left-heart svg so that it comes from where the right-heart is. 
 * TranslateX includes two keyframes: 
 *   1. The first keyframe is when the left-heart is overlapping the right-heart
 *   2. The second keyframe is when the the left-heart is in its final X position on the page.
 * The duration of the animation is 1 second.
 */
const heartLeftSplit = {
    targets: '#left-heart',
    translateX: [
        { value: 410, duration: 0 },
        { value: 0, duration: 500 }
    ],
    duration: 1000,
}

/**
 * Fills the left-heart with a pink colour, becasue the fill of the left-heart was initially "none".
 */
const fillLeftHeart = {
    targets: "#left-heart path",
    fill: "#FB7299",
}

/**
 * Traces out the outlines of the svg characters. 
 * The stagger function is used so that each subsequent character is delayed by 150ms relative to the previous one. 
 */
const drawCharOutlines = {
    targets: '.char path',
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutQuad',
    delay: anime.stagger(150),
    stroke: '#000'
}

/**
 * Fills the svg characters with a grey colour, and changes the stroke colour to grey. 
 * Stagger function is used to offset the effect on each character by 50ms relative to the previous one.
 */
const fillChars = {
    targets: '.char path',
    delay: anime.stagger(50),
    easing: 'easeInOutQuad',
    fill: '#AAA',
    stroke: '#AAA'
}

/**
 * Translates all svg characters downwards. 
 * Stagger function is used to offset the effect on each character by 50ms relative to the previous one.
 */
const staggerCharTranslateY = {
    targets: [".char"],
    translateY: 30,
    delay: anime.stagger(50),
}

/**
 * This drops the hearts down to be in-line with the characters, which have just been translated downwards by 30px.
 * The reason `translateY` is 320 is because the initial position of the hearts is 290px above the character svgs.
 * The duration of the animation is 0.3 seconds.
 */
const heartsDown = {
    targets: '.heart',
    translateY: 320,
    duration: 300,
}

/**
 * This rotates the hearts by 1 revolution over 2 seconds. 
 * Stagger is used to make the second heart's animation be delayed by 300ms relative to the first heart. 
 */
const heartsRotate = {
    targets: '.heart',
    rotate: '1turn',
    duration: 2000,
    delay: anime.stagger(300)
}

/**
 * This creates an empty timeline. 
 * The timeline can be used to chain animations in a sequence. 
 * We initialise this here with an empty object. 
 */
const timeline = anime.timeline({})

/**
 * Each animation is added to the timeline in the order which they should be played. 
 * Animations will be played sequentially. Each animation's finish time is equal to the subsequent animation's start time by default.
 * You can try commenting out some of these lines to see what effect it has on the overall animation sequence. 
 */
timeline
    .add(heartsDropInitial)
    .add(heartLeftSplit)
    // The second argument here, `-=500`, means that this animation will be played 500ms earlier than default. 
    // (Default being when the previous animatino finishes)  
    .add(fillLeftHeart, '-=500')
    .add(drawCharOutlines)
    .add(fillChars, '-=500')
    .add(staggerCharTranslateY, '-=1000')
    .add(heartsDown)
    // The second argument here, `+=500`, means that this animation will be played 500ms later than default. 
    .add(heartsRotate, '+=500')


/**
 * This handles the animation of the pink (left) heart being tossed up in the air and rotated when it is hovered. 
 * It uses three keyframes:
 *   1. The Y position of the heart is where it already was, at duration 0.
 *   2. The Y position of the heart is set to be 200px higher than its current position, at duration 500ms.
 *   3. The Y position of the heart is set to be where it was at the start of the animation, at duration 800ms.
 * The rotation field specifies that it should turn one revolution, with an easing function of "easeInQuad"
 */
const hoverLeftHeart = anime({
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

/**
 * This handles the animation of the red (right) heart bouncing up and down when it is hovered.
 * it uses multiple keyframes to achieve this gravity effect, where every time the ball bounces, the height becomes lower. 
 * In keyframes[2], the heart is scaled down by 0.85x in the Y direction, to imitate a ball being compressed as it hits the ground. 
 * This is subsequently set back to 1 when it bounces back up, and set  to 0.9x the next time it hits the ground, and so on. 
 * This is becasue every time the ball bounces, it loses height, hence there is less compressive force when it lands.
 */
const hoverRightHeart = anime({
    targets: '#right-heart',
    keyframes: [
        { translateY: 320, duration: 0 },
        { translateY: 60, duration: 150, },
        { translateY: 320, duration: 200, scaleY: 0.85 },
        { translateY: 180, duration: 230, scaleY: 1 },
        { translateY: 320, duration: 250, scaleY: 0.9 },
        { translateY: 260, duration: 260, scaleY: 1 },
        { translateY: 320, duration: 265, },
    ],
    autoplay: false,
});

// Add the event listeners to the hearts for hover action. 
document.querySelector('#left-heart').onmouseover = hoverLeftHeart.play
document.querySelector('#right-heart').onmouseover = hoverRightHeart.play