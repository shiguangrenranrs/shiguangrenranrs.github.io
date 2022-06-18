<template>
  <section class="approx">
    <div class="approx-box">
      <div class="compute-box">
        <div>
          <input
            type="number"
            min="0"
            :max="max"
            placeholder="分子"
            v-model.number="fenzi1"
            @keyup.13="computeToRight"
          />
          <span></span>
          <input
            type="number"
            min="1"
            :max="max"
            placeholder="分母"
            v-model.number="fenmu1"
            @keyup.13="computeToRight"
          />
        </div>
        <div>
          <input
            type="number"
            min="0"
            :max="max"
            placeholder="分子"
            v-model.number="fenzi2"
          />
          <span></span>
          <input
            type="number"
            min="1"
            :max="max"
            placeholder="分母"
            v-model.number="fenmu2"
          />
        </div>
      </div>
      <hr />
      <div class="control-box">
        <input
          type="number"
          min="1"
          max="10000"
          placeholder="倍数"
          v-model="ctrlVal"
          @input="computeToLeft"
        />
        <button type="button" @click="computeToRight">最简</button>
      </div>
    </div>
    <p>向左扩大，向右化简</p>
  </section>
</template>

<script>
function compute_fun(attr1, attr2) {
  let z = 1;
  let min = Math.min(attr1, attr2);
  for (let i = 2; i <= min; i++) {
    if (attr1 % i == 0 && attr2 % i == 0) {
      z = i;
    }
  }
  return z;
}
export default {
  name: "Computed",
  data() {
    return {
      max: 1000000,
      fenzi1: "",
      fenzi2: "",
      fenmu1: "",
      fenmu2: "",
      ctrlVal: "",
      flag: true,
    };
  },
  methods: {
    computeToRight() {
      if (this.fenzi1 == "" || this.fenmu1 == "") {
        alert("输入的数据格式不正确");
        return;
      }

      let z = compute_fun(Math.round(this.fenzi1), Math.round(this.fenmu1));
      this.fenzi2 = Math.round(this.fenzi1) / z;
      this.fenmu2 = Math.round(this.fenmu1) / z;
    },
    computeToLeft() {
      if (this.flag && (this.fenzi2 == "" || this.fenmu2 == "")) {
        this.flag = false;
        setTimeout(() => {
          this.flag = true;
        }, 3500);
        alert("输入的数据格式不正确");
        return;
      }
      if (this.ctrlVal == "") {
        return;
      }
      this.fenzi1 = Math.round(this.fenzi2) * this.ctrlVal;
      this.fenmu1 = Math.round(this.fenmu2) * this.ctrlVal;
    },
  },
};
</script>

<style scoped>
.approx {
  width: 400px;
  box-sizing: border-box;
  border-radius: 20px;
  border: 1px solid #c3c3c3;
}
.approx-box {
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: space-around;
  height: 200px;
  padding: 10px;
}
.approx .approx-box>div {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-around;
  text-align: center;
}
.approx .compute-box>div span {
  margin: 4px 0;
  display: block;
  width: 100px;
  background-color: #000;
  height: 1px;
}
.approx input,
.approx button {
  height: 30px;
  width: 100%;
  font-size: 13px;
  border-radius: 5px;
  border: 1px solid #c3c3c3;
  padding: 0 5px;
  box-sizing: border-box;
  text-align: center;
}

.approx .approx-box input,
.approx .approx-box button {
  width: 90px;
}
.approx button {
  background-color: #46a800;
  color: #f4f4f4;
}

.approx > p {
  font-size: 12px;
  text-align: center;
  color: #888;
}
</style>