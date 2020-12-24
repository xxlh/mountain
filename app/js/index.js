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
	length: 80000,
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

function clickOp(){
	$('.inforBox .close').on('click',function(){
		$('.inforBox').hide();
		story.play();
	});
	$('.messBox .close').on('click',function(){
		$('.messBox').hide();
		story.play();
	});
}



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



let indexHeight= 10;

let mountain1 = story.sprite(require("@/images/scroll_1.png"), {x:0, y:indexHeight + 130,});
let clound1 = story.sprite(require("@/images/yun1.png"), {x:0, y:indexHeight + 100,}).actionByStep({x:-300}, 600, indexHeight + 100 - story.viewLength/2);
// 天下第一牛山 
let mountain2 = story.sprite(require("@/images/scroll_2.png"),{x:0, y:indexHeight + 500,}).actionByStep({y:indexHeight + 450}, 400, indexHeight + 500 - story.viewLength/2);
let clound3 = story.sprite(require("@/images/yun3.png"), {x:desiginwidth-454, y:indexHeight + 950,}).actionByStep({x:1700}, 500, indexHeight + 950 - story.viewLength/2)
let clound4 = story.sprite(require("@/images/yun4.png"), {x:desiginwidth-420, y:indexHeight + 900,}).actionByStep({x:700}, 500, indexHeight + 900 - story.viewLength/2)
let mountain3 = story.sprite(require("@/images/scroll_3.png"), {x:0, y:indexHeight + 800,}).actionByStep({y:indexHeight + 750}, 200, indexHeight + 800 - story.viewLength/2);
let clound2 = story.sprite(require("@/images/yun2.png"), {x:0, y:indexHeight + 900,}).actionByStep({x:-700}, 500, indexHeight + 900- story.viewLength/2);


// 石牛山雾凇
let wushu1 = story.sprite(require("@/images/scroll_4.png"),{x:0, y:indexHeight + 1050,})
	// 苔藓
	let taixian1 = story.sprite(require("@/images/scroll_9.png"),{x:0, y:indexHeight + 2200,}).actionByStep({x:0,  y:indexHeight + 2200 - 100}, 1000, indexHeight + 2200 - story.viewLength/2)
	let taixian = story.sprite(require("@/images/scroll_8.png"),{x:0, y:indexHeight + 1700,}).actionByStep({x:0,  y:indexHeight + 1700 - 150}, 1000, indexHeight + 1700 - story.viewLength/2)
let wushu2 = story.sprite(require("@/images/scroll_5.png"),{x:0, y:indexHeight + 1250,})
let clound5 = story.sprite(require("@/images/yun5.png"), {x:desiginwidth-700, y:indexHeight + 1600,}).actionByStep({x:700}, 300, indexHeight + 1600 - story.viewLength/2)
let wushuLeft = story.sprite(require("@/images/scroll_6.png"), {x:0, y:indexHeight + 1600,}).actionByStep({x:-100, y:indexHeight + 1600 - 80}, 400, indexHeight + 1600 - story.viewLength/2)
let wushuRight = story.sprite(require("@/images/scroll_7.png"),{x:desiginwidth-665, y:indexHeight + 1600,}).actionByStep({x:250,  y:indexHeight + 1600 - 150}, 600, indexHeight + 1600 - story.viewLength/2)
let clound6 = story.sprite(require("@/images/yun6.png"), {x:-100, y:indexHeight + 1600, opacity:1}).actionByStep({x:-500, opacity:0}, 300, indexHeight + 1600 - story.viewLength/2)

// let birds = story.chapter({x:0, y:indexHeight + 1050, width:750, height:500}).actionByStep({x:750, y:indexHeight + 1050}, 500, indexHeight + 1050 - story.viewLength/2);
let bird2 =  story.spriteAnimated('assets/part3birds.json', {x:-20, y:indexHeight + 1050 + 50, animationSpeed: 0.1}).action({x:800, y:indexHeight + 1050 - 50 , reverse:false, repeat:-1, ease:Linear.easeOut}, 10, indexHeight + 1050 - story.viewLength/2);;
	bird2.scale.set(0.4)
let bird3 =  story.spriteAnimated('assets/part3birds.json', {x:-100, y:indexHeight + 1050 + 100, animationSpeed: 0.1}).action({x:800, y:indexHeight + 1050, reverse:false, repeat:-1, ease:Linear.easeIn}, 10, indexHeight + 1050 - story.viewLength/2);;
	bird3.scale.set(0.5);
let bird4 =  story.spriteAnimated('assets/part3birds.json', {x:-200, y:indexHeight + 1050, animationSpeed: 0.1}).action({x:800, y:indexHeight + 1050 - 150, reverse:false, repeat:-1, ease:Linear.easeOut }, 10, indexHeight + 1050 - story.viewLength/2);;
	bird4.scale.set(0.45);

//雪花飘落 
const snowAmount = 100;
const snows = [];
for(let i = 0; i < snowAmount; i++){
	snows.push(story.sprite(require("@/images/snow.png"),{x:Math.random() * story.app.renderer.screen.width+1, y:indexHeight + 1050 + Math.random() * 1000, scale:{x:Math.random()*0.5,y:Math.random()*0.5}}));
}
snows.map((item)=>{
	item.action({bezier:[ {x:  item.x + 770 * Math.random(), y: item.y + 500 * Math.random()}], orientToBezier:true, reverse:false, repeat:-1, ease:Linear.easeOut, onComplete:function(){
		item.act({alpha:0}, 0.1);
		}}, 2, item.y - story.viewLength);
})


// 天下第一牛山 文字
let  textTitle1 = story.chapter({x:0, y:indexHeight + 600, alpha:0 }).actionByStep({y:indexHeight + 570, alpha:1}, 100, indexHeight + 650 - story.viewLength/2);
let icon = textTitle1.sprite(require("@/images/icon.png"),{x:110, y:20, scale:{x:1.2,y:1.2}, alpha:1}).action({ yoyo: true, scale:{x:0.6,y:0.6}, alpha:0.6, repeat:-1, ease:Linear.easeIn,}, 2, indexHeight + 550 - story.viewLength);
	icon.anchor.x = 0.5;
	icon.anchor.y = 0.5;
	textTitle1.sprite(require("@/images/天下第一牛山.png"),{x:130, y:0});

let  textDes1 = story.chapter({x:0, y:indexHeight + 600 + 80, alpha:0 }).actionByStep({y:indexHeight + 550 + 80, alpha:1}, 100, indexHeight + 650 + 80 - story.viewLength/2);
let leaf = textDes1.sprite(require("@/images/叶子.png"),{x:450, y:140, rotation:-0.5}).action({ yoyo: true, rotation:0.5, repeat:-1, ease:Linear.easeIn,}, 3, indexHeight + 550 - story.viewLength);
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
	textTitle2.sprite(require("@/images/石牛山雾凇.png"),{x:0, y:0});

let  textDes2 = story.chapter({x:320, y:indexHeight + 1400 + 50, alpha:0 }).actionByStep({y:indexHeight + 1350 + 50, alpha:1}, 100, indexHeight + 1400 + 50 - story.viewLength/2);
let leaf2 = textDes2.sprite(require("@/images/叶子.png"),{x:0, y:40, rotation:-0.5}).action({ yoyo: true, rotation:0.5, repeat:-1, ease:Linear.easeIn,}, 3, indexHeight + 550 - story.viewLength);
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

// 玻璃栈道
let boli = story.sprite(require("@/images/scroll_10.png"),{x:0, y:indexHeight + 2600,}).actionByStep({x:0,  y:indexHeight + 2600 - 100}, 1000, indexHeight + 2600 - story.viewLength/2)


story.loader.on("progress", loader => $("#percent").html((loader.progress|0) + "%"))
.load(loader => {
	$("#loading").fadeOut();
	// videoBoxShow();
	getMusic();
	clickOp();
	// story.start(50000);
	
});

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