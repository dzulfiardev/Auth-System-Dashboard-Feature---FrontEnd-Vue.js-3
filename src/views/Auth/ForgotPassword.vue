<template>
  <Navbar />
  <div class="grid justify-items-center">
    <div
      class="
        mt-5
        p-4
        max-w-md
        w-full
        bg-white
        rounded-lg
        border border-gray-200
        shadow-md
        sm:p-6
        lg:p-8
        dark:bg-gray-800 dark:border-gray-700
      "
    >
      <form class="space-y-6" action="#">
        <h3 class="text-xl font-medium text-gray-900 dark:text-white">
          Forgot Password
        </h3>
        <div>
          <label
            for="email"
            class="
              block
              mb-2
              text-sm
              font-medium
              text-gray-900
              dark:text-gray-300
            "
            >Input your email</label
          >
          <input
            type="email"
            name="email"
            id="email"
            class="
              bg-gray-50
              border border-gray-300
              text-gray-900 text-sm
              rounded-lg
              focus:outline-none
              focus:ring-green-500
              focus:border-green-500
              focus:ring-1
              block
              w-full
              p-2.5
              dark:bg-gray-600
              dark:border-gray-500
              dark:placeholder-gray-400
              dark:text-white
              transition
              duration-300
            "
            placeholder="name@company.com"
            required
          />
        </div>

        <button
          type="submit"
          class="
            w-full
            text-white
            bg-green-600
            hover:bg-green-800
            focus:ring-4 focus:ring-blue-300
            font-medium
            rounded-lg
            text-sm
            px-5
            py-2.5
            text-center
            dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800
            transition
            duration-300
          "
        >
          Send
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import Navbar from "../../components/Web/Navbar.vue";

export default {
  components: {
    Navbar,
  },
};
</script>

<style>
</style>