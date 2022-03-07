<template>
  <div class="p-5">
    <h1 class="text-xl font-bold">Dashboard</h1>
    <div class="mt-5">
      <button
        type="button"
        class="
          px-2
          py-1
          bg-red-500
          transition
          hover:bg-red-700
          rounded
          text-white
        "
        :class="{ 'opacity-25': form.disabled }"
        :disabled="form.disabled"
        @click="handleLogout()"
      >
        Logout
      </button>
    </div>
  </div>
</template>

<script>
import { mapGetters, useStore } from "vuex";
import { reactive } from "vue";

export default {
  name: "Dashboard",
  computed: {
    ...mapGetters("auth", ["authUser"]),
  },
  setup() {
    const store = useStore();
    const form = reactive({
      disabled: false,
    });

    function handleLogout() {
      form.disabled = true;
      store.dispatch("auth/logout");
    }

    return {
      handleLogout,
      form,
    };
  },
};
</script>

<style>
</style>