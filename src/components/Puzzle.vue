<template>
  <section class="puzzle">
    <div class="title">
      <p>已移动了<span>0</span>步</p>
    </div>
    <div class="content">
      <div id="main">
        <div class="item item-1">1</div>
        <div class="item item-2">2</div>
        <div class="item item-3">3</div>
        <div class="item item-4">4</div>
        <div class="item item-5">5</div>
        <div class="item item-6">6</div>
        <div class="item item-7">7</div>
        <div class="item item-8">8</div>
        <div class="item item-9">9</div>
        <div class="item item-10">10</div>
        <div class="item item-11">11</div>
        <div class="item item-12">12</div>
        <div class="item item-13">13</div>
        <div class="item item-14">14</div>
        <div class="item item-15">15</div>
        <div class="item-16" id="transparent"></div>
      </div>
    </div>
  </section>
</template>

<script>
// import $ from "jquery"; 这里是手动主动引入，只能在当前js文件使用
// 与 webpack配置 配置一个即可

export default {
  name: "Puzzle",
  mounted() {
    var items = $(".puzzle #main>div");
    var count = 0;
    var countItem = $(".puzzle p span");
    countItem.text(count);
    bujv();
    delete items[items.length - 1];
    items.length--;
    var inTextArr = createText();
    appendText(items, inTextArr);

    var sides = items.width() + 2;
    items.click(function () {
      var x = Math.round($(this).position().left);
      var y = Math.round($(this).position().top);
      var tx = Math.round($(".puzzle #transparent").position().left);
      var ty = Math.round($(".puzzle #transparent").position().top);
      if (x == tx || y == ty) {
        if (
          x + sides == tx ||
          x - sides == tx ||
          y + sides == ty ||
          y - sides == ty
        ) {
          $(this).css({
            left: tx,
            top: ty,
          });
          $(".puzzle #transparent").css({
            left: x,
            top: y,
          });
          count++;
          countItem.text(count);
        } else if (x == tx) {
          //同列
          // if (y - ty > 0) {
          //     var aa = document.getElementById("main").getElementsByClassName("item");
          //     console.log(aa)
          //     for (var a = 0; a < items.length; a++) {}
          // } else if (y - ty < 0) {
          //     // +40
          // };
          // $(".puzzle #transparent").css({
          //     "left": x,
          //     "top": y,
          // });
        } else if (y == ty) {
          //同行
          // if (x - tx > 0) {
          //     // -40
          // } else if (x - tx < 0) {
          //     // +40
          // };
          // $(".puzzle #transparent").css({
          //     "left": x,
          //     "top": y,
          // });
        }
      } else {
        console.log(x, y);
        console.log(tx, ty);
      }
    });

    function bujv() {
      var k = 0;
      for (var i = 0; i < 4; i++) {
        for (var j = 0; j < 4; j++) {
          items.eq(k).css({
            left: j * 50,
            top: i * 50,
          });
          k++;
        }
      }
    }

    function createText() {
      var randomArr = new Array();
      randomArr.unshift(getRandom(1, 15));
      while (randomArr.length < 15) {
        var a = getRandom(1, 15);
        for (var i = 0; i < randomArr.length; i++) {
          if (randomArr[i] == a) {
            break;
          }
          if (i == randomArr.length - 1) {
            randomArr.push(a);
          }
        }
      }
      return randomArr;
    }

    function appendText(arr1, arr2) {
      var arr_min = Math.min(arr1.length, arr2.length);
      for (var i = 0; i < arr_min; i++) {
        arr1[i].innerText = arr2[i];
      }
    }

    function getRandom(min, max) {
      return Math.round(Math.random() * (max - min) + min);
    }

    function arrSort(arr) {
      arr.sort(function (a, b) {
        return a - b;
      });
      return arr;
    }
  },
};
</script>

<style scoped>
.puzzle {
  border-radius: 5%;
  border: 1px solid #c3c3c3;
  /* flex: 1; */
}

.puzzle .content {
  display: flex;
  justify-content: center;
  align-items: center;
}
.puzzle .title p {
  font-size: 12px;
  text-align: center;
  color: #888;
}

#main {
  width: 200px;
  height: 200px;
  background-color: #eedcb8;
  border: 10px solid #755f52;
  border-radius: 10px;
  position: relative;
}

#main > div {
  width: 50px;
  height: 50px;
  background-image: linear-gradient(#fff, #f0f0f0);
  border: 1px solid #111;
  border-radius: 5px;
  box-sizing: border-box;
  font-size: 20px;
  text-align: center;
  line-height: 50px;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 2;
  transition: all 125ms linear;
  cursor: default;
  user-select: none;
}

#main > #transparent {
  background: rgba(0, 0, 0, 0);
  border: none;
  z-index: 1;
}
</style>