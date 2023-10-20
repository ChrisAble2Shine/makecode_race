namespace SpriteKind {
    export const lose = SpriteKind.create()
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.vy == 0) {
        mySprite.vy = -150
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile5`, function (sprite, location) {
    game.gameOver(true)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Player, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    sprites.destroy(otherSprite)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.lose, function (sprite, otherSprite) {
    bee = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    animation.runImageAnimation(
    lose,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 1 1 . . . . . . . 
        . . . . . . . 1 1 . . . . . . . 
        . . . f f f f f f . . . . . . . 
        . . . f 5 5 5 5 f . . . . . . . 
        . . . f f f f f f . . . . . . . 
        . . f f 5 f 5 f f f 5 5 . . . . 
        . . f 5 5 f 5 5 5 f 5 5 . . . . 
        . . f 5 5 f 5 f f f 5 5 . . . . 
        . . f f f f f f . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 1 1 . . . . . . . 
        . . . . . . . 1 1 . . . . . . . 
        . . . f f f f f f . . . . . . . 
        . . . f 5 5 5 5 f . . . . . . . 
        . . . f f f f f f . . . . . . . 
        . . f f 5 f 5 f f f 5 5 . . . . 
        . . f 5 5 f 5 5 5 f 5 5 . . . . 
        . . f 5 5 f 5 f f f 5 5 . . . . 
        . . f f f f f f . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    500,
    true
    )
})
let bee: Sprite = null
let lose: Sprite = null
let coin: Sprite = null
let mySprite: Sprite = null
scene.setBackgroundColor(9)
mySprite = sprites.create(assets.image`max`, SpriteKind.Player)
controller.moveSprite(mySprite, 100, 0)
tiles.setCurrentTilemap(tilemap`level1`)
mySprite.ay = 200
scene.cameraFollowSprite(mySprite)
for (let value of tiles.getTilesByType(assets.tile`myTile3`)) {
    coin = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f . . . . . . . 
        . . . f 5 5 5 5 f . . . . . . . 
        . . . f 5 5 5 5 f f f . . . . . 
        . . f f 4 4 4 4 5 5 f f . . . . 
        . . f 5 5 5 5 5 4 5 5 f . . . . 
        . . f 5 4 5 4 5 4 5 5 f . . . . 
        . . f 5 4 5 5 5 4 5 5 f . . . . 
        . . f 5 4 5 4 4 4 5 f f . . . . 
        . . f f 5 5 5 5 5 5 f . . . . . 
        . . . f f 5 5 5 f f f . . . . . 
        . . . . f f f f f . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Player)
    tiles.setTileAt(value, assets.tile`transparency16`)
    tiles.placeOnTile(coin, value)
}
for (let value of tiles.getTilesByType(assets.tile`myTile6`)) {
    lose = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 4 4 . . . . . . . . . 
        . . . . . 4 4 . . 4 4 . . . . . 
        . . . . . 5 5 5 5 4 4 . . . . . 
        . . . . . 5 2 2 5 4 4 . . . . . 
        . . . 4 4 5 2 2 5 . . . . . . . 
        . . . 4 4 5 5 5 5 4 4 . . . . . 
        . . . . 4 4 7 7 4 4 4 . . . . . 
        . . 7 7 7 7 7 7 7 7 7 7 . . . . 
        . . . . 7 7 7 7 7 7 . . . . . . 
        . . . . 7 7 7 7 7 7 . . . . . . 
        . . . . . 7 7 7 7 . . . . . . . 
        . . . . . . . 7 . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.lose)
    tiles.placeOnTile(mySprite, value)
    tiles.setTileAt(value, assets.tile`transparency16`)
}
