<template>
  <button @click="xxxx">xxx</button>
</template>

<script>
export default {
  methods: {
    xxxx() {
      // let a = this.$test(10, 20);
      // console.log("a", a);
      let b = this.$testClass(10, 20);
      console.log("b", b);
    },
  },
};
</script>

<style></style>
