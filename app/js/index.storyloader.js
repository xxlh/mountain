import "../css/index.css"
import StoryScroll from 'storyscroll'
import * as PIXI from "pixi.js";


// 调用插件，开始布局场景
window.story = new StoryScroll ({
	// direction: 'x',
	width: 1080,
	length: 3000,
	loader: true,
	debug: true,
	bgcolor: 0x84f7ed
});

window.cha = story.chapter({x:40, y:0});


window.newspaper = cha.sprite(require('@/images/part3/newspaper.png'), { x:40, y:140, scale:{x:.5,y:.5}})
newspaper._zIndex =8;

window.tunk1 = cha.sprite(require('@/images/part1/tunk1.png'), {x:40, y:140})

let egret = story.sprite(require('@/images/4.jpg'), {newspaperx:40, y:540})
let tunk2 = story.sprite(require('@/images/part1/tunk1.png'), {x:240, y:340})

let stu3 =  story.spriteAnimated('assets/stdu3.json', {x: 300, y:400, animationSpeed:1});
let stu4 =  story.spriteAnimated('assets/stdu3.json', {x: 300, y:700, animationSpeed:1});
let stu5 =  story.spriteAnimated('assets/stdu3.json', {x: 500, y:800, animationSpeed:1});
let mlsp1 = story.spriteAnimated('assets/mlspeo.json', {x: 500, y:1200, animationSpeed:.1});

let part3Bird3 =  story.spriteAnimated([
	require("@/images/part3/bird0.png"),
	require("@/images/part3/bird1.png"),
	require("@/images/part3/bird2.png")
], {x:500, y:200, scale:{x:.8, y:.8}, animationSpeed: 0.1});

let part3Bird2 =  story.spriteAnimated([
	require("@/images/part3/bird0.png"),
	require("@/images/part5/car1.png"),
	require("@/images/part3/bird2.png")
], {x:700, y:200, scale:{x:.8, y:.8}, animationSpeed: 0.1});



let mlsp = story.spriteAnimated([
	require('@/images/part1/1.png'),
	require('@/images/part1/2.png'),
], {x:400, y:900, animationSpeed: 0.08});

/* 1 */
story.loader.on("progress", (loader, resource) => {
	console.log("progress: " + (loader.progress|0) + "%"); 
})
.load((loader, resource) => {
	console.log("All files loaded");
});


/* 2 Deprecated */
// story.load(() => {
// 	let egret = story.sprite(require('@/images/part1/egret.png'), {x:40, y:540})
// 	let tunk2 = story.sprite(require('@/images/part1/tunk1.png'), {x:40, y:340})
// })