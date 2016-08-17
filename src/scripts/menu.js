( function() {

  var menuContainer, menu, menuClose, menuCount;


  menuSlideLeft = document.getElementById('slideLeft');
  menuSlideRight = document.getElementById('slideRight');
  menuSlideTop = document.getElementById('slideTop');
  menuSlideBottom = document.getElementById('slideBottom');
  menuContainer = document.getElementsByClassName('main-menu');
  menuCount = menuContainer.length;

  // Sliding Triggers
  var slideFromLeft = document.getElementById('slideFromLeft');
  var slideFromRight = document.getElementById('slideFromRight');
  var slideFromTop = document.getElementById('slideFromTop');
  var slideFromBottom = document.getElementById('slideFromBottom');

  slideFromLeft.onclick = function() {
    if ( -1 == menuSlideLeft.className.indexOf(' menu-open') ) {
      closeMenu();
      menuSlideLeft.className+=" menu-open"
    }
  }
  slideFromRight.onclick = function() {
    if ( -1 == menuSlideRight.className.indexOf('slide-from-right menu-open') ) {
      closeMenu();
      menuSlideRight.className+=" slide-from-right menu-open"
    }
  }

  slideFromTop.onclick = function() {
    if ( -1 == menuSlideTop.className.indexOf('slide-from-top menu-open') ) {
      closeMenu();
      menuSlideTop.className+=" slide-from-top menu-open"
    }
  }

  slideFromBottom.onclick = function() {
    if ( -1 == menuSlideBottom.className.indexOf('slide-from-bottom menu-open') ) {
      closeMenu();
      menuSlideBottom.className+=" slide-from-bottom menu-open"
    }
  }

  closeMenu = function() {
    for ( var i = 0; i < menuCount; i++ ) {
      /*
      if (menuContainer[i].classList.contains('menu-open')) {
        menuContainer[i].classList.remove('menu-open');
      }
      */
      if ( -1 !== menuContainer[i].className.indexOf(' menu-open') ) {
        menuContainer[i].className = menuContainer[i].className.replace(' menu-open', '');
      }
    }
  }

}) ();
