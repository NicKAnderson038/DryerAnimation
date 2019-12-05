<template>
  <div>
    <Dryer msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import Dryer from "./components/Dryer.vue";

export default {
  name: "app",
  components: {
    Dryer
  }
};
</script>

<style>
/* Reset */
*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* Generic */
body {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: #ffb791;
}
</style>
