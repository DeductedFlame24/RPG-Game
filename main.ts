scene.setBackgroundColor(8)
let mySprite = sprites.create(img`
    . . . . . . f f f f . . . . . . 
    . . . . f f f 5 5 f f f . . . . 
    . . . f f f 5 5 5 5 f f f . . . 
    . . f f f 4 4 4 4 4 4 f f f . . 
    . . f f 4 5 5 5 5 5 5 4 4 f . . 
    . . f 4 5 f f f f f f 5 4 f . . 
    . . f f f f e e e e f f f f . . 
    . f f 4 f b f 4 4 f b f 4 f f . 
    . f 4 4 4 1 f d d f 1 4 4 4 f . 
    . . f 4 4 d d d d d d 4 4 f . . 
    . . . f 4 2 2 2 2 2 2 4 f . . . 
    . . e 4 f 5 5 5 5 5 5 f 4 e . . 
    . . 4 d f 5 5 5 5 5 5 f d 4 . . 
    . . 4 4 f 4 4 2 2 4 4 f 4 4 . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.Player)
mySprite.x = 64
let statusbar = statusbars.create(4, 40, StatusBarKind.Health)
statusbar.attachToSprite(mySprite)
tiles.loadMap(tiles.createMap(tiles.createTilemap(hex`10001000090a0d0a0a0a0d0a0f0a0d0a0a0a0d070106030603060306030603060306030201050405040504050405040504050402010603060306030603060306030603020105040504050405040504050405040201060306030603060306030603060302010504050405040504050405040504020106030603060310100603060306030201050405040504101005040504050402010603060306030603060306030603020105040504050405040504050405040201060306030603060306030603060302010504050405040504050405040504020106030603060306030603060306030201050405040504050405040504050402080c0e0c0e0c0e0c0e0c0e0c0e0c0c0b`, img`
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
    `, [myTiles.transparency16,sprites.dungeon.purpleOuterWest1,sprites.dungeon.purpleOuterEast0,sprites.dungeon.purpleInnerNorthEast,sprites.dungeon.purpleInnerSouthEast,sprites.dungeon.purpleInnerSouthWest,sprites.dungeon.purpleInnerNorthWest,sprites.dungeon.purpleOuterNorthEast,sprites.dungeon.purpleOuterSouthEast,sprites.dungeon.purpleOuterNorthWest,sprites.dungeon.purpleOuterNorth1,sprites.dungeon.purpleOuterSouthWest,sprites.dungeon.purpleOuterSouth1,sprites.dungeon.purpleOuterNorth2,sprites.dungeon.purpleOuterSouth2,sprites.dungeon.doorOpenNorth,sprites.dungeon.collectibleInsignia], TileScale.Sixteen)))
scene.cameraFollowSprite(mySprite)
controller.moveSprite(mySprite, 100, 100)
statusbar.x = 135
statusbar.y = 115
