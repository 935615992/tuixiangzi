enum SpriteKindLegacy {
    Player,
    Projectile,
    Food,
    Enemy
}
namespace myTiles {
    //% blockIdentity=images._tile
    export const tile0 = img`
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
`
    //% blockIdentity=images._tile
    export const tile1 = img`
d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d 
`
    //% blockIdentity=images._tile
    export const tile2 = img`
d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d 
d d 2 2 2 d d d d d d 2 2 2 d d 
d d 2 f 2 2 d d d d 2 2 f 2 d d 
d d 2 2 f 2 2 d d 2 2 f 2 2 d d 
d d d 2 2 f 2 2 2 2 f 2 2 d d d 
d d d d 2 2 f 2 2 f 2 2 d d d d 
d d d d d 2 2 f f 2 2 d d d d d 
d d d d d 2 2 f f 2 2 d d d d d 
d d d d 2 2 f 2 2 f 2 2 d d d d 
d d d 2 2 f 2 2 2 2 f 2 2 d d d 
d d 2 2 f 2 2 d d 2 2 f 2 2 d d 
d d 2 f 2 2 d d d d 2 2 f 2 d d 
d d 2 2 2 d d d d d d 2 2 2 d d 
d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d 
`
}
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    for (let index = 0; index < 4; index++) {
        if (左立定 == 1) {
            人物.x += -4
            立定(1, 1, 1, 1)
        } else {
            人物.x += 0
        }
        pause(25)
    }
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    for (let index = 0; index < 4; index++) {
        if (下立定 == 1) {
            人物.y += 4
            立定(1, 1, 1, 1)
        } else {
            人物.y += 0
        }
        pause(25)
    }
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    关数变量 += 0.5
})
function 判断 (数字: number, 数字2: number, 数字3: number, 数字4: number, 数字5: number, 数字6: number, 数字7: number, 数字8: number, 数字9: number, 数字10: number) {
    for (let 值 of sprite_list) {
        if (值.x == 数字 && 值.y == 数字2) {
            for (let 值 of sprite_list) {
                if (值.x == 数字3 && 值.y == 数字4) {
                    for (let 值 of sprite_list) {
                        if (值.x == 数字5 && 值.y == 数字6) {
                            for (let 值 of sprite_list) {
                                if (值.x == 数字7 && 值.y == 数字8) {
                                    for (let 值 of sprite_list) {
                                        if (值.x == 数字9 && 值.y == 数字10) {
                                            mySprite.say("下一关", 1000)
                                            music.baDing.play()
                                            关数变量 += 0.5
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    关数变量 += -0.5
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    if (人物.x - otherSprite.x == -12 && 人物.y != otherSprite.y) {
        人物.x += -4
    }
    if (人物.x - otherSprite.x == 12 && 人物.y != otherSprite.y) {
        人物.x += 4
    }
    if (人物.y - otherSprite.y == 12 && 人物.x != otherSprite.x) {
        人物.y += 4
    }
    if (人物.y - otherSprite.y == -12 && 人物.x != otherSprite.x) {
        人物.y += -4
    }
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    for (let index = 0; index < 4; index++) {
        if (右立定 == 1) {
            人物.x += 4
            立定(1, 1, 1, 1)
        } else {
            人物.x += 0
        }
        pause(25)
    }
})
function 定位 (数字: number, 数字2: number, 数字3: number, 数字4: number, 数字5: number, 数字6: number, 数字7: number, 数字8: number, 数字9: number, 数字10: number, 数字11: number, 数字12: number) {
    人物.setPosition(数字, 数字2)
    箱子1.setPosition(数字3, 数字4)
    箱子2.setPosition(数字5, 数字6)
    箱子3.setPosition(数字7, 数字8)
    箱子4.setPosition(数字9, 数字10)
    箱子5.setPosition(数字11, 数字12)
    立定(1, 1, 1, 1)
    mySprite.say("第" + convertToText(关数变量) + "关")
    关数变量 += 0.5
}
function 立定 (数字: number, 数字2: number, 数字3: number, 数字4: number) {
    左立定 = 数字3
    上立定 = 数字
    下立定 = 数字2
    右立定 = 数字4
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    for (let index = 0; index < 4; index++) {
        if (上立定 == 1) {
            人物.y += -4
            立定(1, 1, 1, 1)
        } else {
            人物.y += 0
        }
        pause(25)
    }
})
let 上立定 = 0
let 右立定 = 0
let 下立定 = 0
let 左立定 = 0
let 关数变量 = 0
let 箱子5: Sprite = null
let 箱子4: Sprite = null
let 箱子3: Sprite = null
let 箱子2: Sprite = null
let 箱子1: Sprite = null
let mySprite: Sprite = null
let sprite_list: Sprite[] = []
let 人物: Sprite = null
人物 = sprites.create(img`
. . . . . . f f f f . . . . . . 
. . . . f f f 2 2 f f f . . . . 
. . . f f f 2 2 2 2 f f f . . . 
. . f f f e e e e e e f f f . . 
. . f f e 2 2 2 2 2 2 e e f . . 
. . f e 2 f f f f f f 2 e f . . 
. f f f f f e e e e f f f f f . 
f f f e f b f 4 4 f b f e f f f 
. f e e 4 1 f d d f 1 4 e e f . 
. . f e e d d d d d d e e f . . 
. . . f e e 4 4 4 4 e e f . . . 
. . e 4 f 2 2 2 2 2 2 f 4 e . . 
. . 4 d f 2 2 2 2 2 2 f d 4 . . 
. . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
. . . . . f f f f f f . . . . . 
. . . . . f f . . f f . . . . . 
`, SpriteKind.Player)
sprite_list = sprites.allOfKind(SpriteKindLegacy.Enemy)
mySprite = sprites.create(img`
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
`, SpriteKind.Player)
mySprite.setPosition(140, 10)
箱子1 = sprites.create(img`
f c 2 f f f f f f f f f f f f f 
f c 2 f c c c c c c c c c c c c 
f c 2 f 2 2 2 2 2 2 2 2 2 2 2 2 
f c 2 f f f f f f f f f f f f f 
f c 2 f f c c c c c c f f c 2 f 
f c 2 f c f 2 2 2 2 f c f c 2 f 
f c 2 f 2 c f 2 2 f c 2 f c 2 f 
f c 2 f 2 2 c f f c 2 2 f c 2 f 
f c 2 f 2 2 2 f f 2 2 2 f c 2 f 
f c 2 f 2 2 f c c f 2 2 f c 2 f 
f c 2 f 2 f c 2 2 c f 2 f c 2 f 
f c 2 f f c 2 2 2 2 c f f c 2 f 
f f f f f f f f f f f f f c 2 f 
c c c c c c c c c c c c f c 2 f 
2 2 2 2 2 2 2 2 2 2 2 2 f c 2 f 
f f f f f f f f f f f f f c 2 f 
`, SpriteKind.Enemy)
箱子2 = sprites.create(img`
f c 5 f f f f f f f f f f f f f 
f c 5 f c c c c c c c c c c c c 
f c 5 f 5 5 5 5 5 5 5 5 5 5 5 5 
f c 5 f f f f f f f f f f f f f 
f c 5 f f c c c c c c f f c 5 f 
f c 5 f c f 5 5 5 5 f c f c 5 f 
f c 5 f 5 c f 5 5 f c 5 f c 5 f 
f c 5 f 5 5 c f f c 5 5 f c 5 f 
f c 5 f 5 5 5 f f 5 5 5 f c 5 f 
f c 5 f 5 5 f c c f 5 5 f c 5 f 
f c 5 f 5 f c 5 5 c f 5 f c 5 f 
f c 5 f f c 5 5 5 5 c f f c 5 f 
f f f f f f f f f f f f f c 5 f 
c c c c c c c c c c c c f c 5 f 
5 5 5 5 5 5 5 5 5 5 5 5 f c 5 f 
f f f f f f f f f f f f f c 5 f 
`, SpriteKind.Enemy)
箱子3 = sprites.create(img`
f c 4 f f f f f f f f f f f f f 
f c 4 f c c c c c c c c c c c c 
f c 4 f 4 4 4 4 4 4 4 4 4 4 4 4 
f c 4 f f f f f f f f f f f f f 
f c 4 f f c c c c c c f f c 4 f 
f c 4 f c f 4 4 4 4 f c f c 4 f 
f c 4 f 4 c f 4 4 f c 4 f c 4 f 
f c 4 f 4 4 c f f c 4 4 f c 4 f 
f c 4 f 4 4 4 f f 4 4 4 f c 4 f 
f c 4 f 4 4 f c c f 4 4 f c 4 f 
f c 4 f 4 f c 4 4 c f 4 f c 4 f 
f c 4 f f c 4 4 4 4 c f f c 4 f 
f f f f f f f f f f f f f c 4 f 
c c c c c c c c c c c c f c 4 f 
4 4 4 4 4 4 4 4 4 4 4 4 f c 4 f 
f f f f f f f f f f f f f c 4 f 
`, SpriteKind.Enemy)
箱子4 = sprites.create(img`
f c 9 f f f f f f f f f f f f f 
f c 9 f c c c c c c c c c c c c 
f c 9 f 9 9 9 9 9 9 9 9 9 9 9 9 
f c 9 f f f f f f f f f f f f f 
f c 9 f f c c c c c c f f c 9 f 
f c 9 f c f 9 9 9 9 f c f c 9 f 
f c 9 f 9 c f 9 9 f c 9 f c 9 f 
f c 9 f 9 9 c f f c 9 9 f c 9 f 
f c 9 f 9 9 9 f f 9 9 9 f c 9 f 
f c 9 f 9 9 f c c f 9 9 f c 9 f 
f c 9 f 9 f c 9 9 c f 9 f c 9 f 
f c 9 f f c 9 9 9 9 c f f c 9 f 
f f f f f f f f f f f f f c 9 f 
c c c c c c c c c c c c f c 9 f 
9 9 9 9 9 9 9 9 9 9 9 9 f c 9 f 
f f f f f f f f f f f f f c 9 f 
`, SpriteKind.Enemy)
箱子5 = sprites.create(img`
f c 7 f f f f f f f f f f f f f 
f c 7 f c c c c c c c c c c c c 
f c 7 f 7 7 7 7 7 7 7 7 7 7 7 7 
f c 7 f f f f f f f f f f f f f 
f c 7 f f c c c c c c f f c 7 f 
f c 7 f c f 7 7 7 7 f c f c 7 f 
f c 7 f 7 c f 7 7 f c 7 f c 7 f 
f c 7 f 7 7 c f f c 7 7 f c 7 f 
f c 7 f 7 7 7 f f 7 7 7 f c 7 f 
f c 7 f 7 7 f c c f 7 7 f c 7 f 
f c 7 f 7 f c 7 7 c f 7 f c 7 f 
f c 7 f f c 7 7 7 7 c f f c 7 f 
f f f f f f f f f f f f f c 7 f 
c c c c c c c c c c c c f c 7 f 
7 7 7 7 7 7 7 7 7 7 7 7 f c 7 f 
f f f f f f f f f f f f f c 7 f 
`, SpriteKind.Enemy)
关数变量 = 1
箱子1.setFlag(SpriteFlag.ShowPhysics, false)
箱子2.setFlag(SpriteFlag.ShowPhysics, false)
箱子3.setFlag(SpriteFlag.ShowPhysics, false)
箱子4.setFlag(SpriteFlag.ShowPhysics, false)
箱子5.setFlag(SpriteFlag.ShowPhysics, false)
sprite_list.insertAt(0, 箱子1)
sprite_list.insertAt(1, 箱子2)
sprite_list.insertAt(2, 箱子3)
sprite_list.insertAt(3, 箱子4)
sprite_list.insertAt(4, 箱子5)
game.onUpdate(function () {
    for (let 值 of sprite_list) {
        if (人物.x - 值.x == -12 && 人物.y == 值.y) {
            if (controller.right.isPressed()) {
                for (let index = 0; index < 4; index++) {
                    值.x += 4
                }
            }
            if (人物.overlapsWith(值)) {
                人物.x += -4
            }
        }
        if (人物.x - 值.x == 12 && 人物.y == 值.y) {
            if (controller.left.isPressed()) {
                for (let index = 0; index < 4; index++) {
                    值.x += -4
                }
            }
            if (人物.overlapsWith(值)) {
                人物.x += 4
            }
        }
        if (人物.y - 值.y == 12 && 人物.x == 值.x) {
            if (controller.up.isPressed()) {
                for (let index = 0; index < 4; index++) {
                    值.y += -4
                }
            }
            if (人物.overlapsWith(值)) {
                人物.y += 4
            }
        }
        if (人物.y - 值.y == -12 && 人物.x == 值.x) {
            if (controller.down.isPressed()) {
                for (let index = 0; index < 4; index++) {
                    值.y += 4
                }
            }
            if (人物.overlapsWith(值)) {
                人物.y += -4
            }
        }
    }
    for (let 值 of sprite_list) {
        if (人物.x - 值.x == 32 && 人物.y == 值.y) {
            for (let 值 of sprite_list) {
                if (人物.x - 值.x == 16 && 人物.y == 值.y) {
                    左立定 = 0
                }
            }
        }
        if (人物.x - 值.x == -32 && 人物.y == 值.y) {
            for (let 值 of sprite_list) {
                if (人物.x - 值.x == -16 && 人物.y == 值.y) {
                    右立定 = 0
                }
            }
        }
        if (人物.y - 值.y == 32 && 人物.x == 值.x) {
            for (let 值 of sprite_list) {
                if (人物.y - 值.y == 16 && 人物.x == 值.x) {
                    上立定 = 0
                }
            }
        }
        if (人物.y - 值.y == -32 && 人物.x == 值.x) {
            for (let 值 of sprite_list) {
                if (人物.y - 值.y == -16 && 人物.x == 值.x) {
                    下立定 = 0
                }
            }
        }
    }
})
game.onUpdate(function () {
    if (关数变量 == 2) {
        tiles.setTilemap(tiles.createTilemap(
            hex`0a00080005050508090909090a050508090b030303031105080b0003031a1a030e0a1300000303030303031113000003030303030c0f10121212120d0303110505050505051012120f0505050505050505050505`,
            img`
. . . 2 2 2 2 2 2 . 
. 2 2 2 . . . . 2 . 
2 2 . . . 2 2 . 2 2 
2 . . . . . . . . 2 
2 . . . . . . . 2 2 
2 2 2 2 2 2 . . 2 . 
. . . . . 2 2 2 2 . 
. . . . . . . . . . 
`,
            [myTiles.tile2,myTiles.tile1,myTiles.tile0,sprites.castle.tilePath5,sprites.castle.tileGrass2,sprites.dungeon.floorLight0,sprites.castle.saplingPine,sprites.dungeon.hazardLava0,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.greenOuterNorth0,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.greenInnerSouthEast,sprites.dungeon.greenInnerNorthWest,sprites.dungeon.greenInnerNorthEast,sprites.dungeon.greenInnerSouthWest,sprites.dungeon.greenOuterSouthWest,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.greenOuterEast0,sprites.dungeon.greenOuterSouth0,sprites.dungeon.greenOuterWest1,sprites.dungeon.floorDark2,sprites.dungeon.floorLight5,sprites.dungeon.floorLight4,sprites.dungeon.floorLight1,sprites.castle.tileGrass1,sprites.dungeon.buttonOrangeDepressed,sprites.dungeon.hazardSpike],
            TileScale.Sixteen
        ))
        定位(136, 56, 88, 56, 72, 72, 72, 40, 104, 72, 56, 56)
    }
    if (关数变量 == 2.5) {
        判断(40, 40, 40, 56, 40, 72, 24, 56, 24, 72)
    }
    if (关数变量 == 1) {
        tiles.setTilemap(tiles.createTilemap(
            hex`0a000800050508090a050505050505051300110505050505050513030e09090a050508090b0303030011050513000303030c120f05051012120d0311050505050505051300110505050505050510120f05050505`,
            img`
. . 2 2 2 . . . . . 
. . 2 . 2 . . . . . 
. . 2 . 2 2 2 2 . . 
2 2 2 . . . . 2 . . 
2 . . . . 2 2 2 . . 
2 2 2 2 . 2 . . . . 
. . . 2 . 2 . . . . 
. . . 2 2 2 . . . . 
`,
            [myTiles.tile2,myTiles.tile1,myTiles.tile0,sprites.castle.tilePath5,sprites.castle.tileGrass2,sprites.dungeon.floorLight0,sprites.castle.saplingPine,sprites.dungeon.hazardLava0,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.greenOuterNorth0,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.greenInnerSouthEast,sprites.dungeon.greenInnerNorthWest,sprites.dungeon.greenInnerNorthEast,sprites.dungeon.greenInnerSouthWest,sprites.dungeon.greenOuterSouthWest,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.greenOuterEast0,sprites.dungeon.greenOuterSouth0,sprites.dungeon.greenOuterWest1,sprites.dungeon.floorDark2,sprites.dungeon.floorLight5,sprites.dungeon.floorLight4,sprites.dungeon.floorLight1,sprites.castle.tileGrass1],
            TileScale.Sixteen
        ))
        定位(72, 56, 88, 56, 72, 88, 56, 40, 40, 72, -16, -16)
    }
    if (关数变量 == 1.5) {
        判断(56, 24, 24, 72, 72, 104, 104, 56, -16, -16)
    }
    if (关数变量 == 3) {
        tiles.setTilemap(tiles.createTilemap(
            hex`0a00080005080909090a0505050505130303030e190a0505080b031b0303030e0a05130300000300030311051303030303030c120f0510120d031b0011050505050513030303110505050505101212120f050505`,
            img`
. 2 2 2 2 2 . . . . 
. 2 . . . 2 2 2 2 . 
2 2 . 2 . . . 2 2 . 
2 . . . . . . . 2 . 
2 . . . . . 2 2 2 . 
2 2 2 . 2 . 2 . . . 
. . 2 . . . 2 . . . 
. . 2 2 2 2 2 . . . 
`,
            [myTiles.tile2,myTiles.tile1,myTiles.tile0,sprites.castle.tilePath5,sprites.castle.tileGrass2,sprites.dungeon.floorLight0,sprites.castle.saplingPine,sprites.dungeon.hazardLava0,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.greenOuterNorth0,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.greenInnerSouthEast,sprites.dungeon.greenInnerNorthWest,sprites.dungeon.greenInnerNorthEast,sprites.dungeon.greenInnerSouthWest,sprites.dungeon.greenOuterSouthWest,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.greenOuterEast0,sprites.dungeon.greenOuterSouth0,sprites.dungeon.greenOuterWest1,sprites.dungeon.floorDark2,sprites.dungeon.floorLight5,sprites.dungeon.floorLight4,sprites.dungeon.floorLight1,sprites.castle.tileGrass1,sprites.dungeon.greenOuterNorth1,sprites.builtin.forestTiles0,sprites.dungeon.hazardSpike],
            TileScale.Sixteen
        ))
        定位(56, 24, 56, 72, 72, 72, 72, 40, 40, 56, -16, -16)
    }
    if (关数变量 == 3.5) {
        判断(40, 56, 56, 56, 88, 56, 88, 88, -16, -16)
    }
    if (关数变量 == 3) {
        game.over(true)
    }
})
