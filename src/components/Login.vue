<template>
  <div>
    <form class="flex flex-col items-center" @submit.prevent="login">
      <div class="flex flex-col user">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="userName">User Name</label>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          v-model="username"
          id="userName"
        />
      </div>
      <div class="flex flex-col mt-10">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="password">Password</label>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          type="password"
          v-model="password"
        />
      </div>
      <!-- eslint-disable -->
      <button class="btn-blue">Sign in</button>
    </form>
    <div class="text-red-600">{{ error.message }}</div>
  </div>
</template>

<script>
import { mapActions,mapGetters } from "vuex";
export default {
  data: () => ({
    username: "",
    password: "",
    email: "",
    error: ""
  }),
  methods: {
    ...mapActions({
      loginVue: "login",
    }),
    async login() {
      try {
        await this.loginVue({
          username: this.username,
          password: this.password,
        });
        if(this.usergroup === "recruiter")
        this.$router.push("/recruiter")
        else if(this.usergroup === "admins")
        this.$router.push("/admin")
        else if (this.usergroup === "applicants")
        this.$router.push("/applicant")
        else if(this.usergroup === "employer")
        this.$router.push("/employer")
      } catch (error) {
        this.error = error;
      }
    },
  },
  computed: mapGetters(["usergroup"])
  
};
</script>

<style lang="scss" scoped>
</style>