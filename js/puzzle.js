function bujv(){for(var t=0,n=0;n<4;n++)for(var e=0;e<4;e++)items.eq(t).css({left:50*e,top:50*n}),t++}function createText(){var t=new Array;for(t.unshift(getRandom(1,15));t.length<15;)for(var n=getRandom(1,15),e=0;e<t.length&&t[e]!=n;e++)e==t.length-1&&t.push(n);return t}function appendText(t,n){for(var e=Math.min(t.length,n.length),o=0;o<e;o++)t[o].innerText=n[o]}function getRandom(t,n){return Math.round(Math.random()*(n-t)+t)}function arrSort(t){return t.sort(function(t,n){return t-n}),t}var items=$("#main>div"),count=0,countItem=$(".puzzle p span");countItem.text(count),bujv(),delete items[items.length-1],items.length--;var inTextArr=createText();appendText(items,inTextArr);var sides=items.width()+2;items.click(function(){var t=Math.round($(this).position().left),n=Math.round($(this).position().top),e=Math.round($("#transparent").position().left),o=Math.round($("#transparent").position().top);t==e||n==o?t+sides!=e&&t-sides!=e&&n+sides!=o&&n-sides!=o||($(this).css({left:e,top:o}),$("#transparent").css({left:t,top:n}),count++,countItem.text(count)):(console.log(t,n),console.log(e,o))});