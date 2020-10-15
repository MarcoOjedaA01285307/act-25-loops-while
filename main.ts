input.onPinPressed(TouchPin.P0, function () {
    index = 4
    index2 = 0
    while (index >= 0) {
        led.plot(index, index2)
        basic.pause(100)
        index += -1
        index2 += 1
    }
})
input.onButtonPressed(Button.A, function () {
    counter = 0
    while (0 <= counter) {
        basic.showNumber(counter)
        counter += 1
        music.playMelody("A B F G D A B E ", 120)
    }
    basic.clearScreen()
})
input.onPinPressed(TouchPin.P1, function () {
    while (input.lightLevel() < 128) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            . # # # .
            # . . . #
            `)
        music.playTone(147, music.beat(BeatFraction.Double))
    }
    while (input.lightLevel() >= 128) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            # . . . #
            . # # # .
            `)
        music.playTone(294, music.beat(BeatFraction.Double))
    }
})
let counter = 0
let index2 = 0
let index = 0
let sprite = game.createSprite(1, 3)
basic.forever(function () {
    while (input.buttonIsPressed(Button.B)) {
        sprite.move(2)
        basic.pause(100)
        sprite.turn(Direction.Left, 90)
        basic.pause(100)
    }
})
