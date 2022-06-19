<template>
  <section class="Modulo2Division">
    <p>模2除法</p>
    <div class="compute">
      <input
        type="text"
        name="dividend"
        v-model="dividend"
        placeholder="被除数dividend"
        @keydown="allowBin($event)"
        pattern="[01]"
      />
      <input
        type="text"
        name="divisor"
        v-model="divisor"
        placeholder="除数divisor"
        @keydown="allowBin($event)"
      />
      <button type="button" @click="computedTo($event)">计算(computed)</button>
    </div>
    <div class="results" v-show="showResult">
      <ul>
        <li>除数长度：{{ divisorLength }}</li>
        <li>商：{{ merchant }}</li>
        <li>余数：{{ remainder }}</li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  name: "Modulo2Division",
  data() {
    return {
      dividend: "",
      divisor: "",
      keyCode: [
        50, 51, 52, 53, 54, 55, 56, 57, 98, 99, 100, 101, 102, 103, 104, 105,
      ],
      divisorLength: 0,
      merchant: "",
      remainder: "",
      showResult: true,
    };
  },
  methods: {
    computedTo(e) {
      if (this.dividend == "" || this.divisor == "") {
        return alert("除数和被除数不能为空");
      }
      if(this.divisor.search(/1/) === -1){
        return alert("除数不能为0")
      }
      this.divisorLength = this.divisor.length; // 除数位数

      let dividend = this.dividend.split(""); // 被除数
      let divisor = this.divisor.split(""); // 除数
      let merchant = []; // 商
      let temp = dividend.splice(0, this.divisorLength); // 临时运算数据，余数

      while (true) {
        if (temp[0] == "1") {
          merchant.push("1");
          for (let i = 1; i < this.divisorLength; i++) {
            temp[i - 1] = this.XOR(temp[i], divisor[i]);
          }
          temp.pop();
          // [0,1,2,]
        } else if (temp[0] == "0") {
          merchant.push("0");
          temp.shift();
          // [0,1,2]
        }
        if (dividend.length === 0) {
          break;
        }
        temp.push(dividend.shift());
      }
      this.merchant = merchant.join("");
      this.remainder = temp.join("");
      this.showResult = true;
    },
    XOR(a, b) {
      return a === b ? "0" : "1";
    },
    allowBin(e) {
      // console.log(e);
      if (this.keyCode.includes(e.keyCode)) {
        e.preventDefault();
      }
    },
  },
};
</script>

<style scoped>
.Modulo2Division {
  border: 1px solid #c3c3c3;
  border-radius: 20px;
}
.Modulo2Division p {
  text-align: center;
  font-size: 12px;
  color: #888;
}
.Modulo2Division .compute {
  padding: 10px 20px;
}
input {
  display: block;
  height: 30px;
  width: 100%;
  min-width: 200px;
  font-size: 13px;
  border-radius: 5px;
  border: 1px solid #c3c3c3;
  padding: 0 5px;
  box-sizing: border-box;
  text-align: center;
}
input[name="divisor"] {
  margin-top: 10px;
}
button {
  margin-top: 10px;
  display: block;
  background-color: #46a800;
  color: #f4f4f4;
  height: 30px;
  width: 100%;
  min-width: 200px;
  font-size: 13px;
  border-radius: 5px;
  border: 1px solid #c3c3c3;
  padding: 0 5px;
  box-sizing: border-box;
  text-align: center;
}
.results {
  padding-left: 40px;
  font-size: 13px;
  padding-bottom: 20px;
}
</style>