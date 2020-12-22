class windowResize {
	constructor() {
		this.funs = [];
	}
	addFun(fun) {
		this.funs.push(fun);
		window.onresize=this.doFun(this.funs);
	}
	
	doFun(funs){
		return function(){
			funs.forEach(element => {
				element();
			});
		}
	}
}
let wr = new windowResize();
export default wr;