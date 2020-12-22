import "../css/index.css"
import StoryScroll from 'storyscroll'


// 调用插件，开始布局场景
window.story = new StoryScroll ({
	// direction: 'x',
	width: 1080,
	length: 3000,
	debug: true,
	backgroundColor: 0x00FF00
});

/* 自动播放 */

// let bg = story.sprite(require('@/images/part1/bg.jpg'), {x:0, y:0})
// .act(2, {x: -100, y: -100,});
// let bg2 = story.sprite(require('@/images/mantalk13.png', {x):40, y:40}).actWithLast(2, {y: 100});
// let boat = story.sprite(require('@/images/part1/boat.png'), {x:40, y:40}).to({minNum : 0,maxNum : 400,start : 0,end : 0.2});
// story.play();
// story.stop();
// story.play(500);

// 串行动画

// 并行动画

/* 手动播放 */

// 滚动到某距离触发
// 触发式动画
let newspaper = story.sprite(require('@/images/part3/newspaper.png'), {x:40, y:140, scale:{x:.5,y:.5}}).act({x: 160,y: 200}, 0.8, 100);
// 区间式动画
let tunk1 = story.sprite(require('@/images/part1/tunk1.png'), {x:40, y:340}).actByStep({x: 60, y:190}, 50, 200);

// 元素进入屏幕1/3触发
let egret = story.sprite(require('@/images/part1/egret.png'), {x:40, y:540}).act({x: 0,y:400}, 0.8);
let tunk2 = story.sprite(require('@/images/part1/tunk1.png'), {x:40, y:340}).actByStep({x: 60, y:190}, 50);

// 并行触发 1
let clound4 = story.sprite(require('@/images/part1/clound1.png'), {x:40, y:640}).act({x: 60, y:850}, 0.8);
// 并行触发 2
let clound5 = story.sprite(require('@/images/part1/clound1.png'), {x:40, y:1140}).act({x: 0}, 0.8);
let clound6 = story.sprite(require('@/images/part1/clound1.png'), {x:40, y:1140}).act({x: 60}, 0.8);

// Pin
// let man1 = story.sprite(require('@/images/part3/man1.png'), {x:40, y:540}).actByStep({y:840}, 300, 500);
let man2 = story.sprite(require('@/images/part3/man1.png'), {x:40, y:540}).setPin(500, 300)//.act({scale:2}, 0.8);
let man3 = story.sprite(require('@/images/part3/man1.png'), {x:70, y:40}).setPin(0)//.act({scale:2}, 0.8);
// let chapter1 = story.chapter().setPin(60);

// Bezier
let newspaper2 = story.sprite(require('@/images/part3/newspaper.png'), {x:40, y:140, scale:{x:.5,y:.5}}).act({bezier:[{x:140, y:340},{x:240, y:500}], orientToBezier:true, ease:Linear.easeOut}, 3, 100);

// 测试maxScroll
let airport_tree1 = story.sprite(require('@/images/part4/airport_tree1.png'), {x:0, y:0}).act({x: 160}, 2, 156);
let egretY = story.sprite(require('@/images/part1/egret.png'), {y:3000-293});
let egretX = story.sprite(require('@/images/part1/egret.png'), {x:3000-171});

// 测试多段动画
let tunk3 = story.sprite(require('@/images/part1/tunk1.png'), {x:40, y:340}).actByStep({x: 360, y:190}, 50, 100).actByStep({x: 200, y:300}, 50, 200).actByStep({x: 200, y:500}, 50, 300);