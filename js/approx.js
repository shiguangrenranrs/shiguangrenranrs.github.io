let fenzi1 = $('.approx #beforeNum1');
let fenmu1 = $('.approx #beforeNum2');
let fenzi2 = $('.approx #afterNum1');
let fenmu2 = $('.approx #afterNum2');
let mul = $('.approx .control-box input');
let div = $('.approx .control-box button');

mul.bind('input', () => {
    let fenzi_value = parseInt(fenzi2.val());
    let fenmu_value = parseInt(fenmu2.val());
    let m = parseInt(mul.val());
    console.log(fenzi_value, fenmu_value);

    if (isNaN(fenzi_value) || isNaN(fenmu_value)) {
        alert('输入的数据格式不正确');
        return;
    }
    if (isNaN(m)) {
        return;
    }
    fenzi1.val(fenzi_value * m);
    fenmu1.val(fenmu_value * m);
})
div.click(() => {
    let fenzi_value = parseInt(fenzi1.val());
    let fenmu_value = parseInt(fenmu1.val());
    console.log(fenzi_value, fenmu_value);

    if (isNaN(fenzi_value) || isNaN(fenmu_value)) {
        alert('输入的数据格式不正确');
        return;
    }
    let z = compute_fun(fenzi_value, fenmu_value);
    fenzi2.val(fenzi_value / z);
    fenmu2.val(fenmu_value / z);
});

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
$('#svg-link').click(() => {
    return false;
});