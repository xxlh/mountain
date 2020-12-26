import "../css/index.css"
import StoryScroll from 'storyscroll'
import {act, action} from 'storyscroll/action';
import {sprite2d, chapter2d} from 'storyscroll/projection'
import {desiginwidth} from "./config"
import wxShare from "@lib/wxShare"
import $ from 'jquery';
import * as Ajax from "@lib/Ajax";
import {one} from "./danmu";
import windowResize from "@lib/windowResize"
import orientationChange from './rotate'
import App from "./html2Canvas"
import { cos } from "mathjs";

var wx = {};
//微信分享文案设置
wx.shareLink ="http://fj.sina.cn/zt/train"; 
wx.sharePic = "http://n3.sinaimg.cn/fj/train/img/wxShare.jpg"; 
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
	length: 11700,
	loader: true,
	antialias: true,
	progressive: true,
	// debug:start
	debug: true,
	// debug:end
	bgcolor: 0Xffffff,
	container:".content"
});

// story.loader.add("bgm",require("../assets/music.mp3"));
// story.loader.add("video",require("../assets/video.mp4"));

// 获取音乐文件
// function getMusic(){
// 	$(".music").show();	
// 	story.loader.resources.bgm.data.loop = true;
// 	story.loader.resources.bgm.data.autoplay = true;
// 	story.loader.resources.bgm.data.play();
// 	$(".playBtn").on("click",function(){
// 		if(!$(".playBtn").hasClass("playState")){
// 			// 播放
// 			story.loader.resources.bgm.data.play();
// 			$(".playBtn").addClass("playState");
// 			$(".playBtn i").addClass("playMusic");
// 		} else{
// 			story.loader.resources.bgm.data.pause();
// 			$(".playBtn").removeClass("playState");
// 			$(".playBtn i").removeClass("playMusic");
// 		}
// 	 })
// }

var musicLink = "http://n.sinaimg.cn/fj/train/music.mp3";
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
	// if(document.getElementById("rotateTips").style.display==="block")
	// 	story.stop();
	// else story.play();
}

orientationChange();
window.addEventListener('resize', orientationChange, false);
stop();
window.addEventListener('resize', stop, false);



let indexHeight= 600;
let index = story.sprite(require("@/images/index.png"), {x:0, y:0,});
let logo = story.sprite(require("@/images/logo.png"), {x:66, y:66,});
	story.sprite(require("@/images/t1.png"), {x:134, y:220,});
	story.sprite(require("@/images/t2.png"), {x:205, y:226,});
	story.sprite(require("@/images/t3.png"), {x:265, y:203,});
	story.sprite(require("@/images/t4.png"), {x:341, y:210,});
	story.sprite(require("@/images/t5.png"), {x:234, y:319,});
	story.sprite(require("@/images/t6.png"), {x:300, y:346,});
	story.sprite(require("@/images/t7.png"), {x:353, y:321,});
	story.sprite(require("@/images/t8.png"), {x:422, y:289,});
	story.sprite(require("@/images/t9.png"), {x:507, y:293,});

	story.sprite(require("@/images/t10.png"), {x:132, y:420,});
	story.sprite(require("@/images/t11.png"), {x:197, y:431,});
	story.sprite(require("@/images/2021.png"), {x:248, y:420,});
	story.sprite(require("@/images/t12.png"), {x:464, y:434,});
	story.sprite(require("@/images/t13.png"), {x:512, y:413,});
	story.sprite(require("@/images/t14.png"), {x:572, y:429,});

// let line = story.sprite(require("@/images/line.png"), {x:40, y:200,});
let lineCont = story.chapter({x:68, y:362, width:589, height:589});
	let liberateText = lineCont.sprite(require("@/images/line.png"));
	
	let lineMask = lineCont.graphic({scale:{x:1, y:0}});
		lineMask.lineStyle(0);
		lineMask.beginFill(0);
		lineMask.drawRect(0,0,589,589);
		lineMask.endFill(0);
	lineCont.mask = lineMask;


let mountain1 = story.sprite(require("@/images/scroll_1.png"), {x:0, y:indexHeight + 130,});
let clound11 = story.sprite(require("@/images/yun_1.png"), {x:400, y:indexHeight + 250,}).actionByStep({x:700}, 900, indexHeight + 250 - story.viewLength/2);
let clound12 = story.sprite(require("@/images/yun_12.png"), {x:0, y:indexHeight + 220,}).actionByStep({x:-100}, 800, indexHeight + 220 - story.viewLength/2);
let clound1 = story.sprite(require("@/images/yun1.png"), {x:0, y:indexHeight + 100,}).actionByStep({x:-300}, 600, indexHeight + 100 - story.viewLength/2);
// 天下第一牛山 
let mountain2 = story.sprite(require("@/images/scroll_2.png"),{x:0, y:indexHeight + 500,}).actionByStep({y:indexHeight + 450}, 400, indexHeight + 500 - story.viewLength/2);
let clound3 = story.sprite(require("@/images/yun3.png"), {x:desiginwidth-454, y:indexHeight + 950,}).actionByStep({x:500}, 500, indexHeight + 950 - story.viewLength/2)
let clound4 = story.sprite(require("@/images/yun4.png"), {x:desiginwidth-420, y:indexHeight + 900,}).actionByStep({x:600}, 400, indexHeight + 900 - story.viewLength/2)
let mountain3 = story.sprite(require("@/images/scroll_3.png"), {x:0, y:indexHeight + 900,}).actionByStep({y:indexHeight + 900 - 100}, 200, indexHeight + 1150 - story.viewLength/2);
let clound2 = story.sprite(require("@/images/yun2.png"), {x:0, y:indexHeight + 900,}).actionByStep({x:-300}, 500, indexHeight + 900- story.viewLength/2);


// 石牛山雾凇
let wushu1 = story.sprite(require("@/images/scroll_4.png"),{x:0, y:indexHeight + 1150,}).actionByStep({x:0,  y:indexHeight + 1150 - 100}, 500, indexHeight + 1150 - story.viewLength/2)
	// 苔藓
	let taixian1 = story.sprite(require("@/images/scroll_9.png"),{x:0, y:indexHeight + 2400,}).actionByStep({x:0,  y:indexHeight + 2400 - 100}, 1000, indexHeight + 2400 - story.viewLength/2)
	let taixian = story.sprite(require("@/images/scroll_8.png"),{x:0, y:indexHeight + 1800,}).actionByStep({x:0,  y:indexHeight + 1800}, 1000, indexHeight + 1800 - story.viewLength/2)
	let clound8 = story.sprite(require("@/images/yun8.png"), {x:0, y:indexHeight + 2500}).actionByStep({y:indexHeight + 2500 - 20, }, 300, indexHeight +  2500 - story.viewLength/2)
	let clound9 = story.sprite(require("@/images/yun9.png"), {x:desiginwidth-606, y:indexHeight + 2500}).actionByStep({y:indexHeight + 2500 - 20, }, 300, indexHeight +  2500 - story.viewLength/2)

	
let wushu2 = story.sprite(require("@/images/scroll_5.png"),{x:0, y:indexHeight + 1250,}).actionByStep({x:0,  y:indexHeight + 1250 - 100}, 500, indexHeight + 1250 - story.viewLength/2)
let clound5 = story.sprite(require("@/images/yun5.png"), {x:0, y:indexHeight + 1600,}).actionByStep({y:indexHeight + 1600 - 30}, 300, indexHeight + 1600 - story.viewLength/2)
let wushuLeft = story.sprite(require("@/images/scroll_6.png"), {x:0, y:indexHeight + 1600,}).actionByStep({x:-100, y:indexHeight + 1600 - 30}, 400, indexHeight + 1600 - story.viewLength/2)
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
let icon = textTitle1.sprite(require("@/images/icon.png"),{x:110, y:20, scale:{x:1.2,y:1.2}, alpha:1}).action({ yoyo: true, scale:{x:0.6,y:0.6}, alpha:0.6, repeat:-1, ease:Linear.easeIn,}, 2, indexHeight + 550 - story.viewLength);
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
textTitle1.on('pointerdown', async()=>{
	let initInfo = await window._initInfo;
	console.log(initInfo)
	$(".inforBox .user_name").html(initInfo.motion_type)
	inforBoxShow(require("../images/3.jpg"));
});


// 石牛山雾凇 文字
let  textTitle2 = story.chapter({x:500, y:indexHeight + 1400, alpha:0 }).actionByStep({y:indexHeight + 1350, alpha:1}, 100, indexHeight + 1400 - story.viewLength/2);
let icon2 = textTitle2.sprite(require("@/images/icon.png"),{x:200, y:25, scale:{x:1.2,y:1.2}, alpha:1}).action({ yoyo: true, scale:{x:0.6,y:0.6}, alpha:0.6, repeat:-1, ease:Linear.easeIn,}, 2, indexHeight + 550 - story.viewLength);
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
textTitle2.on('pointerdown', async()=>{
	let initInfo = await window._initInfo;
	console.log(initInfo)
	$(".inforBox .user_name").html(initInfo.motion_type)
	inforBoxShow(require("../images/3.jpg"));
});

// 苔藓海 文字
let  textTitle3 = story.chapter({x:0, y:indexHeight + 2200}).actionByStep({y:indexHeight + 2200-50 }, 100, indexHeight + 2200 - story.viewLength/2);
let icon3 = textTitle3.sprite(require("@/images/icon.png"),{x:160, y:30, scale:{x:1.2,y:1.2}, alpha:1}).action({ yoyo: true, scale:{x:0.6,y:0.6}, alpha:0.6, repeat:-1, ease:Linear.easeIn,}, 2, indexHeight + 550 - story.viewLength);
	icon3.anchor.x = 0.5;
	icon3.anchor.y = 0.5;
	textTitle3.sprite(require("@/images/text3.png"),{x:180, y:0});

let  textDes3 = story.chapter({x:0, y:indexHeight + 2200 + 50, alpha:0 }).actionByStep({y:indexHeight + 2200 + 50 - 50, alpha:1}, 100, indexHeight + 2200 + 50 - story.viewLength/2);
let leaf3 = textDes3.sprite(require("@/images/leaf1.png"),{x:480, y:40, rotation:-0.5}).action({ yoyo: true, rotation:0.5, repeat:-1, ease:Linear.easeIn,}, 3, indexHeight + 550 - story.viewLength);
	leaf3.anchor.x = 0.5;
	leaf3.anchor.y = 1;
	textDes3.sprite(require("@/images/desc3.png"),{x:190, y:0});

textTitle3.interactive = true;
textTitle3.buttonMode = true;
textTitle3.on('pointerdown', async()=>{
	let initInfo = await window._initInfo;
	console.log(initInfo)
	$(".inforBox .user_name").html(initInfo.motion_type)
	inforBoxShow(require("../images/3.jpg"));
});


let tree1 = story.sprite(require("@/images/tree1.png"),{x:-400, y:indexHeight + 2400,}).actionByStep({x:-500,  y:indexHeight + 2400 - 200}, 600, indexHeight + 2400 - story.viewLength/2)



// 玻璃栈道
let boli4 = story.sprite(require("@/images/scroll_13.png"),{x:0, y:indexHeight + 3500,}).actionByStep({x:0,  y:indexHeight + 3500 - 50}, 500, indexHeight + 3500 - story.viewLength/2)
let boli3 = story.sprite(require("@/images/scroll_12.png"),{x:0, y:indexHeight + 3150,}).actionByStep({x:0,  y:indexHeight + 3150 - 100}, 700, indexHeight + 3150 - story.viewLength/2)
let boli2 = story.sprite(require("@/images/scroll_11.png"),{x:0, y:indexHeight + 3050,}).actionByStep({x:0,  y:indexHeight + 3050 - 100}, 500, indexHeight + 3050 - story.viewLength/2)
let boli1 = story.sprite(require("@/images/scroll_10.png"),{x:0, y:indexHeight + 2850,}).actionByStep({x:0,  y:indexHeight + 2850 - 300}, 600, indexHeight + 2850 - story.viewLength/2)
let tree2 = story.sprite(require("@/images/tree2.png"),{x:400, y:indexHeight + 3000,}).actionByStep({x:500,  y:indexHeight + 3000 - 200}, 600, indexHeight + 3000 - story.viewLength/2)


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
textTitle4.on('pointerdown', async()=>{
	let initInfo = await window._initInfo;
	console.log(initInfo)
	$(".inforBox .user_name").html(initInfo.motion_type)
	inforBoxShow(require("../images/3.jpg"));
});


// 心形栈道 文字
let  textTitle5 = story.chapter({x:50, y:indexHeight + 3700}).actionByStep({y:indexHeight + 3700-50 }, 100, indexHeight + 3700 - story.viewLength/2);
let icon5 = textTitle5.sprite(require("@/images/icon.png"),{x:160, y:30, scale:{x:1.2,y:1.2}, alpha:1}).action({ yoyo: true, scale:{x:0.6,y:0.6}, alpha:0.6, repeat:-1, ease:Linear.easeIn,}, 2, indexHeight + 550 - story.viewLength);
	icon5.anchor.x = 0.5;
	icon5.anchor.y = 0.5;
	textTitle5.sprite(require("@/images/text5.png"),{x:180, y:0});

let  textDes5 = story.chapter({x:50, y:indexHeight + 3700 + 50, alpha:0 }).actionByStep({y:indexHeight + 3700 + 50 - 50, alpha:1}, 100, indexHeight + 3700 + 50 - story.viewLength/2);
let leaf5 = textDes5.sprite(require("@/images/leaf1.png"),{x:480, y:100, rotation:-0.5}).action({ yoyo: true, rotation:0.5, repeat:-1, ease:Linear.easeIn,}, 3, indexHeight + 550 - story.viewLength);
	leaf5.anchor.x = 0.5;
	leaf5.anchor.y = 1;
	textDes5.sprite(require("@/images/desc5.png"),{x:210, y:0});

textTitle5.interactive = true;
textTitle5.buttonMode = true;
textTitle5.on('pointerdown', async()=>{
	let initInfo = await window._initInfo;
	console.log(initInfo)
	$(".inforBox .user_name").html(initInfo.motion_type)
	inforBoxShow(require("../images/3.jpg"));
});


let end = story.sprite(require("@/images/scroll_21.png"),{x:0, y:indexHeight + 9600,}).actionByStep({x:0,  y:indexHeight + 9600 - 300}, 500, indexHeight + 9600 - story.viewLength/2)
let guodu = story.sprite(require("@/images/scroll_19.png"),{x:0, y:indexHeight + 7500,}).actionByStep({x:0,  y:indexHeight + 7500 - 100}, 500, indexHeight + 7500 - story.viewLength/2)
let zhulin = story.sprite(require("@/images/scroll_18.png"),{x:0, y:indexHeight + 6500,}).actionByStep({x:0,  y:indexHeight + 6500 - 100}, 500, indexHeight + 6500 - story.viewLength/2)
let ri = story.sprite(require("@/images/scroll_20.png"),{x:0, y:indexHeight + 8600,}).actionByStep({x:0,  y:indexHeight + 8600 - 100}, 500, indexHeight + 8600 - story.viewLength/2)
let lanche = story.sprite(require("@/images/scroll_17.png"),{x:0, y:indexHeight + 5300,}).actionByStep({x:0,  y:indexHeight + 5300 - 100}, 500, indexHeight + 5300 - story.viewLength/2)
let piaoliu = story.sprite(require("@/images/scroll_16.png"),{x:0, y:indexHeight + 4200,}).actionByStep({x:0,  y:indexHeight + 4200 - 100}, 500, indexHeight + 4200 - story.viewLength/2)
let pubu = story.sprite(require("@/images/scroll_14.png"),{x:0, y:indexHeight + 3800,}).actionByStep({x:0,  y:indexHeight + 3800 - 50}, 100, indexHeight + 3800 - story.viewLength/2)
let pubu2 = story.sprite(require("@/images/scroll_15.png"),{x:0, y:indexHeight + 4400,}).actionByStep({x:0,  y:indexHeight + 4400 - 200}, 500, indexHeight + 4400 - story.viewLength/2)




story.loader.on("progress", loader => $("#percent").html((loader.progress|0) + "%"))
.load(loader => {
	$("#loading").fadeOut();
	lineMask.action({scale:{x:1,y:1}}, 2,0)
	// lineMask.play();
	getMusic();
	clickOp();
	// story.start(50000);
	
});

function clickOp(){
	$('.inforBox .close').on('click',function(){
		$('.inforBox').hide();
		story.play();
	});
}
function  inforBoxShow(picurl){
	$(".inforBox").show();
	$(".inforBox .picurl").attr("src",picurl);
	
	var img = new Image();
	img.src = picurl;
	img.onload = function(){
		$("#show").empty();
		console.log("11")
		app.setListener();
		};
	story.stop();
};