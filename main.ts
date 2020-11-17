basic.forever(function () {
    for (let i = 0; i <= 4; i++) {
        for (let j = 0; j <= i; j++) {
            led.plot(0, 4 - (i + 1))
        }
        basic.pause(500)
    }
    basic.clearScreen()
})
