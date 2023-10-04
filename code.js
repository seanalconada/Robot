var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
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

var head = randomNumber(4, 10);
var eye1 = randomNumber(3, 10);
var eye2 = randomNumber(3, 10);
var mouth = randomNumber(30, 110);
background("black");
fill(rgb(randomNumber(1, 360), randomNumber(1, 360), randomNumber(1, 360)));
regularPolygon(200, 110, head, 100);
fill(rgb(randomNumber(1, 360), randomNumber(1, 360), randomNumber(1, 360)));
regularPolygon(160, 80, eye1, 40);
fill(rgb(randomNumber(1, 360), randomNumber(1, 360), randomNumber(1, 360)));
regularPolygon(240, 80, eye2, 40);
noFill();
ellipse(200, 150, mouth, 50);
fill(rgb(randomNumber(1, 360), randomNumber(1, 360), randomNumber(1, 360)));
fill(rgb(randomNumber(1, 360), randomNumber(1, 360), randomNumber(1, 360)));
rect(270, 210, 100, 50);
fill(rgb(randomNumber(1, 360), randomNumber(1, 360), randomNumber(1, 360)));
rect(30, 210, 100, 50);
fill(rgb(randomNumber(1, 360), randomNumber(1, 360), randomNumber(1, 360)));
rect(140, 330, 50, 100);
fill(rgb(randomNumber(1, 360), randomNumber(1, 360), randomNumber(1, 360)));
rect(210, 330, 50, 100);
regularPolygon(200, 260, randomNumber(4, 15), 98);

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
