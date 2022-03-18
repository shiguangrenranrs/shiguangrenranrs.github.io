'use strict';
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
const app = new Vue({
	el: '.approx',
	data: {
	},
	methods: {

	},
	components: {
		computedBox: {
			template: '#computed-box',
			data() {
				return {
					max: 1000000,
					fenzi1: '',
					fenzi2: '',
					fenmu1: '',
					fenmu2: '',
					ctrlVal: '',
					flag:true,
				};
			},
			methods: {
				computeToRight() {
					if (this.fenzi1 == '' || this.fenmu1 == '') {
						alert("输入的数据格式不正确");
						return;
					}

					let z = compute_fun(Math.round(this.fenzi1), Math.round(this.fenmu1));
					this.fenzi2 = Math.round(this.fenzi1) / z;
					this.fenmu2 = Math.round(this.fenmu1) / z;
				},
				computeToLeft() {
					if (this.flag && (this.fenzi2 == '' || this.fenmu2 == '')) {
						this.flag = false;
						setTimeout(() => {
							this.flag = true;
						}, 3500);
						alert("输入的数据格式不正确");
						return;
					}
					if (this.ctrlVal == '') {
						return;
					}
					this.fenzi1 = Math.round(this.fenzi2)*this.ctrlVal;
					this.fenmu1 = Math.round(this.fenmu2)*this.ctrlVal;
				}
			}
		}
	}
});