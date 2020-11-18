basic.forever(function () {
    for (let i = 0; i <= 4; i++) {
        for (let j = 0; j <= i; j++) {
            led.plot(0, 0 + i)
        }
        basic.pause(200)
    }
    basic.clearScreen()
})
