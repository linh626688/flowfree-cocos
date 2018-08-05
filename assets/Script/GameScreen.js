var GameScreen = cc.Class({
    extends: cc.Component,
    statics: {
        instance: GameScreen
    },
    properties: {

        blockPrefab: {
            default: null,
            type: cc.Prefab
        },
        table: {
            default: [],
            type: cc.Prefab
        },
        item_1: {
            default: [],
            serializable: false
        },
        item_2: {
            default: [],
            serializable: false
        },
        BoxCell: {
            default: [],
            serializable: false
        },
        table_1: cc.Node,
        table_2: cc.Node,
        row:0,
        col:0,

    },

    spawnNewTable_1: function () {

        var x = 0;
        var y = 0;
        for (var i = -7; i < 8; i++) {
            for (var a = -7; a < 8; a++) {

                var spawn = cc.instantiate(this.blockPrefab);
                this.table_1.addChild(spawn);
                spawn.getComponent('Block').row = a+7;
                spawn.getComponent('Block').col = i+7;
                x = a * spawn.width;
                y = i * spawn.height;
                spawn.setPosition(this.getNewBlockPosition(x, y));
                this.item_1.push(spawn);
                spawn.getComponent('Block').GamePlay = this;
            }
        }

    },
    spawnNewTable_2: function () {

        var x = 0;
        var y = 0;
        for (var i = -7; i < 8; i++) {
            for (var a = -7; a < 8; a++) {

                var spawn = cc.instantiate(this.blockPrefab);
                this.table_2.addChild(spawn);
                spawn.getComponent('Block').row = a+7;
                spawn.getComponent('Block').col = i+7;
                x = a * spawn.width;
                y = i * spawn.height;
                spawn.setPosition(this.getNewBlockPosition(x, y));
                this.item_2.push(spawn);
                spawn.getComponent('Block').GamePlay = this;
            }
        }
    },
    getNewBlockPosition: function (randX, randY) {
        return cc.p(randX, randY);
    },
    genarateItemTable_2: function (object) {
        console.log("logggg" + JSON.stringify(object));
    },
    onClickOnTable_1: function () {
        this.table_1.on('touchend', function () {
            setTimeout(() => {
                var Block = require("Block");

                console.log('object click ' + Block.objectClick);
            }, 500);
        }, this.table_1)
    },
    onClickOnTable_2: function () {
        for (let i = 0; i < this.item_2.length; i++) {
            let newNode = this.item_2[i];
            this.item_2[i].on('touchend', function () {
                var node = new cc.Node("New Sprite");
                var sprite = node.addComponent(cc.Sprite);
                node.parent = newNode;
                var url = cc.url.raw("resources/o.png");
                var texture = cc.textureCache.addImage(url);
                sprite.spriteFrame = new cc.SpriteFrame(texture);
                console.log("1110" + JSON.stringify(node.parent.getPosition()));
                let nodeOldX = newNode.getPositionX();
                let nodeOldY = newNode.getPositionY();
                if (this.item_1[i].getComponent('Block').row == this.item_2[i].getComponent('Block').row
                    && this.item_1[i].getComponent('Block').col == this.item_2[i].getComponent('Block').col) {
                    var node2 = new cc.Node("New Sprite");
                    var sprite2 = node2.addComponent(cc.Sprite);
                    node2.parent = this.item_2[i];
                    var url2 = cc.url.raw("resources/o.png");
                    var texture2 = cc.textureCache.addImage(url2);
                    sprite2.spriteFrame = new cc.SpriteFrame(texture2);
                }
            }, this.item_2[i]);


        }
    },
    test:function(i){
    console.log("i"+i);
    },
    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        GameScreen.instance = this;
        this.spawnNewTable_1();
        this.spawnNewTable_2();
    },

    start() {

    },

     update:function (dt) {
        
             //console.log("1233333");
            if(this.item_1[0].getComponent('Block').m == 5){
                console.log("1233333");
            }
         
     },
});
module.exports = GameScreen;