namespace Steve {
    let Dance2 = 0
    export function Steve_Dance() {
        Dance2 = 1
    }
    function Song_1() {
        if (Dance2 == 1) {
            music.setVolume(145)
            music.play(music.stringPlayable("E - E - F - G - ", 200), music.PlaybackMode.UntilDone)
            music.play(music.stringPlayable("G - F - E - D - ", 200), music.PlaybackMode.UntilDone)
            music.play(music.stringPlayable("C - C - D - E - ", 200), music.PlaybackMode.UntilDone)
            music.play(music.stringPlayable("E - D - D - - - ", 200), music.PlaybackMode.UntilDone)
        }
    }
    export function Clear_steve() {
        Dance2 = 0
        basic.showLeds(`
        . # . # .
        . # . # .
        . . . . .
        # . . . #
        . # # # .
        `)
    }
    function Dance() {
        if (Dance2 == 1) {
            basic.showLeds(`
            . . # . #
            . . # . #
            # . . . .
            . # . . .
            . . # # #
            `)
            basic.pause(100)
            basic.showLeds(`
            . # . # .
            . # . # .
            . . . . .
            # . . . #
            . # # # .
            `)
            basic.pause(100)
            basic.showLeds(`
            # . # . .
            # . # . .
            . . . . #
            . . . # .
            # # # . .
            `)
            basic.pause(100)
            basic.showLeds(`
            . # . # .
            . # . # .
            . . . . .
            # . . . #
            . # # # .
            `)
        }
    }
    basic.forever(function () {
        Dance()
    })
    basic.forever(function () {
        Song_1()
    })

}
