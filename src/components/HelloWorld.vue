<template>
  <div class="hello"></div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      count: 0,
    };
  },
  name: "HelloWorld",
  props: {
    msg: String,
  },
  computed: {
    ...mapState({
      haha: (state) => state.Hieu.hehe,
      haha2: (state) => state.Hieu2.hehe,
    }),
  },
  methods: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
