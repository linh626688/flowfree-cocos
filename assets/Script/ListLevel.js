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
        // foo: {
        //     // ATTRIBUTES:
        //     default: null,        // The default value will be used only when the component attaching
        //                           // to a node for the first time
        //     type: cc.SpriteFrame, // optional, default is typeof default
        //     serializable: true,   // optional, default is true
        // },
        // bar: {
        //     get () {
        //         return this._bar;
        //     },
        //     set (value) {
        //         this._bar = value;
        //     }
        // },
    },

    onClickItemLevel(event) {
        // console.log('event click '+ event.getData());
        var GamePlay = require("GamePlay");
        let levelChoose = event.currentTarget.name;
        levelChoose = levelChoose.substring(2, levelChoose.length);
        switch (parseInt(levelChoose)) {
            case 1:
                console.log('11111');
                GamePlay.initGameFromLevel(levelChoose);
                break;
            case 2:
                console.log('2222');
                GamePlay.initGameFromLevel(levelChoose);
                break;
            case 3:
                console.log('3333');
                break;
            case 4:
                console.log('4444');
                break;
            case 5:
                console.log('55555');
                break;
            default:
                console.log('default');
                break;


        }
        // console.log('name ' + parseInt(levelChoose))
    },
    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        var GamePlay = require("GamePlay");
    },

    start() {

    },

    // update (dt) {},
});