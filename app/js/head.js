import "../css/index.css"
import { _width, _height} from "./config"
import {desiginwidth,nickname,setConfig} from "./config"
import preloader from "preloader"
import ready from "document-ready"
import loading from '@lib/loading'
import * as Ajax from "@lib/Ajax";
// import windowResize from "@lib/windowResize"
// import orientationChange from './rotate';

// 清除html缓存
// if(window.location.search.indexOf('clearCache=')==-1)
// 	location.href = location.href + (location.href.indexOf('?')!=-1?'&':'?') + 'clearCache='+Math.random();
Ajax.post("http://it.mn.sina.com/project1/dreamtrain70/browse.php");

// REM布局
var remSize =function() {
	var devicePixelRatio = window.devicePixelRatio;
	let contentHeight=0;
	switch (window.orientation) {
		case -90:
		case 90:
			contentHeight = document.documentElement.clientHeight;
		break
		case 0:
		case 180:
			contentHeight = document.documentElement.clientWidth;
		break
	}
	
	var rem = contentHeight / desiginwidth * 100;
	document.documentElement.style.fontSize=rem +"px";
};remSize();
window.addEventListener('resize', remSize, false);
// window.onresize=remSize;

// windowResize.addFun(remSize);
// ready(()=>{
// 	orientationChange();
// })

// windowResize.addFun(orientationChange);
// windowResize.addFun(()=>alert("111"));

// 资源预加载，更新进度条
loading.init();
let loader = preloader({
	xhrImages: false
});


loader.on('progress',function(p) {
	loading.update(Math.floor(p*100), -1);
});
loader.on('complete',function(c) {
	ready(()=>{
		loading.complete();
	})
});
// loader.load();