<template>
  <button @click="addCache">addCache</button>
</template>

<script>
import { register } from "register-service-worker";
import { version } from "vue";
export default {
  methods: {
    data() {
      return {
        version: 1,
      };
    },
    xxxx() {
      // let a = this.$test(10, 20);
      // console.log("a", a);
      let b = this.$testClass(10, 20);
      console.log("b", b);
    },
  },
  mounted() {},
};
</script>

<style></style>
