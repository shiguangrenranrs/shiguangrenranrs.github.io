<template>
  <main>
    <nav-bar />
    <div class="container">
      <puzzle />
      <computed />
    </div>
    <bottom-bar />
  </main>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import Puzzle from "./components/Puzzle.vue";
import Computed from "./components/Computed.vue";
import BottomBar from "./components/BottomBar.vue";

export default {
  name: "App",
  components: {
    NavBar,
    Puzzle,
    Computed,
    BottomBar,
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
a {
  text-decoration: none;
}
body {
  background-color: #f4f4f4;
  /* overflow: hidden; */
}

.container {
  line-height: normal;
  margin: 0 auto;
  max-width: 1000px;
  min-height: 600px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  align-content: space-around;
}
</style>