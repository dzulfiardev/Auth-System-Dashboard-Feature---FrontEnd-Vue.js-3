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
      <form class="space-y-6" action="#" @submit.prevent="handleLogin()">
        <h3 class="text-xl font-medium text-gray-900 dark:text-white">
          Sign in to our platform
        </h3>
        <FlashMessage :error="validate.message" />
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
            v-model="form.email"
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
            v-model="form.password"
          />
        </div>
        <div class="flex items-start">
          <div class="flex items-start">
            <div class="flex items-center h-5">
              <input
                id="remember"
                aria-describedby="remember"
                type="checkbox"
                class="
                  w-4
                  h-4
                  bg-gray-50
                  rounded
                  border border-gray-300
                  focus:ring-3 focus:ring-blue-300
                  dark:bg-gray-700
                  dark:border-gray-600
                  dark:focus:ring-blue-600
                  dark:ring-offset-gray-800
                "
              />
            </div>
            <div class="ml-3 text-sm">
              <label
                for="remember"
                class="font-medium text-gray-900 dark:text-gray-300"
                >Remember me</label
              >
            </div>
          </div>
          <router-link
            to="/forgot-password"
            class="
              ml-auto
              text-sm text-blue-700
              hover:underline
              dark:text-blue-500
            "
            >Lost Password?</router-link
          >
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
          :class="{ 'opacity-25': form.disabled }"
          :disabled="form.disabled"
        >
          Login to your account
        </button>
        <div class="text-sm font-medium text-gray-500 dark:text-gray-300">
          Not registered?
          <router-link
            to="/register"
            class="text-blue-700 hover:underline dark:text-blue-500"
            >Create account</router-link
          >
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import Navbar from "../../components/Web/Navbar.vue";
import AuthService from "../../services/AuthService";
import FlashMessage from "../../components/reusable/FlashMessage.vue";
import { reactive } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

export default {
  components: {
    Navbar,
    FlashMessage,
  },
  setup() {
    const store = useStore();
    const router = useRouter();

    const form = reactive({
      email: null,
      password: null,
      disabled: false,
    });

    const validate = reactive({
      message: null,
    });

    validate.message = null;

    async function handleLogin() {
      form.disabled = true;

      try {
        await AuthService.login(form);
        const authUser = await store.dispatch("auth/getAuthUser");

        if (authUser) {
          store.dispatch("auth/setGuest", { value: "isNotGuest" });
          router.push("/dashboard");
          form.disabled = false;
        } else {
          form.disabled = false;
          const error = Error(
            "Unable to fetch user after login, check you API settings"
          );
          error.name = "Fetch User";
          throw error;
        }
      } catch (err) {
        form.disabled = false;
        if (err.message) {
          validate.message = err.message;
        } else {
          validate.message = err.data.message;
        }
      }
    }

    return { form, handleLogin, validate };
  },
};
</script>

<style>
</style>