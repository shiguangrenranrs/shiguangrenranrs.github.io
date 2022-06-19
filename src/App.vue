<template>
  <main>
    <nav-bar />
    <div class="container">
      <puzzle />
      <computed />
      <modulo-2-division />
    </div>
    <bottom-bar :updateDate="updateDate"/>
  </main>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import Puzzle from "./components/Puzzle.vue";
import Computed from "./components/Computed.vue";
import BottomBar from "./components/BottomBar.vue";
import Modulo2Division from "./components/Modulo2Division.vue";

export default {
  name: "App",
  data(){
    return {
      updateDate: "2022-06-19"
    }
  },
  components: {
    NavBar,
    Puzzle,
    Computed,
    BottomBar,
    Modulo2Division,
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
  min-height: 600px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  align-content: space-around;
}
.container > section {
  margin-top: 20px;
}
</style>