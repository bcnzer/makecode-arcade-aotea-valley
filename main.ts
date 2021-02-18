namespace SpriteKind {
    export const Building = SpriteKind.create()
    export const Boy = SpriteKind.create()
    export const Dog = SpriteKind.create()
    export const Furniture = SpriteKind.create()
    export const Car = SpriteKind.create()
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
    animation.runImageAnimation(
    myMainCharacter,
    [img`
        . . . . . . . 5 5 . . . . . . . 
        . . . . . f 5 5 5 5 f . . . . . 
        . . . . f 6 6 6 6 6 6 f . . . . 
        . . . f 6 1 1 1 6 1 6 6 f . . . 
        . . . f 6 6 6 6 6 6 6 6 f . . . 
        . . . f 6 6 6 6 6 6 6 6 f . . . 
        . . . f 6 6 6 6 6 6 6 6 f . . . 
        . . f f 6 6 6 6 6 6 6 6 f f . . 
        . f 6 6 6 f 6 6 6 6 f 6 6 6 f . 
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
        . . . . f 6 6 6 6 6 6 f . . . . 
        . . . f 6 1 1 1 6 1 6 6 f . . . 
        . . . f 6 6 6 6 6 6 6 6 f . . . 
        . . . f 6 6 6 6 6 6 6 6 f . . . 
        . . . f 6 6 6 6 6 6 6 6 f . . . 
        . . f f 6 6 6 6 6 6 6 6 f f . . 
        . f 6 6 6 f 6 6 6 6 f 6 6 6 f . 
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
        . . . . f 6 6 6 6 6 6 f . . . . 
        . . . f 6 1 1 1 6 1 6 6 f . . . 
        . . . f 6 6 6 6 6 6 6 6 f . . . 
        . . . f 6 6 6 6 6 6 6 6 f . . . 
        . . . f 6 6 6 6 6 6 6 6 f . . . 
        . . f f 6 6 6 6 6 6 6 6 f f . . 
        . f 6 6 6 f 6 6 6 6 f 6 6 6 f . 
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
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Building, function (sprite, otherSprite) {
    sprite.setPosition(430, 50)
    scene.centerCameraAt(450, 50)
    tiles.setTilemap(tilemap`levelAmelieHouse0`)
})
function exitAmelieHouse () {
    if (myMainCharacter.y >= 0 && myMainCharacter.y <= 10 && (myMainCharacter.x >= 415 && myMainCharacter.x <= 435)) {
        tiles.setTilemap(tilemap`levelAmelieValley`)
        myMainCharacter.setPosition(80, 90)
        scene.cameraFollowSprite(myMainCharacter)
    }
}
controller.anyButton.onEvent(ControllerButtonEvent.Released, function () {
    animation.stopAnimation(animation.AnimationTypes.All, myMainCharacter)
    myMainCharacter.setImage(img`
        . . . . . . 5 . 5 . . . . . . . 
        . . . . . f 5 5 5 f f . . . . . 
        . . . . f 1 5 2 5 1 6 f . . . . 
        . . . f 1 6 6 6 6 6 1 6 f . . . 
        . . . f 6 6 f f f f 6 1 f . . . 
        . . . f 6 f f d d f f 6 f . . . 
        . . f 6 f d f d d f d f 6 f . . 
        . . f 6 f d 3 d d 3 d f 6 f . . 
        . . f 6 6 f d d d d f 6 6 f . . 
        . f 6 6 f 3 f f f f 3 f 6 6 f . 
        . . f f d 3 5 3 3 5 3 d f f . . 
        . . f d d f 3 5 5 3 f d d f . . 
        . . . f f 3 3 3 3 3 3 f f . . . 
        . . . f 3 3 5 3 3 5 3 3 f . . . 
        . . . f f f f f f f f f f . . . 
        . . . . . f f . . f f . . . . . 
        `)
})
function gameIntro () {
    game.splash("Welcome to", "AMELIE VALLEY")
    characterName = game.askForString("What is your name?")
}
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    myMainCharacter,
    [img`
        . . . . . . 5 . 5 . . . . . . . 
        . . . . . f 5 5 5 f . . . . . . 
        . . . . f 6 2 5 5 6 f . . . . . 
        . . . f 6 6 6 6 1 6 6 f . . . . 
        . . . f 6 6 6 6 6 1 6 f . . . . 
        . . . f d f d 6 6 6 1 f . . . . 
        . . . f d f d 6 6 6 6 f f . . . 
        . . . f d 3 d d 6 6 6 f 6 f . . 
        . . . . f d d d f f 6 f f . . . 
        . . . . . f f 5 3 f 6 6 6 f . . 
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
        . . . . . f 6 2 5 5 6 f . . . . 
        . . . . f 6 6 6 6 1 6 6 f . . . 
        . . . . f 6 6 6 6 6 1 6 f . . . 
        . . . . f d f d 6 6 6 1 f . . . 
        . . . . f d f d 6 6 6 6 f f . . 
        . . . . f d 3 d d 6 6 6 f 6 f . 
        . . . . . f d d d f f 6 f f . . 
        . . . . . . f f 3 3 f f 6 6 f . 
        . . . . . f d d d d f f f f . . 
        . . . . . f d d d f 3 f . . . . 
        . . . . . . f f f d 5 3 f . . . 
        . . . . . f f f 3 3 f f . . . . 
        . . . . . f f f f f f f . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . 5 . 5 . . . . . . 
        . . . . . . f 5 5 5 f . . . . . 
        . . . . . f 6 2 5 5 6 f . . . . 
        . . . . f 6 6 6 6 1 6 6 f . . . 
        . . . . f 6 6 6 6 6 1 6 f . . . 
        . . . . f d f d 6 6 6 1 f . . . 
        . . . . f d f d 6 6 6 6 f f . . 
        . . . . f d 3 d d 6 6 6 f 6 f . 
        . . . . . f d d d f f 6 f f . . 
        . . . . . . f f 3 3 f f 6 6 f . 
        . . . . . f 5 3 3 d d f f f . . 
        . . . . . f 3 3 3 f d d f . . . 
        . . . . . . f 3 5 f f f . . . . 
        . . . . . f 3 3 3 3 f . . . . . 
        . . . . . . f f f f f . . . . . 
        `],
    250,
    true
    )
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    myMainCharacter,
    [img`
        . . . . . . . 5 . 5 . . . . . . 
        . . . . . . f 5 5 5 f . . . . . 
        . . . . . f 6 5 5 2 6 f . . . . 
        . . . . f 6 6 1 6 6 6 6 f . . . 
        . . . . f 6 1 6 6 6 6 6 f . . . 
        . . . . f 1 6 6 6 d f d f . . . 
        . . . f f 6 6 6 6 d f d f . . . 
        . . f 6 f 6 6 6 d d 3 d f . . . 
        . . . f f 6 f f d d d f . . . . 
        . . f 6 6 6 f 3 5 f f . . . . . 
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
        . . . . f 6 5 5 2 6 f . . . . . 
        . . . f 6 6 1 6 6 6 6 f . . . . 
        . . . f 6 1 6 6 6 6 6 f . . . . 
        . . . f 1 6 6 6 d f d f . . . . 
        . . f f 6 6 6 6 d f d f . . . . 
        . f 6 f 6 6 6 d d 3 d f . . . . 
        . . f f 6 f f d d d f . . . . . 
        . f 6 6 f f 3 3 f f . . . . . . 
        . . f f f f d d d d f . . . . . 
        . . . . f 3 f d d d f . . . . . 
        . . . f 3 5 d f f f . . . . . . 
        . . . . f f 3 3 f f f . . . . . 
        . . . . f f f f f f f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . 5 . 5 . . . . . . . 
        . . . . . f 5 5 5 f . . . . . . 
        . . . . f 6 5 5 2 6 f . . . . . 
        . . . f 6 6 1 6 6 6 6 f . . . . 
        . . . f 6 1 6 6 6 6 6 f . . . . 
        . . . f 1 6 6 6 d f d f . . . . 
        . . f f 6 6 6 6 d f d f . . . . 
        . f 6 f 6 6 6 d d 3 d f . . . . 
        . . f f 6 f f d d d f . . . . . 
        . f 6 6 f f 3 3 f f . . . . . . 
        . . f f f d d 3 3 5 f . . . . . 
        . . . f d d f 3 3 3 f . . . . . 
        . . . . f f f 5 3 f . . . . . . 
        . . . . . f 3 3 3 3 f . . . . . 
        . . . . . f f f f f . . . . . . 
        `],
    250,
    true
    )
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    myMainCharacter,
    [img`
        . . . . . . 5 . 5 . . . . . . . 
        . . . . . f 5 5 5 f f . . . . . 
        . . . . f 1 5 2 5 1 6 f . . . . 
        . . . f 1 6 6 6 6 6 1 6 f . . . 
        . . . f 6 6 f f f f 6 1 f . . . 
        . . . f 6 f f d d f f 6 f . . . 
        . . f 6 f d f d d f d f 6 f . . 
        . . f 6 f d 3 d d 3 d f 6 f . . 
        . . f 6 6 f d d d d f 6 6 f . . 
        . f 6 6 f 3 f f f f 3 f 6 6 f . 
        . . f f d 3 5 3 3 5 3 d f f . . 
        . . f d d f 3 5 5 3 f d d f . . 
        . . . f f 3 3 3 3 3 3 f f . . . 
        . . . f 3 3 5 3 3 5 3 3 f . . . 
        . . . f f f f f f f f f f . . . 
        . . . . . f f . . f f . . . . . 
        `,img`
        . . . . . . 5 . 5 . . . . . . . 
        . . . . . f 5 5 5 f f . . . . . 
        . . . . f 1 5 2 5 1 6 f . . . . 
        . . . f 1 6 6 6 6 6 1 6 f . . . 
        . . . f 6 6 f f f f 6 1 f . . . 
        . . . f 6 f f d d f f 6 f . . . 
        . . f 6 f d f d d f d f 6 f . . 
        . . f 6 f d 3 d d 3 d f 6 f . . 
        . . f 6 6 f d d d d f 6 6 f . . 
        . f 6 6 f 3 f f f f 3 f 6 6 f . 
        . . f f 3 3 5 3 3 5 3 d f f . . 
        . . . f d f 3 5 5 3 f f d f . . 
        . . . f d f 3 3 3 3 3 f f . . . 
        . . . f f 3 5 3 3 5 3 3 f . . . 
        . . . . f f f f f f f f f . . . 
        . . . . . . . . . f f . . . . . 
        `,img`
        . . . . . . 5 . 5 . . . . . . . 
        . . . . . f 5 5 5 f f . . . . . 
        . . . . f 1 5 2 5 1 6 f . . . . 
        . . . f 1 6 6 6 6 6 1 6 f . . . 
        . . . f 6 6 f f f f 6 1 f . . . 
        . . . f 6 f f d d f f 6 f . . . 
        . . f 6 f d f d d f d f 6 f . . 
        . . f 6 f d 3 d d 3 d f 6 f . . 
        . . f 6 6 f d d d d f 6 6 f . . 
        . f 6 6 f 3 f f f f 3 f 6 6 f . 
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
})
function worldSetup () {
    tiles.setTilemap(tilemap`levelAmelieValley`)
    myCharactersHouse = sprites.create(assets.image`mySplashscreen`, SpriteKind.Building)
    myCharactersHouse.setPosition(80, 25)
    myCharactersField = sprites.create(assets.image`field`, SpriteKind.Player)
    myCharactersField.setPosition(133, 40)
    myMainCharacter = sprites.create(img`
        . . . . . . 5 . 5 . . . . . . . 
        . . . . . f 5 5 5 f f . . . . . 
        . . . . f 1 5 2 5 1 6 f . . . . 
        . . . f 1 6 6 6 6 6 1 6 f . . . 
        . . . f 6 6 f f f f 6 1 f . . . 
        . . . f 6 f f d d f f 6 f . . . 
        . . f 6 f d f d d f d f 6 f . . 
        . . f 6 f d 3 d d 3 d f 6 f . . 
        . . f 6 6 f d d d d f 6 6 f . . 
        . f 6 6 f 3 f f f f 3 f 6 6 f . 
        . . f f d 3 5 3 3 5 3 d f f . . 
        . . f d d f 3 5 5 3 f d d f . . 
        . . . f f 3 3 3 3 3 3 f f . . . 
        . . . f 3 3 5 3 3 5 3 3 f . . . 
        . . . f f f f f f f f f f . . . 
        . . . . . f f . . f f . . . . . 
        `, SpriteKind.Player)
    scene.cameraFollowSprite(myMainCharacter)
    controller.moveSprite(myMainCharacter, 75, 75)
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
    myMainCharacterCar.setPosition(37, 120)
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
    scene.cameraFollowSprite(myMainCharacterCar)
    controller.moveSprite(myMainCharacterCar, 150, 150)
    myMainCharacter.destroy()
})
let myMainCharacterCar: Sprite = null
let myCharactersField: Sprite = null
let myCharactersHouse: Sprite = null
let characterName = ""
let listQuests: string[] = []
let characterBoy: Sprite = null
let characterLostDog: Sprite = null
let myMainCharacter: Sprite = null
worldSetup()
questBoyAndLostDog()
game.onUpdate(function () {
    dogQuestEvents()
    exitAmelieHouse()
})
