<template>
  <div class="l__buttons">
    <div
      class="l__button"
      v-for="(item, index) in runningLights"
      v-bind:key="item"
    >
      <span
        v-if="!isSpinning"
        :class="['running-lights', `running-light-${index}`]"
      ></span>
    </div>
  </div>
</template>

<script>
export default {
  name: "WasherLights",
  props: {
    isSpinning: Boolean
  },
  computed: {
    runningLights() {
      return ["one", "two", "three"];
    }
  }
};
</script>

<style scoped>
.running-lights {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  display: block;
}

.running-light-0 {
  animation: blinkingText 1.8s infinite;
}

.running-light-1 {
  animation: blinkingText 2.2s infinite;
}

.running-light-2 {
  animation: blinkingText 2s infinite;
}

@keyframes blinkingText {
  0% {
    background-color: rgb(190, 224, 245);
    box-shadow: inset -1px 0 0 #50c3ed, 1px 1px 0 #50c3ed;
  }
  50% {
    box-shadow: inset -1px 0 0 #c8cfd4, 1px 1px 0 #c8cfd4;
    background-color: #f36955;
  }
  100% {
    background-color: rgb(0, 157, 255);
    box-shadow: inset -1px 0 0 #50c3ed, 1px 1px 0 #50c3ed;
  }
}

.l__button,
.s__button {
  position: absolute;
  top: 16px;
  left: 100px;
  width: 5px;
  height: 5px;
  border-radius: 50%;
  box-shadow: inset -1px 0 0 #c8cfd4, 1px 1px 0 #c8cfd4;
  background-color: #f36955;
}

.l__button:nth-of-type(2),
.s__button:nth-of-type(2) {
  left: 110px;
}

.l__button:nth-of-type(3),
.s__button:nth-of-type(3) {
  left: 120px;
}
</style>
