
cc.Class({
    extends: cc.Component,

    properties: {

        live: 0,
        current: 0,
        startime: false,
        Game: {
            default: null,
            serializable: false
        },
        row: 0,
        col: 0,
        count: 0,
        m: 0
    },

    onLoad() {
        this.node.on('touchend', this.MoveCell, this);

    },

    MoveCell: function () {
        var GameScreen = require("GameScreen");
        for (i = 0; i < GameScreen.instance.item_1.length; i++) {
            if (GameScreen.instance.item_1[i].getComponent('Block').row == this.row
                && GameScreen.instance.item_1[i].getComponent('Block').col == this.col) {
                let node = new cc.Node("New Sprite");
                let sprite = node.addComponent(cc.Sprite);
                node.parent = GameScreen.instance.item_1[i];
                let url = cc.url.raw("resources/o.png");
                let texture = cc.textureCache.addImage(url);
                sprite.spriteFrame = new cc.SpriteFrame(texture);
                console.log(JSON.stringify(node.parent.getPosition()));
                GameScreen.instance.test(i);
            }
            if (GameScreen.instance.item_2[i].getComponent('Block').row == this.row
                && GameScreen.instance.item_2[i].getComponent('Block').col == this.col) {
                let node = new cc.Node("New Sprite");
                let sprite = node.addComponent(cc.Sprite);
                node.parent = GameScreen.instance.item_2[i];
                let url = cc.url.raw("resources/o.png");
                let texture = cc.textureCache.addImage(url);
                sprite.spriteFrame = new cc.SpriteFrame(texture);
                console.log(JSON.stringify(node.parent.getPosition()));
            }
        }

    },
    start: function () {
        // for (i = 0; i < this.Game.item.length; i++) {
        //     if (this.row == this.Game.item[i].getComponent('Block').row && this.col == this.Game.item[i].getComponent('Block').col) {
        //         this.m = i;
        //     }
        // }
    },

    update(dt) {

    },
});
