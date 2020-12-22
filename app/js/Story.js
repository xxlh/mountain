import $ from "jquery"
import { TimelineMax, TweenMax, Linear } from 'gsap';
import ScrollMagic from 'scrollmagic'
import 'imports-loader?define=>false!scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap';
import 'imports-loader?define=>false!scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators.js';


class Story {
	constructor() {
		this.controller = new ScrollMagic.Controller({vertical:false});
		this.isInit = false;
		this.init();
		
		
	}

	init() {
		let isPortrait = window.orientation == 0 || window.orientation == 180;
		if (this.isInit || isPortrait) return false;
		let documentFontSize = parseFloat(document.documentElement.style.fontSize);
		this.redFlag(documentFontSize);
		this.school(documentFontSize);
		this.isInit = true;
		this.controller.scrollTo(".trainPole");

		
	}
	
	school(documentFontSize){
		var leafTween = new TimelineMax ()
			.add([
				TweenMax.to(".part02 .wind", 1, {width:5*documentFontSize,ease: Linear.easeNone}),
				TweenMax.to(".part02 .man", 1, {left: 38*documentFontSize,ease: Linear.easeNone}),
				TweenMax.to(".part02 .leaf.l1", 3, {bezier:[{left:0, top:0}, {left: 4*documentFontSize, top: 7*documentFontSize}], orientToBezier:true, ease:Linear.easeOut}),
				TweenMax.to(".part02 .leaf.l2", 1, {bezier:[ {left: 3*documentFontSize, top: 6*documentFontSize},{left: 12*documentFontSize, top: 8*documentFontSize}], orientToBezier:true, ease:Linear.easeOut}),
				TweenMax.to(".part02 .leaf.l3", 3, {bezier:[{left: 5*documentFontSize, top: 7*documentFontSize},{left: 7*documentFontSize, top: 6*documentFontSize}], orientToBezier:true, ease:Linear.easeOut}),
				TweenMax.to(".part02 .leaf.l4", 2, {bezier:[{left: 4*documentFontSize, top: 9*documentFontSize}, {left: 9*documentFontSize, top: 9*documentFontSize}], orientToBezier:true, ease:Linear.easeOut}),
				TweenMax.to(".part02 .leaf.l5", 3, {bezier:[{left: 6*documentFontSize, top: 2*documentFontSize},{left: 11*documentFontSize, top: 10*documentFontSize}], orientToBezier:true, ease:Linear.easeOut}),
				TweenMax.to(".part02 .leaf.l6", 2, {bezier:[{left: 3*documentFontSize, top: 6*documentFontSize}, {left: 13*documentFontSize, top: 8*documentFontSize}], orientToBezier:true, ease:Linear.easeOut}),
				TweenMax.to(".part02 .leaf.l7", 1, {bezier:[{left: 4*documentFontSize, top: 5*documentFontSize},{left: 6*documentFontSize, top: 9*documentFontSize}], orientToBezier:true, ease:Linear.easeOut}),
				TweenMax.to(".part02 .paper", 1, {scale:8,bezier:[{left: 38.5*documentFontSize, bottom: 2.8*documentFontSize},{left: 47*documentFontSize, bottom: 5.5*documentFontSize,}], orientToBezier:true, ease:Linear.easeNone}),
			]);
		new ScrollMagic.Scene({
			triggerElement: ".oldman",
			duration: 500,	
			})
			.setTween(leafTween)
			.addTo(this.controller);

		var imagesTrain= [
			require("../images/part3/train_green1.png"),
			require("../images/part3/train_green2.png"),
		];
		var train = {curImg: 0};
		var trainTween = TweenMax.to(train,1,
			{
				curImg: imagesTrain.length - 1,	// animate propery curImg to number of images
				roundProps: "curImg",				// only integers so it can be used as an array index
				repeat: -1,									// repeat 3 times
				immediateRender: true,			// load first image automatically
				ease: Linear.easeNone,			// show every image the same ammount of time
				onUpdate: function () {
					$("#trainGreen").attr("src", imagesTrain[train.curImg]); // set the image source
				}
			}
		);
		new ScrollMagic.Scene({triggerElement: ".part02"})
			.setTween(trainTween)
			.addTo(this.controller);

		let trainChage = new TimelineMax ()
		.add([
			TweenMax.to(".trainSteam", 1, {width:0,ease: Linear.easeNone}),
			TweenMax.to(".trainGreen", 1, {opacity:1,ease: Linear.easeNone}),
		]);
		new ScrollMagic.Scene({triggerElement: ".part02 .lotusPole",duration:300})
			.setTween(trainChage)
			.addTo(this.controller);	


		var imagesBird= [
			require("../images/part3/bird1.png"),
			require("../images/part3/bird2.png"),
			require("../images/part3/bird3.png"),
		];
		var bird = {curImg: 0};
		var birdTween = TweenMax.to(bird,1,
			{
				curImg: imagesBird.length - 1,	// animate propery curImg to number of images
				roundProps: "curImg",				// only integers so it can be used as an array index
				repeat: 20,									// repeat 3 times
				immediateRender: true,			// load first image automatically
				ease: Linear.easeNone,			// show every image the same ammount of time
				onUpdate: function () {
					$(".part02 .birdFly1").attr("src", imagesBird[bird.curImg]); // set the image source
				}
			}
		);
		new ScrollMagic.Scene({triggerElement: ".stu3", duration:1000})
			.setTween(birdTween)
			.addTo(this.controller);

		new ScrollMagic.Scene({triggerElement: ".stu3", duration: 1000})
			.setTween(".part02 .birds", 1, {top:0*documentFontSize,left:19*documentFontSize,ease: Linear.easeNone})
			.addTo(this.controller);

		var imagesStdu = [
			require("../images/part3/stdu3.png"),
			require("../images/part3/stdu31.png"),
			require("../images/part3/stdu32.png"),
			require("../images/part3/stdu33.png"),
			require("../images/part3/stdu34.png"),
		];
		var stdu = {curImg: 0};
		var stduTween = TweenMax.to(stdu,1,
			{
				curImg: imagesStdu.length - 1,	// animate propery curImg to number of images
				roundProps: "curImg",				// only integers so it can be used as an array index
				repeat: 0,									// repeat 3 times
				immediateRender: true,			// load first image automatically
				ease: Linear.easeNone,			// show every image the same ammount of time
				onUpdate: function () {
					$("#stu3").attr("src", imagesStdu[stdu.curImg]); // set the image source
				}
			}
		);
		new ScrollMagic.Scene({triggerElement: ".school", duration: 300})
			.setTween(stduTween)
			.addTo(this.controller);

		var stu2Tween = new TimelineMax ()
			.add([
				TweenMax.to(".stu2", 1, {bottom:1.5*documentFontSize,scale:0.8,transformOrigin: "right bottom",ease: Linear.easeNone}),
			]);
		new ScrollMagic.Scene({
			triggerElement: ".stu3",
			duration: 500	
			})
			.setTween(stu2Tween)
			.addTo(this.controller);

		var stu1Tween = new TimelineMax ()
		.add([
			TweenMax.to(".stu1", 1, {left:7*documentFontSize,ease: Linear.easeNone}),
		]);
		new ScrollMagic.Scene({
			triggerElement: ".stu3",
			duration: 500	
			})
			.setTween(stu1Tween)
			.addTo(this.controller);
	}

	// 红旗
	redFlag(documentFontSize) {
		var imagesredFlag = [
			require("../images/part1/red_flag.png"),
			require("../images/part1/red_flag1.png"),
		];
		var redFlag = {curImg: 0};
		var redFlagTween = TweenMax.to(redFlag,0.5,
			{
				curImg: imagesredFlag.length - 1,	// animate propery curImg to number of images
				roundProps: "curImg",				// only integers so it can be used as an array index
				repeat: 10,									// repeat 3 times
				immediateRender: true,			// load first image automatically
				ease: Linear.easeNone,			// show every image the same ammount of time
				onUpdate: function () {
					$("#redFlag").attr("src", imagesredFlag[redFlag.curImg]); // set the image source
				}
			}
		);
		new ScrollMagic.Scene()
			.setTween(redFlagTween)
			.addTo(this.controller);


			var trainTween = new TimelineMax().add(
				[
					TweenMax.to(".part01 .train",{scale:0.6,transformOrigin: "left bottom"}),
					TweenMax.to(".part02 .train",{scale:0.8,transformOrigin: "left bottom"})
				]);
			
			
			let scene =new ScrollMagic.Scene({
				triggerElement: ".part01",
				offset:documentFontSize*50,
				duration: documentFontSize*70,	
				})
				// .setPin(".train")
				.setTween(".train",{scale:0.6,transformOrigin: "left bottom"})
				// ".train",{scale:.5,transformOrigin: "left bottom"}
				.addTo(this.controller);
			
			
			var imagesSmok = [
				require("../images/part1/smok1.png"),
				require("../images/part1/smok3.png"),
				require("../images/part1/smok2.png"),
			];
			var smok = {curImg: 0};
			var smokTween = TweenMax.to(smok,1,
				{
					curImg: imagesSmok.length - 1,	// animate propery curImg to number of images
					roundProps: "curImg",				// only integers so it can be used as an array index
					repeat: -1,									// repeat 3 times
					immediateRender: true,			// load first image automatically
					ease: Linear.easeNone,			// show every image the same ammount of time
					onUpdate: function () {
						$("#smok").attr("src", imagesSmok[smok.curImg]); // set the image source
					}
				}
			);
			new ScrollMagic.Scene()
				.setTween(smokTween)
				.addTo(this.controller);
			
			var part1Parallax = new TimelineMax ()
				.add([
					TweenMax.to("#part1Parallax .m2", 1, {left: -100 , ease: Linear.easeNone}),
					TweenMax.to("#part1Parallax .m1", 1, {left: -10, ease: Linear.easeNone}),
					TweenMax.to("#part1Parallax .telegraph_pole", 1, {left: -200, ease: Linear.easeNone}),
					TweenMax.to("#part1Parallax .c1", 1, {left: -1000, ease: Linear.easeNone}),
					TweenMax.to("#part1Parallax .c2", 1, {top: -1000,left:1000, ease: Linear.easeNone}),
					TweenMax.to("#part1Parallax .c3", 1, {top: -1000,left:-1000, ease: Linear.easeNone})
				]);
			new ScrollMagic.Scene({triggerElement: "#part1Parallax", duration: 2000, offset: 450})
				.setTween(part1Parallax)
				.addTo(this.controller);
			
			var titleTween = new TimelineMax ()
			.add([
				TweenMax.to(".title", 1, {opacity: 0,left: documentFontSize*25, ease: Linear.easeNone}),
				TweenMax.to(".title", 1, {scale: 1.9}),
			]);
			new ScrollMagic.Scene({
				triggerElement: ".titlePole",
				duration: documentFontSize*7,	
				})
				// .setPin(".train")
				.setTween(titleTween)
				.addTo(this.controller);
			
			// 红旗
			var imagesredFlag = [
				require("../images/part1/red_flag.png"),
				require("../images/part1/red_flag1.png"),
			];
			var redFlag = {curImg: 0};
			var redFlagTween = TweenMax.to(redFlag,0.5,
				{
					curImg: imagesredFlag.length - 1,	// animate propery curImg to number of images
					roundProps: "curImg",				// only integers so it can be used as an array index
					repeat: -1,									// repeat 3 times
					immediateRender: true,			// load first image automatically
					ease: Linear.easeNone,			// show every image the same ammount of time
					onUpdate: function () {
						$("#redFlag").attr("src", imagesredFlag[redFlag.curImg]); // set the image source
					}
				}
			);
			new ScrollMagic.Scene()
				.setTween(redFlagTween)
				.addTo(this.controller);
			
			//解放 
			var liberateTween = new TimelineMax().add(
				[
					TweenMax.to(".liberateMask", 1, {width:0, ease:Linear.easeNone}),
					TweenMax.to(".liberateMask", 1, {width:250, ease:Linear.easeNone})
				]) 
			new ScrollMagic.Scene({triggerElement: ".trainPole", duration: 300})
				.setTween(liberateTween)
				.addTo(this.controller);
			
			new ScrollMagic.Scene({triggerElement: ".trainStation", duration: 200})
				.setTween(".egret", 1, {left: 10*documentFontSize, ease:Linear.easeIn})
				.addTo(this.controller);
			
			//解放 
			var liberateTween1 = new TimelineMax().add(
				[
					TweenMax.to(".liberateMask1", 1, {width:0, ease:Linear.easeNone}),
					TweenMax.to(".liberateMask1", 1, {width:documentFontSize*8.72, ease:Linear.easeNone})
				]) 
			new ScrollMagic.Scene({triggerElement: ".redFlag", duration: 300})
				.setTween(liberateTween1)
				.addTo(this.controller);
			
			
			var redScarfTween = new TimelineMax().add(
				[
					TweenMax.to(".redScarfMask", 1, {width:0, ease:Linear.easeNone}),
					TweenMax.to(".redScarfMask", 1, {width:documentFontSize*12.1, ease:Linear.easeNone})
				]) 
			new ScrollMagic.Scene({triggerElement: ".redScarfMaskPole", duration: 300})
				.setTween(redScarfTween)
				.addTo(this.controller);
			
			// 小八路
			var imagesRed = [
				require("../images/part1/red_scarf1.png"),
				require("../images/part1/red_scarf2.png"),
				require("../images/part1/red_scarf3.png"),
			];
			var redScarf = {curImg: 0};
			var redScarfTween = TweenMax.to(redScarf, 2,
				{
					curImg: imagesRed.length - 1,	// animate propery curImg to number of images
					roundProps: "curImg",				// only integers so it can be used as an array index
					repeat: -1,									// repeat 3 times
					immediateRender: true,			// load first image automatically
					ease: Linear.easeNone,			// show every image the same ammount of time
					onUpdate: function () {
						$("#redScarfAn").attr("src", imagesRed[redScarf.curImg]); // set the image source
					}
				}
			);
			new ScrollMagic.Scene()
				.setTween(redScarfTween)
				.addTo(this.controller);
			// 堤坝建设
			var imagesTunk = [
				require("../images/part1/tunk1.png"),
				require("../images/part1/tunk2.png"),
				require("../images/part1/tunk3.png"),
				require("../images/part1/tunk4.png"),
				require("../images/part1/tunk5.png"),
			];
			var tunk = {curImg: 0};
			var tunkTween = TweenMax.to(tunk, 2,
				{
					curImg: imagesTunk.length - 1,	// animate propery curImg to number of images
					roundProps: "curImg",				// only integers so it can be used as an array index
					repeat: -1,									// repeat 3 times
					immediateRender: true,			// load first image automatically
					ease: Linear.easeNone,			// show every image the same ammount of time
					onUpdate: function () {
						$("#tunk").attr("src", imagesTunk[tunk.curImg]); // set the image source
					}
				}
			);
			// build scene
			new ScrollMagic.Scene()
				.setTween(tunkTween)
				.addTo(this.controller);
			
			
			
			// 堤坝文案
			var damsTween = new TimelineMax()
				.from(".dams_text", 1,{opacity:0})
				.to(".dams_text", 1,{opacity:1})
			
			new ScrollMagic.Scene({triggerElement: "#tunk", duration: 100})
			.setTween(damsTween)
			.addTo(this.controller);
			
			// 船只
			var botaTween = new TimelineMax().add(
			[
				TweenMax.to(".boat", 3, {left:1100, ease:Linear.easeNone})
			]) 
			new ScrollMagic.Scene({triggerElement: ".redScarfAn", duration: 700})
			.setTween(botaTween)
			.addTo(this.controller);
			
			// 鸟
			var imagesBird = [
				require("../images/part2/bird3.png"),
				require("../images/part2/bird2.png"),
				require("../images/part2/bird1.png"),
			];
			var bird = {curImg: 0};
			var birdTween = TweenMax.to(bird, 2,
				{
					curImg: imagesBird.length - 1,	// animate propery curImg to number of images
					roundProps: "curImg",				// only integers so it can be used as an array index
					repeat: -1,									// repeat 3 times
					immediateRender: true,			// load first image automatically
					ease: Linear.easeNone,			// show every image the same ammount of time
					onUpdate: function () {
						$(".birdFly").attr("src", imagesBird[bird.curImg]); // set the image source
					}
				}
			);
			new ScrollMagic.Scene()
				.setTween(birdTween)
				.addTo(this.controller);
			
			// 第二部鸟
			var birdsTween = new TimelineMax ()
			.add([
				TweenMax.to(".monument .birds", 3, {left: documentFontSize*18, ease: Linear.easeNone}),
				TweenMax.to(".monument .birds", 3, {top: documentFontSize*-5.5, ease: Linear.easeNone}),
			]);
			new ScrollMagic.Scene({triggerElement: ".birdsPole", duration:500})
			.setTween(birdsTween)
			.addTo(this.controller);
			
			// 父母
			var imagesParent = [
				require("../images/part2/parent3.png"),
				require("../images/part2/parent2.png"),
				require("../images/part2/parent1.png"),
			];
			var parent = {curImg: 0};
			var parentTween = TweenMax.to(parent, 1,
				{
					curImg: imagesParent.length - 1,	// animate propery curImg to number of images
					roundProps: "curImg",				// only integers so it can be used as an array index
					repeat: -1,									// repeat 3 times
					immediateRender: true,			// load first image automatically
					ease: Linear.easeNone,			// show every image the same ammount of time
					onUpdate: function () {
						$("#parent").attr("src", imagesParent[parent.curImg]); // set the image source
					}
				}
			);
			new ScrollMagic.Scene()
				.setTween(parentTween)
				.addTo(this.controller);
			
			// 第二部父母
			var parentWalk = new TimelineMax ()
			.add([
				TweenMax.to(".garden .parent", 1, {left: documentFontSize*28, ease: Linear.easeNone}),
			]);
			new ScrollMagic.Scene({triggerElement: ".parentPole", duration: 600,})
			.setTween(parentWalk)
			.addTo(this.controller);
			
			
			// 第二部分山
			var part2Parallax = new TimelineMax ()
			.add([
				TweenMax.to(".part2Parallax .mountain", 1, {left: documentFontSize*147, ease: Linear.easeNone}),
				TweenMax.to(".part2Parallax .pagoda", 1, {left:  documentFontSize*170, ease: Linear.easeNone}),
			]);
			new ScrollMagic.Scene({triggerElement: ".monument", duration: 2000, offset: 450})
			.setTween(part2Parallax)
			.addTo(this.controller);
			
			//移山填海
			var reclamationTween = new TimelineMax().add(
				[
					TweenMax.to(".reclamationMask", 1, {width:0, ease:Linear.easeNone}),
					TweenMax.to(".reclamationMask", 1, {width:documentFontSize*5.93, ease:Linear.easeNone})
				]) 
			new ScrollMagic.Scene({triggerElement: ".reclamation",duration: 100,})
				.setTween(reclamationTween)
				.addTo(this.controller);
			
			//纪念碑
			var monumentMaskTween = new TimelineMax().add(
				[
					TweenMax.to(".monumentMask", 1, {width:0, ease:Linear.easeNone}),
					TweenMax.to(".monumentMask", 1, {width:documentFontSize*5.93, ease:Linear.easeNone}),
					TweenMax.to(".monument .hand", 1, {opacity:1, ease:Linear.easeNone})
				]) 
			new ScrollMagic.Scene({triggerElement: ".monumentMaskPole",duration: 50})
				.setTween(monumentMaskTween)
				.addTo(this.controller);
			
			
			//礁石 文案
			var rocksMaskTween = new TimelineMax().add(
				[
					TweenMax.to(".rocksMask", 1, {width:0, ease:Linear.easeNone}),
					TweenMax.to(".rocksMask", 1, {width:documentFontSize*7.37, ease:Linear.easeNone}),
					
				]) 
			new ScrollMagic.Scene({triggerElement: ".rocks",duration: 150})
				.setTween(rocksMaskTween)
				.addTo(this.controller);
			
			
			
			//植物园 文案
			var gardenMaskTween = new TimelineMax().add(
				[
					TweenMax.to(".gardenMask", 1, {width:0, ease:Linear.easeNone}),
					TweenMax.to(".gardenMask", 1, {width:documentFontSize*7.44, ease:Linear.easeNone}),
					
				]) 
			new ScrollMagic.Scene({triggerElement: ".parentPole",duration: 300})
				.setTween(gardenMaskTween)
				.addTo(this.controller);
			
			// 植物园 视察滚动
			var gardenParallax = new TimelineMax ()
			.add([
				TweenMax.to(".garden .gardenMountainl", 1, {left: documentFontSize*-5 , ease: Linear.easeNone}),
				TweenMax.to(".garden .gardenMountain", 1, {left: documentFontSize*34, ease: Linear.easeNone}),
				TweenMax.to(".garden .clound4", 1, {left: documentFontSize*42, ease: Linear.easeNone}),
				TweenMax.to(".garden .garden2", 1, {left: documentFontSize*10, ease: Linear.easeNone}),
				TweenMax.to(".garden .gardenr1", 1, {left:documentFontSize*21, ease: Linear.easeNone}),
				TweenMax.to(".garden .garden1", 1, {left:documentFontSize*11, ease: Linear.easeNone}),
				TweenMax.to(".garden .gardenName", 1, {left:documentFontSize*26, ease: Linear.easeNone}),
				TweenMax.to(".garden .gardenNameSide", 1, {left:documentFontSize*40, ease: Linear.easeNone})
			]);
			new ScrollMagic.Scene({triggerElement: ".garden .parallax", duration: 1000, offset: 450})
				.setTween(gardenParallax)
				.addTo(this.controller);
			
			var trainsTween = new TimelineMax().add(
				[
					TweenMax.to(".page01 .train", 1, {alpha:0, ease:Linear.easeNone}),
					TweenMax.to(".page02 .train", 1, {alpha:1, ease:Linear.easeNone}),
					
				]) 
			new ScrollMagic.Scene({triggerElement: ".lotus"})
				.setTween(".page01 .train", 1, {alpha:0, ease:Linear.easeNone})
				.addTo(this.controller);
			
	}
}

export default Story;