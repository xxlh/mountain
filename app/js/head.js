import "../css/index.css"
import { _width, _height} from "./config"
import {desiginwidth,nickname,setConfig} from "./config"
import preloader from "preloader"
import ready from "document-ready"
import loading from '@lib/loading'
import * as Ajax from "@lib/Ajax";
import AjaxData from "@lib/AjaxData"
// import windowResize from "@lib/windowResize"
// import orientationChange from './rotate';

// 清除html缓存
if(window.location.search.indexOf('clearCache=')==-1)
	location.href = location.href + (location.href.indexOf('?')!=-1?'&':'?') + 'clearCache='+Math.random();

let Data = new AjaxData('http://www.appmn.cn/project2020/shiniushan/');
	window._initInfo = Data.get('browse.php');
	ready(async ()=>{
		let initInfo = await window._initInfo;
		console.log(window._initInfo);
		loader.load();
	})
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

	if(window.getComputedStyle(document.getElementsByTagName("html")[0]).fontSize) {
		var size = window.getComputedStyle(document.getElementsByTagName("html")[0]).fontSize.split('p')[0];
		console.log("size=======" + size);
		if(size*1.2 < rem ) {
			document.documentElement.style.fontSize = 1.25 * rem + 'px';
			console.log("fontSize=======" + window.getComputedStyle(document.getElementsByTagName("html")[0]).fontSize)
		}
	};
};remSize();
window.addEventListener('resize', remSize, false);



// 资源预加载，更新进度条
loading.init();
let loader = preloader({
	xhrImages: false
});

loader.add(require('../images/index.png'));
loader.add(require('../images/scroll_1.png'));
loader.on('progress',function(p) {
	loading.update(Math.floor(p*100), -1);
});
loader.on('complete',function(c) {
	ready(()=>{
		loading.complete();
	})
});
// loader.load();