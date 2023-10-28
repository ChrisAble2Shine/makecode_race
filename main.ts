namespace SpriteKind {
    export const lose = SpriteKind.create()
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (max.vy == 0) {
        max.vy = -150
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
let max: Sprite = null
scene.setBackgroundColor(9)
max = sprites.create(assets.image`max`, SpriteKind.Player)
controller.moveSprite(max, 100, 0)
tiles.setCurrentTilemap(tilemap`level1`)
max.ay = 200
scene.cameraFollowSprite(max)
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
    tiles.placeOnTile(max, value)
    tiles.setTileAt(value, assets.tile`transparency16`)
}
game.onUpdate(function () {
    max.setImage(assets.image`max`)
    if (max.vx < 0) {
        max.image.flipX()
    }
})
