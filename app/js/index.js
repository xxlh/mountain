import "../css/index.css"
import StoryScroll from 'storyscroll'
import {act, action} from 'storyscroll/action';
// import {sprite2d, chapter2d} from 'storyscroll/projection'
import {desiginwidth} from "./config"
import wxShare from "@lib/wxShare"
import $ from 'jquery';
import * as Ajax from "@lib/Ajax";
import orientationChange from './rotate'
import App from "./html2Canvas"
import VConsole from 'vconsole';
var vConsole = new VConsole();

var wx = {};
//微信分享文案设置
wx.shareLink = location.origin + location.pathname; 
wx.sharePic = "http://n.sinaimg.cn/fj/shiniusan/img/wxShare.jpg"; 
wx.shareTit = "邂逅2021八闽第一缕曙光"; 
wx.shareDesc = "再见2020，你好2021。";
wx.sharePyq = "邂逅2021八闽第一缕曙光";
let wxshare =new wxShare();
wxshare.setInfo(wx);
let app =new App();


// 调用插件，开始布局场景
window.story = new StoryScroll ({
	direction: 'y',
	width: desiginwidth,
	length: 11880,
	loader: true,
	delay: 500,
	antialias: true,
	progressive: true,
	// debug:start
	debug: true,
	// debug:end
	bgcolor: 0Xffffff,
	container:".content"
});


var musicLink = "http://n.sinaimg.cn/fj/shiniusan/assets/music.mp3";
// 获取音乐文件
function getMusic(){
	$(".music").show();	
	var audio = document.getElementById("music");
    audio.src = musicLink;
    audio.loop = true;
	audio.play();
	document.addEventListener("WeixinJSBridgeReady", function () { 
        audio.play(); 
    }, false); 
    $(document).one("touchstart",function() {
        audio.play(); 
    });
	playCotrol();
}
// 点击播放/暂停
function playCotrol(){
	var audio = document.getElementById("music");
	$(".playBtn").click(function(){
		if($(".playBtn").hasClass("playState")){
			$(".playBtn").removeClass("playState");
			$(".playBtn i").removeClass("playMusic");
			audio.pause();
		}else{
			$(".playBtn").addClass("playState");
			$(".playBtn i").addClass("playMusic");
			audio.play();
		}
	})
}
function stop(){
	if(document.getElementById("rotateTips").style.display==="block")
		story.stop();
	else story.play();
}

orientationChange();
window.addEventListener('resize', orientationChange, false);
stop();
window.addEventListener('resize', stop, false);


// let line = story.sprite(require("@/images/line.png"), {x:40, y:200,});


let indexHeight= 600;
let index = story.sprite(require("@/images/index.png"), {x:0, y:0,});
let logo = story.sprite(require("@/images/logo.png"), {x:66, y:66,});
let title1 = story.sprite(require("@/images/t1.png"), {x:134, y:220, alpha:0, scale:{x:0, y:1}})
	.action({alpha:1, onComplete:e=>{
		title1.act({scale:{x:1, y:1}}, .2);
	}}, 0.8, 0);
	// title1.anchor.x = .5;  
	// title1.anchor.y = .5;
let title15 = story.sprite(require("@/images/t2.png"), {x:205, y:226, alpha:1, delay:.5, scale:{x:0, y:1}})
	.action({onComplete:e=>{
		title15.act({scale:{x:1, y:1}, delay:1}, .2);
	}}, 0.8, 0);
let title8 = story.sprite(require("@/images/t3.png"), {x:265, y:203, alpha:1, delay:.5, scale:{x:0, y:1}})
	.action({onComplete:e=>{
		title8.act({scale:{x:1, y:1}, delay:1.5}, .2);
	}}, 0.8, 0);
let title2 = story.sprite(require("@/images/t4.png"), {x:341, y:210, alpha:1, delay:.5, scale:{x:0, y:1}})
	.action({onComplete:e=>{
		title2.act({scale:{x:1, y:1}, delay:2}, .2);
	}}, 0.8, 0);
let title3 = story.sprite(require("@/images/t5.png"), {x:234, y:319, alpha:1, delay:.5, scale:{x:0, y:1}})
	.action({onComplete:e=>{
		title3.act({scale:{x:1, y:1}, delay:.5}, .2);
	}}, 0.8, 0);
let title4 = story.sprite(require("@/images/t6.png"), {x:300, y:346, alpha:1, delay:.5, scale:{x:0, y:1}})
	.action({onComplete:e=>{
		title4.act({scale:{x:1, y:1}, delay:1}, .2);
	}}, 0.8, 0);
let title5 = story.sprite(require("@/images/t7.png"), {x:353, y:321, alpha:1, delay:.5, scale:{x:0, y:1}})
	.action({onComplete:e=>{
		title5.act({scale:{x:1, y:1}, delay:1.5}, .2);
	}}, 0.8, 0);
let title6 = story.sprite(require("@/images/t8.png"), {x:422, y:289, alpha:1, delay:.5, scale:{x:0, y:1}})
	.action({onComplete:e=>{
		title6.act({scale:{x:1, y:1}, delay:2}, .2);
	}}, 0.8, 0);
let title7 = story.sprite(require("@/images/t9.png"), {x:507, y:293, alpha:1, delay:.5, scale:{x:0, y:1}})
	.action({onComplete:e=>{
		title7.act({scale:{x:1, y:1}, delay:2.5}, .2);
	}}, 0.8, 0);

let title9 = story.sprite(require("@/images/t10.png"), {x:132, y:420, alpha:1, delay:.5, scale:{x:0, y:1}})
	.action({onComplete:e=>{
		title9.act({scale:{x:1, y:1},}, .2);
	}}, 0.8, 0);
let title10 = story.sprite(require("@/images/t11.png"), {x:197, y:431, alpha:1, delay:.5, scale:{x:0, y:1}})
	.action({onComplete:e=>{
		title10.act({scale:{x:1, y:1}, delay:.5}, .2);
	}}, 0.8, 0);
let title11 = story.sprite(require("@/images/2021.png"), {x:248, y:420, alpha:1, delay:.5, scale:{x:0, y:1}})
	.action({onComplete:e=>{
		title11.act({scale:{x:1, y:1}, delay:1.5}, .2);
	}}, 0.8, 0);
let title12 = story.sprite(require("@/images/t12.png"), {x:464, y:434, alpha:1, delay:.5, scale:{x:0, y:1}})
	.action({onComplete:e=>{
		title12.act({scale:{x:1, y:1}, delay:2}, .2);
	}}, 0.8, 0);
let title13 = story.sprite(require("@/images/t13.png"), {x:512, y:413, alpha:1, delay:.5, scale:{x:0, y:1}})
	.action({onComplete:e=>{
		title13.act({scale:{x:1, y:1}, delay:2.5}, .2);
	}}, 0.8, 0);
let title14 = story.sprite(require("@/images/t14.png"), {x:572, y:429, alpha:1, delay:.5, scale:{x:0, y:1}})
	.action({onComplete:e=>{
		title14.act({scale:{x:1, y:1}, delay:3}, .2);
	}}, 0.8, 0);


let ltitle = story.sprite(require("@/images/title.png"), {x:(desiginwidth- 360)/2, y:729, alpha:0, delay:.5})
	.action({onComplete:e=>{
		ltitle.act({alpha: 1, delay:1.3}, 1.5);
	}}, 0.8, 0);

	let lineCont = story.chapter({x:68, y:362, width:589, height:589});
	let liberateText = lineCont.sprite(require("@/images/line.png"));
	
	let lineMask = lineCont.graphic({scale:{x:1, y:0}})
	.action({onComplete:e=>{
		lineMask.act({scale:{x:1, y:1}, delay:1}, 1.2);
	}}, 0.8, 0);
	// .action({scale:{x:1,y:1}}, 2,0);
		lineMask.lineStyle(0);
		lineMask.beginFill(0);
		lineMask.drawRect(0,0,589,589);
		lineMask.endFill(0);
	lineCont.mask = lineMask;
	

let mountain1 = story.sprite(require("@/images/scroll_1.png"), {x:0, y:indexHeight + 230,}).actionByStep({y:indexHeight + 130}, story.viewLength, indexHeight + 230 - story.viewLength);
let clound11 = story.sprite(require("@/images/yun_1.png"), {x:400, y:indexHeight + 250,}).actionByStep({x:700}, 900, indexHeight + 250 - story.viewLength/2);
let clound12 = story.sprite(require("@/images/yun_12.png"), {x:0, y:indexHeight + 220,}).actionByStep({x:-100}, 800, indexHeight + 220 - story.viewLength/2);
let clound1 = story.sprite(require("@/images/yun1.png"), {x:0, y:indexHeight + 100,}).actionByStep({x:-300}, 600, indexHeight + 100 - story.viewLength/2);
// 天下第一牛山 
let mountain2 = story.sprite(require("@/images/scroll_2.png"),{x:0, y:indexHeight + 600,}).actionByStep({y:indexHeight + 450}, story.viewLength, indexHeight + 500 - story.viewLength);
let clound3 = story.sprite(require("@/images/yun3.png"), {x:desiginwidth-454, y:indexHeight + 950,}).actionByStep({x:500}, 500, indexHeight + 950 - story.viewLength/2)
let clound4 = story.sprite(require("@/images/yun4.png"), {x:desiginwidth-420, y:indexHeight + 900,}).actionByStep({x:600}, 400, indexHeight + 900 - story.viewLength/2)
let mountain3 = story.sprite(require("@/images/scroll_3.png"), {x:0, y:indexHeight + 900,}).actionByStep({y:indexHeight + 900 - 100}, story.viewLength, indexHeight + 1150 - story.viewLength);
let clound2 = story.sprite(require("@/images/yun2.png"), {x:0, y:indexHeight + 900,}).actionByStep({x:-300}, 500, indexHeight + 900- story.viewLength/2);

let tip = story.sprite(require("@/images/tip.png"), {x:(desiginwidth- 450)/2, y:story.viewLength-200, alpha:0, delay:.5})
	.action({alpha: 1,y:story.viewLength-150, repeat:2, yoyo:true, delay:2,onComplete:e=>{
		tip.act({alpha: 0})
	}}, 1, 0);


// 石牛山雾凇
let wushu1 = story.sprite(require("@/images/scroll_4.png"),{x:0, y:indexHeight + 1150,}).actionByStep({x:0,  y:indexHeight + 1150 - 80}, story.viewLength, indexHeight + 1150 - story.viewLength)
	// 苔藓
	let taixian1 = story.sprite(require("@/images/scroll_9.png"),{x:0, y:indexHeight + 2400,}).actionByStep({x:0,  y:indexHeight + 2400 - 100}, story.viewLength, indexHeight + 2400 - story.viewLength)
	let taixian = story.sprite(require("@/images/scroll_8.png"),{x:0, y:indexHeight + 1800,}).actionByStep({x:0,  y:indexHeight + 1800}, story.viewLength, indexHeight + 1800 - story.viewLength)
	let clound8 = story.sprite(require("@/images/yun8.png"), {x:0, y:indexHeight + 2500}).actionByStep({y:indexHeight + 2500 - 20, }, 300, indexHeight +  2500 - story.viewLength/2)
	let clound9 = story.sprite(require("@/images/yun9.png"), {x:desiginwidth-606, y:indexHeight + 2500}).actionByStep({y:indexHeight + 2500 - 20, }, 300, indexHeight +  2500 - story.viewLength/2)

	
let wushu2 = story.sprite(require("@/images/scroll_5.png"),{x:0, y:indexHeight + 1250,}).actionByStep({x:0,  y:indexHeight + 1250 - 60}, story.viewLength, indexHeight + 1250 - story.viewLength)
let clound5 = story.sprite(require("@/images/yun5.png"), {x:0, y:indexHeight + 1600,}).actionByStep({y:indexHeight + 1600 - 30}, 300, indexHeight + 1600 - story.viewLength/2)
let wushuLeft = story.sprite(require("@/images/scroll_6.png"), {x:0, y:indexHeight + 1600,}).actionByStep({x:-100, y:indexHeight + 1600 - 65}, 400, indexHeight + 1600 - story.viewLength/2)
let wushuRight = story.sprite(require("@/images/scroll_7.png"),{x:desiginwidth-665, y:indexHeight + 1600,}).actionByStep({x:200,  y:indexHeight + 1600 - 80}, 500, indexHeight + 1600 - story.viewLength/2)
let clound6 = story.sprite(require("@/images/yun6.png"), {x:100, y:indexHeight + 1500}).actionByStep({x:200, }, 300, indexHeight + 1500 - story.viewLength/2)
let clound7 = story.sprite(require("@/images/yun7.png"), {x:0, y:indexHeight + 1650}).actionByStep({y:indexHeight + 1650-20, }, 300, indexHeight + 1650 - story.viewLength/2)
// let birds = story.chapter({x:0, y:indexHeight + 1050, width:750, height:500}).actionByStep({x:750, y:indexHeight + 1050}, 500, indexHeight + 1050 - story.viewLength/2);
let bird2 =  story.spriteAnimated('assets/part3birds.json', {x:-20, y:indexHeight + 1050 + 50, animationSpeed: 0.1}).action({x:800, y:indexHeight + 1050 - 50 , reverse:false, repeat:-1, ease:Linear.easeOut}, 10, indexHeight + 1050 - story.viewLength/2);;
	bird2.scale.set(0.4)
let bird3 =  story.spriteAnimated('assets/part3birds.json', {x:-100, y:indexHeight + 1050 + 100, animationSpeed: 0.1}).action({x:800, y:indexHeight + 1050, reverse:false, repeat:-1, ease:Linear.easeIn}, 10, indexHeight + 1050 - story.viewLength/2);;
	bird3.scale.set(0.5);
let bird4 =  story.spriteAnimated('assets/part3birds.json', {x:-200, y:indexHeight + 1050, animationSpeed: 0.1}).action({x:800, y:indexHeight + 1050 - 150, reverse:false, repeat:-1, ease:Linear.easeOut }, 10, indexHeight + 1050 - story.viewLength/2);;
	bird4.scale.set(0.45);

//雪花飘落 
const snowAmount = 70;
const snows = [];
for(let i = 0; i < snowAmount; i++){
	snows.push(story.sprite(require("@/images/snow.png"),{x:Math.random() * story.app.renderer.screen.width+1, y:indexHeight + 1050 + Math.random() * 500, scale:{x:Math.random()*0.5,y:Math.random()*0.5}}));
}
snows.map((item)=>{
	item.action({bezier:[ {x:  item.x + 770 * Math.random(), y: item.y + 700 * Math.random()}], orientToBezier:true, reverse:false, repeat:-1, ease:Linear.easeOut, onComplete:function(){
		item.act({alpha:0}, 0.1);
		}}, 2, item.y - story.viewLength);
})


// 天下第一牛山 文字
let  textTitle1 = story.chapter({x:0, y:indexHeight + 600, alpha:0 }).actionByStep({y:indexHeight + 570, alpha:1}, 100, indexHeight + 650 - story.viewLength/2);
let icon = textTitle1.sprite(require("@/images/icon.png"),{x:90, y:20, scale:{x:1.2,y:1.2}, alpha:1}).action({ yoyo: true, scale:{x:0.6,y:0.6}, alpha:0.6, repeat:-1, ease:Linear.easeIn,}, 2, indexHeight + 550 - story.viewLength);
	icon.anchor.x = 0.5;
	icon.anchor.y = 0.5;
	textTitle1.sprite(require("@/images/text1.png"),{x:130, y:0});

let  textDes1 = story.chapter({x:0, y:indexHeight + 600 + 80, alpha:0 }).actionByStep({y:indexHeight + 550 + 80, alpha:1}, 100, indexHeight + 650 + 80 - story.viewLength/2);
let leaf = textDes1.sprite(require("@/images/leaf1.png"),{x:450, y:140, rotation:-0.5}).action({ yoyo: true, rotation:0.5, repeat:-1, ease:Linear.easeIn,}, 3, indexHeight + 550 - story.viewLength);
	leaf.anchor.x = 0.5;
	leaf.anchor.y = 1;
	textDes1.sprite(require("@/images/desc1.png"),{x:140, y:0});

textTitle1.interactive = true;
textTitle1.buttonMode = true;
textTitle1.on('pointerdown',()=>{
	inforBoxShow(require("../images/2.jpg"), "right");
});


// 石牛山雾凇 文字
let  textTitle2 = story.chapter({x:500, y:indexHeight + 1400, alpha:1 }).actionByStep({y:indexHeight + 1350, alpha:1}, 100, indexHeight + 1400 - story.viewLength/2);
let icon2 = textTitle2.sprite(require("@/images/icon.png"),{x:220, y:25, scale:{x:1.2,y:1.2}, alpha:1}).action({ yoyo: true, scale:{x:0.6,y:0.6}, alpha:0.6, repeat:-1, ease:Linear.easeIn,}, 2, indexHeight + 550 - story.viewLength);
	icon2.anchor.x = 0.5;
	icon2.anchor.y = 0.5;
	textTitle2.sprite(require("@/images/text2.png"),{x:0, y:0});

let  textDes2 = story.chapter({x:320, y:indexHeight + 1400 + 50, alpha:0 }).actionByStep({y:indexHeight + 1350 + 50, alpha:1}, 100, indexHeight + 1400 + 50 - story.viewLength/2);
let leaf2 = textDes2.sprite(require("@/images/leaf1.png"),{x:0, y:40, rotation:-0.5}).action({ yoyo: true, rotation:0.5, repeat:-1, ease:Linear.easeIn,}, 3, indexHeight + 550 - story.viewLength);
	leaf2.anchor.x = 0.5;
	leaf2.anchor.y = 1;
	textDes2.sprite(require("@/images/desc2.png"),{x:20, y:0});

textTitle2.interactive = true;
textTitle2.buttonMode = true;
textTitle2.on('pointerdown', ()=>{
	inforBoxShow(require("../images/wusong.jpg"),"left");
});

// 苔藓海 文字
let  textTitle3 = story.chapter({x:0, y:indexHeight + 2400}).actionByStep({y:indexHeight + 2400-50 }, 100, indexHeight + 2400 - story.viewLength/2);
let icon3 = textTitle3.sprite(require("@/images/icon.png"),{x:150, y:30, scale:{x:1.2,y:1.2}, alpha:1}).action({ yoyo: true, scale:{x:0.6,y:0.6}, alpha:0.6, repeat:-1, ease:Linear.easeIn,}, 2, indexHeight + 550 - story.viewLength);
	icon3.anchor.x = 0.5;
	icon3.anchor.y = 0.5;
	textTitle3.sprite(require("@/images/text3.png"),{x:180, y:0});

let  textDes3 = story.chapter({x:0, y:indexHeight + 2400 + 50, alpha:0 }).actionByStep({y:indexHeight + 2400 + 50 - 50, alpha:1}, 100, indexHeight + 2400 + 50 - story.viewLength/2);
let leaf3 = textDes3.sprite(require("@/images/leaf1.png"),{x:480, y:40, rotation:-0.5}).action({ yoyo: true, rotation:0.5, repeat:-1, ease:Linear.easeIn,}, 3, indexHeight + 550 - story.viewLength);
	leaf3.anchor.x = 0.5;
	leaf3.anchor.y = 1;
	textDes3.sprite(require("@/images/desc3.png"),{x:190, y:0});

textTitle3.interactive = true;
textTitle3.buttonMode = true;
textTitle3.on('pointerdown', ()=>{
	inforBoxShow(require("../images/taixian.jpg"),"right");
});





// 玻璃栈道
let boli4 = story.sprite(require("@/images/scroll_13.png"),{x:0, y:indexHeight + 3500,}).actionByStep({x:0,  y:indexHeight + 3500 - 50}, story.viewLength, indexHeight + 3500 - story.viewLength)
let boli3 = story.sprite(require("@/images/scroll_12.png"),{x:0, y:indexHeight + 3150,}).actionByStep({x:0,  y:indexHeight + 3150 - 100}, story.viewLength, indexHeight + 3150 - story.viewLength)
let boli2 = story.sprite(require("@/images/scroll_11.png"),{x:0, y:indexHeight + 3050,}).actionByStep({x:0,  y:indexHeight + 3050 - 100}, story.viewLength, indexHeight + 3050 - story.viewLength)
let boli1 = story.sprite(require("@/images/scroll_10.png"),{x:0, y:indexHeight + 2850,}).actionByStep({x:0,  y:indexHeight + 2850 - 300}, story.viewLength, indexHeight + 2850-500 - story.viewLength)
let tree2 = story.sprite(require("@/images/tree2.png"),{x:400, y:indexHeight + 3000,}).actionByStep({x:500,  y:indexHeight + 3000 - 200}, story.viewLength, indexHeight + 3000 - story.viewLength)
let tree1 = story.sprite(require("@/images/tree1.png"),{x:-500, y:indexHeight + 2400,}).actionByStep({x:-400,  y:indexHeight + 2400 + 100}, story.viewLength, indexHeight + 2400 - story.viewLength)


// 玻璃栈道 文字
let  textTitle4 = story.chapter({x:340, y:indexHeight + 3200}).actionByStep({y:indexHeight + 3200-50 }, 100, indexHeight + 3200 - story.viewLength/2);
let icon4 = textTitle4.sprite(require("@/images/icon.png"),{x:354, y:30, scale:{x:1.2,y:1.2}, alpha:1}).action({ yoyo: true, scale:{x:0.6,y:0.6}, alpha:0.6, repeat:-1, ease:Linear.easeIn,}, 2, indexHeight + 550 - story.viewLength);
	icon4.anchor.x = 0.5;
	icon4.anchor.y = 0.5;
	textTitle4.sprite(require("@/images/text4.png"),{x:0, y:0});

let  textDes4 = story.chapter({x:250, y:indexHeight + 3200 + 50, alpha:0 }).actionByStep({y:indexHeight + 3200 + 50 - 50, alpha:1}, 100, indexHeight + 3200 + 50 - story.viewLength/2);
let leaf4 = textDes4.sprite(require("@/images/leaf1.png"),{x:200, y:50, rotation:-0.5}).action({ yoyo: true, rotation:0.5, repeat:-1, ease:Linear.easeIn,}, 3, indexHeight + 550 - story.viewLength);
	leaf4.anchor.x = 0.5;
	leaf4.anchor.y = 1;
	textDes4.sprite(require("@/images/desc4.png"),{x:0, y:0});

textTitle4.interactive = true;
textTitle4.buttonMode = true;
textTitle4.on('pointerdown', ()=>{
	inforBoxShow(require("../images/tiankong.jpg"),"right");
});


// 心形栈道 文字
let  textTitle5 = story.chapter({x:50, y:indexHeight + 3700}).actionByStep({y:indexHeight + 3700-50 }, 100, indexHeight + 3700 - story.viewLength/2);
let icon5 = textTitle5.sprite(require("@/images/icon.png"),{x:160, y:30, scale:{x:1.2,y:1.2}, alpha:1}).action({ yoyo: true, scale:{x:0.6,y:0.6}, alpha:0.6, repeat:-1, ease:Linear.easeIn,}, 2, indexHeight + 550 - story.viewLength);
	icon5.anchor.x = 0.5;
	icon5.anchor.y = 0.5;
	textTitle5.sprite(require("@/images/text5.png"),{x:180, y:0});

let  textDes5 = story.chapter({x:50, y:indexHeight + 3700 + 50, alpha:0 }).actionByStep({y:indexHeight + 3700 + 50 - 50, alpha:1}, 100, indexHeight + 3700 + 50 - story.viewLength/2);
let leaf5 = textDes5.sprite(require("@/images/leaf1.png"),{x:500, y:100, rotation:-0.5}).action({ yoyo: true, rotation:0.5, repeat:-1, ease:Linear.easeIn,}, 3, indexHeight + 550 - story.viewLength);
	leaf5.anchor.x = 0.5;
	leaf5.anchor.y = 1;
	textDes5.sprite(require("@/images/desc5.png"),{x:210, y:0});

textTitle5.interactive = true;
textTitle5.buttonMode = true;
textTitle5.on('pointerdown', ()=>{
	inforBoxShow(require("../images/zhandao.jpg"),"right");
});

let cloundxixing = story.sprite(require("@/images/yun_piaoliao.png"), {x:0, y:indexHeight + 2600,}).actionByStep({x:-200, y:indexHeight + 2600-100}, 1000, indexHeight + 2600- story.viewLength/2);
let cloundxixing1 = story.sprite(require("@/images/yun_piaoliao1.png"), {x:desiginwidth-519, y:indexHeight + 2600,}).actionByStep({x:desiginwidth-519 +200, y:indexHeight + 2600-100}, 1000, indexHeight + 2600- story.viewLength/2);

let end = story.sprite(require("@/images/scroll_21.png"),{x:0, y:indexHeight + 9600,}).actionByStep({x:0,  y:indexHeight + 9600 - 100}, story.viewLength, indexHeight + 9600 - story.viewLength)
let guodu = story.sprite(require("@/images/scroll_19.png"),{x:0, y:indexHeight + 7500,}).actionByStep({x:0,  y:indexHeight + 7500 - 100}, story.viewLength, indexHeight + 7500 - story.viewLength)
let zhulin = story.sprite(require("@/images/scroll_18.png"),{x:0, y:indexHeight + 6500,}).actionByStep({x:0,  y:indexHeight + 6500 - 100}, 500, indexHeight + 6500 - story.viewLength)
let ri = story.sprite(require("@/images/scroll_20.png"),{x:0, y:indexHeight + 8600,}).actionByStep({x:0,  y:indexHeight + 8600 - 100}, story.viewLength, indexHeight + 8600 - story.viewLength)
let lanche = story.sprite(require("@/images/scroll_17.png"),{x:0, y:indexHeight + 5300,}).actionByStep({x:0,  y:indexHeight + 5300 - 200}, story.viewLength, indexHeight + 5300 - story.viewLength)
let piaoliu = story.sprite(require("@/images/scroll_16.png"),{x:0, y:indexHeight + 4200,}).actionByStep({x:0,  y:indexHeight + 4200 - 100}, story.viewLength, indexHeight + 4200 - story.viewLength)
let pubu = story.sprite(require("@/images/scroll_14.png"),{x:0, y:indexHeight + 3800,}).actionByStep({x:0,  y:indexHeight + 3800 - 50}, story.viewLength, indexHeight + 3800 - story.viewLength)
let pubu2 = story.sprite(require("@/images/scroll_15.png"),{x:0, y:indexHeight + 4400,}).actionByStep({x:0,  y:indexHeight + 4400 - 150}, story.viewLength, indexHeight + 4400 - story.viewLength)
//星空飘落 
const starAmount = 100;
const stars = [];
for(let i = 0; i < starAmount; i++){
	let starX = Math.random()*0.05;
	stars.push(story.sprite(require("@/images/star.png"),{x:Math.random() * story.app.renderer.screen.width+1, y:indexHeight + 8000 + Math.random() *800, scale:{x:starX, y:starX}}));
}
stars.map((item)=>{
	item.action( { alpha:0, repeat:-1, ease:Linear.easeOut, onComplete:function(){
		item.act({alpha:1}, 0.5);
	}}, Math.random()*5+0.2, item.y - story.viewLength);
})


//落叶飘落 
const leafAmount = 7;
const leafs = [];
for(let i = 0; i < leafAmount; i++){
	leafs.push(story.sprite(require("@/images/leaf.png"),{x:Math.random() * story.app.renderer.screen.width+1, y:indexHeight + 6500 +  300 + Math.random() *200}));
}
leafs.map((item)=>{
	item.action({bezier:[ {x: Math.random() * story.app.renderer.screen.width+1, y: item.y + 300},{x: Math.random() * story.app.renderer.screen.width+1, y: item.y + 1000}], orientToBezier:true, reverse:false, repeat:0, ease:Linear.easeOut, onComplete:function(){
		item.act({alpha:0}, 0.1);
		}},4, item.y - story.viewLength/2);
})

let cloundPubu = story.sprite(require("@/images/yun_pubu.png"), {x:0, y:indexHeight + 3700,}).actionByStep({x:-300, y:indexHeight + 3700-100}, 500, indexHeight + 3700- story.viewLength/2);
let cloundPubu2 = story.sprite(require("@/images/yun_pubu2.png"), {x:desiginwidth-270,y:indexHeight + 4100,}).actionByStep({x:desiginwidth-270 + 200, y:indexHeight + 4100-100}, 1000, indexHeight + 4100- story.viewLength/2);
let tree4 = story.sprite(require("@/images/tree1.png"),{x:-400, y:indexHeight + 4000,}).actionByStep({x:-500,  y:indexHeight + 4000 - 200}, 600, indexHeight + 4000 - story.viewLength/2)
let tree3 = story.sprite(require("@/images/tree2.png"),{x:400, y:indexHeight + 4500,}).actionByStep({x:500,  y:indexHeight + 4500 - 100}, 600, indexHeight + 4500 - story.viewLength/2)
let cloundPubu3 = story.sprite(require("@/images/yun_pubu3.png"), {x:0, y:indexHeight + 4000,}).actionByStep({x:-200, y:indexHeight + 4000-100}, 1000, indexHeight + 4000- story.viewLength/2);
let cloundPubu4 = story.sprite(require("@/images/yun_pubu4.png"), {x:desiginwidth-535, y:indexHeight + 3700,}).actionByStep({x:desiginwidth-535 +200, y:indexHeight + 3700-100}, 1000, indexHeight + 3700- story.viewLength/2);


let cloundpiaoliao = story.sprite(require("@/images/yun_piaoliao.png"), {x:0, y:indexHeight + 4500,}).actionByStep({x:-200, y:indexHeight + 4500-100}, 1000, indexHeight + 4500- story.viewLength/2);
let cloundpiaoliao1 = story.sprite(require("@/images/yun_piaoliao1.png"), {x:desiginwidth-519, y:indexHeight + 4700,}).actionByStep({x:desiginwidth-519 +200, y:indexHeight + 4700-100}, 1000, indexHeight + 4700- story.viewLength/2);

let cloundzhulin = story.sprite(require("@/images/yun_zhulin.png"), {x:0, y:indexHeight + 6500,}).actionByStep({x:-200, y:indexHeight + 6500-100}, 1000, indexHeight + 6500- story.viewLength/2);
let cloundzhulin1 = story.sprite(require("@/images/yun_zhulin1.png"), {x:desiginwidth-504, y:indexHeight + 6700,}).actionByStep({x:desiginwidth-504 + 200, y:indexHeight + 6700-100}, 1000, indexHeight + 6700- story.viewLength/2);
let cloundzhulin2 = story.sprite(require("@/images/yun_zhulin2.png"), {x:0, y:indexHeight + 7500,}).actionByStep({x:0, y:indexHeight + 7000-100}, 1000, indexHeight + 7000- story.viewLength/2);

let clounddi = story.sprite(require("@/images/yundi.png"), {x:0, y:indexHeight + 8900,}).actionByStep({x:0, y:indexHeight + 8900}, 500, indexHeight + 9600- story.viewLength/2);

// 瀑布 文字
let  textTitle6 = story.chapter({x:-30, y:indexHeight + 4200}).actionByStep({y:indexHeight + 4200-50 }, 100, indexHeight + 4200 - story.viewLength/2);
let icon6 = textTitle6.sprite(require("@/images/icon.png"),{x:160, y:30, scale:{x:1.2,y:1.2}, alpha:1}).action({ yoyo: true, scale:{x:0.6,y:0.6}, alpha:0.6, repeat:-1, ease:Linear.easeIn,}, 2, indexHeight + 550 - story.viewLength);
	icon6.anchor.x = 0.5;
	icon6.anchor.y = 0.5;
	textTitle6.sprite(require("@/images/text6.png"),{x:180, y:40});

let  textDes6 = story.chapter({x:-30, y:indexHeight + 4200 + 50, alpha:0 }).actionByStep({y:indexHeight + 4200 + 50, alpha:1}, 100, indexHeight + 4200 + 50 - story.viewLength/2);
let leaf6 = textDes6.sprite(require("@/images/leaf1.png"),{x:650, y:40, rotation:-0.5}).action({ yoyo: true, rotation:0.5, repeat:-1, ease:Linear.easeIn,}, 3, indexHeight + 550 - story.viewLength);
	leaf6.anchor.x = 0.5;
	leaf6.anchor.y = 1;
	textDes6.sprite(require("@/images/desc6.png"),{x:190, y:0});

textTitle6.interactive = true;
textTitle6.buttonMode = true;
textTitle6.on('pointerdown', ()=>{
	inforBoxShow(require("../images/pubu.jpg"),"left",1);
});

// 漂流 文字
let  textTitle7 = story.chapter({x:0, y:indexHeight + 5100}).actionByStep({y:indexHeight + 5100-50 }, 100, indexHeight + 5100 - story.viewLength/2);
let icon7 = textTitle7.sprite(require("@/images/icon.png"),{x:160, y:30, scale:{x:1.2,y:1.2}, alpha:1}).action({ yoyo: true, scale:{x:0.6,y:0.6}, alpha:0.6, repeat:-1, ease:Linear.easeIn,}, 2, indexHeight + 550 - story.viewLength);
	icon7.anchor.x = 0.5;
	icon7.anchor.y = 0.5;
	textTitle7.sprite(require("@/images/text8.png"),{x:180, y:0});

let  textDes7 = story.chapter({x:0, y:indexHeight + 5100 + 50, alpha:0 }).actionByStep({y:indexHeight + 5100 + 50-50, alpha:1}, 100, indexHeight + 5100 + 50 - story.viewLength/2);
let leaf7 = textDes7.sprite(require("@/images/leaf1.png"),{x:420, y:40, rotation:-0.5}).action({ yoyo: true, rotation:0.5, repeat:-1, ease:Linear.easeIn,}, 3, indexHeight + 550 - story.viewLength);
	leaf7.anchor.x = 0.5;
	leaf7.anchor.y = 1;
	textDes7.sprite(require("@/images/desc8.png"),{x:190, y:0});

textTitle7.interactive = true;
textTitle7.buttonMode = true;
textTitle7.on('pointerdown', ()=>{
	inforBoxShow(require("../images/piaoliu.jpg"),"right");
});

// 索道 文字
let  textTitle8 = story.chapter({x:340, y:indexHeight + 5900}).actionByStep({y:indexHeight + 5900-50 }, 100, indexHeight + 5900 - story.viewLength/2);
let icon8 = textTitle8.sprite(require("@/images/icon.png"),{x:354, y:30, scale:{x:1.2,y:1.2}, alpha:1}).action({ yoyo: true, scale:{x:0.6,y:0.6}, alpha:0.6, repeat:-1, ease:Linear.easeIn,}, 2, indexHeight + 550 - story.viewLength);
	icon8.anchor.x = 0.5;
	icon8.anchor.y = 0.5;
	textTitle8.sprite(require("@/images/text9.png"),{x:150, y:0});

let  textDes8 = story.chapter({x:150, y:indexHeight + 5900 + 50, alpha:0 }).actionByStep({y:indexHeight + 5900 + 50 - 50, alpha:1}, 100, indexHeight + 5900 + 50 - story.viewLength/2);
let leaf8 = textDes8.sprite(require("@/images/leaf1.png"),{x:80, y:50, rotation:-0.5}).action({ yoyo: true, rotation:0.5, repeat:-1, ease:Linear.easeIn,}, 3, indexHeight + 550 - story.viewLength);
	leaf8.anchor.x = 0.5;
	leaf8.anchor.y = 1;
	textDes8.sprite(require("@/images/desc9.png"),{x:0, y:0});

textTitle8.interactive = true;
textTitle8.buttonMode = true;
textTitle8.on('pointerdown', ()=>{
	inforBoxShow(require("../images/lanche.jpg"),"right");
});


// 竹林 文字
let  textTitle9 = story.chapter({x:100, y:indexHeight + 7400}).actionByStep({y:indexHeight + 7400-50 }, 100, indexHeight + 7400 - story.viewLength/2);
// let icon9 = textTitle9.sprite(require("@/images/icon.png"),{x:160, y:30, scale:{x:1.2,y:1.2}, alpha:1}).action({ yoyo: true, scale:{x:0.6,y:0.6}, alpha:0.6, repeat:-1, ease:Linear.easeIn,}, 2, indexHeight + 550 - story.viewLength);
// 	icon9.anchor.x = 0.5;
// 	icon9.anchor.y = 0.5;
	textTitle9.sprite(require("@/images/text10.png"),{x:180, y:0});

let  textDes9 = story.chapter({x:100, y:indexHeight + 7400 + 50, alpha:0 }).actionByStep({y:indexHeight + 7400 + 50-50, alpha:1}, 100, indexHeight + 7400 + 50 - story.viewLength/2);
let leaf9 = textDes9.sprite(require("@/images/leaf1.png"),{x:520, y:150, rotation:-0.5}).action({ yoyo: true, rotation:0.5, repeat:-1, ease:Linear.easeIn,}, 3, indexHeight + 550 - story.viewLength);
	leaf9.anchor.x = 0.5;
	leaf9.anchor.y = 1;
	textDes9.sprite(require("@/images/desc10.png"),{x:190, y:0});

// textTitle9.interactive = true;
// textTitle9.buttonMode = true;
// textTitle9.on('pointerdown', async()=>{
// 	let initInfo = await window._initInfo;
// 	console.log(initInfo)
// 	$(".inforBox .user_name").html(initInfo.motion_type)
// 	inforBoxShow(require("../images/zulin.jpg"));
// });


// 日出 文字
let  textTitle10 = story.chapter({x:0, y:indexHeight + 9200}).actionByStep({y:indexHeight + 9200-50 }, 100, indexHeight + 9200 - story.viewLength/2);
let icon10 = textTitle10.sprite(require("@/images/icon.png"),{x:150, y:30, scale:{x:1.2,y:1.2}, alpha:1}).action({ yoyo: true, scale:{x:0.6,y:0.6}, alpha:0.6, repeat:-1, ease:Linear.easeIn,}, 2, indexHeight + 550 - story.viewLength);
	icon10.anchor.x = 0.5;
	icon10.anchor.y = 0.5;
	textTitle10.sprite(require("@/images/text11.png"),{x:180, y:0});

let  textDes10 = story.chapter({x:0, y:indexHeight + 9200 + 50, alpha:0 }).actionByStep({y:indexHeight + 9200 + 50-50, alpha:1}, 100, indexHeight + 9200 + 50 - story.viewLength/2);
let leaf10 = textDes10.sprite(require("@/images/leaf1.png"),{x:600, y:0, rotation:-0.5}).action({ yoyo: true, rotation:0.5, repeat:-1, ease:Linear.easeIn,}, 3, indexHeight + 550 - story.viewLength);
	leaf10.anchor.x = 0.5;
	leaf10.anchor.y = 1;
	textDes10.sprite(require("@/images/desc11.png"),{x:190, y:0});

textTitle10.interactive = true;
textTitle10.buttonMode = true;
textTitle10.on('pointerdown', ()=>{
	inforBoxShow(require("../images/richu.jpg"),"left");
});


// 话题 文字
let  textTitle12 = story.sprite(require("@/images/text12.png"), {x:(desiginwidth-514), y:indexHeight + 10600, pivot:{x:(desiginwidth-514)/2, y:95/2},  scale:{x:1,y:1}}).action({scale:{x:1.1,y:1.1},repeat:-1,yoyo:true }, 2, indexHeight + 10600 - story.viewLength/2);

textTitle12.interactive = true;
textTitle12.buttonMode = true;
textTitle12.on('pointerdown', async()=>{
	location.href = "http://s.weibo.com/weibo?q=%23%E5%8D%83%E4%B8%87%E7%B2%89%E4%B8%9D%E7%89%9B%E5%B1%B1%E8%B7%A8%E7%89%9B%E5%B9%B4%23";
});

story.loader.onProgress.add(loader => $("#percent").html((loader.progress|0) + "%"))
story.loader.load( async(loader) => {
	let initInfo = await window._initInfo;
	$(".inforBox .user_name").html(initInfo.nickname)
	$(".inforBox .headpic").attr("src", initInfo.headimg2)
	$("#loading").fadeOut();
	// lineMask.play();
	getMusic();
	clickOp();
	// story.start(50000);
	
});

function clickOp(){
	$('.inforBox .close').on('click',function(){
		$('.inforBox').hide();
		$("#show").empty();
		story.play();
	});
}
function  inforBoxShow(picurl, direction, pubu=0){
	$(".inforBox .userInfo").removeClass("left right");
	if(direction=="left"){
		$(".inforBox .userInfo").addClass("left");
	}else{
		$(".inforBox .userInfo").addClass("right");
	}
	if( pubu) $(".inforBox .user_name").css("color","#fff")
	$(".inforBox").show();
	$(".inforBox .picurl").attr("src",picurl);
	var img = new Image();
	img.src = picurl;
	img.onload = function(){
		// if(img.complete)
		// $("#show").empty();
		// setTimeout(()=>{
			app.setListener('#poster');
		// },1000)
	};
	story.stop();
};