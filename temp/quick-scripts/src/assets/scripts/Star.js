"use strict";
cc._RF.push(module, '14b05Em+B9FrbKxrudBSerk', 'Star');
// scripts/Star.js

"use strict";

// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
cc.Class({
  "extends": cc.Component,
  properties: {
    // When the distance between the star and main character is less than this value, collection of the point will be ...
    pickRadius: 0
  },
  onLoad: function onLoad() {
    this.game = this.node.parent.getComponent('Game');
  },
  getPlayerDistance: function getPlayerDistance() {
    // judge the distance according to the position of the player node
    var playerPos = this.game.player.getPosition(); // calculate the distance between two nodes according to their positions

    var dist = this.node.position.sub(playerPos).mag();
    return dist;
  },
  onPicked: function onPicked() {
    // When the stars are being collected, invoke the interface in the Game script to generate a new star
    this.game.spawnNewStar(); // invoke the scoring method of the Game script

    this.game.gainScore(); // then destory the current star's node

    this.node.destroy();
  },
  update: function update(dt) {
    // judge if the distance between the star and main character is less than the collecting distance for each frame
    if (this.getPlayerDistance() < this.pickRadius) {
      // invode collecting behavior
      this.onPicked();
      return;
    } // Update the transparency of the star according to the timer in the Game script


    var opacityRatio = 1 - this.game.timer / this.game.starDuration;
    var minOpacity = 50;
    this.node.opacity = minOpacity + Math.floor(opacityRatio * (255 - minOpacity));
  }
});

cc._RF.pop();