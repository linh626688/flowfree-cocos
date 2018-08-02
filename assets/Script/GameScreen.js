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


    },
    objectClick: "",

    spawnNewTable_1: function () {

        var x = 0;
        var y = 0;
        for (var i = -7; i < 8; i++) {
            for (var a = -7; a < 8; a++) {

                var spawn = cc.instantiate(this.blockPrefab);
                this.table_1.addChild(spawn);
                spawn.getComponent('Block').row = a;
                spawn.getComponent('Block').col = i;
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
                spawn.getComponent('Block').row = a;
                spawn.getComponent('Block').col = i;
                x = a * spawn.width;
                y = i * spawn.height;
                spawn.setPosition(this.getNewBlockPosition(x, y));
                this.item_2.push(spawn);
                spawn.getComponent('Block').GamePlay = this;
            }
        }
        console.log(JSON.stringify(this.item_2[2].getPosition()));
        console.log(JSON.stringify(this.item_2[3].getPosition()));
        console.log(JSON.stringify(this.item_2[17].getPosition()));
    },
    getNewBlockPosition: function (randX, randY) {
        return cc.p(randX, randY);
    },
    genarateItemTable_2: function( object ){
        console.log("logggg" + JSON.stringify(object));
    },
    onClickOnTable_1: function () {
        for (let i = 0; i < this.item_1.length; i++) {
            let newNode = this.item_1[i];
            this.item_1[i].on('touchend', function () {
                var node = new cc.Node("New Sprite");
                var sprite = node.addComponent(cc.Sprite);
                node.parent = newNode;
                var url = cc.url.raw("images/o.png");
                var texture = cc.textureCache.addImage(url);
                sprite.spriteFrame = new cc.SpriteFrame(texture);
                console.log(JSON.stringify(node.parent.getPosition()));
                // let node2 = new cc.Node("Node Clone");
                let nodeOldX = newNode.getPositionX();
                let nodeOldY = newNode.getPositionY();
                this.objectClick = { nodeOldX, nodeOldY };
                console.log("logggg" + JSON.stringify(this.objectClick));
                // for (let j = 0; i < this.item_2.length; j++) {
                //     if (this.item_2[j].getPositionX == nodeOldX && this.item_2[j].getPositiony == nodeOldY) {
                //         let newNode2 = this.item_2[j];
                //         let node2 = new cc.Node("Node Clone");
                //         let sprite2 = node2.addComponent(cc.Sprite);
                //         node2.parent = newNode2;
                //         sprite2.spriteFrame = new cc.SpriteFrame(texture);
                //         console.log(JSON.stringify(node2.parent.getPosition()));
                //     }
                // }

            }, this.item_1[i]);
        }
    },

  
    onClickToOrtherTable() {

    },
    onClickOnTable_2: function () {
        for (let i = 0; i < this.item_2.length; i++) {
            let newNode = this.item_2[i];
            this.item_2[i].on('touchend', function () {
                var node = new cc.Node("New Sprite");
                var sprite = node.addComponent(cc.Sprite);
                node.parent = newNode;
                var url = cc.url.raw("images/o.png");
                var texture = cc.textureCache.addImage(url);
                sprite.spriteFrame = new cc.SpriteFrame(texture);
                console.log(JSON.stringify(node.parent.getPosition()));
            }, this.item_2[i]);

        }
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        this.spawnNewTable_1();
        this.spawnNewTable_2();
        this.onClickOnTable_1();
        this.onClickOnTable_2();
    },

    start() {

    },

    // update (dt) {},
});
