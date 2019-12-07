<template>
  <div>
    <a type="button" class="btn-sample" :style="customProperties">{{
      isSpinning ? on : off
    }}</a>
  </div>
</template>

<script>
export default {
  name: "Button",
  props: {
    isSpinning: Boolean
  },
  data() {
    return {
      on: "ON",
      off: "OFF"
    };
  },
  computed: {
    customProperties() {
      return {
        "--color": this.isSpinning ? "green" : "#f36955",
        "--color-hover": "#434343"
      };
    }
  }
};
</script>

<style scoped>
.btn-sample {
  color: #fff;
  font-family: Comic Sans MS, Comic Sans, cursive;
  text-transform: uppercase;
  text-decoration: none;
  background: var(--color);
  padding: 20px;
  border-radius: 5px;
  display: inline-block;
  border: none;
  transition: all 0.4s ease 0s;
}

.btn-sample:hover {
  background: var(--color-hover);
  letter-spacing: 1px;
  -webkit-box-shadow: 0px 5px 40px -10px rgba(0, 0, 0, 0.57);
  -moz-box-shadow: 0px 5px 40px -10px rgba(0, 0, 0, 0.57);
  box-shadow: 5px 40px -10px rgba(0, 0, 0, 0.57);
  transition: all 0.4s ease 0s;
}
</style>
