// init controller
var controller = new ScrollMagic.Controller();

$('.img-fade').each(function() {
  
  var tween = TweenMax.from($(this), 0.4, {autoAlpha: 0, scale: 0.9, y: '+=30', ease:Linear.easeNone});

  var scene = new ScrollMagic.Scene({
    triggerElement: this,
    triggerHook: .9,
  })
  .setTween(tween)
  .addTo(controller);
  
});

  

