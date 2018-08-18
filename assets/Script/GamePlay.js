var GamePlay =  cc.Class({
    extends: cc.Component,
    statics: {
        instance: GamePlay
    },
    properties: {
        blockPrefab: {
            default: null,
            type: cc.Prefab
        },
        blockTrue: {
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
        truePosition: {
            default: [],
            serializable: false
        },
        trueNode: {
            default: [],
            serializable: false
        },
        lstClickFalse : {
            default: [],
            serializable: false
        },
        lbCount: cc.Label,

        countActive: 5,
        countTrue: 2,
        popupGameOver: cc.Node,
        popupNext: cc.Node,


    },
    getNewBlockPosition: function (randX, randY) {
        return cc.p(randX, randY);
    },
    // LIFE-CYCLE CALLBACKS:
    onClickTable: function () {
        this.node.on(cc.Node.EventType.TOUCH_START, function (event) {
            let rectTable1 = this.table_1.getBoundingBoxToWorld();
            let rectTable2 = this.table_2.getBoundingBoxToWorld();
            if (cc.rectContainsPoint(rectTable1, event.getLocation())) {
                console.log('event position: ' + JSON.stringify(event.getLocation()))
                if (this.countActive > 0 && this.countTrue > 0) {
                    this.checkTrueClickTabel_1(event.getLocation());
                }

            }
            if (cc.rectContainsPoint(rectTable2, event.getLocation())) {
                // console.log('event position: ' + JSON.stringify(event.getLocation()))
                let locationEvent = event.getLocation();
                locationEvent.y = locationEvent.y + 320
                // console.log('locationEvent: ' + JSON.stringify(locationEvent));
                if (this.countActive > 0 && this.countTrue > 0) {
                    this.checkTrueClickTable_2(locationEvent);
                }
            }
        }, this);
    },
    initTruePosition(lst) {
        for (let i = 0; i < lst.length; i++) {
            let star = cc.instantiate(this.blockPrefab);
            star.setPosition(cc.v2(lst[i].x - 179.91, lst[i].y - 320));
            this.node.addChild(star);

            let star2 = cc.instantiate(this.blockPrefab);
            star2.setPosition(cc.v2(lst[i].x - 179.91, lst[i].y - 640));
            this.node.addChild(star2);
            this.lstClickFalse.push(star);
            
            this.lstClickFalse.push(star2);
        }
        this.labelCountDisplay();
        this.truePosition = lst;

        this.popupNext.active = false;
        this.popupGameOver.active = false;
    },
    calculateVertor(p1, p2) {
        return parseInt(Math.sqrt(Math.pow((p1.x - p2.x), 2) + Math.pow((p1.y - p2.y), 2)));
    },
    checkTrueClickTabel_1(p) {
        for (let i = 0; i < this.truePosition.length; i++) {
            if (this.calculateVertor(p, this.truePosition[i]) < 15) {
                let star = cc.instantiate(this.blockTrue);
                star.setPosition(cc.v2(this.truePosition[i].x - 179.91, this.truePosition[i].y - 320));
                this.node.addChild(star);
                this.trueNode.push(star);
                let star2 = cc.instantiate(this.blockTrue);
                star2.setPosition(cc.v2(this.truePosition[i].x - 179.91, this.truePosition[i].y - 640));
                this.node.addChild(star2);
                this.trueNode.push(star2);

                this.truePosition.splice(i, 1);
                // this.countTrue = this.truePosition.length;
                this.countTrue--;
                break;
            } else {
                let star = cc.instantiate(this.blockPrefab);
                star.setPosition(cc.v2(p.x - 179.91, p.y - 320));
                this.node.addChild(star);
                // this.removeNode(start);
                this.lstClickFalse.push(star);
                let star2 = cc.instantiate(this.blockPrefab);
                star2.setPosition(cc.v2(p.x - 179.91, p.y - 640));
                this.node.addChild(star2);
                this.lstClickFalse.push(star2);
                // this.removeNode(start2);

            }
        }
        this.countActive--;
        this.checkStatusGame();
        this.labelCountDisplay();
    },
    checkTrueClickTable_2(p) {
        for (let i = 0; i < this.truePosition.length; i++) {
            if (this.calculateVertor(p, this.truePosition[i]) < 15) {
                let star = cc.instantiate(this.blockTrue);
                star.setPosition(cc.v2(this.truePosition[i].x - 179.91, this.truePosition[i].y - 320));
                this.node.addChild(star);
                this.trueNode.push(star);
                let star2 = cc.instantiate(this.blockTrue);
                star2.setPosition(cc.v2(this.truePosition[i].x - 179.91, this.truePosition[i].y - 640));
                this.node.addChild(star2);
                this.trueNode.push(star2);
                this.truePosition.splice(i, 1);
                // this.countTrue = this.truePosition.length;
                this.countTrue--;
                break;
            } else {
                let star = cc.instantiate(this.blockPrefab);
                star.setPosition(cc.v2(p.x - 179.91, p.y - 640));
                this.node.addChild(star);
                // this.removeNode(start1);

                let star2 = cc.instantiate(this.blockPrefab);
                star2.setPosition(cc.v2(p.x - 179.91, p.y - 320));
                this.node.addChild(star2);
                // this.removeNode(start2);
                this.lstClickFalse.push(star);
                this.lstClickFalse.push(star2);
            }
        }
        this.countActive--;
        this.checkStatusGame();
        this.labelCountDisplay();
    },

    removeNode(star){
        setTimeout(
            function () {
                star.destroy();
            }, 3000);

    },
    labelCountDisplay() {
        this.lbCount.string = "Score: " + this.countTrue + '/' + this.countActive;

        console.log('lbCount: ' + this.countTrue + '/' + this.countActive)
    },
    btnClickNewGame() {
        cc.director.loadScene("GamePlay");
    },
    btnClickNextGame() {
        // cc.director.loadScene("GamePlay");
        this.initNewGame();
        this.popupNext.active = false;
        this.trueNode.forEach(element => {
            element.destroy();
        });
        this.lstClickFalse.forEach(element => {
            element.destroy();
        });
    },
    initNewGame() {
        var image1 = cc.url.raw("resources/new1.png");
        var texture1 = cc.textureCache.addImage(image1);
        this.table_1.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(texture1);

        var image2 = cc.url.raw("resources/new2.png");
        var texture2 = cc.textureCache.addImage(image2);
        this.table_2.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(texture2);

        this.countActive = 5;
        this.countTrue = 2;
        this.initTruePosition(Global.lstTruePositon2);
        this.labelCountDisplay();
    },

    checkStatusGame() {
        if (this.countActive == 0) {
            if (this.countTrue == 0) {
                this.popupNext.active = true;
            } else {
                this.popupGameOver.active = true;
                this.table_1.disable = true;
            }
        }
        if (this.countTrue == 0) {
            this.popupNext.active = true;
        }
    },
    onLoad() {
        GamePlay.instance = this;
        this.initTruePosition(Global.lstTruePositon);
        this.onClickTable();

    },

    start() {

    },

    // update (dt) {},
});
module.exports = GamePlay;