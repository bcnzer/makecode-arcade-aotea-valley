namespace SpriteKind {
    export const Building = SpriteKind.create()
    export const Boy = SpriteKind.create()
    export const Dog = SpriteKind.create()
}
function gameIntro () {
    game.splash("Welcome to", "AMELIE VALLEY")
    characterName = game.askForString("What is your name?")
}
function worldSetup () {
    myCharactersHouse = sprites.create(assets.image`mySplashscreen`, SpriteKind.Building)
    myCharactersHouse.setPosition(80, 35)
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
    controller.moveSprite(myMainCharacter)
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
let listQuests: string[] = []
let characterLostDog: Sprite = null
let characterBoy: Sprite = null
let myMainCharacter: Sprite = null
let myCharactersField: Sprite = null
let myCharactersHouse: Sprite = null
let characterName = ""
tiles.setTilemap(tilemap`levelAmelieValley`)
worldSetup()
questBoyAndLostDog()
game.onUpdate(function () {
    if (myMainCharacter.overlapsWith(characterLostDog)) {
        characterLostDog.say("Woof woof")
        characterLostDog.follow(characterBoy)
    }
})
game.onUpdate(function () {
    if (myMainCharacter.overlapsWith(characterBoy)) {
        game.setDialogFrame(img`
            ..99999999999999999999..
            .9966666666666666666699.
            996661111111111111166699
            966611111111111111116669
            966611111111111111116669
            966611111111111111116669
            966611111111111111116669
            966611111111111111116669
            966611111111111111116669
            966611111111111111116669
            966611111111111111116669
            966611111111111111116669
            966611111111111111116669
            966611111111111111116669
            966611111111111111116669
            966611111111111111116669
            966611111111111111116669
            966611111111111111116669
            966611111111111111116669
            966611111111111111116669
            966611111111111111116669
            996661111111111111166699
            .9966666666666666666699.
            ..99999999999999999999..
            `)
        if (listQuests[0] == "dog found") {
            characterBoy.vx = -50
            game.showLongText("Thank you so much!", DialogLayout.Bottom)
        } else {
            game.showLongText("Please help me find my dog", DialogLayout.Bottom)
        }
        characterBoy.y += 20
    }
})
