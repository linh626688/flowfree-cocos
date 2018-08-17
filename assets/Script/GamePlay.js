cc.Class({
    extends: cc.Component,

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
        lbCount:cc.Label,
        
        countActive :5,
        countTrue : 3
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
                this.checkTrueClickTabel_1(event.getLocation());
                // let star = cc.instantiate(this.blockPrefab);
                // console.log('event position: ' + JSON.stringify(event.getLocation()));
                // star.setPosition(cc.v2(event.getLocation().x - 179.91, event.getLocation().y - 320));
                // this.node.addChild(star);

                // let star2 = cc.instantiate(this.blockPrefab);
                // star2.setPosition(cc.v2(event.getLocation().x - 179.91, event.getLocation().y - 640));
                // this.node.addChild(star2);
            }
            if (cc.rectContainsPoint(rectTable2, event.getLocation())) {
                console.log('event position: ' + JSON.stringify(event.getLocation()))
                let locationEvent = event.getLocation();
                locationEvent.y = locationEvent.y + 320 
                console.log('locationEvent: ' + JSON.stringify(locationEvent));
                this.checkTrueClickTable_2(locationEvent);

                // let star = cc.instantiate(this.blockPrefab);
                // star.setPosition(cc.v2(event.getLocation().x - 179.91, event.getLocation().y - 320));
                // this.node.addChild(star);
                // console.log('event position: ' + JSON.stringify(event.getLocation()));

                // let star2 = cc.instantiate(this.blockPrefab);
                // star2.setPosition(cc.v2(event.getLocation().x - 179.91, event.getLocation().y));
                // this.node.addChild(star2);
            }
        }, this);
    },
    initTruePosition() {
        let p1 = {
            x: 181,
            y: 44
        };
        let p2 = {
            x: 127.5,
            y: 567
        };
        let p3 = {
            x: 231,
            y: 551
        }
        // console.log("p1 " + this.calculateVertor(p1, p2))



        this.truePosition.push(p1);
        this.truePosition.push(p2);
        this.truePosition.push(p3);

        for (let i = 0; i < this.truePosition.length; i++) {
            let star = cc.instantiate(this.blockPrefab);
            star.setPosition(cc.v2(this.truePosition[i].x - 179.91, this.truePosition[i].y - 320));
            this.node.addChild(star);

            let star2 = cc.instantiate(this.blockPrefab);
            star2.setPosition(cc.v2(this.truePosition[i].x - 179.91, this.truePosition[i].y - 640));
            this.node.addChild(star2);
        }
    },
    calculateVertor(p1, p2) {
        return parseInt(Math.sqrt(Math.pow((p1.x -p2.x),2) +Math.pow((p1.y -p2.y),2) ));
    },
    checkTrueClickTabel_1(p){
        for(let i = 0 ; i < this.truePosition.length;i ++){
            if(this.calculateVertor(p, this.truePosition[i]) < 15 ){
                let star = cc.instantiate(this.blockTrue);
                star.setPosition(cc.v2(this.truePosition[i].x - 179.91, this.truePosition[i].y - 320));
                this.node.addChild(star);

                let star2 = cc.instantiate(this.blockTrue);
                star2.setPosition(cc.v2(this.truePosition[i].x - 179.91, this.truePosition[i].y - 640));
                this.node.addChild(star2);

                this.truePosition.splice(i, 1);
                break;
            }else{
                let star = cc.instantiate(this.blockPrefab);
                star.setPosition(cc.v2(p.x - 179.91, p.y - 320));
                this.node.addChild(star);

                let star2 = cc.instantiate(this.blockPrefab);
                star2.setPosition(cc.v2(p.x - 179.91, p.y - 640));
                this.node.addChild(star2);
            
            }
        }
    },
    checkTrueClickTable_2(p){
        for(let i = 0 ; i < this.truePosition.length;i ++){
            if(this.calculateVertor(p, this.truePosition[i]) < 15 ){
                let star = cc.instantiate(this.blockTrue);
                star.setPosition(cc.v2(this.truePosition[i].x - 179.91, this.truePosition[i].y - 320));
                this.node.addChild(star);

                let star2 = cc.instantiate(this.blockTrue);
                star2.setPosition(cc.v2(this.truePosition[i].x - 179.91, this.truePosition[i].y- 640));
                this.node.addChild(star2);

                this.truePosition.splice(i, 1);
                break;
            }else{
                let star = cc.instantiate(this.blockPrefab);
                star.setPosition(cc.v2(p.x - 179.91, p.y - 640));
                this.node.addChild(star);

                let star2 = cc.instantiate(this.blockPrefab);
                star2.setPosition(cc.v2(p.x - 179.91, p.y - 320));
                this.node.addChild(star2);
            
            }
        }
    },
    // {x: 231, y: 551}
    onLoad() {
        this.initTruePosition();
        this.onClickTable();

    },


    start() {

    },

    // update (dt) {},
});