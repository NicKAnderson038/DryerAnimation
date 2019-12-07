<template>
  <div>
    <Washer msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import Washer from "./components/Washer.vue";

export default {
  name: "app",
  components: {
    Washer
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
