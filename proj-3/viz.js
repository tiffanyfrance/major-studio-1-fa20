import { data } from './data.js';

let w = Math.min(window.innerWidth, 1600);
let h = window.innerHeight;

/////// ANIMATION ////////

let title = document.getElementById('title');
let start;

function step(timestamp) {
  if (start === undefined)
    start = timestamp;
  const elapsed = timestamp - start;

  title.style.transform = 'translateY(' + Math.min(0.06 * elapsed, 60) + 'px)';


  if (elapsed < 2000) { // Stop the animation after 2 seconds
    window.requestAnimationFrame(step);
  }
}

window.requestAnimationFrame(step);

d3.select('#title')
  .transition()
  .duration(600)
  .style('opacity', 1);

d3.select('#subtitle')
  .transition()
  .delay(1000)
  .duration(600)
  .style('opacity', 1);

var viz = document.querySelector("#viz");

window.onscroll = function () {
  console.log(window.pageYOffset)
  let scrollPos = window.pageYOffset;
  if (scrollPos > 50) {
    viz.className = "hidden";
    $('.corridos-tip').hide();

  } else {
    viz.className = "visible";
  }

  // Native title
  if (scrollPos < 3900) {
    if ($('#nativ-title').css("opacity") == 0) {
      $('#native-title').fadeTo(1000, 1);
    }
  } else {
    if ($('#nativ-title').css("opacity") == 1) {
      $('#native-title').fadeTo(1000, 0);
    }
  }

  // Native Tips
  if (scrollPos > 2910 && scrollPos < 3500) {
    if ($('.native-tip').css("opacity") == 0) {
      $('.native-tip').fadeTo(1000, 1);
    }
  } else {
    if ($('.native-tip').css("opacity") == 1) {
      $('.native-tip').fadeTo(1000, 0);
      $('.native-tip').hide();
    }
  }

  // Corridos title
  if (scrollPos > 3900 && scrollPos < 5100) {
    if ($('#corridos-title').css("opacity") == 0) {
      $('#native-title').fadeTo(1000, 0);
      $('#corridos-title').fadeTo(1000, 1);
    }

    $('#mexico-map path').removeClass('fill');
  } else {
    if ($('#corridos-title').css("opacity") == 1) {
      $('#corridos-title').fadeTo(1000, 0);
    }
  }

  // Corridos tips
  if (scrollPos > 4200 && scrollPos < 5100) {
    $('.ranchera-tip').hide();
    $('.corridos-tip').show();
    if ($('.corridos-tip').css("opacity") == 0) {
      $('.corridos-tip').fadeTo(1000, 1);
    }

  } else {
    if ($('.corridos-tip').css("opacity") == 1) {
      $('.corridos-tip').fadeTo(1000, 0);
      $('.corridos-tip').hide();
    }
  }

  // Ranchera title
  if (scrollPos > 5200 && scrollPos < 6400) {
    if ($('#ranchera-title').css("opacity") == 0) {
      $('#ranchera-title').fadeTo(1000, 1);
    }
  } else {
    if ($('#ranchera-title').css("opacity") == 1) {
      $('#ranchera-title').fadeTo(1000, 0);
    }
  }

  // Ranchera tips
  if (scrollPos > 5500 && scrollPos < 6400) {
    $('.ranchera-tip').show();
    if ($('.ranchera-tip').css("opacity") == 0) {
      $('.ranchera-tip').fadeTo(1000, 1);
    }
  } else {
    if ($('.ranchera-tip').css("opacity") == 1) {
      $('.ranchera-tip').fadeTo(1000, 0);
      $('.ranchera-tip').hide();
    }
  }

  // sonjarocho title
  if (scrollPos > 6400 && scrollPos < 7600) {
    if ($('#sonjarocho-title').css("opacity") == 0) {
      $('#sonjarocho-title').fadeTo(1000, 1);
    }
  } else {
    if ($('#sonjarocho-title').css("opacity") == 1) {
      $('#sonjarocho-title').fadeTo(1000, 0);
    }
  }

  // sonjarocho tips
  if (scrollPos > 6700 && scrollPos < 7600) {
    $('.sonjarocho-tip').show();
    if ($('.sonjarocho-tip').css("opacity") == 0) {
      $('.sonjarocho-tip').fadeTo(1000, 1);
    }
    $('#mexico-map .veracruz').css('fill', 'orange')
  } else {
    if ($('.sonjarocho-tip').css("opacity") == 1) {
      $('.sonjarocho-tip').fadeTo(1000, 0);
      $('.sonjarocho-tip').hide();
    }
  }

  if (scrollPos > 3900) {
    $('body svg path').removeClass('fill');
  }

  // Zoom of Map for Corridos and Rancheras
  if (scrollPos > 3900 && scrollPos < 6500) {
    if (!$('body #mexico-map').hasClass('zoomzoom')) {
      $('body #mexico-map').addClass('zoomzoom');
    }
  } else {
  }

  // Zoom of Map for Son Jorocho and Son Huestecas
  if (scrollPos > 6500) {
    if (!$('body #mexico-map').hasClass('zoomleft')) {
      $('body #mexico-map').addClass('zoomleft');
    }
  } else {
    if ($('body svg').hasClass('zoomleft')) {
      $('body svg').removeClass('zoomleft');
    }
  }
  //todo: at 6500 wait 1s then add color active state to veracruz Son Jarocho



};





/*
 * Animation
 * 1. Scroll brings up h2
 * 2. h2 to stops when 15% from h1
 * 3. (a) h1 & h2 scroll up together
 *    (b) while all flowers except indigenous rotate-fade
 *    (c) indigenous flowers transform with duration into resting place
 * 4. (a) map, subtitle, song names fade in
 *    (b) first song tip folds down
 * 5. open song tip folds up
 * 6. (a) flowers and title fade out
 *    (b) map goes gray > shifts > then colors area
 *    (c) flowers fade in, content fades in
 *
 *
 *
 *
 * extra: flowers twinkle to indicate clickable, hover reveals tip
 */