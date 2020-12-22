import "../css/index.css"
import "../css/part01.less"
import "../css/part02.less"
import $ from "jquery"
import orientationChange from './rotate'
import {desiginwidth} from "./config"
import Math from 'mathjs'
import windowResize from "@lib/windowResize"
import wxShare from "@lib/wxShare"
import * as PIXI from 'pixi.js';
import { TimelineMax, TweenMax, Linear } from 'gsap';
import { createSprite, createAnimatedSprite } from './createSprite';
import { init } from "../lib/loading";
import { imgArr } from "./loadImg";
import Scroller from '@lib/Scroller'


var wx = {};
//微信分享文案设置
wx.shareLink ="http://fj.sina.cn/zt/train"; 
wx.sharePic = "http://n3.sinaimg.cn/fj/dreamTrain/img/wxShare.jpg"; 
wx.shareTit = "梦想列车70周年"; 
wx.shareDesc = "梦想列车70周年";
wx.sharePyq = "梦想列车70周年";
let wxshare =new wxShare();

var musicLink = "http://n.sinaimg.cn/fj/taxation/music.mp3";
// 获取音乐文件
function getMusic(){
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



let _width = window.innerWidth;
let _height = window.innerHeight;
let _scale;
let _desiginLength= 70000;
let pageHeight;
let tipsCont;

let part2 = new PIXI.Container(),part2Mountain,pagoda, monument,birds,handTip;
let part1 = new PIXI.Container(),title,tips,telegraphPle,mountain1,mountain2,
clound1,clound2,clound3,station,egret,liberate,dams,boat,boat1;
let redScarf,trainPole,liberateTextMask,liberateText,liberateTextContent,liberateTextCont1,liberateTextMask1,
reclamationCont,reclamationMask,pagodaCont,pagodaMask,rocksCont,rocksMask,monumentCont,monumentMask,redScarfCont,redScarfMask,train;
let garden ,gardenMountainl,gardenMountain, clound4,garden2,gardenr1,garden1,
gardenName,gardenSide,dragonfly, gardenHead,ston,flower,parent,windmill,child ;
let stu1,stu2,stu3,part3Birds,woman,man,paper,wind,leaf2,leaf1,leaf,leaf3,leaf4,leaf5,leaf6,isLeaf = true;
let trainGreen,trainMask;

var getPixelRatio = function(context) {  
	var backingStore = context.backingStorePixelRatio ||  
		context.webkitBackingStorePixelRatio ||  
		context.mozBackingStorePixelRatio ||  
		context.msBackingStorePixelRatio ||  
		context.oBackingStorePixelRatio ||  
		context.backingStorePixelRatio || 1;  
  
	return (window.devicePixelRatio || 1) / backingStore;  
};
// var ratio = getPixelRatio(app); //获取 ratio 值
let app = new PIXI.Application({width: document.documentElement.clientWidth, height: document.documentElement.clientHeight, backgroundColor : 0xc9f3fc});
$(".china_tolerance_content")[0].appendChild(app.view);

orientationChange();
windowResize.addFun(() => {
	orientationChange();
});
function pageInit(){
	_width =document.documentElement.clientWidth || window.innerWidth
	_height =document.documentElement.clientHeight || window.innerHeight ;
	if(_width < _height){
		// 竖屏
		verticalScreen();
	}else{
		// 横屏
		horizontalScreen();
	}
}
pageInit();
windowResize.addFun(()=>{
	pageInit();
})

window.containerFitWindow = new PIXI.Container();
containerFitWindow.pivot.set(0, 0);
app.stage.addChild(containerFitWindow);
window.containerScroll = new PIXI.Container();
containerFitWindow.addChild(containerScroll);

// PIXI.loader
let loader = new PIXI.Loader();
	loader
	.add(imgArr)
	.on("progress", function (e) {
		var n = parseInt(e.progress);
		$("#percent").html(n + "%")
	})
	.load(loadingFinish);


function loadingFinish(){
	$("#percent").html("100%");
	setTimeout(function() {
		$("#loading").fadeOut(300)
	},300);
	
	part1ContBehind();
	part3ContBehind();
	part2ContBehind();
	school();
	trainAn();
	
	part1ContFront();
	part2ContFront();
	part3ContFront();
	containerScroll.addChild(part1,part2);
}

function part3ContFront(){
	leaf3 =  createSprite("part3/leaf.png",{
		x:9300,
		y:140,
	});
	leaf4 =  createSprite("part3/leaf.png",{
		x:9550,
		y:250,
	});
	leaf4.scale.x = 1.7;
	leaf4.scale.y = 1.7;

	leaf5 =  createSprite("part3/leaf.png",{
		x:97150,
		y:270,
	});
	leaf5.scale.x = 1.4;
	leaf5.scale.y = 1.4;
	leaf6 =  createSprite("part3/leaf.png",{
		x:98250,
		y:70,
	});
	leaf6.scale.x = 1.2;
	leaf6.scale.y = 1.2;

	let lotus2 = createSprite("part3/lotus2.png",{
		x:759,
		y:desiginwidth,
	});
	
	let lotus0 = createSprite("part3/lotus.png",{
		x:600,
		y:desiginwidth,
	});

	
	let lotus1 = createSprite("part3/lotus1.png",{
		x:600,
		y:desiginwidth,
	});

	lotus2.anchor.set(1);
	lotus0.anchor.set(0.5,1);
	lotus1.anchor.set(0.5,1);

	lotus2.pivot.set(1);
	lotus0.pivot.set(0.5,1);
	lotus1.pivot.set(0.5,1);

	// TweenMax.to(lotus2, 4,{rotation:0.01,repeat:-1,ease: Linear.easeNone});
	// TweenMax.to(lotus0, 3,{rotation:0.02,repeat:-1,ease: Linear.easeNone});
	// TweenMax.to(lotus1, 3,{rotation:0.02,repeat:-1,ease: Linear.easeNone});
	let count = 0;
	app.ticker.add(() => {
		// lotus0.rotation += 0.02;
		// lotus1.rotation += 0.02;
		count += 0.1;
	
		lotus2.rotation = Math.sin(count) * 0.01;
		lotus2.rotation=  Math.cos(count) * 0.01;
		// lotus2.scale.x = 1 + Math.sin(count) * 0.01;
		// lotus2.scale.y = 1 + Math.cos(count) * 0.01;

		lotus0.rotation = Math.sin(count) * 0.004;
		lotus0.rotation=  Math.cos(count) * 0.004;
		lotus1.rotation = Math.sin(count) * 0.004;
		lotus1.rotation=  Math.cos(count) * 0.004;
		
	});

	let lotus =new PIXI.Container();
	lotus.x = 23500;
	lotus.y = 0;
	lotus.width = 1190;
	lotus.height = 1116;
	lotus.addChild(lotus2,lotus0,lotus1);

	part2.addChild(lotus,leaf3,leaf4,leaf5,leaf6);
}
function school(){
	// let schoolbg = createSprite("part3/schoolbg.png",{
	// 	x:0,
	// 	y:0,
	// });
	let schoolbg1 = createSprite("part3/schoolbg1.png",{
		x:0,
		y:0,
	});
	let schoolbg2 = createSprite("part3/schoolbg2.png",{
		x:3600,
		y:0,
	});

	let schoolbg =new PIXI.Container();
	schoolbg.x = 0;
	schoolbg.y = 0;
	schoolbg.addChild(schoolbg1,schoolbg2);

	let oldman = createSprite("part3/oldman.png",{
		x:3300,
		y:desiginwidth-397-130,
	});
	woman = createSprite("part3/woman.png",{
		x: 3750,
		y:desiginwidth-345-200,
	});

	man = createSprite("part3/man2.png",{
		x: 3920,
		y:desiginwidth-399-200,
	});
	let papers = createSprite("part3/newspaper.png",{
		x: 0,
		y:0,
	});
	// papers.scale.set(0.3);
	// papers.rotation=0.5;

	paper = new PIXI.Container();
	paper.width = 559;
	paper.height = 551;
	paper.x = 3920;
	paper.y = 380;
	paper.scale.set(0.3);
	paper.rotation = 0.5;
	paper.addChild(papers);

	wind = createSprite("part3/wind.png",{
		x: 3550,
		y:0,
	});
	wind.scale.set(0);

	let schoolBuildbg = createSprite("part3/school.png",{
		x:0,
		y:0,
	});
	stu1 = createSprite("part3/stdu1.png",{
		x: 900,
		y:500,
	});
	stu2 = createSprite("part3/stdu2.png",{
		x: 1030,
		y:490,
	});

	stu3 =  createAnimatedSprite("part3/stdu3",5,{
		x:450,
		y:400,
		animationSpeed: 0.1,
	});
	
	let tree = createSprite("part3/treel.png",{
		x: 1220,
		y:desiginwidth-778-50-100,
	});

	let bird1 =  createAnimatedSprite("part3/bird",3,{
		x:100,
		y:400,
		animationSpeed: 0.1,
	});

	let bird2 =  createAnimatedSprite("part3/bird",3,{
		x:150,
		y:30,
		animationSpeed: 0.1,
	});
	bird2.scale.set(1.2);
	let bird3 =  createAnimatedSprite("part3/bird",3,{
		x:500,
		y:200,
		animationSpeed: 0.1,
	});
	bird3.scale.set(0.8);

	bird1.play();
	bird2.play();
	bird3.play();

	part3Birds = new PIXI.Container();
	part3Birds.x = 1220;
	part3Birds.y =200;
	part3Birds.width =  600;
	part3Birds.height = 600;
	part3Birds.addChild(bird3,bird2,bird1);

	let schoolBuild = new PIXI.Container();
	schoolBuild.x = 1520;
	schoolBuild.y = 30;
	schoolBuild.width =  1736;
	schoolBuild.height = 940;

	schoolBuild.addChild(schoolBuildbg,stu1,stu2,stu3,tree,part3Birds);

	let school = new PIXI.Container();
	school.x = 24500;
	school.y = desiginwidth-976;
	school.width =  7376;
	school.height = 976;

	school.addChild(schoolbg,wind,oldman,woman,man,paper,schoolBuild);

	part1.addChild(school);
}
function part3ContBehind(){
	
	gardenMountainl = createSprite("part2/garden_mountainl.png",{
		x:0,
		y:desiginwidth-873-100,
	});
	gardenMountain = createSprite("part2/garden_mountain.png",{
		x:3800,
		y:desiginwidth- 918,
	});
	clound4 = createSprite("part2/clound4.png",{
		x:2800,
		y:0,
	});
	garden2 = createSprite("part2/garden2.png",{
		x:1200,
		y:desiginwidth-827,
	});

	gardenr1 = createSprite("part2/gardenr1.png",{
		x:2240,
		y:desiginwidth-50-591,
	});

	garden1 = createSprite("part2/garden1.png",{
		x:1000,
		y:desiginwidth+100-809,
	});

	gardenName = createSprite("part2/garden_name.png",{
		x: 2720,
		y:-50,
	});

	gardenSide = createSprite("part2/garden_side1.png",{
		x: 4200,
		y:desiginwidth-50-849,
	});
	dragonfly = createSprite("part2/dragonfly.png",{
		x: 4200+300,
		y:300,
	});
	TweenMax.to(dragonfly, 4, {
		bezier:[
		 {x:4200+300+700, y:700}
		], repeat:-1,  autoRotate:["x","y","rotation",0,true],ease:Linear.easeOut});

	// gardenHead = createSprite("part2/garden_head.png",{
	// 	x: 1000,
	// 	y:desiginwidth-572,
	// });
	let gardenHead1 = createSprite("part2/garden_head1.png",{
		x:0,
		y:0,
	});
	let gardenHead2 = createSprite("part2/garden_head2.png",{
		x:3000,
		y:0,
	});

	gardenHead =new PIXI.Container();
	gardenHead.x = 1000;
	gardenHead.y = desiginwidth-572;
	gardenHead.addChild(gardenHead1,gardenHead2);
	

	ston = createSprite("part2/ston.png",{
		x: 4200+500,
		y:desiginwidth-480-20,
	});
	flower = createSprite("part2/flower.png",{
		x: 4200+500+400,
		y:desiginwidth-480-20+234-50,
	});


	parent =  createAnimatedSprite("part2/parent",3,{
		x:2600,
		y:desiginwidth-480-50,
		animationSpeed: 0.1,
	});
	parent.play();

	child =  createSprite("part2/child.png",{
		x:4000,
		y:desiginwidth-224-80,
	});
	
	windmill =  createSprite("part2/windmill.png",{
		x:4000+140+50,
		y:desiginwidth-224-80 + 20,
	});
	windmill.anchor.set(0.5);
	TweenMax.to(windmill, 3,  {rotation:7,repeat:-1,ease: Linear.easeNone});

	// gardenNameSide =new PIXI.Container();
	// gardenNameSide.x = 4150;
	// gardenNameSide.y = desiginwidth-50-849;
	// gardenNameSide.width = 1182;
	// gardenNameSide.height = 849;
	// gardenNameSide.addChild();

	leaf =  createSprite("part3/leaf.png",{
		x:10000,
		y:100,
	});
	leaf.scale.x = 0.8;
	leaf.scale.y = 0.8;

	leaf1 =  createSprite("part3/leaf.png",{
		x:10100,
		y:300,
	});
	leaf1.scale.x = 1.8;
	leaf1.scale.y = 1.8;

	leaf2 =  createSprite("part3/leaf.png",{
		x:10200,
		y:200,
	});
	leaf2.scale.x = 1.5;
	leaf2.scale.y = 1.5;

	garden =new PIXI.Container();
	garden.x = 18400;
	garden.y = 0;
	garden.width = 7160;
	garden.height = 1080;
	garden.addChild(gardenMountainl,gardenMountain, clound4,garden2,gardenr1,garden1,
		gardenName,gardenSide,dragonfly, gardenHead,ston,flower,parent,windmill,child,leaf2,leaf1,leaf );

	part1.addChild(garden);
}

function part2ContBehind(){
	let monumentBg1 = createSprite("part2/monument1.png",{
		x:0,
		y:0,
	});
	let monumentBuilt = createSprite("part2/monument_build1.png",{
		x:1288+821,
		y:0,
	});
	monumentBuilt.interactive = true;
	monumentBuilt.buttonMode = true;
	monumentBuilt.on('pointerdown', ()=>{
		myVid1.src=require("../assets/part2.mp4");
		videoBoxShow();
	});

	handTip = createSprite("part1/hand1.png",{
		x:2355,
		y:250,
	});
	handTip.alpha = 0;

	TweenMax.to(handTip,3,{x:2400,y:200,repeat:-1,ease: Linear.easeNone});

	let monumentBg2 = createSprite("part2/monument2.png",{
		x:3000,
		y:0,
	});

	let monumentBg =new PIXI.Container();
	monumentBg.x = 0;
	monumentBg.y = 0;
	monumentBg.addChild(monumentBg1,monumentBuilt,monumentBg2,handTip);

	// let monumentBg = createSprite("part2/monument.png",{
	// 	x:0,
	// 	y:0,
	// });
	let clound = createSprite("part2/clound2.png",{
		x:900,
		y:-100,
	});

	let bird =  createAnimatedSprite("part2/bird",3,{
		x:100,
		y:400,
		animationSpeed: 0.1,
	});
	bird.play();
	let bird2 =  createAnimatedSprite("part2/bird",3,{
		x:150,
		y:200,
		animationSpeed: 0.1,
	});
	bird2.scale.set(0.8);
	bird2.play();

	let bird3 =  createAnimatedSprite("part2/bird",3,{
		x:700,
		y:0,
		animationSpeed: 0.1,
	});
	bird3.scale.set(0.5);
	bird3.play();
	let bird4 =  createAnimatedSprite("part2/bird",3,{
		x:100,
		y:0,
		animationSpeed: 0.1,
	});
	bird4.scale.set(0.6);
	bird4.play();
	let bird5 =  createAnimatedSprite("part2/bird",3,{
		x:600,
		y:100,
		animationSpeed: 0.1,
	});
	bird5.scale.set(0.7);
	bird5.play();
	let bird6 =  createAnimatedSprite("part2/bird",3,{
		x:500,
		y:300,
		animationSpeed: 0.1,
	});
	bird6.scale.set(0.9);
	bird6.play();

	birds =new PIXI.Container();
	birds.x = 1300;
	birds.y = 1200 //1200;
	birds.width = 800;
	birds.height = 500;
	birds.addChild(bird,bird2,bird3,bird4,bird5,bird6)

	monument =new PIXI.Container();
	monument.x = 13800;
	monument.y = desiginwidth-1030;
	monument.width = 5003;
	monument.height = 1030;
	monument.addChild(clound, monumentBg, birds);


	// part2Mountain = createSprite("part2/mountain.png",{
	// 	x:15000,
	// 	y:0,
	// });
	let part2Mountain1 = createSprite("part2/mountain1.png",{
		x:0,
		y:0,
	});
	let part2Mountain2 = createSprite("part2/mountain2.png",{
		x:2000,
		y:0,
	});

	part2Mountain =new PIXI.Container();
	part2Mountain.x = 15000;
	part2Mountain.y = 0;
	part2Mountain.addChild(part2Mountain1,part2Mountain2);

	pagoda = createSprite("part2/pagoda.png",{
		x:18000,
		y:desiginwidth -704,
	});

	let rocks = createSprite("part2/rocks.png",{
		x:17600,
		y:0,
	});
	part1.addChild(part2Mountain,pagoda, monument,rocks);
}
function part2ContFront(){
	let reclamation = createSprite("part2/reclamation.png",{
		x:12900,
		y:desiginwidth-1010,
	});
	
	part2.addChild(reclamation);
}
function part1ContBehind(){
	tips = createSprite("part1/text.png",{
		x:0,
		y:0,
	});
	// TweenMax.to(tips,1,{x:1400,repeat:-1,ease: Linear.easeNone})
	mountain2 = createSprite("part1/mountain2.png",{
		x:0,
		y:desiginwidth-555,
	});
	mountain1 = createSprite("part1/mountain1.png",{
		x:2000,
		y:desiginwidth-413,
	});

	let telegraphPle1 = createSprite("part1/telegraph_pole1.png",{
		x:0,
		y:0,
	});
	let telegraphPle2 = createSprite("part1/telegraph_pole2.png",{
		x:2000,
		y:0,
	});

	telegraphPle =new PIXI.Container();
	telegraphPle.x = 0;
	telegraphPle.y = desiginwidth-907-20;
	telegraphPle.addChild(telegraphPle1,telegraphPle2);

	// telegraphPle = createSprite("part1/telegraph_pole1.png",{
	// 	x:0,
	// 	y:desiginwidth-907-20,
	// });

	clound1 = createSprite("part1/clound1.png",{
		x:1250,
		y:40,
	});
	clound2 = createSprite("part1/clound2.png",{
		x:1300,
		y:150,
	});
	clound3 = createSprite("part1/clound3.png",{
		x:3400,
		y:300,
	});

	station = createSprite("part1/station.png",{
		x:3424,
		y:0,
	});
	egret = createSprite("part1/egret1.png",{
		x:3424+1461,
		y:636,
	});

	
	liberateAn();
	damsAn();
	part1.addChild(tips,telegraphPle,mountain1,mountain2,clound1,clound2,clound3,station,egret,dams,liberate);
	
}
function part1ContFront(){
	// 主题
	title = createSprite("part1/title.png",{
		x:500,
		y:200,
	});
	trainPole = createSprite("part1/station_pole.png",{
		x:5872,
		y:0,
	});
	// 小八路
	let redScarfBg = createSprite("part1/red_scarf.png",{
		x:0,
		y:0,
	});
	let redScarfAn = createAnimatedSprite("part1/red_scarf",3,{
		x:0,
		y:0,
		animationSpeed: 0.1,
	});
	redScarfAn.play();

	redScarf = new PIXI.Container();
	redScarf.x =  8377;
	redScarf.y = desiginwidth -1042;
	redScarf.width = 1754;
	redScarf.height = 1042;
	redScarf.addChild(redScarfBg,redScarfAn);
	

	liberateText = createSprite("part1/liberate_text.png",{
		x:0,
		y:0,
	});
	liberateTextContent = new PIXI.Container();
	liberateTextContent.x = 6200;
	liberateTextContent.y = 70;
	liberateTextContent.width = 1200;
	liberateTextContent.height = 116;
	// liberateTextContent.scale.x = 0;
	liberateTextContent.addChild(liberateText);

	liberateTextMask = new PIXI.Graphics();
	liberateTextMask.lineStyle(0);
	liberateTextMask.beginFill(0);
	liberateTextMask.drawRect(6200,70,1200,116);
	liberateTextMask.endFill(0);
	liberateTextMask.scale.x = 0;
	liberateTextMask.scale.y = 0;
	liberateTextContent.mask = liberateTextMask;

	let liberateText1 = createSprite("part1/liberate_text1.png",{
		x:0,
		y:0,
	});
	liberateTextCont1 = new PIXI.Container();
	liberateTextCont1.x = 7709;
	liberateTextCont1.y = 70;
	liberateTextCont1.width =1200;
	liberateTextCont1.height = 84;
	liberateTextCont1.addChild(liberateText1);

	liberateTextMask1 = new PIXI.Graphics();
	liberateTextMask1.lineStyle(0);
	liberateTextMask1.beginFill(0);
	liberateTextMask1.drawRect(7709,70,1200,84);
	liberateTextMask1.endFill(0);
	liberateTextMask1.scale.x = 0;
	liberateTextCont1.mask = liberateTextMask1;

	let redScarfText = createSprite("part1/red_text.png",{
		x:0,
		y:0,
	});
	redScarfCont = new PIXI.Container();
	redScarfCont.x = 9709;
	redScarfCont.y = 100;
	redScarfCont.width = 1500;
	redScarfCont.height = 84;
	redScarfCont.addChild(redScarfText);

	redScarfMask = new PIXI.Graphics();
	redScarfMask.lineStyle(0);
	redScarfMask.beginFill(0);
	redScarfMask.drawRect(9709,100,1500,84);
	redScarfMask.endFill(0);
	redScarfMask.scale.x = 0;
	redScarfCont.mask = redScarfMask;

	let reclamationText = createSprite("part2/reclamation_text.png",{
		x:0,
		y:0,
	});
	reclamationCont = new PIXI.Container();
	reclamationCont.x = 13700;
	reclamationCont.y = 70;
	reclamationCont.width = 1200;
	reclamationCont.height = 120;
	reclamationCont.addChild(reclamationText);

	reclamationMask = new PIXI.Graphics();
	reclamationMask.lineStyle(0);
	reclamationMask.beginFill(0);
	reclamationMask.drawRect(13700,70,1200,120);
	reclamationMask.endFill(0);
	reclamationMask.scale.x = 0;
	reclamationCont.mask = reclamationMask;

	let monumentText = createSprite("part2/monument_text.png",{
		x:0,
		y:0,
	});
	monumentCont = new PIXI.Container();
	monumentCont.x = 16100;
	monumentCont.y = 130;
	monumentCont.width = 1200;
	monumentCont.height = 87;
	monumentCont.addChild(monumentText);

	monumentMask = new PIXI.Graphics();
	monumentMask.lineStyle(0);
	monumentMask.beginFill(0);
	monumentMask.drawRect(16100,130,1200,120);
	monumentMask.endFill(0);
	monumentMask.scale.x = 0;
	monumentCont.mask = monumentMask;

	let rocksText = createSprite("part2/rocks_text.png",{
		x:0,
		y:0,
	});
	rocksCont = new PIXI.Container();
	rocksCont.x = 19200;
	rocksCont.y = 100;
	rocksCont.width = 1200;
	rocksCont.height = 120;
	rocksCont.addChild(rocksText);

	rocksMask = new PIXI.Graphics();
	rocksMask.lineStyle(0);
	rocksMask.beginFill(0);
	rocksMask.drawRect(19200,100,1200,120);
	rocksMask.endFill(0);
	rocksMask.scale.x = 0;
	rocksCont.mask = rocksMask;

	let pagodaText = createSprite("part2/pagoda_text.png",{
		x:0,
		y:0,
	});
	pagodaCont = new PIXI.Container();
	pagodaCont.x = 20900;
	pagodaCont.y = 100;
	pagodaCont.width = 1200;
	pagodaCont.height = 120;
	pagodaCont.addChild(pagodaText);

	pagodaMask = new PIXI.Graphics();
	pagodaMask.lineStyle(0);
	pagodaMask.beginFill(0);
	pagodaMask.drawRect(20900,100,1200,120);
	pagodaMask.endFill(0);
	pagodaMask.scale.x = 0;
	pagodaCont.mask = pagodaMask;

	part1.addChild(title,trainPole,redScarf,liberateTextMask,liberateTextContent,liberateTextCont1,liberateTextMask1,redScarfCont,redScarfMask,
		reclamationCont,reclamationMask,pagodaCont,pagodaMask,rocksCont,rocksMask,monumentCont,monumentMask);
}
// 堤坝
function damsAn(){
	// let damsBg = createSprite("part1/dams.png",{
	// 	x:0,
	// 	y:0,
	// });
	let dams1 = createSprite("part1/dams1.png",{
		x:0,
		y:0,
	});
	let dams2 = createSprite("part1/dams2.png",{
		x:3600,
		y:0,
	});

	let damsBg =new PIXI.Container();
	damsBg.x = 0;
	damsBg.y = 0;
	damsBg.addChild(dams1,dams2);
	
	boat = createSprite("part1/boat.png",{
		x:2800,
		y:desiginwidth - 303 - 320,
	});
	boat1 = createSprite("part1/boat1.png",{
		x:1100,
		y:desiginwidth - 303 - 320,
	});
	
	let damsText = createSprite("part1/dams_text.png",{
		x:5150,
		y: 700,
	});

	let tunk = createAnimatedSprite("part1/tunk",5,{
		x:4410,
		y:desiginwidth - 357 -225,
		animationSpeed: 0.1,
	});
	tunk.play();

	dams = new PIXI.Container();
	dams.x = 7000;
	dams.y = 0;
	dams.width = 7224;
	dams.height = 1080;
	dams.addChild(damsBg,tunk,boat,boat1,damsText);
}
// 解放
function liberateAn(){
	let liberateBg = createSprite("part1/liberate.png",{
		x:0,
		y:20,
	});
	let red_flag = createAnimatedSprite("part1/red_flag",2,{
		x:1325,
		y:10,
		animationSpeed: 0.1,
	});
	red_flag.play();


	let hand = createSprite("part1/hand1.png",{
		x:1350,
		y:250,
	});
	TweenMax.to(hand,3,{x:1400,y:200,repeat:-1,ease: Linear.easeNone});
	let circles = createSprite("part1/circles.png",{
		x:1310,
		y:330,
	});
	TweenMax.to(circles,1,{alpha:0,repeat:-1,ease: Linear.easeNone});
	// 视频点击事件
	let liberateEven = new PIXI.Container();
	liberateEven.x = 0;
	liberateEven.y = 0;
	liberateEven.width = 1672;
	liberateEven.height = 400;
	liberateEven.interactive = true;
	liberateEven.buttonMode = true;
	liberateEven.addChild(hand,circles);
	liberateEven.on('pointerdown', ()=>{
		myVid1.src=require("../assets/part1.mp4");
		videoBoxShow();
	});

	liberate = new PIXI.Container();
	liberate.x = 6000;
	liberate.y = desiginwidth-1059-20;
	liberate.width = 1672;
	liberate.height = 1059;
	liberate.addChild(liberateBg,red_flag,liberateEven);

	
}
// 火车
function trainAn(){
	let trainBody = createSprite("part1/train.png",{
		x:0,
		y:0,
	});

	let smok = createAnimatedSprite("part1/smok",3,{
		x:0,
		y:0,
		animationSpeed: 0.1,
	});
	smok.play();

	let wheel1 = createSprite("part1/wheel.png",{
		x:365.82+203/2,
		y:1059-208+208/2,
	});
	
	let wheel3 = createSprite("part1/wheel.png",{
		x:1407*0.56+203/2,
		y:1059-208+208/2,
	});
	wheel1.anchor.set(0.5);
	wheel3.anchor.set(0.5);

	let wheel2 = createSprite("part1/wheel.png",{
		x:0,
		y:0,
	});
	wheel2.anchor.set(0.5);
	
	let shortAxle = createSprite("part1/short_axle.png",{
		x:1407*0.477-(576.87+203/2),
		y:1059*0.84-(1059-208+208/2),
	});
	shortAxle.anchor.set(1);

	let longAxle = createSprite("part1/long_axle.png",{
		x:1407*0.477-(576.87+203/2),
		y:1059*0.84-(1059-208+208/2)-5,
	});
	longAxle.anchor.set(0.1,0.4);

	let trainAxle = new PIXI.Container();
	trainAxle.x = 576.87+203/2;
	trainAxle.y =1059-208+208/2;
	trainAxle.width = 203;
	trainAxle.height = 208;
	
	trainAxle.addChild(wheel2,shortAxle,longAxle);

	new TimelineMax ()
	.add([
		TweenMax.to(trainAxle, 3,  {rotation:7,repeat:-1,ease: Linear.easeNone}),
		TweenMax.to(shortAxle, 3,  {rotation:-7,repeat:-1,ease: Linear.easeNone}),
		TweenMax.to(longAxle, 3,  {rotation:-7,repeat:-1,ease: Linear.easeNone}),
	]);

	new TimelineMax ()
	.add([
		TweenMax.to(wheel1, 1,  {rotation:2,repeat:-1,ease: Linear.easeNone}),
		TweenMax.to(wheel3, 1,  {rotation:2,repeat:-1,ease: Linear.easeNone}),
	]);
	
	let axle = createSprite("part1/axle.png",{
		x:1407-717,
		y:1059-250,
	});

	train = new PIXI.Container();
	train.x = 0;
	train.y = desiginwidth;
	train.width = 1407;
	train.height = 1059;
	train.pivot.x = 0;
	train.pivot.y = 1059;
	train.addChild(trainBody,wheel1,wheel3,trainAxle,axle,smok);

	trainMask = new PIXI.Graphics();
	trainMask.lineStyle(0);
	trainMask.beginFill(0);
	trainMask.drawRect(0,desiginwidth,1407,1059);
	trainMask.endFill(0);
	// trainMask.width = 1407;
	trainMask.scale.x = 1;
	trainMask.scale.y = 1;
	trainMask.pivot.x = 0;
	trainMask.pivot.y = 1059;
	train.mask = trainMask;

	let trainGreenMask = createAnimatedSprite("part3/train_green",2,{
		x:0,
		y:0,
		animationSpeed: 0.1,
	});
	trainGreenMask.play();
	trainGreen =new PIXI.Container();
	trainGreen.x = 0;
	trainGreen.y = desiginwidth;
	trainGreen.width = 1006;
	trainGreen.height = 423;
	trainGreen.pivot.x = 0;
	trainGreen.pivot.y = 423;
	trainGreen.addChild(trainGreenMask);
	trainGreen.alpha = 0;
	// train.mask = trainGreen;

	let axle0 = createSprite("part1/train_axle.png",{
		x:0,
		y:1060,
	});
	let saxle1= createSprite("part1/train_axle.png",{
		x:3482*1,
		y:1060,
	});
	let axle1 = createSprite("part1/train_axle.png",{
		x:3482*2,
		y:1060,
	});
	let axle2 = createSprite("part1/train_axle.png",{
		x:3482*3,
		y:1060,
	});
	let axle3 = createSprite("part1/train_axle.png",{
		x:3482*4,
		y:1060,
	});
	let axle4 = createSprite("part1/train_axle.png",{
		x:3482*5,
		y:1060,
	});
	let axle5 = createSprite("part1/train_axle.png",{
		x:3482*6,
		y:1060,
	});
	let axle6 = createSprite("part1/train_axle.png",{
		x:3482*7,
		y:1060,
	});
	let axle7 = createSprite("part1/train_axle.png",{
		x:3482*8,
		y:1060,
	});
	let axle8 = createSprite("part1/train_axle.png",{
		x:3482*9,
		y:1060,
	});
	let axle9 = createSprite("part1/train_axle.png",{
		x:3482*10,
		y:1060,
	});
	let axle10 = createSprite("part1/train_axle.png",{
		x:3482*11,
		y:1060,
	});

	let axle11 = createSprite("part1/train_axle.png",{
		x:3482*12,
		y:1060,
	});
	let axle12 = createSprite("part1/train_axle.png",{
		x:3482*13,
		y:1060,
	});
	let axle13 = createSprite("part1/train_axle.png",{
		x:3482*14,
		y:1060,
	});
	let axle14 = createSprite("part1/train_axle.png",{
		x:3482*15,
		y:1060,
	});
	let axle15 = createSprite("part1/train_axle.png",{
		x:3482*16,
		y:1060,
	});
	let axle16 = createSprite("part1/train_axle.png",{
		x:3482*17,
		y:1060,
	});
	let axle17 = createSprite("part1/train_axle.png",{
		x:3482*18,
		y:1060,
	});
	let axle18 = createSprite("part1/train_axle.png",{
		x:3482*19,
		y:1060,
	});
	let axle19 = createSprite("part1/train_axle.png",{
		x:3482*20,
		y:1060,
	});
	let axle20 = createSprite("part1/train_axle.png",{
		x:3482*21,
		y:1060,
	});
	part1.addChild(trainGreen,train,trainMask,axle0,axle1,saxle1,axle2,axle3,axle4,axle5,axle6,axle7,axle8,axle9,axle10,
		axle11,axle12,axle13,axle14,axle15,axle16,axle17,axle18,axle19,axle20);
}

let scrollPro = 0, scrollDirection = "left";
let scroller = new Scroller(scrollerCallback, {
	zooming: false,
	animating: true,
	bouncing: false,
	animationDuration: 1000
});
scroller.__enableScrollY = true;

var mousedown = false;
document.addEventListener("touchstart", function (e) {
	scroller.doTouchStart(e.touches, e.timeStamp);
	mousedown = true;
}, false);

document.addEventListener("touchmove", function (e) {
	if (!mousedown) {
		return;
	}
	scroller.doTouchMove(e.touches, e.timeStamp);
	mousedown = true;
}, false);

document.addEventListener("touchend", function (e) {
	if (!mousedown) {
		return;
	}
	scroller.doTouchEnd(e.timeStamp);
	mousedown = false;
}, false);

function scrollerCallback(left, top, zoom) {
	
	if(scrollDirection == "top"){
		containerScroll.x = -top / _scale;
	}
	if(scrollDirection == "left"){
		containerScroll.x = -left / _scale;
	}

	scrollPro = left > top ? left / _scale : top / _scale;

	// console.log(scrollPro);
	//todo 位移距离对应在哪个具体场景
	//  train animated
	if( scrollPro>0 &&  scrollPro < 35298){
		trainGreen.alpha = 1;
		train.x = scrollNum(0,35298,scrollPro,0,35298);
		trainMask.x = scrollNum(0,35298,scrollPro,0,35298);
		trainGreen.x = scrollNum(0,35298,scrollPro,0,35298);
		if( scrollPro>5872-1470 &&  scrollPro < 8000){
			train.scale.x = scrollNum(5872-1470,8000,scrollPro,1,0.6);
			train.scale.y = scrollNum(5872-1470,8000,scrollPro,1,0.6);
			trainMask.scale.x = scrollNum(5872-1470,8000,scrollPro,1,0.6);
			// trainMask.scale.y = scrollNum(5872-1470,8000,scrollPro,1,0.6);
			trainGreen.scale.x = scrollNum(5872-1470,8000,scrollPro,1,0.8);
			trainGreen.scale.y = scrollNum(5872-1470,8000,scrollPro,1,0.8);
		}
		if(scrollPro>22900){
			trainGreen.alpha = 1;
		}else{
			trainGreen.alpha = 0;
		}
		if( scrollPro>23550 &&  scrollPro < 24000){
			trainMask.scale.x = scrollNum(23550,24000,scrollPro,1,0);
		}
		if( scrollPro > 24000){
			train.alpha = 0;
		} else{
			train.alpha = 1;
		}
	}
	if(scrollPro>0 &&  scrollPro < 3400){
		title.x = scrollNum(0,3400,scrollPro,500,2900);
		title.scale.x = scrollNum(0,3400,scrollPro,1,2);
		title.scale.y = scrollNum(0,3400,scrollPro,1,2);
		title.alpha = scrollNum(0,3400,scrollPro,1,0);
	}

	
	//  cound
	if( scrollPro>310 &&  scrollPro < 3200){
		clound1.x =scrollNum(310,3200,scrollPro,1250,700);
		clound2.x =scrollNum(310,3200,scrollPro,1300,1500);
		clound2.y =scrollNum(310,3200,scrollPro,150,-500);
		mountain2.x = scrollNum(310,3200,scrollPro,0,-300);
		mountain1.x = scrollNum(310,3200,scrollPro,2000,1200);
		telegraphPle.x = scrollNum(310,3200,scrollPro,0,-800);
		clound3.x  = scrollNum(310,3200,scrollPro,3400,1500);
		clound3.y  = scrollNum(310,3200,scrollPro,300,-500);
	}
	//  解放文案
	if( scrollPro>6200-pageHeight-2000 &&  scrollPro < 6200-pageHeight+1500){
		liberateTextMask.scale.x =scrollNum(6200-pageHeight-2000,6200-pageHeight+1500,scrollPro,0,1);
		liberateTextMask.scale.y =scrollNum(6200-pageHeight-2000,6200-pageHeight+1500,scrollPro,0,1);
	}
	//  解放文案
	if( scrollPro>7709-pageHeight-2000 &&  scrollPro < 7709-pageHeight+1500){
		liberateTextMask1.scale.x =scrollNum(7709-pageHeight-2000,7709-pageHeight+1500,scrollPro,0,1);
	}
	//  八路文案
	if( scrollPro>9709-pageHeight-2000 &&  scrollPro <  9709-pageHeight+1500){
		redScarfMask.scale.x =scrollNum(9709-pageHeight-2000,9709-pageHeight+1500,scrollPro,0,1);
	}

	//  移山填海
	if( scrollPro>13700-pageHeight-2000 &&  scrollPro <  13700-pageHeight+1500){
		reclamationMask.scale.x =scrollNum(13700-pageHeight-2000,13700-pageHeight+1500,scrollPro,0,1);
	}

	//  纪念碑
	if( scrollPro>16100-pageHeight-2000 &&  scrollPro <  16100-pageHeight+1500){
		monumentMask.scale.x =scrollNum(16100-pageHeight-2000,16100-pageHeight+1500,scrollPro,0,1);
		handTip.alpha = scrollNum(16100-pageHeight+500,16100-pageHeight+1500,scrollPro,0,1);
	}
	
	
	//  日观岩
	if( scrollPro>19200-pageHeight-2000 &&  scrollPro <  19200-pageHeight+1500){
		rocksMask.scale.x =scrollNum(19200-pageHeight-2000,19200-pageHeight+1500,scrollPro,0,1);
	}

	//  植物园
	if( scrollPro>20900-pageHeight-2000 &&  scrollPro <  20900-pageHeight+1500){
		pagodaMask.scale.x =scrollNum(20900-pageHeight-2000,20900-pageHeight+1500,scrollPro,0,1);
	}

	// //  纪念碑
	// if( scrollPro>16100-pageHeight-500 &&  scrollPro <  16100-pageHeight+1000){
	// 	monumentMask.scale.x =scrollNum(16100-pageHeight-500,16100-pageHeight+1000,scrollPro,0,1);
	// }

	// //  日观岩
	// if( scrollPro>19200-pageHeight-500 &&  scrollPro <  19200-pageHeight+1000){
	// 	rocksMask.scale.x =scrollNum(19200-pageHeight-500,19200-pageHeight+1000,scrollPro,0,1);
	// }

	if( scrollPro>6400 &&  scrollPro < 7600){
		boat1.x =scrollNum(6400,7600,scrollPro,1100,1600);
	
	}
	if( scrollPro>8300 &&  scrollPro < 10000){
		boat.x =scrollNum(8300,10000,scrollPro,2800,3600);
	
	}
	
	console.log("pageHeight----"+pageHeight);
    //  小白鹭
	if( scrollPro>3424+1461-pageHeight+200 &&  scrollPro < 3424+1461-pageHeight+200+1500){
		egret.x = scrollNum(3424+1461-pageHeight+200,3424+1461-pageHeight+200+1500,scrollPro,3424+1461,3424+1461-600);
	}
	// 第二部分 鸟
	if( scrollPro>13900 &&  scrollPro < 15000){
		birds.x =scrollNum(13900,15000,scrollPro,1220,1920);
		birds.y =scrollNum(13900,15000,scrollPro,1080,-650);
	}
	

	// 第二部分 山
	if( scrollPro>15200 &&  scrollPro < 17684){
		pagoda.x =scrollNum(15200,17684,scrollPro,18000,17500);
		part2Mountain.x =scrollNum(15200,17684,scrollPro,15000,14300);
	}
	// 植物园
	if( scrollPro>17667 &&  scrollPro < 21462){
		gardenMountainl.x =scrollNum(17667,21462,scrollPro,0,-400);
		gardenMountain.x =scrollNum(17667,21462,scrollPro,3800,3700);
		garden2.x =scrollNum(17667,21462,scrollPro,1200,700);
		garden1.x =scrollNum(17667,21462,scrollPro,1000,800);
		gardenName.x =scrollNum(17667,21462,scrollPro,2720,2600);
		parent.x =scrollNum(17667,21462,scrollPro,2600,2900);
	}
	if( scrollPro>21500 &&  scrollPro < 23580){
		clound4.x =scrollNum(21500,23580,scrollPro,2800,3800);
		
	}
	
	if(scrollPro>25000 &&  scrollPro < 25400){
		stu1.x =scrollNum(25000,25400,scrollPro,900,700);
		for(var i = 0; i < 5; i++){
			let num1 = 25000 + (400)/5 * i;
			let num2 = 25000 + (400)/5 * (i+1);
			// stu3.play();
			if(num1 < scrollPro && scrollPro < num2){
				stu3.gotoAndStop(i);
			}
		}
		
	}

	if(scrollPro>25500 &&  scrollPro < 26900){
		stu2.y =scrollNum(25500,26900,scrollPro,490,400);
	}

	if(scrollPro>26000 &&  scrollPro < 29000){
		part3Birds.y =scrollNum(26000,29000,scrollPro,200,0);
		part3Birds.x =scrollNum(26000,29000,scrollPro,1220,2000);
	}
	if(scrollPro>27000 &&  scrollPro < 28000){
		// wind.scale.y = scrollNum(27000,28000,scrollPro,0,1);
		// wind.scale.x = scrollNum(27000,28000,scrollPro,0,1);
		man.x = scrollNum(27000,28000,scrollPro,3920,3820);
		paper.scale.y = scrollNum(27000,28000,scrollPro,0.3,1);
		paper.scale.x = scrollNum(27000,28000,scrollPro,0.3,1);
		paper.x = scrollNum(27000,28000,scrollPro,3920,4620);
		paper.y = scrollNum(27000,28000,scrollPro,380,50);
		paper.rotation =scrollNum(27000,28000,scrollPro,0.5,0);	
	}
	if(scrollPro > 27500 && isLeaf){
		TweenMax.to(wind, 3, {left:10500, top:400});
		// TweenMax.to(leaf1, 3, {bezier:[{left:10500, top:400}, {left: 9800, top: 1200}], orientToBezier:true, ease:Linear.easeOut});
		// TweenMax.to(leaf2, 1, {bezier:[ {left: 9700, top: 500},{left: 12500, top: 1100}], orientToBezier:true, ease:Linear.easeOut});
		// TweenMax.to(leaf3, 3, {bezier:[{left: 11000, top: 600},{left: 13500, top: 900}], orientToBezier:true, ease:Linear.easeOut});
		// TweenMax.to(leaf4, 2, {bezier:[{left: 11500, top: 700}, {left: 12300, top: 850}], orientToBezier:true, ease:Linear.easeOut});
		// TweenMax.to(leaf5, 3, {bezier:[{left: 12500, top: 650},{left: 13400, top: 1300}], orientToBezier:true, ease:Linear.easeOut});
		// TweenMax.to(leaf6, 2, {bezier:[{left: 12000, top: 500}, {left: 13500, top: 970}], orientToBezier:true, ease:Linear.easeOut});
		// TweenMax.to(leaf, 1, {bezier:[{left: 9500, top: 500},{left: 12500, top: 1000}], orientToBezier:true, ease:Linear.easeOut});		
		isLeaf = false ;
	}else if(!isLeaf && scrollPro < 27500){
		TweenMax.to(leaf1, 3, {bezier:[{left:10500, top:400}, {left: 10000, top: 100}], orientToBezier:true, ease:Linear.easeOut});
		TweenMax.to(leaf2, 1, {bezier:[ {left: 9700, top: 500},{left: 10100, top: 300}], orientToBezier:true, ease:Linear.easeOut});
		TweenMax.to(leaf3, 3, {bezier:[{left: 11000, top: 600},{left: 10200, top: 200}], orientToBezier:true, ease:Linear.easeOut});
		TweenMax.to(leaf4, 2, {bezier:[{left: 11500, top: 700}, {left: 10000, top: 140}], orientToBezier:true, ease:Linear.easeOut});
		TweenMax.to(leaf5, 3, {bezier:[{left: 12500, top: 650},{left: 10150, top: 250}], orientToBezier:true, ease:Linear.easeOut});
		TweenMax.to(leaf6, 2, {bezier:[{left: 12000, top: 500}, {left: 10150, top: 270}], orientToBezier:true, ease:Linear.easeOut});
		TweenMax.to(leaf, 1, {bezier:[{left: 9500, top: 500},{left: 10250, top: 70}], orientToBezier:true, ease:Linear.easeOut});
		isLeaf = true ;		
	}
	
}

function initPage() {
	_width < _height ? (_scale = _width / desiginwidth, pageHeight= _height / _scale, $("#loading").css({
		"-webkit-transform": "rotate(90deg) scale(" + _scale + ") translate3d(0,-"+ desiginwidth +"px,0)",
		width: _height / _scale,
		height: desiginwidth +"px"
	}), $(".loading_logo").css({
		left: (_height /  _scale - 242) / 2 + "px"
	}), $(".loading_main").css({
		left: (_height/  _scale - 283) / 2 + "px"
	})) : (_scale = _height / desiginwidth, pageHeight= _width / _scale, $("#loading").css({
		"-webkit-transform": "rotate(0deg) scale(" + _scale + ") translate3d(0,0,0)",
		width: _width / _scale,
		height: desiginwidth +"px"
	}), $(".loading_logo").css({
		left: (_width / _scale - 242) / 2 + "px"
	}), $(".loading_main").css({
		left: (_width/ _scale - 283) / 2 + "px"
	}))
	console.log(_scale)
}

// 横屏
function horizontalScreen(){
    setTimeout(function() {
		initPage();
		let Te = 0;
		containerFitWindow.rotation = Te;
		containerFitWindow.scale.set(_scale, _scale);
		app.renderer.resize(_width,_height);
		containerFitWindow.position.set(0,0);
		scrollDirection = "left";
		$("#loading").css({
			"-webkit-transform": "rotate(0deg) scale(" + _scale + ") translate3d(0,0,0)",
			width: _width / _scale,
			height:  desiginwidth +"px"
		}),
		$(".loading_logo").css({
			left: (_width / _scale - 242) / 2 + "px"
		}),
		$(".loading_main").css({
			left: (_width / _scale - 283) / 2 + "px"
		}),
		setTimeout(function() {
			scroller.setDimensions(_width, _height, _desiginLength + _width, _height);
			console.log(scrollPro)
			scroller.scrollTo(scrollPro * _scale, 0, false);
			pageHeight= _width / _scale;
			console.log("_width"+_width);
			console.log("_height"+_height);
			console.log("_scale"+_scale);
			console.log("pageHeight"+pageHeight);
		},200)
	},
	300);
}
// 竖屏
function verticalScreen(){
    setTimeout(function() {
		initPage();
		let Te = Math.PI / 2;
		containerFitWindow.rotation = Te;
		containerFitWindow.scale.set(_scale, _scale);
		
		app.renderer.resize(_width,_height);
		containerFitWindow.position.set(_width,0);
		scrollDirection = "top";
		
		$("#loading").css({
			"-webkit-transform": "rotate(90deg) scale(" + _scale + ") translate3d(0,-"+ desiginwidth +"px,0)",
			width: _height / _scale,
			height: desiginwidth +"px"
		}),
		$(".loading_logo").css({
			left: (_height / _scale - 242) / 2 + "px"
		}),
		$(".loading_main").css({
			left: (_height / _scale - 283) / 2 + "px"
		}),
		setTimeout(function() {
			pageHeight= _height / _scale;
			scroller.setDimensions( _width,  _height,  _width, _desiginLength + _height);
			scroller.scrollTo(0,scrollPro * _scale,false);
		},200)
	},
	300);
}


// 区间最小值, 区间最大值, top, 初始位置, 终点, 速度, 方向
function scrollNum(minNum,maxNum,top,start,end){
    return start + ((top - minNum)/(maxNum - minNum)*(end-start));
}

$(function(){
	// getMusic();
	wxshare.setInfo(wx);
});


// 视频
var myVid1=document.getElementById("my_video1");
function videoBoxShow(){
	myVid1.play();
	$(".videoBox").show("slow");
	myVid1.onended = function() {
		$('.videoBox').hide();
		$('.skipvide').hide();
	}
}
$('.videoskip').on('click',async function(){
	myVid1.pause();
	$('.videoBox').hide();
});
