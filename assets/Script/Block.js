
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
        var node = new cc.Node("New Sprite");
        var sprite = node.addComponent(cc.Sprite);
        node.parent = this.node;
        var url = cc.url.raw("images/o.png");
        var texture = cc.textureCache.addImage(url);
        sprite.spriteFrame = new cc.SpriteFrame(texture);
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
