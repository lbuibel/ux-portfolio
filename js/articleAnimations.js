const controller = new ScrollMagic.Controller();

// --------  ANIMATIONS FOR HOMEPAGE --------- //

var imagefade1 = TweenMax.from(".img-fade-1", {y: 20, opacity: 0, scale: .8});


var img1 = new ScrollMagic.Scene({
    triggerElement: ".img-fade-1",
    triggerHook: .95,
})
.setTween(imagefade1)
.addTo(controller);

img1.addIndicators({name: "pin 3", colorEnd: "#FFFFFF"});

  

