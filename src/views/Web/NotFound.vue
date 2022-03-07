<template>
  <div class="max-w-lg p-5 m-auto">
    <article class="p-5">
      <h1 class="mb-2 text-6xl font-bold text-green-500">4Oh4</h1>
      <p class="font-bold">
        The page you're looking for is not here.
        <router-link to="/dashboard" class="base-link text-green-400"
          >Back home</router-link
        >.
      </p>
    </article>
  </div>
</template>

<script>
export default {
  name: "NotFound",
};
</script>
