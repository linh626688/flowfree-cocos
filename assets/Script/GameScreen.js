// Learn cc.Class:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {

        blockPrefab: {
            default: null,
            type: cc.Prefab
        },
        table: {
            default: [],
            type: cc.Prefab
        },
        item: {
            default: [],
            serializable: false
        },
        BoxCell: {
            default: [],
            serializable: false
        },
    },
    spawnNew: function () {

        var x = 0;
        var y = 0;
        for (var i = -2; i < 3; i++) {
            for (var a = -2; a < 3; a++) {

                var spawn = cc.instantiate(this.blockPrefab);
                this.node.addChild(spawn);
                spawn.getComponent('Block').row = a;
                spawn.getComponent('Block').col = i;
                x = a * spawn.width;
                y = i * spawn.height;
                spawn.setPosition(this.getNewBlockPosition(x, y));
                this.item.push(spawn);
                spawn.getComponent('Block').GamePlay = this;
            }
        }

    },
    getNewBlockPosition: function (randX, randY) {

        return cc.p(randX, randY);

    },
    addTouchListernerTable() {
        var json = {};
        json["points"] = [];

        this.node.on(cc.Node.EventType.TOUCH_START, function (event) {
            for (let i = 0; i < this.item.length; i++) {
                //  console.log(this.item[i].getPosition())
                //  json["points"].push({ "x": this.item[i].getComponent('Block').row, "y": this.item[i].getComponent('Block').col, "player": 2 });
                var node = new cc.Node("New Sprite");
                var sprite = node.addComponent(cc.Sprite);
                node.parent = this.item[i];
                var url = cc.url.raw("images/x.png");
                this.item[i].getComponent('Block').current = 2;
                var texture = cc.textureCache.addImage(url);
                sprite.spriteFrame = new cc.SpriteFrame(texture);
            }
        }, this);
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        this.spawnNew();
        this.addTouchListernerTable();
    },

    start() {

    },

    // update (dt) {},
});
