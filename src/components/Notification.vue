<template>
  <div class="ctrl">
    <span v-show="!isSpinning" class="nortification animateOpen">{{
      notificationStart
    }}</span>
    <span v-show="isSpinning" class="nortification animateOpen">{{
      notificationEnd
    }}</span>
  </div>
</template>

<script>
export default {
  name: "NotificationAnimation",
  props: {
    isSpinning: Boolean,
    notificationText1: String,
    notificationText2: String
  },
  //   data() {
  //     return {
  //       notificationText1: "Dryer Running!",
  //       notificationText2: "Finished!",
  //       isSpinning: true
  //     };
  //   },
  computed: {
    notificationStart() {
      return this.notificationText1;
    },
    notificationEnd() {
      return this.notificationText2;
    }
  }
};
</script>

<style scoped>
.ctrl {
  width: 100%;
  position: relative;
  transform: rotate3d(5, 8, 0, 0.1turn);
}

.nortification {
  display: block;
  font-family: Comic Sans MS, Comic Sans, cursive;
  font-size: 14px;
  width: 180px;
  padding: 5px 0;
  position: absolute;
  top: 0;
  left: 50%;
  margin-left: -90px;
  box-sizing: border-box;
  border-radius: 15px;
  background-color: #fff;
  color: #85d9b5;
  font-weight: bold;
  text-align: center;
  box-shadow: 3px 0 0 rgba(0, 0, 0, 0.2), 2px -3px 0 #d3fffd;
}

.animateOpen {
  -webkit-animation: moveOpen 4s;
  /* -webkit-animation-iteration-count: infinite; */
  -webkit-animation-fill-mode: forwards;
}

/* Safari and Chrome */
@keyframes moveOpen {
  from {
    -webkit-transform: translate(0, -100px);
  }
  10% {
    -webkit-transform: translate(0, 20px);
  }
  12% {
    -webkit-transform: translate(0, 22px);
  }
  16% {
    -webkit-transform: translate(0, 20px);
  }
  80% {
    -webkit-transform: translate(0, 20px);
  }
  85% {
    -webkit-transform: translate(0, 25px);
  }
  to {
    -webkit-transform: translate(0, -100vh);
  }
}
</style>
