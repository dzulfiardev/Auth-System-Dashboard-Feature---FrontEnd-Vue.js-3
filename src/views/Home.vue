<template>
  <Navbar />
  <div class="home grid justify-items-center">
    <img alt="Vue logo" src="../assets/logo.png" />
  </div>
</template>

<script>
import Navbar from "../components/Web/Navbar.vue";
export default {
  name: "Home",
  components: {
    Navbar,
  },
};
</script>
