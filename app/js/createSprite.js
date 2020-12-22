import * as PIXI from 'pixi.js';
// import * as sound from 'pixi-sound';

// 创建序列帧动画
function createAnimatedSprite(imgsrc, num, opt, start) {
    // 用json 资源创建一个 AnimatedSprite 对象
    var Textures = [],
        i, AnimatedSpriteInstance;
    i = start || 0;
    for (; i < num; i++) {
        var Texture = PIXI.Texture.from(require('@/images/'+imgsrc + i + '.png'));
        Textures.push(Texture);
    }
        AnimatedSpriteInstance = new PIXI.AnimatedSprite(Textures);
        if (opt) {
            for (const k in opt) {
                if (opt.hasOwnProperty(k)) {
                    AnimatedSpriteInstance[k] = opt[k];
                }
            }
        }
        return AnimatedSpriteInstance;
}

// 创建sprite对象
function createSprite(imgsrc,opt){
        var newSprite = new PIXI.Sprite.from(require('@/images/'+imgsrc));
        if (opt) {
            for (const k in opt) {
                if (opt.hasOwnProperty(k)) {
                    newSprite[k] = opt[k];
                }
            }
        }
        return newSprite;
}

export {createSprite, createAnimatedSprite}