<template>
  <div>
    <section class="m3u8">
      <a
        href="https://blog.luckly-mjw.cn/tool-show/m3u8-downloader/index.html"
        target="_blank"
        ><button type="button">m3u8-downloader</button></a
      >
    </section>
    <section class="bottom">
      <hr />
      <p>{{ date }}@shiguangrenranrs</p>
    </section>
  </div>
</template>

<script>
export default {
  name: "BottomBar",
  data() {
    return {
      date: "2022-06-18",
    };
  },
};
</script>

<style scoped>

.m3u8 button {
  height: 30px;
  width: 100%;
  font-size: 13px;
  border-radius: 5px;
  border: 1px solid #c3c3c3;
  padding: 0 5px;
  box-sizing: border-box;
  text-align: center;
}

.m3u8 button {
  background-color: #46a800;
  color: #f4f4f4;
}

.m3u8 {
  text-align: right;
}

.m3u8 button {
  background-color: #f29c2b;
  padding: 0 15px;
  width: auto;
}

.bottom {
  margin: 0 auto;
  max-width: 1000px;
}

.bottom p {
  font-size: 12px;
  text-align: center;
  color: #888;
}
</style>