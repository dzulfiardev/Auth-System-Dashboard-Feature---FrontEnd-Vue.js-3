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
      <form class="space-y-6" @submit.prevent="handleRegister()">
        <FlashMessage :error="validate.error" />
        <h3 class="text-xl font-medium text-gray-900 dark:text-white">
          Sign Up to our platform
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
            >Your email</label
          >
          <input
            type="text"
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
            v-model="input.email"
          />
        </div>

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
            >Username</label
          >
          <input
            type="text"
            name="username"
            id="username"
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
            placeholder="Username"
            v-model="input.username"
          />
        </div>

        <div>
          <label
            for="fullName"
            class="
              block
              mb-2
              text-sm
              font-medium
              text-gray-900
              dark:text-gray-300
            "
            >Full Name</label
          >
          <input
            type="text"
            name="fullname"
            id="fullName"
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
            placeholder="Full Name"
            v-model="input.name"
          />
        </div>
        <div>
          <label
            for="password"
            class="
              block
              mb-2
              text-sm
              font-medium
              text-gray-900
              dark:text-gray-300
            "
            >Your password</label
          >
          <input
            type="password"
            name="password"
            id="password"
            placeholder="••••••••"
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
            v-model="input.password"
          />
        </div>
        <div>
          <label
            for="passwordConfirm"
            class="
              block
              mb-2
              text-sm
              font-medium
              text-gray-900
              dark:text-gray-300
            "
            >Repeat Password</label
          >
          <input
            type="password"
            name="password_confirm"
            id="passwordConfirm"
            placeholder="••••••••"
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
            v-model="input.password_confirmation"
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
          :class="{ 'opacity-25': attr.disabled }"
          :disabled="attr.disabled"
        >
          Register new account
        </button>
        <div class="text-sm font-medium text-gray-500 dark:text-gray-300">
          Have a account?
          <router-link
            to="/login"
            class="text-blue-700 hover:underline dark:text-blue-500"
            >Login</router-link
          >
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { reactive } from "vue";
import { useRouter } from "vue-router";
import AuthService from "../../services/AuthService";
import Navbar from "../../components/Web/Navbar.vue";
import FlashMessage from "../../components/reusable/FlashMessage.vue";

export default {
  components: {
    Navbar,
    FlashMessage,
  },
  setup() {
    const router = useRouter();

    const input = reactive({
      email: null,
      username: null,
      name: null,
      password: null,
      password_confirmation: null,
    });

    const attr = reactive({
      disabled: false,
    });

    const validate = reactive({
      error: null,
    });

    function handleRegister() {
      attr.disabled = true;
      AuthService.registerUser(input)
        .then(() => {
          router.push("/dashboard");
          attr.disabled = false;
        })
        .catch((err) => (validate.error = err.data.message));
    }

    return {
      input,
      attr,
      validate,
      handleRegister,
    };
  },
};
</script>

<style>
</style>