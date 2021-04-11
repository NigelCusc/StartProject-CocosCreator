
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Player.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '6f520s7xq9EbIV0Rc2bHnWR', 'Player');
// scripts/Player.js

"use strict";

// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
// Class that allows us to add properties to nodes
cc.Class({
  "extends": cc.Component,
  properties: {
    // main character's jump height
    jumpHeight: 0,
    // main character's jump duration
    jumpDuration: 0,
    // maximal movement speed
    maxModelSpeed: 0,
    // acceleration
    accel: 0,
    jumpAudio: {
      "default": null,
      type: cc.AudioClip
    }
  },
  setJumpAction: function setJumpAction() {
    // jump up
    var jumpUp = cc.moveBy(this.jumpDuration, cc.v2(0, this.jumpHeight)).easing(cc.easeCubicActionOut()); // jump down

    var jumpDown = cc.moveBy(this.jumpDuration, cc.v2(0, -this.jumpHeight)).easing(cc.easeCubicActionIn()); // add a callback function to invoke other defined methods after the action is finished

    var callback = cc.callFunc(this.playJumpSound, this); // repeat

    return cc.repeatForever(cc.sequence(jumpUp, jumpDown, callback));
  },
  playJumpSound: function playJumpSound() {
    if (this.jumpAudio != null) {
      // invoke sound engine to play the sound
      cc.audioEngine.playEffect(this.jumpAudio, false);
    }
  },
  onKeyDown: function onKeyDown(event) {
    // set a flag when key pressed
    switch (event.keyCode) {
      case cc.macro.KEY.a:
        this.accLeft = true;
        break;

      case cc.macro.KEY.d:
        this.accRight = true;
        break;
    }
  },
  onKeyUp: function onKeyUp(event) {
    // unset a flag when key released
    switch (event.keyCode) {
      case cc.macro.KEY.a:
        this.accLeft = false;
        break;

      case cc.macro.KEY.d:
        this.accRight = false;
        break;
    }
  },
  onLoad: function onLoad() {
    //initialize jump action
    this.jumpAction = this.setJumpAction();
    this.node.runAction(this.jumpAction); // Acceleration direction switch

    this.accLeft = false;
    this.accRight = false; // The main character's current horizontal velocity

    this.xSpeed = 0; // Initialise the keyboard input listening

    cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
    cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
  },
  onDestory: function onDestory() {
    // Cancel keyboard input monitoring
    cc.systemEvent.off(cc.SystemEvent.EeventType.KEY_DOWN, this.onKeyDown, this);
    cc.systemEvent.off(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
  },

  /* start () {
    }, */
  update: function update(dt) {
    // update speed of each frame according to the current acceleration direction
    if (this.accLeft) {
      this.xSpeed -= this.accel * dt;
    } else if (this.accRight) {
      this.xSpeed += this.accel * dt;
    } // restrict the movement speed of the main character to the maximum movement speed


    if (Math.abs(this.xSpeed) > this.maxMoveSpeed) {
      // if speed reach limit, use max speed with current direction
      this.xSpeed = this.maxMoveSpeed * this.xSpeed / Math.abs(this.xSpeed);
    } // update the position of the main character according to the current speed


    this.node.x += this.xSpeed * dt;
  }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcUGxheWVyLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwianVtcEhlaWdodCIsImp1bXBEdXJhdGlvbiIsIm1heE1vZGVsU3BlZWQiLCJhY2NlbCIsImp1bXBBdWRpbyIsInR5cGUiLCJBdWRpb0NsaXAiLCJzZXRKdW1wQWN0aW9uIiwianVtcFVwIiwibW92ZUJ5IiwidjIiLCJlYXNpbmciLCJlYXNlQ3ViaWNBY3Rpb25PdXQiLCJqdW1wRG93biIsImVhc2VDdWJpY0FjdGlvbkluIiwiY2FsbGJhY2siLCJjYWxsRnVuYyIsInBsYXlKdW1wU291bmQiLCJyZXBlYXRGb3JldmVyIiwic2VxdWVuY2UiLCJhdWRpb0VuZ2luZSIsInBsYXlFZmZlY3QiLCJvbktleURvd24iLCJldmVudCIsImtleUNvZGUiLCJtYWNybyIsIktFWSIsImEiLCJhY2NMZWZ0IiwiZCIsImFjY1JpZ2h0Iiwib25LZXlVcCIsIm9uTG9hZCIsImp1bXBBY3Rpb24iLCJub2RlIiwicnVuQWN0aW9uIiwieFNwZWVkIiwic3lzdGVtRXZlbnQiLCJvbiIsIlN5c3RlbUV2ZW50IiwiRXZlbnRUeXBlIiwiS0VZX0RPV04iLCJLRVlfVVAiLCJvbkRlc3RvcnkiLCJvZmYiLCJFZXZlbnRUeXBlIiwidXBkYXRlIiwiZHQiLCJNYXRoIiwiYWJzIiwibWF4TW92ZVNwZWVkIiwieCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUU7QUFDUjtBQUNBQyxJQUFBQSxVQUFVLEVBQUUsQ0FGSjtBQUdSO0FBQ0FDLElBQUFBLFlBQVksRUFBRSxDQUpOO0FBS1I7QUFDQUMsSUFBQUEsYUFBYSxFQUFFLENBTlA7QUFPUjtBQUNBQyxJ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dHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9jbGFzcy5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuLy8gQ2xhc3MgdGhhdCBhbGxvd3MgdXMgdG8gYWRkIHByb3BlcnRpZXMgdG8gbm9kZXNcclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICAvLyBtYWluIGNoYXJhY3RlcidzIGp1bXAgaGVpZ2h0XHJcbiAgICAgICAganVtcEhlaWdodDogMCxcclxuICAgICAgICAvLyBtYWluIGNoYXJhY3RlcidzIGp1bXAgZHVyYXRpb25cclxuICAgICAgICBqdW1wRHVyYXRpb246IDAsXHJcbiAgICAgICAgLy8gbWF4aW1hbCBtb3ZlbWVudCBzcGVlZFxyXG4gICAgICAgIG1heE1vZGVsU3BlZWQ6IDAsXHJcbiAgICAgICAgLy8gYWNjZWxlcmF0aW9uXHJcbiAgICAgICAgYWNjZWw6IDAsXHJcbiAgICAgICAganVtcEF1ZGlvOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLkF1ZGlvQ2xpcFxyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG5cclxuICAgIHNldEp1bXBBY3Rpb246IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIC8vIGp1bXAgdXBcclxuICAgICAgICB2YXIganVtcFVwID0gY2MubW92ZUJ5KHRoaXMuanVtcER1cmF0aW9uLCBjYy52MigwLCB0aGlzLmp1bXBIZWlnaHQpKS5lYXNpbmcoY2MuZWFzZUN1YmljQWN0aW9uT3V0KCkpO1xyXG4gICAgICAgIC8vIGp1bXAgZG93blxyXG4gICAgICAgIHZhciBqdW1wRG93biA9IGNjLm1vdmVCeSh0aGlzLmp1bXBEdXJhdGlvbiwgY2MudjIoMCwgLXRoaXMuanVtcEhlaWdodCkpLmVhc2luZyhjYy5lYXNlQ3ViaWNBY3Rpb25JbigpKTtcclxuICAgICAgICAvLyBhZGQgYSBjYWxsYmFjayBmdW5jdGlvbiB0byBpbnZva2Ugb3RoZXIgZGVmaW5lZCBtZXRob2RzIGFmdGVyIHRoZSBhY3Rpb24gaXMgZmluaXNoZWRcclxuICAgICAgICB2YXIgY2FsbGJhY2sgPSBjYy5jYWxsRnVuYyh0aGlzLnBsYXlKdW1wU291bmQsIHRoaXMpO1xyXG4gICAgICAgIC8vIHJlcGVhdFxyXG4gICAgICAgIHJldHVybiBjYy5yZXBlYXRGb3JldmVyKGNjLnNlcXVlbmNlKGp1bXBVcCwganVtcERvd24sIGNhbGxiYWNrKSk7XHJcbiAgICB9LFxyXG5cclxuICAgIHBsYXlKdW1wU291bmQ6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGlmKHRoaXMuanVtcEF1ZGlvICE9IG51bGwpe1xyXG4gICAgICAgICAgICAvLyBpbnZva2Ugc291bmQgZW5naW5lIHRvIHBsYXkgdGhlIHNvdW5kXHJcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5qdW1wQXVkaW8sIGZhbHNlKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIG9uS2V5RG93biAoZXZlbnQpIHtcclxuICAgICAgICAvLyBzZXQgYSBmbGFnIHdoZW4ga2V5IHByZXNzZWRcclxuICAgICAgICBzd2l0Y2goZXZlbnQua2V5Q29kZSkge1xyXG4gICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS5hOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5hY2NMZWZ0ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS5kOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5hY2NSaWdodCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIG9uS2V5VXAgKGV2ZW50KSB7XHJcbiAgICAgICAgLy8gdW5zZXQgYSBmbGFnIHdoZW4ga2V5IHJlbGVhc2VkXHJcbiAgICAgICAgc3dpdGNoKGV2ZW50LmtleUNvZGUpIHtcclxuICAgICAgICAgICAgY2FzZSBjYy5tYWNyby5LRVkuYTpcclxuICAgICAgICAgICAgICAgIHRoaXMuYWNjTGVmdCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgY2MubWFjcm8uS0VZLmQ6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFjY1JpZ2h0ID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuXHJcbiAgICBvbkxvYWQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAvL2luaXRpYWxpemUganVtcCBhY3Rpb25cclxuICAgICAgICB0aGlzLmp1bXBBY3Rpb24gPSB0aGlzLnNldEp1bXBBY3Rpb24oKTtcclxuICAgICAgICB0aGlzLm5vZGUucnVuQWN0aW9uKHRoaXMuanVtcEFjdGlvbik7XHJcblxyXG4gICAgICAgIC8vIEFjY2VsZXJhdGlvbiBkaXJlY3Rpb24gc3dpdGNoXHJcbiAgICAgICAgdGhpcy5hY2NMZWZ0ID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5hY2NSaWdodCA9IGZhbHNlO1xyXG5cclxuICAgICAgICAvLyBUaGUgbWFpbiBjaGFyYWN0ZXIncyBjdXJyZW50IGhvcml6b250YWwgdmVsb2NpdHlcclxuICAgICAgICB0aGlzLnhTcGVlZCA9IDA7XHJcblxyXG4gICAgICAgIC8vIEluaXRpYWxpc2UgdGhlIGtleWJvYXJkIGlucHV0IGxpc3RlbmluZ1xyXG4gICAgICAgIGNjLnN5c3RlbUV2ZW50Lm9uKGNjLlN5c3RlbUV2ZW50LkV2ZW50VHlwZS5LRVlfRE9XTiwgdGhpcy5vbktleURvd24sIHRoaXMpO1xyXG4gICAgICAgIGNjLnN5c3RlbUV2ZW50Lm9uKGNjLlN5c3RlbUV2ZW50LkV2ZW50VHlwZS5LRVlfVVAsIHRoaXMub25LZXlVcCwgdGhpcyk7XHJcbiAgICB9LFxyXG4gICAgb25EZXN0b3J5ICgpe1xyXG4gICAgICAgIC8vIENhbmNlbCBrZXlib2FyZCBpbnB1dCBtb25pdG9yaW5nXHJcbiAgICAgICAgY2Muc3lzdGVtRXZlbnQub2ZmKGNjLlN5c3RlbUV2ZW50LkVldmVudFR5cGUuS0VZX0RPV04sIHRoaXMub25LZXlEb3duLCB0aGlzKTtcclxuICAgICAgICBjYy5zeXN0ZW1FdmVudC5vZmYoY2MuU3lzdGVtRXZlbnQuRXZlbnRUeXBlLktFWV9VUCwgdGhpcy5vbktleVVwLCB0aGlzKTtcclxuICAgIH0sXHJcblxyXG4gICAgLyogc3RhcnQgKCkge1xyXG5cclxuICAgIH0sICovXHJcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIChkdCkge1xyXG4gICAgICAgIC8vIHVwZGF0ZSBzcGVlZCBvZiBlYWNoIGZyYW1lIGFjY29yZGluZyB0byB0aGUgY3VycmVudCBhY2NlbGVyYXRpb24gZGlyZWN0aW9uXHJcbiAgICAgICAgaWYgKHRoaXMuYWNjTGVmdCkge1xyXG4gICAgICAgICAgICB0aGlzLnhTcGVlZCAtPSB0aGlzLmFjY2VsICogZHQ7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmFjY1JpZ2h0KSB7XHJcbiAgICAgICAgICAgIHRoaXMueFNwZWVkICs9IHRoaXMuYWNjZWwgKiBkdDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gcmVzdHJpY3QgdGhlIG1vdmVtZW50IHNwZWVkIG9mIHRoZSBtYWluIGNoYXJhY3RlciB0byB0aGUgbWF4aW11bSBtb3ZlbWVudCBzcGVlZFxyXG4gICAgICAgIGlmICggTWF0aC5hYnModGhpcy54U3BlZWQpID4gdGhpcy5tYXhNb3ZlU3BlZWQgKSB7XHJcbiAgICAgICAgICAgIC8vIGlmIHNwZWVkIHJlYWNoIGxpbWl0LCB1c2UgbWF4IHNwZWVkIHdpdGggY3VycmVudCBkaXJlY3Rpb25cclxuICAgICAgICAgICAgdGhpcy54U3BlZWQgPSB0aGlzLm1heE1vdmVTcGVlZCAqIHRoaXMueFNwZWVkIC8gTWF0aC5hYnModGhpcy54U3BlZWQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gdXBkYXRlIHRoZSBwb3NpdGlvbiBvZiB0aGUgbWFpbiBjaGFyYWN0ZXIgYWNjb3JkaW5nIHRvIHRoZSBjdXJyZW50IHNwZWVkXHJcbiAgICAgICAgdGhpcy5ub2RlLnggKz0gdGhpcy54U3BlZWQgKiBkdDtcclxuICAgIH1cclxufSk7XHJcbiJdfQ==