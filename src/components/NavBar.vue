<template>
  <header>
    <div class="bar-box">
      <a
        href="https://app.streamlinehq.com/emojis/kawaii-emoji"
        target="_blank"
      ></a>
      <a
        href="https://app.streamlinehq.com/emojis/kawaii-emoji"
        target="_blank"
      ></a>
      <a
        href="https://app.streamlinehq.com/emojis/kawaii-emoji"
        target="_blank"
      ></a>
    </div>
    <a href="https://www.streamlinehq.com" id="svg-link">
      Free SVG emoji by Streamline
    </a>
  </header>
</template>

<script>
export default {
  name: "NavBar",
};
</script>

<style scoped>
header {
  position: relative;
}

header .bar-box {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-around;
  padding: 15px 0;
  /* background-color: #e34140; */
  background-color: #46a800;
  color: #fefefe;
  text-align: center;
}

header .bar-box a {
  height: 30px;
  width: 30px;
}

header .bar-box a:nth-of-type(1) {
  background-image: url(~@/assets/images/u+1f331.SVG);
}

header .bar-box a:nth-of-type(2) {
  background-image: url(~@/assets/images/u+1f326.SVG);
}

header .bar-box a:nth-of-type(3) {
  background-image: url(~@/assets/images/u+1f340.SVG);
}

header > a {
  font-size: 10px;
  color: #fefefe;
  position: absolute;
  right: 0;
  bottom: 0;
}
</style>