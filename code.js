var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["848314f8-d7dc-4755-a4a1-3782173096b1","26b80e63-bc0f-408d-b288-be2282aebd4e","3221caad-ae37-4eec-92a8-56bae4769e66","c4e310e0-8174-4127-a46e-0cbcc94b488b"],"propsByKey":{"848314f8-d7dc-4755-a4a1-3782173096b1":{"name":"ball","sourceUrl":null,"frameSize":{"x":393,"y":394},"frameCount":1,"looping":true,"frameDelay":12,"version":"5rvHR9H7LjWqn7DddRlCallDQwGUE7Rd","categories":["sports"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":393,"y":394},"rootRelativePath":"assets/848314f8-d7dc-4755-a4a1-3782173096b1.png"},"26b80e63-bc0f-408d-b288-be2282aebd4e":{"name":"alien","sourceUrl":null,"frameSize":{"x":116,"y":157},"frameCount":2,"looping":true,"frameDelay":12,"version":"mRH34QbNOImBb1t.HfvPuGylGFpOXr2U","categories":["icons"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":232,"y":157},"rootRelativePath":"assets/26b80e63-bc0f-408d-b288-be2282aebd4e.png"},"3221caad-ae37-4eec-92a8-56bae4769e66":{"name":"b","sourceUrl":null,"frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":12,"version":"5Zwqpdp1g9MtHfg8pj4Cx.bL.KqG7nsB","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/3221caad-ae37-4eec-92a8-56bae4769e66.png"},"c4e310e0-8174-4127-a46e-0cbcc94b488b":{"name":"dream","sourceUrl":null,"frameSize":{"x":386,"y":268},"frameCount":1,"looping":true,"frameDelay":12,"version":"5hr9qSfEdju6ahxFk7ZUSIO3fjB92FR0","categories":["icons"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":386,"y":268},"rootRelativePath":"assets/c4e310e0-8174-4127-a46e-0cbcc94b488b.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var b = createSprite(200,200);
 b.setAnimation("b")
var ball = createSprite(200,345,200,345)
ball.shapeColor="red"

var alien1 = createSprite(200,280,10,10)
var alien2 = createSprite(200,170,10,10)
var alien3 = createSprite(200,50,10,10)

var score =0;
var opscore = 0

ball.setAnimation("ball");
ball.scale=.07;
alien1.setAnimation("alien");
alien1.scale=.3;
alien2.setAnimation("alien");
alien2.scale=.3;
alien3.setAnimation("alien");
alien3.scale=.3;

alien1.setVelocity(-10,0);
alien2.setVelocity(10,0);
alien3.setVelocity(-10,0);


function draw() {
  
//background(b);

createEdgeSprites()




alien1.bounceOff(edges)
alien2.bounceOff(edges)
alien3.bounceOff(edges)

if(keyDown(UP_ARROW)){
  ball.y=ball.y-3
}

if(keyDown(DOWN_ARROW)){
  ball.y=ball.y+3
}

if(keyDown(LEFT_ARROW)){
  ball.x=ball.x-3
}

if(keyDown(RIGHT_ARROW)){
  ball.x=ball.x+3
}

if(ball.isTouching(alien1)|| ball.isTouching(alien2)|| ball.isTouching(alien3)){
  playSound("assets/category_achievements/bubbly_game_achievement_sound.mp3")
  ball.x=200
  ball.y=350
  opscore = opscore+1
}
if(ball.isTouching(topEdge)){
  playSound("assets/category_achievements/vibrant_game_game_gold_tresure_chest_open.mp3")
  ball.x=200
  ball.y=345
  score=score+1
}
drawSprites()
textSize(15)
  fill("Yellow")
  text("Humans:"+score,328,30);
  

textSize(15)
  fill("Yellow")
  text("Aliens:"+opscore,5,30);
  

}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
