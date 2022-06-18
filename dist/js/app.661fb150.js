(function(){"use strict";var t={2849:function(t,e,n){var i=n(8935),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",[n("nav-bar"),n("div",{staticClass:"container"},[n("puzzle"),n("computed")],1),n("bottom-bar")],1)},a=[],o=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},s=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",[n("div",{staticClass:"bar-box"},[n("a",{attrs:{href:"https://app.streamlinehq.com/emojis/kawaii-emoji",target:"_blank"}}),n("a",{attrs:{href:"https://app.streamlinehq.com/emojis/kawaii-emoji",target:"_blank"}}),n("a",{attrs:{href:"https://app.streamlinehq.com/emojis/kawaii-emoji",target:"_blank"}})]),n("a",{attrs:{href:"https://www.streamlinehq.com",id:"svg-link"}},[t._v(" Free SVG emoji by Streamline ")])])}],u={name:"NavBar"},l=u,m=n(1001),c=(0,m.Z)(l,o,s,!1,null,"30e4227f",null),f=c.exports,p=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},v=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"puzzle"},[n("div",{staticClass:"title"},[n("p",[t._v("已移动了"),n("span",[t._v("0")]),t._v("步")])]),n("div",{staticClass:"content"},[n("div",{attrs:{id:"main"}},[n("div",{staticClass:"item item-1"},[t._v("1")]),n("div",{staticClass:"item item-2"},[t._v("2")]),n("div",{staticClass:"item item-3"},[t._v("3")]),n("div",{staticClass:"item item-4"},[t._v("4")]),n("div",{staticClass:"item item-5"},[t._v("5")]),n("div",{staticClass:"item item-6"},[t._v("6")]),n("div",{staticClass:"item item-7"},[t._v("7")]),n("div",{staticClass:"item item-8"},[t._v("8")]),n("div",{staticClass:"item item-9"},[t._v("9")]),n("div",{staticClass:"item item-10"},[t._v("10")]),n("div",{staticClass:"item item-11"},[t._v("11")]),n("div",{staticClass:"item item-12"},[t._v("12")]),n("div",{staticClass:"item item-13"},[t._v("13")]),n("div",{staticClass:"item item-14"},[t._v("14")]),n("div",{staticClass:"item item-15"},[t._v("15")]),n("div",{staticClass:"item-16",attrs:{id:"transparent"}})])])])}],d=n(4029),h={name:"Puzzle",mounted(){var t=d(".puzzle #main>div"),e=0,n=d(".puzzle p span");n.text(e),a(),delete t[t.length-1],t.length--;var i=o();s(t,i);var r=t.width()+2;function a(){for(var e=0,n=0;n<4;n++)for(var i=0;i<4;i++)t.eq(e).css({left:50*i,top:50*n}),e++}function o(){var t=new Array;t.unshift(u(1,15));while(t.length<15)for(var e=u(1,15),n=0;n<t.length;n++){if(t[n]==e)break;n==t.length-1&&t.push(e)}return t}function s(t,e){for(var n=Math.min(t.length,e.length),i=0;i<n;i++)t[i].innerText=e[i]}function u(t,e){return Math.round(Math.random()*(e-t)+t)}t.click((function(){var t=Math.round(d(this).position().left),i=Math.round(d(this).position().top),a=Math.round(d(".puzzle #transparent").position().left),o=Math.round(d(".puzzle #transparent").position().top);t==a||i==o?t+r!=a&&t-r!=a&&i+r!=o&&i-r!=o||(d(this).css({left:a,top:o}),d(".puzzle #transparent").css({left:t,top:i}),e++,n.text(e)):(console.log(t,i),console.log(a,o))}))}},_=h,g=(0,m.Z)(_,p,v,!1,null,"7b3d6b09",null),b=g.exports,x=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"approx"},[n("div",{staticClass:"approx-box"},[n("div",{staticClass:"compute-box"},[n("div",[n("input",{directives:[{name:"model",rawName:"v-model.number",value:t.fenzi1,expression:"fenzi1",modifiers:{number:!0}}],attrs:{type:"number",min:"0",max:t.max,placeholder:"分子"},domProps:{value:t.fenzi1},on:{keyup:function(e){return e.type.indexOf("key")||13===e.keyCode?t.computeToRight.apply(null,arguments):null},input:function(e){e.target.composing||(t.fenzi1=t._n(e.target.value))},blur:function(e){return t.$forceUpdate()}}}),n("span"),n("input",{directives:[{name:"model",rawName:"v-model.number",value:t.fenmu1,expression:"fenmu1",modifiers:{number:!0}}],attrs:{type:"number",min:"1",max:t.max,placeholder:"分母"},domProps:{value:t.fenmu1},on:{keyup:function(e){return e.type.indexOf("key")||13===e.keyCode?t.computeToRight.apply(null,arguments):null},input:function(e){e.target.composing||(t.fenmu1=t._n(e.target.value))},blur:function(e){return t.$forceUpdate()}}})]),n("div",[n("input",{directives:[{name:"model",rawName:"v-model.number",value:t.fenzi2,expression:"fenzi2",modifiers:{number:!0}}],attrs:{type:"number",min:"0",max:t.max,placeholder:"分子"},domProps:{value:t.fenzi2},on:{input:function(e){e.target.composing||(t.fenzi2=t._n(e.target.value))},blur:function(e){return t.$forceUpdate()}}}),n("span"),n("input",{directives:[{name:"model",rawName:"v-model.number",value:t.fenmu2,expression:"fenmu2",modifiers:{number:!0}}],attrs:{type:"number",min:"1",max:t.max,placeholder:"分母"},domProps:{value:t.fenmu2},on:{input:function(e){e.target.composing||(t.fenmu2=t._n(e.target.value))},blur:function(e){return t.$forceUpdate()}}})])]),n("hr"),n("div",{staticClass:"control-box"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.ctrlVal,expression:"ctrlVal"}],attrs:{type:"number",min:"1",max:"10000",placeholder:"倍数"},domProps:{value:t.ctrlVal},on:{input:[function(e){e.target.composing||(t.ctrlVal=e.target.value)},t.computeToLeft]}}),n("button",{attrs:{type:"button"},on:{click:t.computeToRight}},[t._v("最简")])])]),n("p",[t._v("向左扩大，向右化简")])])},z=[];function C(t,e){let n=1,i=Math.min(t,e);for(let r=2;r<=i;r++)t%r==0&&e%r==0&&(n=r);return n}var y={name:"Computed",data(){return{max:1e6,fenzi1:"",fenzi2:"",fenmu1:"",fenmu2:"",ctrlVal:"",flag:!0}},methods:{computeToRight(){if(""==this.fenzi1||""==this.fenmu1)return void alert("输入的数据格式不正确");let t=C(Math.round(this.fenzi1),Math.round(this.fenmu1));this.fenzi2=Math.round(this.fenzi1)/t,this.fenmu2=Math.round(this.fenmu1)/t},computeToLeft(){if(this.flag&&(""==this.fenzi2||""==this.fenmu2))return this.flag=!1,setTimeout((()=>{this.flag=!0}),3500),void alert("输入的数据格式不正确");""!=this.ctrlVal&&(this.fenzi1=Math.round(this.fenzi2)*this.ctrlVal,this.fenmu1=Math.round(this.fenmu2)*this.ctrlVal)}}},w=y,k=(0,m.Z)(w,x,z,!1,null,"693de494",null),M=k.exports,j=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._m(0),n("section",{staticClass:"bottom"},[n("hr"),n("p",[t._v(t._s(t.date)+"@shiguangrenranrs")])])])},O=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"m3u8"},[n("a",{attrs:{href:"https://blog.luckly-mjw.cn/tool-show/m3u8-downloader/index.html",target:"_blank"}},[n("button",{attrs:{type:"button"}},[t._v("m3u8-downloader")])])])}],$={name:"BottomBar",data(){return{date:"2022-06-18"}}},T=$,E=(0,m.Z)(T,j,O,!1,null,"00d9cf34",null),P=E.exports,V={name:"App",components:{NavBar:f,Puzzle:b,Computed:M,BottomBar:P}},N=V,Z=(0,m.Z)(N,r,a,!1,null,null,null),B=Z.exports;i.Z.config.productionTip=!1,new i.Z({el:"#app",render:t=>t(B)})}},e={};function n(i){var r=e[i];if(void 0!==r)return r.exports;var a=e[i]={exports:{}};return t[i].call(a.exports,a,a.exports,n),a.exports}n.m=t,function(){var t=[];n.O=function(e,i,r,a){if(!i){var o=1/0;for(m=0;m<t.length;m++){i=t[m][0],r=t[m][1],a=t[m][2];for(var s=!0,u=0;u<i.length;u++)(!1&a||o>=a)&&Object.keys(n.O).every((function(t){return n.O[t](i[u])}))?i.splice(u--,1):(s=!1,a<o&&(o=a));if(s){t.splice(m--,1);var l=r();void 0!==l&&(e=l)}}return e}a=a||0;for(var m=t.length;m>0&&t[m-1][2]>a;m--)t[m]=t[m-1];t[m]=[i,r,a]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var i in e)n.o(e,i)&&!n.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={143:0};n.O.j=function(e){return 0===t[e]};var e=function(e,i){var r,a,o=i[0],s=i[1],u=i[2],l=0;if(o.some((function(e){return 0!==t[e]}))){for(r in s)n.o(s,r)&&(n.m[r]=s[r]);if(u)var m=u(n)}for(e&&e(i);l<o.length;l++)a=o[l],n.o(t,a)&&t[a]&&t[a][0](),t[a]=0;return n.O(m)},i=self["webpackChunkshiguangrenranrs_github_io"]=self["webpackChunkshiguangrenranrs_github_io"]||[];i.forEach(e.bind(null,0)),i.push=e.bind(null,i.push.bind(i))}();var i=n.O(void 0,[998],(function(){return n(2849)}));i=n.O(i)})();
//# sourceMappingURL=app.661fb150.js.map