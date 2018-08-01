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

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        this.spawnNewTable_1();
        this.spawnNewTable_2();


        // this.addTouchListernerTable();
    },

    start() {

    },

    // update (dt) {},
});
