<template>
  <div>
    <ul class="flex justify-end">
      <li class="mr-6" v-if="!user">
        <router-link to="/">
          <a class="text-blue-500 hover:text-blue-800 cursor-pointer">Login</a>
        </router-link>
      </li>
      <li class="mr-6" v-if="!user">
        <router-link to="/signup">
          <a class="text-blue-500 hover:text-blue-800 cursor-pointer">Sign Up</a>
        </router-link>
      </li>
      <li class="mr-6" v-if="user">
        <div class="font-semibold text-black-500">Welcome {{ user.username }}</div>
      </li>
      <li class="mr-6" v-if="usergroup === 'recruiter'">
        <router-link to="/recruiter">
          <div class="text-blue-500 hover:text-blue-800 cursor-pointer">Dashboard</div>
        </router-link>
      </li>
      <li class="mr-6" v-if="usergroup === 'admins'">
        <router-link to="/admin">
          <div class="text-blue-500 hover:text-blue-800 cursor-pointer">Admin</div>
        </router-link>
      </li>      
      <li class="mr-6" v-if="usergroup === 'admins'">
        <router-link to="/activityreport">
          <div class="text-blue-500 hover:text-blue-800 cursor-pointer">Activity Report</div>
        </router-link>
      </li>
      <li class="mr-6" v-if="usergroup === 'employer'">
        <router-link to="/employer">
          <div class="text-blue-500 hover:text-blue-800 cursor-pointer">Dashboard</div>
        </router-link>
      </li>
      <li class="mr-6" v-if="user">
        <div class="text-blue-500 hover:text-blue-800 cursor-pointer" @click="logout">Logout</div>
      </li>
    </ul>
  </div>

</template>

<script>
import { mapGetters } from "vuex";
export default {
  methods: {
    async logout() {
      await this.$store.dispatch("logout");
      this.$router.push("/");
    },
  },  
  computed: {
    ...mapGetters({
      user: "user",
      usergroup: "usergroup"
    }),
  },
};
</script>

<style lang="scss" scoped>
</style>