
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Game.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '1b0826Svt1BVpNtEcaubUBh', 'Game');
// scripts/Game.js

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
    // this property quotes the PreFab resource of stars
    starPrefab: {
      "default": null,
      type: cc.Prefab
    },
    // the random scale of disappearing time for stars
    maxStarDuration: 0,
    minStarDuration: 0,
    // ground node for confirming the height of the generated star's position
    ground: {
      "default": null,
      type: cc.Node
    },
    // player node for obtaining the jump height of the main character and controlling the movement switch of the main character
    player: {
      "default": null,
      type: cc.Node
    },
    scoreDisplay: {
      "default": null,
      type: cc.Label
    },
    scoreAudio: {
      "default": null,
      type: cc.AudioClip
    }
  },
  // LIFE-CYCLE CALLBACKS:
  onLoad: function onLoad() {
    // Obtain the anchor point of ground level on the y-axis
    this.groundY = this.ground.y + this.ground.height / 2; // this.ground.top may also work
    // init timer

    this.timer = 0;
    this.starDuration = 0; // generate a new star

    this.spawnNewStar(); // init scoring

    this.score = 0;
  },
  spawnNewStar: function spawnNewStar() {
    // generate a new node in the scene with a preset template
    var newStar = cc.instantiate(this.starPrefab); // put the newly added node under the Canvas node

    this.node.addChild(newStar); // set up a random position for the star

    newStar.setPosition(this.getNewStarPosition()); // Staging a reference of Game object on a star component

    newStar.getComponent('Star').game = this;
    this.starDuration = this.minStarDuration + Math.random() * (this.maxStarDuration - this.minStarDuration);
    this.timer = 0;
  },
  getNewStarPosition: function getNewStarPosition() {
    var randX = 0; // According to the position of the ground level and the main characters' jump height, randomly obtain an anchor point

    var randY = this.groundY + Math.random() * this.player.getComponent('Player').jumpHeight + 50; // according to the width of the screen, randomly obtain an anchor point of the star on the x axis

    var maxX = this.node.width / 2;
    randX = (Math.random() - 0.5) * 2 * maxX; // return to the anchor point of the star

    return cc.v2(randX, randY);
  },
  update: function update(dt) {
    // update timer for each frame, when a new star is not generated after exceeding duration
    // invoke the logic of game failure
    if (this.timer > this.starDuration) {
      this.gameOver();
      return;
    }

    this.timer += dt; // Time ticks here
  },
  gainScore: function gainScore() {
    this.score += 1; // update the words of the scoreDisplay Label

    this.scoreDisplay.string = 'Score: ' + this.score; // play the scoring sound effect

    cc.audioEngine.playEffect(this.scoreAudio, false);
  },
  gameOver: function gameOver() {
    this.player.stopAllActions(); // stop the jumping action of the player node

    cc.director.loadScene('game'); // restart
  } // update (dt) {},

});

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcR2FtZS5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsInN0YXJQcmVmYWIiLCJ0eXBlIiwiUHJlZmFiIiwibWF4U3RhckR1cmF0aW9uIiwibWluU3RhckR1cmF0aW9uIiwiZ3JvdW5kIiwiTm9kZSIsInBsYXllciIsInNjb3JlRGlzcGxheSIsIkxhYmVsIiwic2NvcmVBdWRpbyIsIkF1ZGlvQ2xpcCIsIm9uTG9hZCIsImdyb3VuZFkiLCJ5IiwiaGVpZ2h0IiwidGltZXIiLCJzdGFyRHVyYXRpb24iLCJzcGF3bk5ld1N0YXIiLCJzY29yZSIsIm5ld1N0YXIiLCJpbnN0YW50aWF0ZSIsIm5vZGUiLCJhZGRDaGlsZCIsInNldFBvc2l0aW9uIiwiZ2V0TmV3U3RhclBvc2l0aW9uIiwiZ2V0Q29tcG9uZW50IiwiZ2FtZSIsIk1hdGgiLCJyYW5kb20iLCJyYW5kWCIsInJhbmRZIiwianVtcEhlaWdodCIsIm1heFgiLCJ3aWR0aCIsInYyIiwidXBkYXRlIiwiZHQiLCJnYW1lT3ZlciIsImdhaW5TY29yZSIsInN0cmluZyIsImF1ZGlvRW5naW5lIiwicGxheUVmZmVjdCIsInN0b3BBbGxBY3Rpb25zIiwiZGlyZWN0b3IiLCJsb2FkU2NlbmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRTtBQUNSO0FBQ0FDLElBQUFBLFVBQVUsRUFBRTtBQUNSLGlCQUFTLElBREQ7QUFFUkMsTUFBQUEsSUFBSSxFQUFFTCxFQUFFLENBQUNNO0FBRkQsS0FGSjtBQU1SO0FBQ0FDLElBQUFBLGVBQWUsRUFBRSxDQVBUO0FBUVJDLElBQUFBLGVBQWUsRUFBRSxDQVJUO0FBU1I7QUFDQUMsSUFBQUEsTUFBTSxFQUFF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QUFmLENBQTBCLEtBQUtoQyxVQUEvQixFQUEyQyxLQUEzQztBQUNILEdBdkZJO0FBeUZMNEIsRUFBQUEsUUFBUSxFQUFFLG9CQUFVO0FBQ2hCLFNBQUsvQixNQUFMLENBQVlvQyxjQUFaLEdBRGdCLENBQ2M7O0FBQzlCL0MsSUFBQUEsRUFBRSxDQUFDZ0QsUUFBSCxDQUFZQyxTQUFaLENBQXNCLE1BQXRCLEVBRmdCLENBRWU7QUFDbEMsR0E1RkksQ0E4Rkw7O0FBOUZLLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIGNjLkNsYXNzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9jbGFzcy5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICAvLyB0aGlzIHByb3BlcnR5IHF1b3RlcyB0aGUgUHJlRmFiIHJlc291cmNlIG9mIHN0YXJzXHJcbiAgICAgICAgc3RhclByZWZhYjoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5QcmVmYWJcclxuICAgICAgICB9LFxyXG4gICAgICAgIC8vIHRoZSByYW5kb20gc2NhbGUgb2YgZGlzYXBwZWFyaW5nIHRpbWUgZm9yIHN0YXJzXHJcbiAgICAgICAgbWF4U3RhckR1cmF0aW9uOiAwLFxyXG4gICAgICAgIG1pblN0YXJEdXJhdGlvbjogMCxcclxuICAgICAgICAvLyBncm91bmQgbm9kZSBmb3IgY29uZmlybWluZyB0aGUgaGVpZ2h0IG9mIHRoZSBnZW5lcmF0ZWQgc3RhcidzIHBvc2l0aW9uXHJcbiAgICAgICAgZ3JvdW5kOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGVcclxuICAgICAgICB9LFxyXG4gICAgICAgIC8vIHBsYXllciBub2RlIGZvciBvYnRhaW5pbmcgdGhlIGp1bXAgaGVpZ2h0IG9mIHRoZSBtYWluIGNoYXJhY3RlciBhbmQgY29udHJvbGxpbmcgdGhlIG1vdmVtZW50IHN3aXRjaCBvZiB0aGUgbWFpbiBjaGFyYWN0ZXJcclxuICAgICAgICBwbGF5ZXI6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2NvcmVEaXNwbGF5IDoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5MYWJlbFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2NvcmVBdWRpbzoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5BdWRpb0NsaXBcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICBvbkxvYWQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAvLyBPYnRhaW4gdGhlIGFuY2hvciBwb2ludCBvZiBncm91bmQgbGV2ZWwgb24gdGhlIHktYXhpc1xyXG4gICAgICAgIHRoaXMuZ3JvdW5kWSA9IHRoaXMuZ3JvdW5kLnkgKyB0aGlzLmdyb3VuZC5oZWlnaHQvMjsgLy8gdGhpcy5ncm91bmQudG9wIG1heSBhbHNvIHdvcmtcclxuICAgICAgICAvLyBpbml0IHRpbWVyXHJcbiAgICAgICAgdGhpcy50aW1lciA9IDA7XHJcbiAgICAgICAgdGhpcy5zdGFyRHVyYXRpb24gPSAwO1xyXG4gICAgICAgIC8vIGdlbmVyYXRlIGEgbmV3IHN0YXJcclxuICAgICAgICB0aGlzLnNwYXduTmV3U3RhcigpO1xyXG4gICAgICAgIC8vIGluaXQgc2NvcmluZ1xyXG4gICAgICAgIHRoaXMuc2NvcmUgPSAwO1xyXG4gICAgfSxcclxuXHJcbiAgICBzcGF3bk5ld1N0YXI6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIC8vIGdlbmVyYXRlIGEgbmV3IG5vZGUgaW4gdGhlIHNjZW5lIHdpdGggYSBwcmVzZXQgdGVtcGxhdGVcclxuICAgICAgICB2YXIgbmV3U3RhciA9IGNjLmluc3RhbnRpYXRlKHRoaXMuc3RhclByZWZhYik7XHJcbiAgICAgICAgLy8gcHV0IHRoZSBuZXdseSBhZGRlZCBub2RlIHVuZGVyIHRoZSBDYW52YXMgbm9kZVxyXG4gICAgICAgIHRoaXMubm9kZS5hZGRDaGlsZChuZXdTdGFyKTtcclxuICAgICAgICAvLyBzZXQgdXAgYSByYW5kb20gcG9zaXRpb24gZm9yIHRoZSBzdGFyXHJcbiAgICAgICAgbmV3U3Rhci5zZXRQb3NpdGlvbih0aGlzLmdldE5ld1N0YXJQb3NpdGlvbigpKTtcclxuICAgICAgICAvLyBTdGFnaW5nIGEgcmVmZXJlbmNlIG9mIEdhbWUgb2JqZWN0IG9uIGEgc3RhciBjb21wb25lbnRcclxuICAgICAgICBuZXdTdGFyLmdldENvbXBvbmVudCgnU3RhcicpLmdhbWUgPSB0aGlzO1xyXG5cclxuICAgICAgICB0aGlzLnN0YXJEdXJhdGlvbiA9IHRoaXMubWluU3RhckR1cmF0aW9uICsgTWF0aC5yYW5kb20oKSAqICh0aGlzLm1heFN0YXJEdXJhdGlvbiAtIHRoaXMubWluU3RhckR1cmF0aW9uKTtcclxuICAgICAgICB0aGlzLnRpbWVyID0gMDtcclxuICAgIH0sXHJcblxyXG4gICAgZ2V0TmV3U3RhclBvc2l0aW9uOiBmdW5jdGlvbigpIHtcclxuICAgICAgICB2YXIgcmFuZFggPSAwO1xyXG4gICAgICAgIC8vIEFjY29yZGluZyB0byB0aGUgcG9zaXRpb24gb2YgdGhlIGdyb3VuZCBsZXZlbCBhbmQgdGhlIG1haW4gY2hhcmFjdGVycycganVtcCBoZWlnaHQsIHJhbmRvbWx5IG9idGFpbiBhbiBhbmNob3IgcG9pbnRcclxuICAgICAgICB2YXIgcmFuZFkgPSB0aGlzLmdyb3VuZFkgKyBNYXRoLnJhbmRvbSgpICogdGhpcy5wbGF5ZXIuZ2V0Q29tcG9uZW50KCdQbGF5ZXInKS5qdW1wSGVpZ2h0ICsgNTA7XHJcbiAgICAgICAgLy8gYWNjb3JkaW5nIHRvIHRoZSB3aWR0aCBvZiB0aGUgc2NyZWVuLCByYW5kb21seSBvYnRhaW4gYW4gYW5jaG9yIHBvaW50IG9mIHRoZSBzdGFyIG9uIHRoZSB4IGF4aXNcclxuICAgICAgICB2YXIgbWF4WCA9IHRoaXMubm9kZS53aWR0aC8yO1xyXG4gICAgICAgIHJhbmRYID0gKE1hdGgucmFuZG9tKCkgLSAwLjUpICogMiAqIG1heFg7XHJcbiAgICAgICAgLy8gcmV0dXJuIHRvIHRoZSBhbmNob3IgcG9pbnQgb2YgdGhlIHN0YXJcclxuICAgICAgICByZXR1cm4gY2MudjIocmFuZFgsIHJhbmRZKTtcclxuICAgIH0sXHJcblxyXG4gICAgdXBkYXRlOiBmdW5jdGlvbiAoZHQpIHtcclxuICAgICAgICAvLyB1cGRhdGUgdGltZXIgZm9yIGVhY2ggZnJhbWUsIHdoZW4gYSBuZXcgc3RhciBpcyBub3QgZ2VuZXJhdGVkIGFmdGVyIGV4Y2VlZGluZyBkdXJhdGlvblxyXG4gICAgICAgIC8vIGludm9rZSB0aGUgbG9naWMgb2YgZ2FtZSBmYWlsdXJlXHJcbiAgICAgICAgaWYgKHRoaXMudGltZXIgPiB0aGlzLnN0YXJEdXJhdGlvbikge1xyXG4gICAgICAgICAgICB0aGlzLmdhbWVPdmVyKCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy50aW1lciArPSBkdDsgLy8gVGltZSB0aWNrcyBoZXJlXHJcbiAgICB9LCBcclxuXHJcbiAgICBnYWluU2NvcmU6IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgdGhpcy5zY29yZSArPSAxO1xyXG4gICAgICAgIC8vIHVwZGF0ZSB0aGUgd29yZHMgb2YgdGhlIHNjb3JlRGlzcGxheSBMYWJlbFxyXG4gICAgICAgIHRoaXMuc2NvcmVEaXNwbGF5LnN0cmluZyA9ICdTY29yZTogJyArIHRoaXMuc2NvcmU7XHJcbiAgICAgICAgLy8gcGxheSB0aGUgc2NvcmluZyBzb3VuZCBlZmZlY3RcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMuc2NvcmVBdWRpbywgZmFsc2UpO1xyXG4gICAgfSxcclxuXHJcbiAgICBnYW1lT3ZlcjogZnVuY3Rpb24oKXtcclxuICAgICAgICB0aGlzLnBsYXllci5zdG9wQWxsQWN0aW9ucygpOyAvLyBzdG9wIHRoZSBqdW1waW5nIGFjdGlvbiBvZiB0aGUgcGxheWVyIG5vZGVcclxuICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoJ2dhbWUnKTsgLy8gcmVzdGFydFxyXG4gICAgfVxyXG5cclxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9LFxyXG59KTtcclxuIl19