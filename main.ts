controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (controller.A.isPressed()) {
        mySprite.setVelocity(0, -65)
    } else {
    	
    }
})
controller.player2.onButtonEvent(ControllerButton.B, ControllerButtonEvent.Pressed, function () {
    mysprite2.setVelocity(0, 50)
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setVelocity(0, 50)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile`, function (sprite, location) {
    if (igt > p2igt) {
        game.gameOver(true)
    } else {
        game.gameOver(false)
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setVelocity(0, -50)
})
controller.player2.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
    mysprite2.setVelocity(0, -50)
})
controller.player2.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Released, function () {
    mysprite2.setVelocity(0, -30)
    pause(50)
    mysprite2.setVelocity(0, -20)
    pause(50)
    mysprite2.setVelocity(0, 0)
})
controller.player2.onButtonEvent(ControllerButton.Up, ControllerButtonEvent.Pressed, function () {
    if (controller.A.isPressed()) {
        mysprite2.setVelocity(0, -65)
    } else {
    	
    }
})
controller.A.onEvent(ControllerButtonEvent.Released, function () {
    mySprite.setVelocity(0, -30)
    pause(50)
    mySprite.setVelocity(0, -20)
    pause(50)
    mySprite.setVelocity(0, 0)
})
controller.player2.onButtonEvent(ControllerButton.B, ControllerButtonEvent.Released, function () {
    mysprite2.setVelocity(0, 30)
    pause(50)
    mysprite2.setVelocity(0, 20)
    pause(50)
    mysprite2.setVelocity(0, 0)
})
controller.B.onEvent(ControllerButtonEvent.Released, function () {
    mySprite.setVelocity(0, 30)
    pause(50)
    mySprite.setVelocity(0, 20)
    pause(50)
    mySprite.setVelocity(0, 0)
})
controller.player2.onEvent(ControllerEvent.Connected, function () {
    if (camra2 == 1) {
        scene.cameraFollowSprite(mysprite2)
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.castle.tileGrass1, function (sprite, location) {
    if (controller.A.isPressed()) {
        mySprite.setVelocity(0, -40)
    } else {
        mySprite.setVelocity(0, 0)
    }
})
let camra2 = 0
let p2igt = 0
let igt = 0
let mysprite2: Sprite = null
let mySprite: Sprite = null
tiles.setCurrentTilemap(tilemap`level2`)
mySprite = sprites.create(img`
    9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
    9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
    9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
    9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
    9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
    9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
    9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
    9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
    9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
    9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
    9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
    9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
    9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
    9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
    9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
    9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
    `, SpriteKind.Player)
mysprite2 = sprites.create(img`
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    `, SpriteKind.Player)
tiles.placeOnTile(mySprite, tiles.getTileLocation(7, 63))
tiles.placeOnTile(mysprite2, tiles.getTileLocation(8, 63))
scene.cameraFollowSprite(mySprite)
controller.moveSprite(mySprite, 50, 0)
igt = 100
p2igt = 100
controller.player2.moveSprite(mysprite2, 50, 0)
let camra = 1
camra2 = 1
splitScreen.cameraFollowSprite(splitScreen.Camera.Camera1, mySprite)
splitScreen.cameraFollowSprite(splitScreen.Camera.Camera2, mysprite2)
forever(function () {
	
})
forever(function () {
    if (camra == 1) {
        scene.cameraFollowSprite(mySprite)
    }
})
