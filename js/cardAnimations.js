const controller = new ScrollMagic.Controller();

// --------  ANIMATIONS FOR HOMEPAGE --------- //
var cardFade1 = TweenMax.from("#slope-card", {y: 15, opacity: 0, scale: .97});
var cardFade2 = TweenMax.from("#kebf-card", {y: 15, opacity: 0, scale: .97});

var card2 = new ScrollMagic.Scene({
    triggerElement: '#slope-card',  
    triggerHook: .95,
})
.setTween(cardFade1)
.addTo(controller);

var card3= new ScrollMagic.Scene({
    triggerElement: '#kebf-card',  
    triggerHook: .95,
})
.setTween(cardFade2)
.addTo(controller);

card2.addIndicators({name: "pin 2", colorEnd: "#FFFFFF"});
card3.addIndicators({name: "pin 3", colorEnd: "#FFFFFF"});

