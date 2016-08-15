( function() {

  var menuContainer, menu, menuClose;

  menuSlideLeft = document.getElementById('slideLeft');
  menuSlideRight = document.getElementById('slideRight');
  menuClose = document.getElementsByClassName('close-menu')[0];
  menuContainer = document.getElementsByClassName('main-menu');

  // Sliding
  var slideFromLeft = document.getElementById('slideFromLeft');
  var slideFromRight = document.getElementById('slideFromRight');

  slideFromLeft.onclick = function() {
    if ( -1 !== menuSlideLeft.className.indexOf(' menu-open') ) {
      menuSlideLeft.className = menuSlideLeft.className.replace(' menu-open', '');
    } else {
      menuSlideLeft.className+=" menu-open"
    }
  }
  slideFromRight.onclick = function() {
    if ( -1 !== menuSlideRight.className.indexOf('slide-from-right menu-open') ) {
      menuSlideRight.className = menuSlideRight.className.replace(' slide-from-right menu-open', '');
    } else {
      menuSlideRight.className+=" slide-from-right menu-open"
    }

  }
  menuClose.onclick = function() {
    console.log('close')
    menuContainer.className = menuContainer.className.replace(' menu-open', '');
  }
}) ();
