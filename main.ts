let kompas = 0
basic.forever(function () {
    kompas = input.compassHeading()
    if (kompas < 45) {
        basic.showString("N")
    } else if (kompas < 135) {
        basic.showString("E")
    } else if (kompas < 225) {
        basic.showString("S")
    } else if (kompas < 315) {
        basic.showString("W")
    }
})
