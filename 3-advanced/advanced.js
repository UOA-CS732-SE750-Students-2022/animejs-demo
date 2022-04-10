// Animates the text (in the form of a path) to trace the outline. 
// You can adjust the way/speed it traces by changing `stroke-dasharray` in the css file.
// Try out different values and see what happens!
anime({
    targets: '#demo-svg path',
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutQuad',
    duration: 8000,
})