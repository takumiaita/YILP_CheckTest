var scrollAnimationElm = document.querySelectorAll('.scroll_up,.scroll_up2');
var scrollAnimationFunc = function() {
  for(var i = 0; i < scrollAnimationElm.length; i++) {
    var triggerMargin = 150;
    if (window.innerHeight > scrollAnimationElm[i].getBoundingClientRect().top + triggerMargin) {
      scrollAnimationElm[i].classList.add('show');
    }
  }
}
window.addEventListener('load', scrollAnimationFunc);
window.addEventListener('scroll', scrollAnimationFunc);

var scrollpopElm = document.querySelectorAll('.pop');
var scrollpopFunc = function() {
  for(var i = 0; i < scrollpopElm.length; i++) {
    var triggerMargin = 250;
    if (window.innerHeight > scrollpopElm[i].getBoundingClientRect().top + triggerMargin) {
      scrollpopElm[i].classList.add('pop_up');
    }
  }
}
window.addEventListener('load', scrollpopFunc);
window.addEventListener('scroll', scrollpopFunc);