<template>
  <div >

    <Nav />

    <router-view/>
  </div>
</template>
<script>
import Nav from "./components/Nav.vue";
// import {mapActions} from "vuex";

export default {
  components: {
    Nav
  },
  // methods: mapActions("auth",['authAction']),
  mounted(){
    this.$store.dispatch("authAction");
    this.$store.dispatch("getUserGroup");

  }
}
</script>
<style lang="scss">

</style>
