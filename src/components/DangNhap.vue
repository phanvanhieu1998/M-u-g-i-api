<template>
  <div class="login">
    <form @submit.prevent="login">
      <h3 style="text-align: center; padding-top: 10px">Login</h3>

      <div class="form-group">
        <label for="firstName" style="margin-left: 40px">email</label>
        <input
          type="email"
          name="haha"
          class="form-control"
          v-model="email"
          placeholder="email"
        />
      </div>

      <div class="form-group">
        <label for="firstName" style="margin-left: 40px">password</label>

        <input
          type="password"
          name="haha"
          class="form-control"
          v-model="password"
          placeholder="Password"
        />
      </div>

      <button
        style="width: 80%; margin: 0 auto"
        class="btn btn-primary btn-block"
      >
        Login
      </button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    login() {
      this.$store.dispatch("auth/logIn", {
        tenTaiKhoan: "dqdinh112",
        matKhau: "190500",
      });
    },
  },
};
</script>

<style>
.login {
  width: 30%;
  height: 300px;
  background-color: white;
  border-radius: 20px;
  margin: 0 auto;
}
.form-control {
  width: 80%;
  margin: 0 auto;
}
</style>
