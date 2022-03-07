<template>
  <router-view />
</template>

<script>
// import axios from "axios";

export default {
  // setup() {
  //   axios
  //     .get("/sanctum/csrf-cookie")
  //     .then((res) => {
  //       console.log(res);
  //       console.log("csrf-cookie: OK");
  //     })
  //     .catch((err) => {
  //       console.log(err.response);
  //     });
  // },
};
</script>

<style>
#nav {
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
