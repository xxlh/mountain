import "../css/index.css"
import StoryScroll from 'storyscroll'



// 调用插件，开始布局场景
window.story = new StoryScroll ({
	direction: 'x',
	width: 375,
	length: 3000,
	debug: true,
	// loader: true,
	progressive: true,
	bgcolor: 0x00FF00
});

window.newspaper = story.sprite(require('@/images/part3/newspaper.png'), {x:70, y:900, scale:{x:.5,y:.5}})
window.newspaper2 = story.sprite(require('@/images/part3/newspaper.png'), {x:0, y:800, scale:{x:.5,y:.5}})

window.newspaperX = story.sprite(require('@/images/part3/newspaper.png'), {x:900, y:70, scale:{x:.5,y:.5}})
window.newspaperX2 = story.sprite(require('@/images/part3/newspaper.png'), {x:800, y:0, scale:{x:.5,y:.5}})

window.stu3 =  story.spriteAnimated('assets/stdu3.json', {x: 70, y:600, animationSpeed:1});

window.telegraph_poleX =  story.sprite(require('@/images/part1/telegraph_pole1.png'), {x: 200, y:10, animationSpeed:1});



window.newspapers = story.chapter({x:30, y:1200});
	window.newspaperC = newspapers.sprite(require('@/images/part3/newspaper.png'), {x:70, y:100, scale:{x:.5,y:.5}})
	window.newspaper2C = newspapers.sprite(require('@/images/part3/newspaper.png'), {x:0, y:0, scale:{x:.5,y:.5}})
