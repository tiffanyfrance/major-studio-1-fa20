import { data } from './data.js';

window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}

let w = Math.min(window.innerWidth, 1600);
let h = window.innerHeight;

const backgroundWidth = 265;
const backgroundHeight = 150;

function repositionTitle() {
  var elem = $('#viz');

  var imageRatio = backgroundWidth / backgroundHeight;
  var coverRatio = elem.outerWidth() / elem.outerHeight();

  if (imageRatio >= coverRatio) {
    var coverHeight = elem.outerHeight();
    var scale = (coverHeight / backgroundHeight);
    var coverWidth = backgroundWidth * scale;
  } else {
    var coverWidth = elem.outerWidth();
    var scale = (coverWidth / backgroundWidth);
    var coverHeight = backgroundHeight * scale;
  }

  let top = (Math.min(coverHeight, elem.outerHeight()) / 2) - 17;
  $('#main-title').css('top', `${top}px`);
}

repositionTitle();

$(window).resize(() => {
  repositionTitle();
});

/////// ANIMATION ////////
let title = document.querySelector('#main-title h1');
let start;

function step(timestamp) {
  if (start === undefined)
    start = timestamp;
  const elapsed = timestamp - start;

  title.style.transform = 'translateY(' + (Math.min(0.06 * elapsed, 60) - 60) + 'px)';

  if (elapsed < 2000) { // Stop the animation after 2 seconds
    window.requestAnimationFrame(step);
  }
}

window.requestAnimationFrame(step);

d3.select('#main-title h1')
  .transition()
  .duration(3000)
  .style('opacity', 1);

d3.select('#main-title h2')
  .transition()
  .delay(1500)
  .duration(600)
  .style('opacity', 1);

d3.select('#main-title .loader')
  .transition()
  .delay(2100)
  .duration(2000)
  .style('opacity', 1);

var viz = document.querySelector("#viz");

window.onscroll = function () {
  let scrollPos = window.pageYOffset;
  if (scrollPos > 50) {
    viz.className = "hidden";

  } else {
    viz.className = "visible";
  }

  //Hide all on load??
  $('.native-tip').hide();
  $('.corridos-tip').hide();
  $('.ranchera-tip').hide();
  $('.sonjarocho-tip').hide();
  $('.huapango-tip').hide();
  $('.banda-tip').hide();
  $('.norteno-tip').hide();
  $('.mariachi-tip').hide();

  // Native title
  if (scrollPos < 3900) {
    if ($('#native-title').css("opacity") == 0) {
      $('#native-title').fadeTo(500, 1);
    }
  } else {
    if ($('#native-title').css("opacity") == 1) {
      $('#native-title').fadeTo(500, 0);
    }
  }

  // Native Tips
  if (scrollPos > 2700 && scrollPos < 3800) {
    $('.native-tip').show();
    if ($('.native-tip').css("opacity") == 0) {
      $('.native-tip').fadeTo(500, 1);
    }
  } else {
    if ($('.native-tip').css("opacity") == 1) {
      $('.native-tip').fadeTo(500, 0);
      $('.native-tip').hide();
      $('#mexico-map path').removeClass('active');
    }
  }

  // Corridos title
  if (scrollPos > 3900 && scrollPos < 5100) {
    if ($('#corridos-title').css("opacity") == 0) {
      $('#native-title').fadeTo(500, 0);
      $('#corridos-title').fadeTo(500, 1);
    }

    $('#mexico-map path').removeClass('fill');
  } else {
    if ($('#corridos-title').css("opacity") == 1) {
      $('#corridos-title').fadeTo(500, 0);
    }
  }

  // Corridos tips
  if (scrollPos > 4200 && scrollPos < 5100) {
    $('.corridos-tip').show();
    if ($('.corridos-tip').css("opacity") == 0) {
      $('.corridos-tip').fadeTo(500, 1);
    }

  } else {
    if ($('.corridos-tip').css("opacity") == 1) {
      $('.corridos-tip').fadeTo(500, 0);
      $('.corridos-tip').hide();
    }
  }

  // Ranchera title
  if (scrollPos > 5200 && scrollPos < 6400) {
    if ($('#ranchera-title').css("opacity") == 0) {
      $('#ranchera-title').fadeTo(500, 1);
    }
  } else {
    if ($('#ranchera-title').css("opacity") == 1) {
      $('#ranchera-title').fadeTo(500, 0);
    }
  }

  // Ranchera tips
  if (scrollPos > 5400 && scrollPos < 6400) {
    $('.ranchera-tip').show();
    if ($('.ranchera-tip').css("opacity") == 0) {
      $('.ranchera-tip').fadeTo(500, 1);
    }
  } else {
    if ($('.ranchera-tip').css("opacity") == 1) {
      $('.ranchera-tip').fadeTo(500, 0);
      $('.ranchera-tip').hide();
    }
  }

  // sonjarocho title
  if (scrollPos > 6400 && scrollPos < 7600) {
    if ($('#sonjarocho-title').css("opacity") == 0) {
      $('#sonjarocho-title').fadeTo(500, 1);
    }
  } else {
    if ($('#sonjarocho-title').css("opacity") == 1) {
      $('#sonjarocho-title').fadeTo(500, 0);
    }
  }

  // sonjarocho tips
  if (scrollPos > 6700 && scrollPos < 7600) {
    $('.sonjarocho-tip').show();
    if ($('.sonjarocho-tip').css("opacity") == 0) {
      $('.sonjarocho-tip').fadeTo(500, 1);
    }
    $('#mexico-map .veracruz').css('fill', 'orange')
  } else {
    if ($('.sonjarocho-tip').css("opacity") == 1) {
      $('.sonjarocho-tip').fadeTo(500, 0);
      $('.sonjarocho-tip').hide();
    }
    $('#mexico-map .veracruz').css('fill', '#333')
  }

  // huapango title
  if (scrollPos > 7600 && scrollPos < 8800) {
    if ($('#huapango-title').css("opacity") == 0) {
      $('#huapango-title').fadeTo(500, 1);
    }
    $('#mexico-map .veracruz').css('fill', '#333');
  } else {
    if ($('#huapango-title').css("opacity") == 1) {
      $('#huapango-title').fadeTo(500, 0);
    }
  }

  // huapango tips
  if (scrollPos > 7900 && scrollPos < 8800) {
    $('.huapango-tip').show();
    if ($('.huapango-tip').css("opacity") == 0) {
      $('.huapango-tip').fadeTo(500, 1);
    }
    $('#mexico-map .tamaulipas').css('fill', '#ec297b');
    $('#mexico-map .tamaulipas').css('opacity', '0.6');
  } else {
    if ($('.huapango-tip').css("opacity") == 1) {
      $('.huapango-tip').fadeTo(500, 0);
      $('.huapango-tip').hide();
    }
    $('#mexico-map .tamaulipas').css('fill', '#333');
    $('#mexico-map .tamaulipas').css('opacity', '1');
  }

  // banda title
  if (scrollPos > 8800 && scrollPos < 10000) {
    if ($('#banda-title').css("opacity") == 0) {
      $('#banda-title').fadeTo(500, 1);
    }
    $('#mexico-map .sinaola, #mexico-map .zacatecas').addClass('fill');
    $('#mexico-map .tamaulipas').css('fill', '#333');
    $('#mexico-map .tamaulipas').css('opacity', '1');
  } else {
    if ($('#banda-title').css("opacity") == 1) {
      $('#banda-title').fadeTo(500, 0);
    }
  }

  // banda tips
  if (scrollPos > 9100 && scrollPos < 10000) {
    $('.banda-tip').show();
    if ($('.banda-tip').css("opacity") == 0) {
      $('.banda-tip').fadeTo(500, 1);
    }
    $('#mexico-map .tamaulipas').css('fill', '#333');
  } else {
    if ($('.banda-tip').css("opacity") == 1) {
      $('.banda-tip').fadeTo(500, 0);
      $('.banda-tip').hide();
      $('#mexico-map path').removeClass('active-banda');
    }
  }

  // norteno title
  if (scrollPos > 10000 && scrollPos < 12000) {
    if ($('#norteno-title').css("opacity") == 0) {
      $('#norteno-title').fadeTo(500, 1);
    }
  } else {
    if ($('#norteno-title').css("opacity") == 1) {
      $('#norteno-title').fadeTo(500, 0);
    }
  }

  // norteno tips
  if (scrollPos > 10300 && scrollPos < 12000) {
    $('.norteno-tip').show();
    if ($('.norteno-tip').css("opacity") == 0) {
      $('.norteno-tip').fadeTo(500, 1);
    }
  } else {
    if ($('.norteno-tip').css("opacity") == 1) {
      $('.norteno-tip').fadeTo(500, 0);
      $('.norteno-tip').hide();
      $('#mexico-map path').removeClass('active-norteno');
    }
  }

  // mariachi title
  if (scrollPos > 12000 && scrollPos < 13200) {
    if ($('#mariachi-title').css("opacity") == 0) {
      $('#mariachi-title').fadeTo(500, 1);
    }
  } else {
    if ($('#mariachi-title').css("opacity") == 1) {
      $('#mariachi-title').fadeTo(500, 0);
    }
  }

  // mariachi tips
  if (scrollPos > 12300 && scrollPos < 13200) {
    $('.mariachi-tip').show();
    if ($('.mariachi-tip').css("opacity") == 0) {
      $('.mariachi-tip').fadeTo(500, 1);
    }
  } else {
    if ($('.mariachi-tip').css("opacity") == 1) {
      $('.mariachi-tip').fadeTo(500, 0);
      $('.mariachi-tip').hide();
      $('#mexico-map path').removeClass('active-mariachi');
    }
  }

  $('body #mexico-map path').removeClass('fill');

  let mapClass = '';

  if (scrollPos <= 3900) {
    $('path.chihuahua, path.oaxaca, path.puebla, path.sonora, path.yucatan').addClass('fill');
  }
  // Zoom of Map for Corridos and Rancheras
  else if (scrollPos > 3900 && scrollPos <= 6500) {
    mapClass = 'zoomzoom';
  }
  // Zoom of Map for Son Jorocho and Son Huestecas
  else if (scrollPos > 6500 && scrollPos <= 8800) {
    mapClass = 'zoomleft';
  }
  // Zoom of Map for Banda
  else if (scrollPos > 8800 && scrollPos <= 10000) {
    $('path.zacatecas, path.sinaloa').addClass('fill');
    mapClass = 'zoomright';
  }
  // Zoom of Map for Norteno
  else if (scrollPos > 10000 && scrollPos <= 12000) {
    $('path.sonora, path.chihuahua, path.coahuila, path.nuevo-leon').addClass('fill');
    mapClass = 'zoomtop';
  }
  // Zoom of Map for Mariachi
  else if (scrollPos > 12000 && scrollPos <= 13200) {
    $('path.jalisco, path.nuevo-leon').addClass('fill');
    mapClass = '';
  }
  
  $('body #mexico-map').attr('class', mapClass);

  if (scrollPos > 13200) {
    $('#thoughts').show();
    if ($('#thoughts').css("opacity") == 0) {
      $('#thoughts').fadeTo(500, 1);
    }
  } else {
    if ($('#thoughts').css("opacity") == 1) {
      $('#thoughts').fadeTo(500, 0);
      $('#thoughts').hide();
    }
  }
};


$('.native-pos').click(function () {
  $('html, body').scrollTop(2911);
})

$('.corridos-pos').click(function () {
  $('html, body').scrollTop(4201);
})

$('.ranchera-pos').click(function () {
  $('html, body').scrollTop(5501);
})

$('.sonjaracho-pos').click(function () {
  $('html, body').scrollTop(6801);
})

$('.huapango-pos').click(function () {
  $('html, body').scrollTop(7901);
})

$('.banda-pos').click(function () {
  $('html, body').scrollTop(9101);
})

$('.norteno-pos').click(function () {
  $('html, body').scrollTop(10301);
})

$('.mariachi-pos').click(function () {
  $('html, body').scrollTop(12301);
})


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
