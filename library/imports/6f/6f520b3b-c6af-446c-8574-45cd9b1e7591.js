"use strict";
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