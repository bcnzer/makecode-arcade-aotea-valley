namespace SpriteKind {
    export const Building = SpriteKind.create()
    export const Boy = SpriteKind.create()
    export const Dog = SpriteKind.create()
    export const Furniture = SpriteKind.create()
    export const Car = SpriteKind.create()
    export const Plant = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`tree4`, function (sprite, location) {
    sprite.say("A stumpy stump", 500)
})
function dogQuestEvents () {
    if (myMainCharacter.overlapsWith(characterLostDog)) {
        characterLostDog.say("Woof woof")
        characterLostDog.follow(characterBoy)
    }
    if (myMainCharacter.overlapsWith(characterBoy)) {
        game.setDialogCursor(img`
            . . 4 4 4 . . . . 4 4 4 . . . . 
            . 4 5 5 5 e . . e 5 5 5 4 . . . 
            4 5 5 5 5 5 e e 5 5 5 5 5 4 . . 
            4 5 5 4 4 5 5 5 5 4 4 5 5 4 . . 
            e 5 4 4 5 5 5 5 5 5 4 4 5 e . . 
            . e e 5 5 5 5 5 5 5 5 e e . . . 
            . . e 5 f 5 5 5 5 f 5 e . . . . 
            . . f 5 5 5 4 4 5 5 5 f . . f f 
            . . f 4 5 5 f f 5 5 6 f . f 5 f 
            . . . f 6 6 6 6 6 6 4 4 f 5 5 f 
            . . . f 4 5 5 5 5 5 5 4 4 5 f . 
            . . . f 5 5 5 5 5 4 5 5 f f . . 
            . . . f 5 f f f 5 f f 5 f . . . 
            . . . f f . . f f . . f f . . . 
            `)
        game.setDialogFrame(img`
            ..bbbbbbbbbbbbbbbbbbbb..
            .bd111111111111111111db.
            bd1dbbbbbbbbbbbbbbbbd1db
            b1dbbbbbbbbbbbbbbbbbbd1b
            b1bd1111111111111111db1b
            b1b111111111111111111b1b
            b1b111111111111111111b1b
            b1b111111111111111111b1b
            b1b111111111111111111b1b
            b1b111111111111111111b1b
            b1b111111111111111111b1b
            b1b111111111111111111b1b
            b1b111111111111111111b1b
            b1b111111111111111111b1b
            b1b111111111111111111b1b
            b1b111111111111111111b1b
            b1b111111111111111111b1b
            b1b111111111111111111b1b
            b1b111111111111111111b1b
            b1bd1111111111111111db1b
            bd1bbbbbbbbbbbbbbbbbb1db
            bbd111111111111111111dbb
            .bbbbbbbbbbbbbbbbbbbbbb.
            ..bbbbbbbbbbbbbbbbbbbb..
            `)
        if (listQuests[0] == "dog found") {
            characterBoy.vx = -50
            game.showLongText("Thank you so much!", DialogLayout.Bottom)
        } else {
            game.showLongText("Please help me find my dog", DialogLayout.Bottom)
        }
        characterBoy.y += 20
    }
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (usingCar == 0) {
        animation.runImageAnimation(
        myMainCharacter,
        [img`
            . . . . . . . 5 5 . . . . . . . 
            . . . . . f 5 5 5 5 f . . . . . 
            . . . . f a a a a a a f . . . . 
            . . . f a 1 1 1 a 1 a a f . . . 
            . . . f a a a a a a a a f . . . 
            . . . f a a a a a a a a f . . . 
            . . . f a a a a a a a a f . . . 
            . . f f a a a a a a a a f f . . 
            . f a a a f a a a a f a a a f . 
            . . f f f 3 f f f f 3 f f f . . 
            . . . f d 5 3 3 3 3 5 d f . . . 
            . . f d d f 3 3 3 3 f d d f . . 
            . . . f f f 5 3 3 5 f f f . . . 
            . . . . f 3 3 5 5 3 3 f . . . . 
            . . . . f 3 3 3 3 3 3 f . . . . 
            . . . . . f f f f f f . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . 5 5 . . . . . . . 
            . . . . . f 5 5 5 5 f . . . . . 
            . . . . f a a a a a a f . . . . 
            . . . f a 1 1 1 a 1 a a f . . . 
            . . . f a a a a a a a a f . . . 
            . . . f a a a a a a a a f . . . 
            . . . f a a a a a a a a f . . . 
            . . f f a a a a a a a a f f . . 
            . f a a a f a a a a f a a a f . 
            . . f f f 3 f f f f 5 f f f . . 
            . . . f d f 3 3 3 3 d d f . . . 
            . . . . f 3 5 3 3 f d d f . . . 
            . . . . f 3 3 5 5 3 f f . . . . 
            . . . . f f 3 3 f f . . . . . . 
            . . . . . . f f . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . 5 5 . . . . . . . 
            . . . . . f 5 5 5 5 f . . . . . 
            . . . . f a a a a a a f . . . . 
            . . . f a 1 1 1 a 1 a a f . . . 
            . . . f a a a a a a a a f . . . 
            . . . f a a a a a a a a f . . . 
            . . . f a a a a a a a a f . . . 
            . . f f a a a a a a a a f f . . 
            . f a a a f a a a a f a a a f . 
            . . f f f 5 f f f f 3 f f f . . 
            . . . f d d 3 3 3 3 f d f . . . 
            . . . f d d f 3 3 5 3 f . . . . 
            . . . . f f 3 5 5 3 3 f . . . . 
            . . . . . . f f 3 3 f f . . . . 
            . . . . . . . . f f . . . . . . 
            `],
        250,
        true
        )
    } else {
        myMainCharacterCar.setImage(img`
            . . . . . . a a c c a a . . . . 
            . . . . . a 3 3 3 3 3 3 a . . . 
            . . . . 3 c 3 3 3 3 3 3 c 3 . . 
            . . . a 3 c d 3 3 3 3 3 c 3 a . 
            . . . f 3 3 d 3 3 3 3 3 c 3 f . 
            . . . f 3 3 d 3 3 3 3 3 3 3 f . 
            . . . f 3 3 d 3 3 3 3 3 3 3 f . 
            . . . f 3 c 3 d d 3 3 3 c 3 f . 
            . . . a 3 c a c c c c a c 3 a . 
            . . . a 3 a c b b b b c a 3 a . 
            . . . a 3 a b b b b b b a 3 a . 
            . . . a a a a a a a a a a a a . 
            . . . f a d a a a a a a d a f . 
            . . . f a 3 d a a a a d 3 a f . 
            . . . f f a a a a a a a a f f . 
            . . . . f f . . . . . . f f . . 
            `)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Building, function (sprite, otherSprite) {
    sprite.setPosition(430, 50)
    scene.centerCameraAt(450, 50)
    tiles.setTilemap(tilemap`levelAmelieHouse0`)
})
function questFindPearl () {
    characterPearlGirl = sprites.create(img`
        . f f f . f f f f . f f f . 
        f f f f f c c c c f f f f f 
        f f f f b c c c c b f f f f 
        f f f c 3 c c c c 3 c f f f 
        . f 3 3 c c c c c c 3 3 f . 
        . f c c c c 4 4 c c c c f . 
        . f f c c 4 4 4 4 c c f f . 
        . f f f b f 4 4 f b f f f . 
        . f f 4 1 f d d f 1 4 f f . 
        . . f f d d d d d d f f . . 
        . . e f e 4 4 4 4 e f e . . 
        . e 4 f b 3 3 3 3 b f 4 e . 
        . 4 d f 3 3 3 3 3 3 c d 4 . 
        . 4 4 f 6 6 6 6 6 6 f 4 4 . 
        . . . . f f f f f f . . . . 
        . . . . f f . . f f . . . . 
        `, SpriteKind.Boy)
    characterPearlGirl.setPosition(407, 310)
    questPearl = sprites.create(img`
        . . . . . f c c c c f . . . . . 
        . . c c f b b 3 3 b b f c c . . 
        . c b 3 3 b b c c b b 3 3 b c . 
        . f 3 c c c b c c b c c c 3 f . 
        f c b b c c b c c b c c b b c f 
        c 3 c c b c c c c c c b c c 3 c 
        c 3 c c c c c c c c c c c c 3 c 
        . f b b c c c c c c c c b b f . 
        . . f b b c 8 9 9 8 c b b f . . 
        . . c c c f 9 3 1 9 f c c c . . 
        . c 3 f f f 9 3 3 9 f f f 3 c . 
        c 3 f f f f 8 9 9 8 f f f f 3 c 
        f 3 c c f f f f f f f f c c 3 f 
        f b 3 c b b f b b f b b c 3 b f 
        . c b b 3 3 b 3 3 b 3 3 b b c . 
        . . f f f f f f f f f f f f . . 
        `, SpriteKind.Plant)
    questPearl.setPosition(60, 400)
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (usingCar == 1) {
        myMainCharacter = sprites.create(assets.image`characterAmelie`, SpriteKind.Player)
        myMainCharacter.setPosition(myMainCharacterCar.x, myMainCharacterCar.y - 30)
        myMainCharacterCar.destroy()
        scene.cameraFollowSprite(myMainCharacter)
        controller.moveSprite(myMainCharacter, 75, 75)
        usingCar = 0
        createCar(myMainCharacter.x, myMainCharacterCar.y)
    }
})
function exitAmelieHouse () {
    if (myMainCharacter.y >= 0 && myMainCharacter.y <= 10 && (myMainCharacter.x >= 415 && myMainCharacter.x <= 435)) {
        tiles.setTilemap(tilemap`levelAmelieValley`)
        myMainCharacter.setPosition(80, 90)
        scene.cameraFollowSprite(myMainCharacter)
    }
}
controller.anyButton.onEvent(ControllerButtonEvent.Released, function () {
    if (usingCar == 0) {
        animation.stopAnimation(animation.AnimationTypes.All, myMainCharacter)
        myMainCharacter.setImage(assets.image`characterAmelie`)
    }
})
function gameIntro () {
    game.splash("Welcome to", "AMELIE VALLEY")
    characterName = game.askForString("What is your name?")
}
function worldSetupTrees () {
    spriteTreeStump = sprites.create(img`
        . . . . . b b b b b b . . . . . 
        . . . b b d d d d d d b b . . . 
        . . b b d d b b b b d d b b . . 
        . e d b d b d d d d b d b d e . 
        . f d b d d b b b b d d b d e . 
        . f b d b b d d d d b b d b e . 
        . f e d d d b b b b d d d e e . 
        . f f e b d d d d d d b e e f . 
        . f f e e e e e e e e e e e f . 
        . f f e e e f e e e e e e e f . 
        . f f e f e e e f f e e f e e f 
        . f e e f e f e f e f e f e e e 
        f f e e e e f e e f f e f f e e 
        f e e e e f f e e e e e f f f e 
        e e e e f f f e f e e e e f f f 
        e e e e f f f e f e e e e f f f 
        `, SpriteKind.Plant)
    spriteTreeStump.setPosition(183, 96)
    spriteTreeStump = sprites.create(img`
        . . . . . b b b b b b . . . . . 
        . . . b b d d d d d d b b . . . 
        . . b b d d b b b b d d b b . . 
        . e d b d b d d d d b d b d e . 
        . f d b d d b b b b d d b d e . 
        . f b d b b d d d d b b d b e . 
        . f e d d d b b b b d d d e e . 
        . f f e b d d d d d d b e e f . 
        . f f e e e e e e e e e e e f . 
        . f f e e e f e e e e e e e f . 
        . f f e f e e e f f e e f e e f 
        . f e e f e f e f e f e f e e e 
        f f e e e e f e e f f e f f e e 
        f e e e e f f e e e e e f f f e 
        e e e e f f f e f e e e e f f f 
        e e e e f f f e f e e e e f f f 
        `, SpriteKind.Plant)
    spriteTreeStump.setPosition(66, 228)
    spriteTreeStump = sprites.create(img`
        . . . . . b b b b b b . . . . . 
        . . . b b d d d d d d b b . . . 
        . . b b d d b b b b d d b b . . 
        . e d b d b d d d d b d b d e . 
        . f d b d d b b b b d d b d e . 
        . f b d b b d d d d b b d b e . 
        . f e d d d b b b b d d d e e . 
        . f f e b d d d d d d b e e f . 
        . f f e e e e e e e e e e e f . 
        . f f e e e f e e e e e e e f . 
        . f f e f e e e f f e e f e e f 
        . f e e f e f e f e f e f e e e 
        f f e e e e f e e f f e f f e e 
        f e e e e f f e e e e e f f f e 
        e e e e f f f e f e e e e f f f 
        e e e e f f f e f e e e e f f f 
        `, SpriteKind.Plant)
    spriteTreeStump.setPosition(299, 395)
    spriteTreeStump = sprites.create(img`
        . . . . . b b b b b b . . . . . 
        . . . b b d d d d d d b b . . . 
        . . b b d d b b b b d d b b . . 
        . e d b d b d d d d b d b d e . 
        . f d b d d b b b b d d b d e . 
        . f b d b b d d d d b b d b e . 
        . f e d d d b b b b d d d e e . 
        . f f e b d d d d d d b e e f . 
        . f f e e e e e e e e e e e f . 
        . f f e e e f e e e e e e e f . 
        . f f e f e e e f f e e f e e f 
        . f e e f e f e f e f e f e e e 
        f f e e e e f e e f f e f f e e 
        f e e e e f f e e e e e f f f e 
        e e e e f f f e f e e e e f f f 
        e e e e f f f e f e e e e f f f 
        `, SpriteKind.Plant)
    spriteTreeStump.setPosition(373, 245)
    spriteTree = sprites.create(img`
        ................86..................
        ...........6688867886...............
        ...........8666877688868............
        ............868777767768............
        .........688667777776688............
        ........67767777777778666...........
        .........6776667767666868...........
        ..........866667667677688...........
        .........8666666666667778...........
        ........667766666666666676..........
        .......67766667666776667776.........
        ......886667776676777666688.........
        .....67766777667767777666768........
        ....6776666666777667776666776.......
        .....8667776667766676677776776......
        ......8777666666667776777776688.....
        ....6887766776677677777777776776....
        ..8866666677767777777777766666778...
        .86666666777667767777766666776668...
        ..88677666666777677677666667776668..
        ..86776677666666666666667776666668..
        886666677766667666666776677766668...
        6668666676667766767767766677666668..
        88866666666777677677667666666776668.
        .86668866666766776776666667766666668
        .86688666666666776666667667776666688
        .668866666666666666666677666666688..
        ..8866686666666666677667776666668...
        ...866886666666666677667776666668...
        ...86886668666666667666666666888....
        ....88866886686666666666666668......
        ......86886668666866668666868.......
        ......88866688668866688866888.......
        ........8888888688888ce868..........
        ..............e88e88.ec.8...........
        ...............eeee..e..............
        ...............ceef.ce..............
        ...............ceefcec..............
        ...............feefce...............
        ...............fceeec...............
        ...............ffceec...............
        `, SpriteKind.Plant)
    spriteTree.setPosition(209, 40)
    spriteTree = sprites.create(img`
        ................86..................
        ...........6688867886...............
        ...........8666877688868............
        ............868777767768............
        .........688667777776688............
        ........67767777777778666...........
        .........6776667767666868...........
        ..........866667667677688...........
        .........8666666666667778...........
        ........667766666666666676..........
        .......67766667666776667776.........
        ......886667776676777666688.........
        .....67766777667767777666768........
        ....6776666666777667776666776.......
        .....8667776667766676677776776......
        ......8777666666667776777776688.....
        ....6887766776677677777777776776....
        ..8866666677767777777777766666778...
        .86666666777667767777766666776668...
        ..88677666666777677677666667776668..
        ..86776677666666666666667776666668..
        886666677766667666666776677766668...
        6668666676667766767767766677666668..
        88866666666777677677667666666776668.
        .86668866666766776776666667766666668
        .86688666666666776666667667776666688
        .668866666666666666666677666666688..
        ..8866686666666666677667776666668...
        ...866886666666666677667776666668...
        ...86886668666666667666666666888....
        ....88866886686666666666666668......
        ......86886668666866668666868.......
        ......88866688668866688866888.......
        ........8888888688888ce868..........
        ..............e88e88.ec.8...........
        ...............eeee..e..............
        ...............ceef.ce..............
        ...............ceefcec..............
        ...............feefce...............
        ...............fceeec...............
        ...............ffceec...............
        `, SpriteKind.Plant)
    spriteTree.setPosition(209, 40)
    spriteTree = sprites.create(img`
        ................86..................
        ...........6688867886...............
        ...........8666877688868............
        ............868777767768............
        .........688667777776688............
        ........67767777777778666...........
        .........6776667767666868...........
        ..........866667667677688...........
        .........8666666666667778...........
        ........667766666666666676..........
        .......67766667666776667776.........
        ......886667776676777666688.........
        .....67766777667767777666768........
        ....6776666666777667776666776.......
        .....8667776667766676677776776......
        ......8777666666667776777776688.....
        ....6887766776677677777777776776....
        ..8866666677767777777777766666778...
        .86666666777667767777766666776668...
        ..88677666666777677677666667776668..
        ..86776677666666666666667776666668..
        886666677766667666666776677766668...
        6668666676667766767767766677666668..
        88866666666777677677667666666776668.
        .86668866666766776776666667766666668
        .86688666666666776666667667776666688
        .668866666666666666666677666666688..
        ..8866686666666666677667776666668...
        ...866886666666666677667776666668...
        ...86886668666666667666666666888....
        ....88866886686666666666666668......
        ......86886668666866668666868.......
        ......88866688668866688866888.......
        ........8888888688888ce868..........
        ..............e88e88.ec.8...........
        ...............eeee..e..............
        ...............ceef.ce..............
        ...............ceefcec..............
        ...............feefce...............
        ...............fceeec...............
        ...............ffceec...............
        `, SpriteKind.Plant)
    spriteTree.setPosition(26, 76)
    spriteTree = sprites.create(img`
        ................86..................
        ...........6688867886...............
        ...........8666877688868............
        ............868777767768............
        .........688667777776688............
        ........67767777777778666...........
        .........6776667767666868...........
        ..........866667667677688...........
        .........8666666666667778...........
        ........667766666666666676..........
        .......67766667666776667776.........
        ......886667776676777666688.........
        .....67766777667767777666768........
        ....6776666666777667776666776.......
        .....8667776667766676677776776......
        ......8777666666667776777776688.....
        ....6887766776677677777777776776....
        ..8866666677767777777777766666778...
        .86666666777667767777766666776668...
        ..88677666666777677677666667776668..
        ..86776677666666666666667776666668..
        886666677766667666666776677766668...
        6668666676667766767767766677666668..
        88866666666777677677667666666776668.
        .86668866666766776776666667766666668
        .86688666666666776666667667776666688
        .668866666666666666666677666666688..
        ..8866686666666666677667776666668...
        ...866886666666666677667776666668...
        ...86886668666666667666666666888....
        ....88866886686666666666666668......
        ......86886668666866668666868.......
        ......88866688668866688866888.......
        ........8888888688888ce868..........
        ..............e88e88.ec.8...........
        ...............eeee..e..............
        ...............ceef.ce..............
        ...............ceefcec..............
        ...............feefce...............
        ...............fceeec...............
        ...............ffceec...............
        `, SpriteKind.Plant)
    spriteTree.setPosition(299, 235)
    spriteTree = sprites.create(img`
        ......cc66......
        .....c6576c.....
        ....c677576c....
        ....cc677666....
        ...cc6c6667cc...
        ..6c666777cc6c..
        ..c76666766776..
        ..c6777777776c..
        ..cc67777776cc..
        .c67cc76676676c.
        .c777666667777c.
        .c6777777777766.
        .cc7767776776666
        c676cc6766666776
        c777766666677776
        cc7777777777776c
        .c676777677767c.
        ..cc667666766c..
        ...ccc6c66ccc...
        .....cccccc.....
        .......ee.......
        ......eeee......
        .....eeeeee.....
        .......ee.......
        `, SpriteKind.Plant)
    spriteTree.setPosition(267, 49)
    spriteTree = sprites.create(img`
        ......cc66......
        .....c6576c.....
        ....c677576c....
        ....cc677666....
        ...cc6c6667cc...
        ..6c666777cc6c..
        ..c76666766776..
        ..c6777777776c..
        ..cc67777776cc..
        .c67cc76676676c.
        .c777666667777c.
        .c6777777777766.
        .cc7767776776666
        c676cc6766666776
        c777766666677776
        cc7777777777776c
        .c676777677767c.
        ..cc667666766c..
        ...ccc6c66ccc...
        .....cccccc.....
        .......ee.......
        ......eeee......
        .....eeeeee.....
        .......ee.......
        `, SpriteKind.Plant)
    spriteTree.setPosition(500, 195)
    spriteTree = sprites.create(img`
        ......cc66......
        .....c6576c.....
        ....c677576c....
        ....cc677666....
        ...cc6c6667cc...
        ..6c666777cc6c..
        ..c76666766776..
        ..c6777777776c..
        ..cc67777776cc..
        .c67cc76676676c.
        .c777666667777c.
        .c6777777777766.
        .cc7767776776666
        c676cc6766666776
        c777766666677776
        cc7777777777776c
        .c676777677767c.
        ..cc667666766c..
        ...ccc6c66ccc...
        .....cccccc.....
        .......ee.......
        ......eeee......
        .....eeeeee.....
        .......ee.......
        `, SpriteKind.Plant)
    spriteTree.setPosition(292, 459)
    spriteTree = sprites.create(img`
        ......cc66......
        .....c6576c.....
        ....c677576c....
        ....cc677666....
        ...cc6c6667cc...
        ..6c666777cc6c..
        ..c76666766776..
        ..c6777777776c..
        ..cc67777776cc..
        .c67cc76676676c.
        .c777666667777c.
        .c6777777777766.
        .cc7767776776666
        c676cc6766666776
        c777766666677776
        cc7777777777776c
        .c676777677767c.
        ..cc667666766c..
        ...ccc6c66ccc...
        .....cccccc.....
        .......ee.......
        ......eeee......
        .....eeeeee.....
        .......ee.......
        `, SpriteKind.Plant)
    spriteTree.setPosition(480, 475)
    spriteTree = sprites.create(img`
        .............6666...............
        ..........666667766.6666........
        .........677777777767776........
        ......66667775577757777666......
        .....677666675557557776777666...
        .....6776777775555577777766776..
        ...66666777777775777777766666...
        .66667767777755757555777776776..
        6666777677775577557555777767766.
        .6667767777777775577777777767666
        .c6766777677777775777777677766..
        cc77666667777777777777777666666c
        cc76666677777777777777777766776c
        c6666776777777777777766677666776
        66667766667776777767767766766666
        ccc76677677776677766767776776ccc
        cc7766776777677677676667767766cc
        .666c676667677766667766666666cc.
        .ccc66676666776666677677666cccc.
        ...ccc77c6767666676676677666ccc.
        ...cc676c7766676677666666c666cc.
        ....c6cc676c6677677c66c666ccc...
        ....ccccc6c66667667cc6ccc6ccc...
        ......ccccc66c66c66cccccccc.....
        .......cc.cc6c6ccc6cccc.cc......
        ...........cccccccccc...........
        .............feeeeee............
        ............feeeeeefe...........
        .........eeeeefeeeffee..........
        ............ffffeef..ee.........
        ...............fee..............
        ................e...............
        `, SpriteKind.Plant)
    spriteTree.setPosition(237, 162)
    spriteTree = sprites.create(img`
        .............6666...............
        ..........666667766.6666........
        .........677777777767776........
        ......66667775577757777666......
        .....677666675557557776777666...
        .....6776777775555577777766776..
        ...66666777777775777777766666...
        .66667767777755757555777776776..
        6666777677775577557555777767766.
        .6667767777777775577777777767666
        .c6766777677777775777777677766..
        cc77666667777777777777777666666c
        cc76666677777777777777777766776c
        c6666776777777777777766677666776
        66667766667776777767767766766666
        ccc76677677776677766767776776ccc
        cc7766776777677677676667767766cc
        .666c676667677766667766666666cc.
        .ccc66676666776666677677666cccc.
        ...ccc77c6767666676676677666ccc.
        ...cc676c7766676677666666c666cc.
        ....c6cc676c6677677c66c666ccc...
        ....ccccc6c66667667cc6ccc6ccc...
        ......ccccc66c66c66cccccccc.....
        .......cc.cc6c6ccc6cccc.cc......
        ...........cccccccccc...........
        .............feeeeee............
        ............feeeeeefe...........
        .........eeeeefeeeffee..........
        ............ffffeef..ee.........
        ...............fee..............
        ................e...............
        `, SpriteKind.Plant)
    spriteTree.setPosition(338, 221)
    spriteTree = sprites.create(img`
        .............6666...............
        ..........666667766.6666........
        .........677777777767776........
        ......66667775577757777666......
        .....677666675557557776777666...
        .....6776777775555577777766776..
        ...66666777777775777777766666...
        .66667767777755757555777776776..
        6666777677775577557555777767766.
        .6667767777777775577777777767666
        .c6766777677777775777777677766..
        cc77666667777777777777777666666c
        cc76666677777777777777777766776c
        c6666776777777777777766677666776
        66667766667776777767767766766666
        ccc76677677776677766767776776ccc
        cc7766776777677677676667767766cc
        .666c676667677766667766666666cc.
        .ccc66676666776666677677666cccc.
        ...ccc77c6767666676676677666ccc.
        ...cc676c7766676677666666c666cc.
        ....c6cc676c6677677c66c666ccc...
        ....ccccc6c66667667cc6ccc6ccc...
        ......ccccc66c66c66cccccccc.....
        .......cc.cc6c6ccc6cccc.cc......
        ...........cccccccccc...........
        .............feeeeee............
        ............feeeeeefe...........
        .........eeeeefeeeffee..........
        ............ffffeef..ee.........
        ...............fee..............
        ................e...............
        `, SpriteKind.Plant)
    spriteTree.setPosition(481, 305)
    spriteTree = sprites.create(img`
        .............6666...............
        ..........666667766.6666........
        .........677777777767776........
        ......66667775577757777666......
        .....677666675557557776777666...
        .....6776777775555577777766776..
        ...66666777777775777777766666...
        .66667767777755757555777776776..
        6666777677775577557555777767766.
        .6667767777777775577777777767666
        .c6766777677777775777777677766..
        cc77666667777777777777777666666c
        cc76666677777777777777777766776c
        c6666776777777777777766677666776
        66667766667776777767767766766666
        ccc76677677776677766767776776ccc
        cc7766776777677677676667767766cc
        .666c676667677766667766666666cc.
        .ccc66676666776666677677666cccc.
        ...ccc77c6767666676676677666ccc.
        ...cc676c7766676677666666c666cc.
        ....c6cc676c6677677c66c666ccc...
        ....ccccc6c66667667cc6ccc6ccc...
        ......ccccc66c66c66cccccccc.....
        .......cc.cc6c6ccc6cccc.cc......
        ...........cccccccccc...........
        .............feeeeee............
        ............feeeeeefe...........
        .........eeeeefeeeffee..........
        ............ffffeef..ee.........
        ...............fee..............
        ................e...............
        `, SpriteKind.Plant)
    spriteTree.setPosition(37, 335)
    spriteFlower = sprites.create(img`
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . b b d d b b . 
        b 1 1 3 3 1 1 b 
        b 1 3 5 5 3 1 b 
        b d 3 5 5 3 d b 
        c 1 1 d d 1 1 c 
        c d 1 d d 1 d c 
        . c c 7 6 c c . 
        . . 6 7 6 . . . 
        . . 6 6 8 8 8 6 
        . . 6 8 7 7 7 6 
        . . 8 7 7 7 6 . 
        . . 8 8 8 6 . . 
        `, SpriteKind.Plant)
    spriteFlower.setPosition(167, 40)
    spriteFlower = sprites.create(img`
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . b b d d b b . 
        b 1 1 3 3 1 1 b 
        b 1 3 5 5 3 1 b 
        b d 3 5 5 3 d b 
        c 1 1 d d 1 1 c 
        c d 1 d d 1 d c 
        . c c 7 6 c c . 
        . . 6 7 6 . . . 
        . . 6 6 8 8 8 6 
        . . 6 8 7 7 7 6 
        . . 8 7 7 7 6 . 
        . . 8 8 8 6 . . 
        `, SpriteKind.Plant)
    spriteFlower.setPosition(381, 160)
    spriteFlower = sprites.create(img`
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . b b d d b b . 
        b 1 1 3 3 1 1 b 
        b 1 3 5 5 3 1 b 
        b d 3 5 5 3 d b 
        c 1 1 d d 1 1 c 
        c d 1 d d 1 d c 
        . c c 7 6 c c . 
        . . 6 7 6 . . . 
        . . 6 6 8 8 8 6 
        . . 6 8 7 7 7 6 
        . . 8 7 7 7 6 . 
        . . 8 8 8 6 . . 
        `, SpriteKind.Plant)
    spriteFlower.setPosition(29, 150)
    spriteFlower = sprites.create(img`
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . b b d d b b . 
        b 1 1 3 3 1 1 b 
        b 1 3 5 5 3 1 b 
        b d 3 5 5 3 d b 
        c 1 1 d d 1 1 c 
        c d 1 d d 1 d c 
        . c c 7 6 c c . 
        . . 6 7 6 . . . 
        . . 6 6 8 8 8 6 
        . . 6 8 7 7 7 6 
        . . 8 7 7 7 6 . 
        . . 8 8 8 6 . . 
        `, SpriteKind.Plant)
    spriteFlower.setPosition(29, 150)
}
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    if (usingCar == 0) {
        animation.runImageAnimation(
        myMainCharacter,
        [img`
            . . . . . . 5 . 5 . . . . . . . 
            . . . . . f 5 5 5 f . . . . . . 
            . . . . f a 2 5 5 a f . . . . . 
            . . . f a a a a 1 a a f . . . . 
            . . . f a a a a a 1 a f . . . . 
            . . . f d f d a a a 1 f . . . . 
            . . . f d f d a a a a f f . . . 
            . . . f d 3 d d a a a f a f . . 
            . . . . f d d d f f a f f . . . 
            . . . . . f f 5 3 f a a a f . . 
            . . . . f 5 3 3 f f f f f . . . 
            . . . . f 3 3 f d f . . . . . . 
            . . . . . f 3 f d f . . . . . . 
            . . . . f 3 5 3 f d f . . . . . 
            . . . . f f 3 3 f f . . . . . . 
            . . . . . . f f f . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . 5 . 5 . . . . . . 
            . . . . . . f 5 5 5 f . . . . . 
            . . . . . f a 2 5 5 a f . . . . 
            . . . . f a a a a 1 a a f . . . 
            . . . . f a a a a a 1 a f . . . 
            . . . . f d f d a a a 1 f . . . 
            . . . . f d f d a a a a f f . . 
            . . . . f d 3 d d a a a f a f . 
            . . . . . f d d d f f a f f . . 
            . . . . . . f f 3 3 f f a a f . 
            . . . . . f d d d d f f f f . . 
            . . . . . f d d d f 3 f . . . . 
            . . . . . . f f f d 5 3 f . . . 
            . . . . . f f f 3 3 f f . . . . 
            . . . . . f f f f f f f . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . 5 . 5 . . . . . . 
            . . . . . . f 5 5 5 f . . . . . 
            . . . . . f a 2 5 5 a f . . . . 
            . . . . f a a a a 1 a a f . . . 
            . . . . f a a a a a 1 a f . . . 
            . . . . f d f d a a a 1 f . . . 
            . . . . f d f d a a a a f f . . 
            . . . . f d 3 d d a a a f a f . 
            . . . . . f d d d f f a f f . . 
            . . . . . . f f 3 3 f f a a f . 
            . . . . . f 5 3 3 d d f f f . . 
            . . . . . f 3 3 3 f d d f . . . 
            . . . . . . f 3 5 f f f . . . . 
            . . . . . f 3 3 3 3 f . . . . . 
            . . . . . . f f f f f . . . . . 
            `],
        250,
        true
        )
    } else {
        myMainCharacterCar.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . 3 3 3 3 3 3 3 3 . . 
            . . . . . 3 c 3 3 3 3 3 3 d 3 . 
            . . . . 3 c c 3 3 3 3 3 3 d c 3 
            . . d 3 d c c 3 d d d d d d c c 
            . d 3 3 d c b a a a a a a a 3 c 
            . 3 3 3 d b a a b b b a b b a 3 
            . 3 3 3 3 3 a b b b b a b b b a 
            . 3 3 3 3 a 3 3 3 3 3 a 3 3 3 a 
            . 3 d d 3 a f a a a f a a a a a 
            . d d 3 a a a f a a f a a a a a 
            . a a a a a a a f f f a a a a a 
            . a a a a f f f a a a a f f f f 
            . . . a f f f f f a a f f f f f 
            . . . . f f f f . . . . f f f . 
            . . . . . . . . . . . . . . . . 
            `)
    }
})
function createCar (x: number, y: number) {
    myMainCharacterCar = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . 3 3 3 3 3 3 3 3 . . . . 
        . . . 3 d 3 3 3 3 3 3 c 3 . . . 
        . . 3 c d 3 3 3 3 3 3 c c 3 . . 
        . 3 c c d d d d d d 3 c c d 3 d 
        . 3 c 3 a a a a a a a b c d 3 3 
        . 3 3 a b b a b b b a a b d 3 3 
        . 3 a b b b a b b b b a 3 3 3 3 
        . a a 3 3 3 a 3 3 3 3 3 a 3 3 3 
        . a a a a a a f a a a f a 3 d d 
        . a a a a a a f a a f a a a 3 d 
        . a a a a a a f f f a a a a a a 
        . a f f f f a a a a f f f a a a 
        . . f f f f f a a f f f f f a . 
        . . . f f f . . . . f f f f . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Car)
    myMainCharacterCar.setPosition(x, y)
}
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    if (usingCar == 0) {
        animation.runImageAnimation(
        myMainCharacter,
        [img`
            . . . . . . . 5 . 5 . . . . . . 
            . . . . . . f 5 5 5 f . . . . . 
            . . . . . f a 5 5 2 a f . . . . 
            . . . . f a a 1 a a a a f . . . 
            . . . . f a 1 a a a a a f . . . 
            . . . . f 1 a a a d f d f . . . 
            . . . f f a a a a d f d f . . . 
            . . f a f a a a d d 3 d f . . . 
            . . . f f a f f d d d f . . . . 
            . . f a a a f 3 5 f f . . . . . 
            . . . f f f f f 3 3 5 f . . . . 
            . . . . . . f d f 3 3 f . . . . 
            . . . . . . f d f 3 f . . . . . 
            . . . . . f d f 3 5 3 f . . . . 
            . . . . . . f f 3 3 f f . . . . 
            . . . . . . . f f f . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . 5 . 5 . . . . . . . 
            . . . . . f 5 5 5 f . . . . . . 
            . . . . f a 5 5 2 a f . . . . . 
            . . . f a a 1 a a a a f . . . . 
            . . . f a 1 a a a a a f . . . . 
            . . . f 1 a a a d f d f . . . . 
            . . f f a a a a d f d f . . . . 
            . f a f a a a d d 3 d f . . . . 
            . . f f a f f d d d f . . . . . 
            . f a a f f 3 3 f f . . . . . . 
            . . f f f f d d d d f . . . . . 
            . . . . f 3 f d d d f . . . . . 
            . . . f 3 5 d f f f . . . . . . 
            . . . . f f 3 3 f f f . . . . . 
            . . . . f f f f f f f . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . 5 . 5 . . . . . . . 
            . . . . . f 5 5 5 f . . . . . . 
            . . . . f a 5 5 2 a f . . . . . 
            . . . f a a 1 a a a a f . . . . 
            . . . f a 1 a a a a a f . . . . 
            . . . f 1 a a a d f d f . . . . 
            . . f f a a a a d f d f . . . . 
            . f a f a a a d d 3 d f . . . . 
            . . f f a f f d d d f . . . . . 
            . f a a f f 3 3 f f . . . . . . 
            . . f f f d d 3 3 5 f . . . . . 
            . . . f d d f 3 3 3 f . . . . . 
            . . . . f f f 5 3 f . . . . . . 
            . . . . . f 3 3 3 3 f . . . . . 
            . . . . . f f f f f . . . . . . 
            `],
        250,
        true
        )
    } else {
        myMainCharacterCar.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . 3 3 3 3 3 3 3 3 . . . . 
            . . . 3 d 3 3 3 3 3 3 c 3 . . . 
            . . 3 c d 3 3 3 3 3 3 c c 3 . . 
            . 3 c c d d d d d d 3 c c d 3 d 
            . 3 c 3 a a a a a a a b c d 3 3 
            . 3 3 a b b a b b b a a b d 3 3 
            . 3 a b b b a b b b b a 3 3 3 3 
            . a a 3 3 3 a 3 3 3 3 3 a 3 3 3 
            . a a a a a a f a a a f a 3 d d 
            . a a a a a a f a a f a a a 3 d 
            . a a a a a a f f f a a a a a a 
            . a f f f f a a a a f f f a a a 
            . . f f f f f a a f f f f f a . 
            . . . f f f . . . . f f f f . . 
            . . . . . . . . . . . . . . . . 
            `)
    }
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    if (usingCar == 0) {
        animation.runImageAnimation(
        myMainCharacter,
        [img`
            . . . . . . 5 . 5 . . . . . . . 
            . . . . . f 5 5 5 f f . . . . . 
            . . . . f 1 5 2 5 1 a f . . . . 
            . . . f 1 a a a a a 1 a f . . . 
            . . . f a a f f f f a 1 f . . . 
            . . . f a f f d d f f a f . . . 
            . . f a f d f d d f d f a f . . 
            . . f a f d 3 d d 3 d f a f . . 
            . . f a a f d d d d f a a f . . 
            . f a a f 3 f f f f 3 f a a f . 
            . . f f d 3 5 3 3 5 3 d f f . . 
            . . f d d f 3 5 5 3 f d d f . . 
            . . . f f 3 3 3 3 3 3 f f . . . 
            . . . f 3 3 5 3 3 5 3 3 f . . . 
            . . . f f f f f f f f f f . . . 
            . . . . . f f . . f f . . . . . 
            `,img`
            . . . . . . 5 . 5 . . . . . . . 
            . . . . . f 5 5 5 f f . . . . . 
            . . . . f 1 5 2 5 1 a f . . . . 
            . . . f 1 a a a a a 1 a f . . . 
            . . . f a a f f f f a 1 f . . . 
            . . . f a f f d d f f a f . . . 
            . . f a f d f d d f d f a f . . 
            . . f a f d 3 d d 3 d f a f . . 
            . . f a a f d d d d f a a f . . 
            . f a a f 3 f f f f 3 f a a f . 
            . . f f 3 3 5 3 3 5 3 d f f . . 
            . . . f d f 3 5 5 3 f f d f . . 
            . . . f d f 3 3 3 3 3 f f . . . 
            . . . f f 3 5 3 3 5 3 3 f . . . 
            . . . . f f f f f f f f f . . . 
            . . . . . . . . . f f . . . . . 
            `,img`
            . . . . . . 5 . 5 . . . . . . . 
            . . . . . f 5 5 5 f f . . . . . 
            . . . . f 1 5 2 5 1 a f . . . . 
            . . . f 1 a a a a a 1 a f . . . 
            . . . f a a f f f f a 1 f . . . 
            . . . f a f f d d f f a f . . . 
            . . f a f d f d d f d f a f . . 
            . . f a f d 3 d d 3 d f a f . . 
            . . f a a f d d d d f a a f . . 
            . f a a f 3 f f f f 3 f a a f . 
            . . f f d 3 5 3 3 5 3 3 f f . . 
            . . f d f f 3 5 5 3 f d f . . . 
            . . . f f 3 3 3 3 3 f d f . . . 
            . . . f 3 3 5 3 3 5 3 f f . . . 
            . . . f f f f f f f f f . . . . 
            . . . . . f f . . . . . . . . . 
            `],
        200,
        true
        )
    } else {
        myMainCharacterCar.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . 3 3 3 3 3 3 . . . . 
            . . . . . 3 3 d d 3 3 3 3 . . . 
            . . . . . c d 3 3 3 3 3 c . . . 
            . . . . 3 c d 3 3 3 3 3 c 3 . . 
            . . . a 3 c d 3 3 3 3 3 c 3 a . 
            . . . f 3 c d 3 3 3 3 3 c 3 f . 
            . . . f a c 3 3 3 3 3 3 c a f . 
            . . . f 3 c 3 b b b b 3 c 3 f . 
            . . . a 3 3 b c c c c b 3 3 a . 
            . . . a a b c c c c c c b a a . 
            . . . f a d d d d d d d d a f . 
            . . . f a d 3 3 3 3 3 3 d a f . 
            . . . . 3 d d 3 3 3 3 d d 3 f . 
            . . . . f 3 d 3 3 3 3 d 3 f . . 
            . . . . . a 3 3 3 3 3 3 a . . . 
            `)
    }
})
function eventsPearlQuest () {
    game.setDialogCursor(img`
        . . . . . f c c c c f . . . . . 
        . . c c f b b 3 3 b b f c c . . 
        . c b 3 3 b b c c b b 3 3 b c . 
        . f 3 c c c b c c b c c c 3 f . 
        f c b b c c b c c b c c b b c f 
        c 3 c c b c c c c c c b c c 3 c 
        c 3 c c c c c c c c c c c c 3 c 
        . f b b c c c c c c c c b b f . 
        . . f b b c 8 9 9 8 c b b f . . 
        . . c c c f 9 3 1 9 f c c c . . 
        . c 3 f f f 9 3 3 9 f f f 3 c . 
        c 3 f f f f 8 9 9 8 f f f f 3 c 
        f 3 c c f f f f f f f f c c 3 f 
        f b 3 c b b f b b f b b c 3 b f 
        . c b b 3 3 b 3 3 b 3 3 b b c . 
        . . f f f f f f f f f f f f . . 
        `)
    game.setDialogFrame(img`
        ..bbbbbbbbbbbbbbbbbbbb..
        .bd111111111111111111db.
        bd1dbbbbbbbbbbbbbbbbd1db
        b1dbbbbbbbbbbbbbbbbbbd1b
        b1bd1111111111111111db1b
        b1b111111111111111111b1b
        b1b111111111111111111b1b
        b1b111111111111111111b1b
        b1b111111111111111111b1b
        b1b111111111111111111b1b
        b1b111111111111111111b1b
        b1b111111111111111111b1b
        b1b111111111111111111b1b
        b1b111111111111111111b1b
        b1b111111111111111111b1b
        b1b111111111111111111b1b
        b1b111111111111111111b1b
        b1b111111111111111111b1b
        b1b111111111111111111b1b
        b1bd1111111111111111db1b
        bd1bbbbbbbbbbbbbbbbbb1db
        bbd111111111111111111dbb
        .bbbbbbbbbbbbbbbbbbbbbb.
        ..bbbbbbbbbbbbbbbbbbbb..
        `)
    if (myMainCharacter.overlapsWith(questPearl)) {
        listQuests[1] = "found pearl"
        questPearl.destroy()
        myMainCharacter.say("I found a pearl!", 500)
    }
    if (myMainCharacter.overlapsWith(characterPearlGirl)) {
        if (listQuests[1] == "found pearl") {
            game.showLongText("Thank you so much!", DialogLayout.Bottom)
            characterPearlGirl.setFlag(SpriteFlag.DestroyOnWall, false)
            characterPearlGirl.x += 20
            characterPearlGirl.vx += 20
        } else {
            game.showLongText("Please help me find a pearl", DialogLayout.Bottom)
        }
    }
}
function worldSetup () {
    tiles.setTilemap(tilemap`levelAmelieValley`)
    myCharactersHouse = sprites.create(assets.image`mySplashscreen`, SpriteKind.Building)
    myCharactersHouse.setPosition(80, 25)
    myCharactersField = sprites.create(assets.image`field`, SpriteKind.Player)
    myCharactersField.setPosition(133, 40)
    myMainCharacter = sprites.create(assets.image`characterAmelie`, SpriteKind.Player)
    scene.cameraFollowSprite(myMainCharacter)
    controller.moveSprite(myMainCharacter, 75, 75)
}
function questBoyAndLostDog () {
    characterBoy = sprites.create(img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f f e 2 2 2 2 2 2 e e f . . 
        . . f e 2 f f f f f f 2 e f . . 
        . . f f f f e e e e f f f f . . 
        . f f e f b f 4 4 f b f e f f . 
        . f e e 4 1 f d d f 1 4 e e f . 
        . . f e e d d d d d d e e f . . 
        . . . f e e 4 4 4 4 e e f . . . 
        . . e 4 f 2 2 2 2 2 2 f 4 e . . 
        . . 4 d f 2 2 2 2 2 2 f d 4 . . 
        . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `, SpriteKind.Boy)
    characterBoy.setPosition(100, 100)
    characterBoy.setFlag(SpriteFlag.DestroyOnWall, true)
    characterLostDog = sprites.create(img`
        . . 4 4 4 . . . . 4 4 4 . . . . 
        . 4 5 5 5 e . . e 5 5 5 4 . . . 
        4 5 5 5 5 5 e e 5 5 5 5 5 4 . . 
        4 5 5 4 4 5 5 5 5 4 4 5 5 4 . . 
        e 5 4 4 5 5 5 5 5 5 4 4 5 e . . 
        . e e 5 5 5 5 5 5 5 5 e e . . . 
        . . e 5 f 5 5 5 5 f 5 e . . . . 
        . . f 5 5 5 4 4 5 5 5 f . . f f 
        . . f 4 5 5 f f 5 5 6 f . f 5 f 
        . . . f 6 6 6 6 6 6 4 4 f 5 5 f 
        . . . f 4 5 5 5 5 5 5 4 4 5 f . 
        . . . f 5 5 5 5 5 4 5 5 f f . . 
        . . . f 5 f f f 5 f f 5 f . . . 
        . . . f f . . f f . . f f . . . 
        `, SpriteKind.Dog)
    characterLostDog.setPosition(300, 100)
}
sprites.onOverlap(SpriteKind.Boy, SpriteKind.Dog, function (sprite, otherSprite) {
    game.setDialogCursor(img`
        . . 4 4 4 . . . . 4 4 4 . . . . 
        . 4 5 5 5 e . . e 5 5 5 4 . . . 
        4 5 5 5 5 5 e e 5 5 5 5 5 4 . . 
        4 5 5 4 4 5 5 5 5 4 4 5 5 4 . . 
        e 5 4 4 5 5 5 5 5 5 4 4 5 e . . 
        . e e 5 5 5 5 5 5 5 5 e e . . . 
        . . e 5 f 5 5 5 5 f 5 e . . . . 
        . . f 5 5 5 4 4 5 5 5 f . . f f 
        . . f 4 5 5 f f 5 5 6 f . f 5 f 
        . . . f 6 6 6 6 6 6 4 4 f 5 5 f 
        . . . f 4 5 5 5 5 5 5 4 4 5 f . 
        . . . f 5 5 5 5 5 4 5 5 f f . . 
        . . . f 5 f f f 5 f f 5 f . . . 
        . . . f f . . f f . . f f . . . 
        `)
    game.setDialogFrame(img`
        ..bbbbbbbbbbbbbbbbbbbb..
        .bd111111111111111111db.
        bd1dbbbbbbbbbbbbbbbbd1db
        b1dbbbbbbbbbbbbbbbbbbd1b
        b1bd1111111111111111db1b
        b1b111111111111111111b1b
        b1b111111111111111111b1b
        b1b111111111111111111b1b
        b1b111111111111111111b1b
        b1b111111111111111111b1b
        b1b111111111111111111b1b
        b1b111111111111111111b1b
        b1b111111111111111111b1b
        b1b111111111111111111b1b
        b1b111111111111111111b1b
        b1b111111111111111111b1b
        b1b111111111111111111b1b
        b1b111111111111111111b1b
        b1b111111111111111111b1b
        b1bd1111111111111111db1b
        bd1bbbbbbbbbbbbbbbbbb1db
        bbd111111111111111111dbb
        .bbbbbbbbbbbbbbbbbbbbbb.
        ..bbbbbbbbbbbbbbbbbbbb..
        `)
    game.showLongText("Doggy made it back to his owner", DialogLayout.Bottom)
    otherSprite.destroy()
    listQuests[0] = "dog found"
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Car, function (sprite, otherSprite) {
    scene.cameraFollowSprite(otherSprite)
    controller.moveSprite(otherSprite, 150, 150)
    sprite.destroy()
    usingCar = 1
})
let myCharactersField: Sprite = null
let myCharactersHouse: Sprite = null
let spriteFlower: Sprite = null
let spriteTree: Sprite = null
let spriteTreeStump: Sprite = null
let characterName = ""
let questPearl: Sprite = null
let characterPearlGirl: Sprite = null
let myMainCharacterCar: Sprite = null
let usingCar = 0
let listQuests: string[] = []
let characterBoy: Sprite = null
let characterLostDog: Sprite = null
let myMainCharacter: Sprite = null
worldSetup()
worldSetupTrees()
createCar(37, 120)
questBoyAndLostDog()
questFindPearl()
myMainCharacter.setFlag(SpriteFlag.ShowPhysics, true)
game.onUpdate(function () {
    dogQuestEvents()
    exitAmelieHouse()
    eventsPearlQuest()
})
