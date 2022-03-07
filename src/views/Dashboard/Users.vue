<template>
  <div class="p-5">
    <h1 class="text-lg font-bold text-green-600">Users Management</h1>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters("auth", ["isAdmin"]),
  },
};
</script>

<style>
</style>