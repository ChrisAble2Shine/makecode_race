namespace SpriteKind {
    export const lose = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile5`, function (sprite, location) {
    current_level1 += 1
    startLevel()
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
function startLevel () {
    if (current_level1 == 0) {
        tiles.setCurrentTilemap(tilemap`level1`)
    } else {
        tiles.setCurrentTilemap(tilemap`level7`)
    }
    tiles.placeOnRandomTile(max, assets.tile`myTile8`)
    for (let value of tiles.getTilesByType(assets.tile`myTile8`)) {
        tiles.setTileAt(value, assets.tile`transparency16`)
    }
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
}
let coin: Sprite = null
let lose: Sprite = null
let bee: Sprite = null
let mySprite: Sprite = null
let max: Sprite = null
let current_level1 = 0
scene.setBackgroundColor(9)
scene.setBackgroundImage(img`
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999111119999999999999999999999999999999999999999999999999999999999999999999999999999995555555559999999999999999999999999999
    9999999999999999999999999999999991111111111111111199999999999999999999999999999999999999999999999999999999999999999999999555555555555599999999999999999999999999
    9999999999999999999999999999991111111111111111111111999999999999999999999999999999999999999999999999999999999999999999995555555555555559999999999999999999999999
    9999999999999999999999999999111111111111111111111111111999999999999999999999999999999999999999999999999999999999999999955555555555555555999999999999999999999999
    9999999999999999999999999911111111111111111111111111111119999999999999999999999999999999999999999999999999999999999999555555555555555555599999999999999999999999
    9999999999999999999999999111111111111111111111111111111111199999999999999999999999999999999999999999999999999999999999555555555555555555599999999999999999999999
    9999999999999999999999991111111111111111111111111111111111111199999999999999999999999999999999999999999999999999999995555555555555555555559999999999999999999999
    9999999999999999999999911111111111111111111111111111111111111111999999999999999999999999999999999999999999999999999995555555555555555555559999999999999999999999
    9999999999999999999999111111111111111111111111111111111111111111199999999999999999999999999999999999999999999999999995555555555555555555559999999999999999999999
    9999999999999999999991111111111111111111111111111111111111111111199999999999999999999999999999999999999999999999999995555555555555555555559999999999999999999999
    9999999999999999999111111111111111111111111111111111111111111119999999999999999999999999999999999999999999999999999995555555555555555555559999999999999999999999
    9999999999999999999111111111111111111111111111111111111111119999999999999999999999999999999999999999999999999999999995555555555555555555559999999999999999999999
    9999999999999999999999911111111111111111111111111111119999999999999999999999999999999999999999999999999999999999999995555555555555555555559999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999995555555555555555555559999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999995555555555555555555559999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999555555555555555555599999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999555555555555555555599999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999955555555555555555999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999995555555555555559999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999555555555555599999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999995555555559999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999666999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999666699999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999966666999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999996666999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999996666999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999666699999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999966699999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999966669999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999966669999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999966666999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999666666999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999666666699999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999996666666699999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999996666666699999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999996666666669999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999966666666669999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999966666666669999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999666666666669999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999996666666666669999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999966666666666669999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999966669999999999999999999999999999999999999999999999999666666666666669999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999996666666699999999999999999999999999999999999999999999996666666666666669999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999966666666666999999999999999999999999999999999999999999966666666666666669999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999666666666666699999999999999999999999999999999999999996666666666666666669999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999996666666666666669999999999999999999999999999999999999966666666666666666669999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999966666666666666666999999999999999999999999999999999999666666666666666666669999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999666666666666666666699999999999999999999999999999999996666666666666666666669999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999996666666666666666666699999999999999999999999999999999996666666666666666666699999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999966666666666666666666669999999999999999999999999999999966666666666666666666699999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999666666666666666666666669999999999999999999999999999999966666666666666666666699999
    9999999999999999999999999999999999999999999999999999999999999999999999999999996666666666666666666666666999999999999999999999999999999966666666666666666666699999
    9999999999999999999999999999999999999999999999999999999999999999999999999999966666666666666666666666666699999999999999999999999999999666666666666666666666699999
    9999999999999999999999999999999999999999999999999999999999999999999999999999666666666666666666666666666699999999999999999999999999999666666666666666666666699999
    9999999999999999999999999999999999999999999999999999999999999999999999999996666666666666666666666666666669999999999999999999999999999666666666666666666666699999
    9999999999999999999999999999999999999999999999999999999999999999999999999966666666666666666666666666666669999999999999999999999999999666666666666666666666699999
    9999999999999999999999999999999999999999999999999999999999999999999999999666666666666666666666666666666669999999999999999999999999996666666666666666666666699999
    9999999999999999999999999999999999999999999999999999999999999999999999996666666666666666666666666666666666999999999999999999999999996666666666666666666666699999
    9999999999999999999999999999999999999999999999999999999999999999999999966666666666666666666666666666666666999999999999999999999999996666666666666666666666699999
    9999999999999999999999999999666666699999999999999999999999999999999999666666666666666666666666666666666666699999999999999999999999996666666666666666666666699999
    9999999999999999999999999966666666666699999999999999999999999999999996666666666666666666666666666666666666699999999999999999999999966666666666666666666666699999
    9999999999999999999999999666666666666699999999999999999999999999999966666666666666666666666666666666666666669999999999999999999999966666666666666666666666699999
    9999999999999999999999999666666666666699999999999999999999999999999666666666666666666666666666666666666666669999999999999999999999966666666666666666666666699999
    9999999999999999999999996666666666666699999999999999999999999999996666666666666666666666666666666666666666666999999999999999999999966666666666666666666666669999
    9999999999999999999999966666666666666699999999999999999999999999996666666666666666666666666666666666666666666999999999999999999999966666666666666666666666669999
    9999999999999999999999966666666666666699999999999999999999999999966666666666666666666666666666666666666666666699999999999999999999666666666666666666666666669999
    9999999999999999999999666666666666666699999999999999999999999999666666666666666666666666666666666666666666666669999999999999999999666666666666666666666666669999
    9999999999999999999999666666666666666699999999999999999999999996666666666666666666666666666666666666666666666669999999999999999999666666666666666666666666666999
    9999999999999999999996666666666666666699999999999999999999999966666666666666666666666666666666666666666666666666999999999999999999666666666666666666666666666999
    9999999999999999999966666666666666666699999999999999999999999666666666666666666666666666666666666666666666666666999999999999999999666666666666666666666666666999
    9999999999999999999966666666666666666699999999999999999999996666666666666666666666666666666666666666666666666666699999999999999999666666666666666666666666666999
    9999999999999999999666666666666666666699999999999999999999966666666666666666666666666666666666666666666666666666699999999999999999666666666666666666666666666999
    9999999999999999999666666666666666666699999999999999999999966666666666666666666666666666666666666666666666666666669999999999999999666666666666666666666666666699
    9999999999999999996666666666666666666699999999999999999999666666666666666666666666666666666666666666666666666666669999999999999999666666666666666666666666666699
    9999999999999999996666666666666666666699999999999999999966666666666666666666666666666666666666666666666666666666666999999999999999666666666666666666666666666699
    9999999999999999966666666666666666666699999999999999999966666666666666666666666666666666666666666666666666666666666999999999999999666666666666666666666666666699
    9999999999999999666666666666666666666669999999999999999666666666666666666666666666666666666666666666666666666666666699999999999999666666666666666666666666666699
    9999999999999999666666666666666666666669999999999999996666666666666666666666666666666666666666666666666666666666666699999999999999666666666666666666666666666699
    9999999999999996666666666666666666666669999999999999966666666666666666666666666666666666666666666666666666666666666669999999999999666666666666666666666666666669
    9999999999999966666666666666666666666669999999999999666666666666666666666666666666666666666666666666666666666666666669999999999999666666666666666666666666666669
    9999999999999666666666666666666666666669999999999996666666666666666666666666666666666666666666666666666666666666666666999999999999666666666666666666666666666669
    9999999999999666666666666666666666666666999999999996666666666666666666666666666666666666666666666666666666666666666666999999999999666666666666666666666666666669
    9999999999996666666666666666666666666666999999999966666666666666666666666666666666666666666666666666666666666666666666699999999999666666666666666666666666666669
    9999999999966666666666666666666666666666999999999666666666666666666666666666666666666666666666666666666666666666666666669999999999666666666666666666666666666669
    9999999999666666666666666666666666666666999999996666666666666666666666666666666666666666666666666666666666666666666666669999999996666666666666666666666666666669
    9999999999666666666666666666666666666666699999996666666666666666666666666666666666666666666666666666666666666666666666666999999996666666666666666666666666666666
    9999999996666666666666666666666666666666699999966666666666666666666666666666666666666666666666666666666666666666666666666999999966666666666666666666666666666666
    9999999966666666666666666666666666666666699999666666666666666666666666666666666666666666666666666666666666666666666666666699999966666666666666666666666666666666
    9999999966666666666666666666666666666666669996666666666666666666666666666666666666666666666666666666666666666666666666666669999666666666666666666666666666666666
    9999999666666666666666666666666666666666669996666666666666666666666666666666666666666666666666666666666666666666666666666669999666666666666666666666666666666666
    9999996666666666666666666666666666666666666966666666666666666666666666666666666666666666666666666666666666666666666666666666996666666666666666666666666666666666
    9999966666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    9999666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    `)
current_level1 = 1
max = sprites.create(assets.image`max`, SpriteKind.Player)
controller.moveSprite(max, 100, 0)
scene.cameraFollowSprite(mySprite)
startLevel()
game.onUpdate(function () {
    max.setImage(assets.image`max`)
    if (max.vx < 0) {
        max.image.flipX()
    }
})
