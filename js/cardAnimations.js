// init controller
var controller = new ScrollMagic.Controller();

$('.card-fade').each(function() {
  
  var tween = TweenMax.from($(this), 0.4, {autoAlpha: 0, scale: 0.97, y: '+=15', ease:Linear.easeNone});

  var scene = new ScrollMagic.Scene({
    triggerElement: this,
    triggerHook: .95,
  })
  .setTween(tween)
  .addTo(controller);
  
});
