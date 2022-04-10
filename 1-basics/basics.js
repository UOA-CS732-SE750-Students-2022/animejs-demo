// Translate a square to the right by 100px
anime({
    targets: '#translate .item',
    translateX: 70,
    duration: 2000,
    loop: true
})

// Rotate a square by 1 revolution
anime({
    targets: '#rotate .item',
    rotate: '1turn',
    duration: 2000,
    loop: true
})

// Scale a square by 2x
anime({
    targets: '#scale .item',
    scale: 2,
    duration: 2000,
    loop: true
})