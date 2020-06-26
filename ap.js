$(document).ready(function () {
  var controller = new ScrollMagic.Controller();

  var tween = TweenMax.to("#animate1", 1, {
    scale: 150,
    ease: Linear.easeNone,
  });

  var scene = new ScrollMagic.Scene({
    triggerElement: "#animate1",
    triggerHook: 0,
    duration: "100%",
  })
    .setTween(tween)
    .setPin(" #animate1")
    .addTo(controller);

  var tween2 = TweenMax.to("#uni", 1, {
    opacity: 1,
  });
  var scene2 = new ScrollMagic.Scene({
    triggerElement: "#uni",
    triggerHook: 0,
    duration: "100%",
  })
    .setTween(tween2)
    .setPin("#uni")
    .addTo(controller);

  var tween3 = TweenMax.to("#uni", 1, {
    opacity: 0,
    scale: 15,
  });
  var scene3 = new ScrollMagic.Scene({
    triggerElement: "#plan",
    triggerHook: 1,
    duration: "100%",
  })
    .setTween(tween3)
    .addTo(controller);

  var tween4 = TweenMax.to("#plan", 1, {
    opacity: 1,
  });
  var scene4 = new ScrollMagic.Scene({
    triggerElement: "#plan",
    triggerHook: 0,
    duration: "100%",
  })
    .setTween(tween4)
    .setPin("#plan")
    .addTo(controller);

  var tween5 = TweenMax.to("#plan", 1, {
    opacity: 0,
    scale: 15,
  });
  var scene5 = new ScrollMagic.Scene({
    triggerElement: "#city",
    triggerHook: 1,
    duration: "100%",
  })
    .setTween(tween5)
    .addTo(controller);
  var tween6 = TweenMax.to("#city", 1, {
    opacity: 1,
  });
  var scene6 = new ScrollMagic.Scene({
    triggerElement: "#city",
    triggerHook: 0,
    duration: "100%",
  })
    .setTween(tween6)
    .setPin("#city")
    .addTo(controller);
});
