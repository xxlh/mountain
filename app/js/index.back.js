import "../css/index.css"
import $ from "jquery"
import * as PIXI from 'pixi.js';
import { TimelineMax, TweenMax, Linear } from 'gsap';
import { createSprite, createAnimatedSprite } from './createSprite';
import ScrollMagic from 'scrollmagic'
import 'imports-loader?define=>false!scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap';


let app = new PIXI.Application( document.documentElement.clientWidth, document.documentElement.clientHeight, {backgroundColor : '0x000000'});
$(".china_tolerance_content")[0].appendChild(app.view);

let containerFitWindow = new PIXI.Container();
containerFitWindow.pivot.set(0, 0);
app.stage.addChild(containerFitWindow);

let rubbish = createSprite("rubbish1.png",{
	x:0,
	y:0,
});
let part1 = new PIXI.Container();
part1.addChild(rubbish);
containerFitWindow.addChild(part1);

var tween = TweenMax.fromTo(rubbish, 1,
		{left: -100},
		{left: 100, repeat: -1, yoyo: true, ease: Circ.easeInOut}
	);


let controller = new ScrollMagic.Controller();

new ScrollMagic.Scene({
	// triggerElement: "rubbish",
	duration: 1000,	
	offset: -300	
	})
	// .setPin("rubbish")
	.setTween(tween)
	.addTo(controller); 