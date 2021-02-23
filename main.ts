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
    spriteFlower.setPosition(307, 286)
    spriteFlower = sprites.create(img`
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . c c c . . . 
        . c c 6 6 c . . 
        c c 3 3 f 6 c . 
        c 6 c f 6 3 c . 
        c 3 6 3 3 3 c . 
        c 3 6 6 3 3 c . 
        c 3 3 6 6 3 c . 
        . c 3 3 3 6 . . 
        . . 6 7 6 . . . 
        . . 6 6 8 8 8 6 
        . . 6 8 7 7 7 6 
        . . 8 7 7 7 6 . 
        . . 8 8 8 6 . . 
        `, SpriteKind.Plant)
    spriteFlower.setPosition(280, 290)
    spriteFlower = sprites.create(img`
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . c c c . . . 
        . c c 6 6 c . . 
        c c 3 3 f 6 c . 
        c 6 c f 6 3 c . 
        c 3 6 3 3 3 c . 
        c 3 6 6 3 3 c . 
        c 3 3 6 6 3 c . 
        . c 3 3 3 6 . . 
        . . 6 7 6 . . . 
        . . 6 6 8 8 8 6 
        . . 6 8 7 7 7 6 
        . . 8 7 7 7 6 . 
        . . 8 8 8 6 . . 
        `, SpriteKind.Plant)
    spriteFlower.setPosition(280, 293)
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
    spriteFlower.setPosition(295, 281)
    spriteTree = sprites.create(img`
        ........................
        ...........ff..........8
        ..........f88f........86
        .........ff88ff......886
        .........f8888f......866
        ........f888888f....8666
        ......ff88888888ff886666
        .....f888888888888666666
        .....ff88888888888866666
        .....f888888888888666666
        ....f88ff88888ff86688666
        ....ffff88fff88f88886688
        .....f8f8ff8ff8f88686886
        ....f88fff88ffff86688866
        ....f8ffff8fffff86888868
        ....fff88ffffff888866888
        ....f888ffff8fff86668888
        ...f888ff8f88f8866688686
        ..f8888888888f8666666666
        .f88f8888888886686666666
        .fff88888888888866666666
        .ff888888888888666666666
        ..ff88f888f88f8866866686
        ..f8ff88fff88f8688668886
        .f88ff8ff8f8f86688688686
        f88ff8ff88ff866886886688
        ffff88f88fff888866866888
        .ffffffffffff88888888888
        .ff888ff88ff888666886688
        .f888ff888ff886668866688
        f888888888f8866666666686
        fff888f88888888666866666
        ..ffff88f888888888668666
        .....f8ff88f888ff8688668
        ......fff8fff88fff888688
        .........ffeeff......88e
        .........feeeef......fee
        .........feeeef......fee
        ........feeefeef....feee
        ........fefeffef....fefe
        `, SpriteKind.Plant)
    spriteTree.setPosition(32, 267)
    spriteTree = sprites.create(img`
        ........................
        8..........ff..........8
        68........f88f........86
        688......ff88ff......886
        668......f8888f......866
        6668....f888888f....8666
        666688ff88888888ff886666
        666666888888888888666666
        666668888888888888866666
        666666888888888888666666
        66888668f88888ff86688666
        8668688888fff88f88886688
        8868668f8ff8ff8f88686886
        8888868fff88ffff86688866
        88888888ff8fffff86888868
        888668888ffffff888866888
        68886668ffff8fff86668888
        6868866688f88f8866688686
        6866666688888f8666666666
        666666666888886686666666
        666666668688888866666666
        666666666888888666666666
        6866668666888f8866866686
        6886866886688f8688668886
        866888688888f86688688686
        8866888868ff866886886688
        88868688668f888866866888
        88888668868ff88888888888
        68868868688f888666886688
        668666666688886668866688
        666666666668866666666686
        666668666888888666866666
        666666888888888888668666
        6668868ff88f888ff8688668
        8668888ff8fff88fff888688
        e88......ffeeff......88e
        eef......feeeef......fee
        eef......feeeef......fee
        feef....feeefeef....feee
        ffef....fefeffef....fefe
        `, SpriteKind.Plant)
    spriteTree.setPosition(52, 267)
    spriteTree = sprites.create(img`
        ........................
        8..........ff...........
        68........f88f..........
        688......ff88ff.........
        668......f8888f.........
        6668....f888888f........
        666688ff88888888ff......
        666666888888888888f.....
        66666888888888888ff.....
        666666888888888888f.....
        66888668f88888fff88f....
        8668688888fff88f8fff....
        8868668f8ff8ff8f88f.....
        8888868fff88fffff8f.....
        88888888ff8fffffffff....
        888668888ffffff88fff....
        68886668ffff8fff888f....
        6868866688f88f8ff888f...
        6866666688888f888888f...
        666666666888888888888f..
        66666666868888888888f8f.
        666666666888888888888ff.
        6866668666888f8888f888f.
        6886866886688ff8f88ff88f
        866888688888f88fff8fffff
        8866888868ffff88ffff8f..
        88868688668ffff8f8ff88f.
        88888668868ffffff88ff8f.
        68868868688f8ff8ff8f8ff.
        66866666668888f8888888ff
        66666666666888888888888f
        66666866688888888f888ff.
        666666888888888888ffff..
        6668868ff88f888ff8f.....
        8668888ff8fff88ffff.....
        e88......ffeeff.........
        eef......feeeef.........
        eef......feeeef.........
        feef....feeefeef........
        ffef....fefeffef........
        `, SpriteKind.Plant)
    spriteTree.setPosition(72, 267)
    spriteTree = sprites.create(img`
        ........................
        ...........88..........f
        ..........8668........f8
        .........886688......ff8
        .........866668......f88
        ........86666668....f888
        ......886666666688ff8888
        .....8666666666666888888
        .....8866666666668888888
        .....8666666666666888888
        ....8668866666888668f888
        ....888866888668688888ff
        .....86868868868668f8ff8
        ....866888668888868fff88
        ....8688886888888888ff8f
        ....88866888888668888fff
        ....8666888868886668ffff
        ...8666886866868866688f8
        ..8666666666686666668888
        .86686666666666666666888
        .88866666666666666668688
        .88666666666666666666888
        ..8866866686686666866688
        ..8688668886688686688668
        .86688688686866888688888
        8668868866888866888868ff
        88886686688888868688668f
        .8888888888888888668868f
        .8866688668868868868688f
        .86668866688668666666688
        866666666686666666666668
        888666866666666668666888
        ..8888668666666666888888
        .....86886686668868ff88f
        ......8886888668888ff8ff
        .........88ee88......ffe
        .........feeeef......fee
        .........feeeef......fee
        ........feeefeef....feee
        ........fefeffef....fefe
        `, SpriteKind.Plant)
    spriteTree.setPosition(110, 242)
    spriteTree = sprites.create(img`
        ........................
        f..........88...........
        8f........8668..........
        8ff......886688.........
        88f......866668.........
        888f....86666668........
        8888ff886666666688......
        8888886666666666668.....
        8888888666666666688.....
        8888886666666666668.....
        88ff8668866666888668....
        f88f8888668886686888....
        ff8f886868868868668.....
        ffff866888668888868.....
        ffff8688886888888888....
        fff88886688888866888....
        8fff8666888868886668....
        8f8866688686686886668...
        8f8666666666686666668...
        8866866666666666666668..
        88886666666666666666868.
        88866666666666666666688.
        8f886686668668666686668.
        8f8688668886688686688668
        f86688688686866888688888
        8668868866888866888868..
        88886686688888868688668.
        f8888888888888888668868.
        88866688668868868868688.
        886668866688668666666688
        866666666686666666666668
        88866686666666666866688.
        8888886686666666668888..
        888ff86886686668868.....
        f88fff8886888668888.....
        eff......88ee88.........
        eef......feeeef.........
        eef......feeeef.........
        feef....feeefeef........
        ffef....fefeffef........
        `, SpriteKind.Plant)
    spriteTree.setPosition(132, 242)
    spriteTree = sprites.create(img`
        ........................
        ...........88...........
        ..........8668..........
        ..........8668..........
        .........f6666f.........
        ........f866668f........
        .......8666666668.......
        ......866866668668......
        ......f8866666688f......
        .....f886686686688f.....
        ....f88ff88688fff88f....
        ....ffff88fff88f8fff....
        .....f8f8ff8ff8f88f.....
        ....f88fff88fffff8f.....
        ....f8ffff8fffffffff....
        ....fff88ffffff88fff....
        ....f868ffff8fff868f....
        ...f666ff8f86f8ff668....
        ..f6666866866f6686668...
        .f66686666666866668668..
        .ff8866666666666666866f.
        .f8866686686866686668ff.
        ..ff668868f88f66888688f.
        ..f8ff88fff88ff8f88ff88f
        .f88ff8ff8f8f88fff8fffff
        f88ff8ff88ffff88ffff8f..
        ffff88f88ffffff8f8ff88f.
        .f8ffffffffffffff88ff8f.
        .ff6fffff8ff8ff6ff8f6ff.
        .f668f6686ff66f6668866ff
        f668666866f666868666866f
        fff666f6688666666f666ff.
        ..ffff86f866688668ffff..
        .....f8ff66f888ff8f.....
        ......fff8fff88ffff.....
        .........ffeeff.........
        .........feeeef.........
        .........feeeef.........
        ........feeefeef........
        ........fefeffef........
        `, SpriteKind.Plant)
    spriteTree.setPosition(95, 265)
    spriteTree = sprites.create(img`
        ........................
        ...........88...........
        ..........8668..........
        .........886688.........
        .........866668.........
        ........86666668........
        ......886666666688......
        .....86666666666668.....
        .....88666666666688.....
        .....86666666666668.....
        ....8668866666888668....
        ....8888668886686888....
        .....86868868868668.....
        ....866888668888868.....
        ....8688886888888888....
        ....8886688888866888....
        ....8666888868886668....
        ...866688686686886668...
        ..8666666666686666668...
        .866866666666666666668..
        .8886666666666666666868.
        .8866666666666666666688.
        ..886686668668666686668.
        ..8688668886688686688668
        .86688688686866888688888
        8668868866888866888868..
        88886686688888868688668.
        .8888888888888888668868.
        .8866688668868868868688.
        .86668866688668666666688
        866666666686666666666668
        88866686666666666866688.
        ..88886686666666668888..
        .....86886686668868.....
        ......8886888668888.....
        .........88ee88.........
        .........feeeef.........
        .........feeeef.........
        ........feeefeef........
        ........fefeffef........
        `, SpriteKind.Plant)
    spriteTree.setPosition(58, 180)
    spriteTree = sprites.create(img`
        ........................
        ...........ff..........8
        ..........f88f........86
        .........ff88ff......886
        .........f8888f......866
        ........f888888f....8666
        ......ff88888888ff886666
        .....f888888888888666666
        .....ff88888888888866666
        .....f888888888888666666
        ....f88ff88888ff86688666
        ....ffff88fff88f88886688
        .....f8f8ff8ff8f88686886
        ....f88fff88ffff86688866
        ....f8ffff8fffff86888868
        ....fff88ffffff888866888
        ....f888ffff8fff86668888
        ...f888ff8f88f8866688686
        ..f8888888888f8666666666
        .f88f8888888886686666666
        .fff88888888888866666666
        .ff888888888888666666666
        ..ff88f888f88f8866866686
        ..f8ff88fff88f8688668886
        .f88ff8ff8f8f86688688686
        f88ff8ff88ff866886886688
        ffff88f88fff888866866888
        .ffffffffffff88888888888
        .ff888ff88ff888666886688
        .f888ff888ff886668866688
        f888888888f8866666666686
        fff888f88888888666866666
        ..ffff88f888888888668666
        .....f8ff88f888ff8688668
        ......fff8fff88fff888688
        .........ffeeff......88e
        .........feeeef......fee
        .........feeeef......fee
        ........feeefeef....feee
        ........fefeffef....fefe
        `, SpriteKind.Plant)
    spriteTree.setPosition(75, 175)
    spriteTree = sprites.create(img`
        ........................
        8..........ff..........8
        68........f88f........86
        688......ff88ff......886
        668......f8888f......866
        6668....f888888f....8666
        666688ff88888888ff886666
        666666888888888888666666
        666668888888888888866666
        666666888888888888666666
        66888668f88888ff86688666
        8668688888fff88f88886688
        8868668f8ff8ff8f88686886
        8888868fff88ffff86688866
        88888888ff8fffff86888868
        888668888ffffff888866888
        68886668ffff8fff86668888
        6868866688f88f8866688686
        6866666688888f8666666666
        666666666888886686666666
        666666668688888866666666
        666666666888888666666666
        6866668666888f8866866686
        6886866886688f8688668886
        866888688888f86688688686
        8866888868ff866886886688
        88868688668f888866866888
        88888668868ff88888888888
        68868868688f888666886688
        668666666688886668866688
        666666666668866666666686
        666668666888888666866666
        666666888888888888668666
        6668868ff88f888ff8688668
        8668888ff8fff88fff888688
        e88......ffeeff......88e
        eef......feeeef......fee
        eef......feeeef......fee
        feef....feeefeef....feee
        ffef....fefeffef....fefe
        `, SpriteKind.Plant)
    spriteTree.setPosition(95, 175)
    spriteTree = sprites.create(img`
        ........................
        8..........ff...........
        68........f88f..........
        688......ff88ff.........
        668......f8888f.........
        6668....f888888f........
        666688ff88888888ff......
        666666888888888888f.....
        66666888888888888ff.....
        666666888888888888f.....
        66888668f88888fff88f....
        8668688888fff88f8fff....
        8868668f8ff8ff8f88f.....
        8888868fff88fffff8f.....
        88888888ff8fffffffff....
        888668888ffffff88fff....
        68886668ffff8fff888f....
        6868866688f88f8ff888f...
        6866666688888f888888f...
        666666666888888888888f..
        66666666868888888888f8f.
        666666666888888888888ff.
        6866668666888f8888f888f.
        6886866886688ff8f88ff88f
        866888688888f88fff8fffff
        8866888868ffff88ffff8f..
        88868688668ffff8f8ff88f.
        88888668868ffffff88ff8f.
        68868868688f8ff8ff8f8ff.
        66866666668888f8888888ff
        66666666666888888888888f
        66666866688888888f888ff.
        666666888888888888ffff..
        6668868ff88f888ff8f.....
        8668888ff8fff88ffff.....
        e88......ffeeff.........
        eef......feeeef.........
        eef......feeeef.........
        feef....feeefeef........
        ffef....fefeffef........
        `, SpriteKind.Plant)
    spriteTree.setPosition(115, 175)
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
myMainCharacter.setPosition(77, 215)
myMainCharacter.setFlag(SpriteFlag.ShowPhysics, true)
game.onUpdate(function () {
    dogQuestEvents()
    exitAmelieHouse()
    eventsPearlQuest()
})
