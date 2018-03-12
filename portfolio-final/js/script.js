// HEADERROOM
// Initialize Foundation
$(document).foundation();

$(".headroom").headroom({
  "classes": {
    "initial": "animated",
    "pinned": "slideDown",
    "unpinned": "slideUp"
  }
});

var temp =
  "<div class='brick' style='width:{width}px; height: {height}px; background-color: {color}'><div class='cover'>Demo fit zone</div></div>";
var colour = [
  "rgb(142, 68, 173)",
  "rgb(243, 156, 18)",
  "rgb(211, 84, 0)",
  "rgb(0, 106, 63)",
  "rgb(41, 128, 185)",
  "rgb(192, 57, 43)",
  "rgb(135, 0, 0)",
  "rgb(39, 174, 96)"
];

var w = 1,
  h = 1,
  html = "",
  color = "",
  limitItem = 28;
for (var i = 0; i < limitItem; ++i) {
  h = (1 + 3 * Math.random()) << 0;
  w = (1 + 3 * Math.random()) << 0;
  color = colour[(colour.length * Math.random()) << 0];
  html += temp
    .replace(/\{height\}/g, h * 150)
    .replace(/\{width\}/g, w * 150)
    .replace("{color}", color);
}
$("#freewall").html(html);


// ZOOMPLE

$('.zoomple').zoomple({ 
      offset : {x:-150,y:-150},
      zoomWidth : 300,  
      zoomHeight : 300,
      roundedCorners : true
    });





$(function() {

  function zoomOnHover(selector) {
    var wrap = $(selector);

    function setDOM() {
      var normalImgSrc = wrap.find('img.normal').attr('src'),
        zoomImgSrc = wrap.find('img.zoom').remove().attr('src');

      wrap
        .find('img.zoom').remove().end()
        .append('<div class="img normal" style="background-image:url(' + normalImgSrc + ')"></div>')
        .append('<div class="img zoom" style="background-image:url(' + zoomImgSrc + ')"></div>');
    }

    function zoomImg(ev) {
      var element = $('.zoom', wrap);

      var e = {
        w: element.width(),
        h: element.height()
      };

      var c = {
        x: Math.round((ev.clientX - (element.offset().left - window.scrollX)) / (e.w / 100)),
        y: Math.round((ev.clientY - (element.offset().top - window.scrollY)) / (e.h / 100))
      };

      element.css('background-position', c.x + '% ' + c.y + '%');

    }

    // setDOM();

    // Attach event
    // wrap.on('mousemove', function(ev) {
    //   zoomImg(ev);
    // });

  }

  // Init    
  zoomOnHover('.wrap');

});  








// PROGRESS BAR

var bar = new ProgressBar.Circle(chart1, {
  color: "#0af",
  strokeWidth: 6,
  trailWidth: 1,
  easing: "easeInOut",
  duration: 1400,
  text: {
    autoStyleContainer: false
  },
  from: {
    color: "#0af",
    width: 1
  },
  to: {
    color: "#0076D5",
    width: 6
  },
  // Set default step function for all animate calls
  step: function(state, circle) {
    circle.path.setAttribute("stroke", state.color);
    circle.path.setAttribute("stroke-width", state.width);

    var value = Math.round(circle.value() * 100);
    if (value === 0) {
      circle.setText("");
    } else {
      circle.setText(value);
    }
  }
});
bar.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
bar.text.style.fontSize = "2.5rem";
bar.text.style.marginTop = "-0.3rem";
bar.animate(0.99);

var bar = new ProgressBar.Circle(chart2, {
  color: "#0af",
  strokeWidth: 6,
  trailWidth: 1,
  easing: "easeInOut",
  duration: 1400,
  text: {
    autoStyleContainer: false
  },
  from: {
    color: "#0af",
    width: 1
  },
  to: {
    color: "#0076D5",
    width: 6
  },
  // Set default step function for all animate calls
  step: function(state, circle) {
    circle.path.setAttribute("stroke", state.color);
    circle.path.setAttribute("stroke-width", state.width);

    var value = Math.round(circle.value() * 100);
    if (value === 0) {
      circle.setText("");
    } else {
      circle.setText(value);
    }
  }
});
bar.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
bar.text.style.fontSize = "2.5rem";
bar.text.style.marginTop = "-0.3rem";
bar.animate(0.98);

var bar = new ProgressBar.Circle(chart3, {
  color: "#0af",
  strokeWidth: 6,
  trailWidth: 1,
  easing: "easeInOut",
  duration: 1400,
  text: {
    autoStyleContainer: false
  },
  from: {
    color: "#0af",
    width: 1
  },
  to: {
    color: "#0076D5",
    width: 6
  },
  // Set default step function for all animate calls
  step: function(state, circle) {
    circle.path.setAttribute("stroke", state.color);
    circle.path.setAttribute("stroke-width", state.width);

    var value = Math.round(circle.value() * 100);
    if (value === 0) {
      circle.setText("");
    } else {
      circle.setText(value);
    }
  }
});
bar.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
bar.text.style.fontSize = "2.5rem";
bar.text.style.marginTop = "-0.3rem";
bar.animate(0.68);

var bar = new ProgressBar.Circle(chart4, {
  color: "#0af",
  strokeWidth: 6,
  trailWidth: 1,
  easing: "easeInOut",
  duration: 1400,
  text: {
    autoStyleContainer: false
  },
  from: {
    color: "#0af",
    width: 1
  },
  to: {
    color: "#0076D5",
    width: 6
  },
  // Set default step function for all animate calls
  step: function(state, circle) {
    circle.path.setAttribute("stroke", state.color);
    circle.path.setAttribute("stroke-width", state.width);

    var value = Math.round(circle.value() * 100);
    if (value === 0) {
      circle.setText("");
    } else {
      circle.setText(value);
    }
  }
});
bar.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
bar.text.style.fontSize = "2.5rem";
bar.text.style.marginTop = "-0.3rem";
bar.animate(0.51);

var bar = new ProgressBar.Circle(chart5, {
  color: "#0af",
  strokeWidth: 6,
  trailWidth: 1,
  easing: "easeInOut",
  duration: 1400,
  text: {
    autoStyleContainer: false
  },
  from: {
    color: "#0af",
    width: 1
  },
  to: {
    color: "#0076D5",
    width: 6
  },
  // Set default step function for all animate calls
  step: function(state, circle) {
    circle.path.setAttribute("stroke", state.color);
    circle.path.setAttribute("stroke-width", state.width);

    var value = Math.round(circle.value() * 100);
    if (value === 0) {
      circle.setText("");
    } else {
      circle.setText(value);
    }
  }
});
bar.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
bar.text.style.fontSize = "2.5rem";
bar.text.style.marginTop = "-0.3rem";
bar.animate(0.30);

var bar = new ProgressBar.Circle(chart6, {
  color: "#0af",
  strokeWidth: 6,
  trailWidth: 1,
  easing: "easeInOut",
  duration: 1400,
  text: {
    autoStyleContainer: false
  },
  from: {
    color: "#0af",
    width: 1
  },
  to: {
    color: "#0076D5",
    width: 6
  },
  // Set default step function for all animate calls
  step: function(state, circle) {
    circle.path.setAttribute("stroke", state.color);
    circle.path.setAttribute("stroke-width", state.width);

    var value = Math.round(circle.value() * 100);
    if (value === 0) {
      circle.setText("");
    } else {
      circle.setText(value);
    }
  }
});
bar.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
bar.text.style.fontSize = "2.5rem";
bar.text.style.marginTop = "-0.3rem";
bar.animate(0.56);


// ACCORDIAN

$(function() {
  $(".expand").on( "click", function() {
    $(this).next().slideToggle(200);
    $expand = $(this).find(">:first-child");
    
    if($expand.text() == "+") {
      $expand.text("-");
    } else {
      $expand.text("+");
    }
  });
});

// var elem = document.querySelector('.grid');
// var msnry = new Masonry( elem, {
//   // options
//   itemSelector: '.grid-item',
//   // columnWidth: 200
// });


// $('.counter').each(function () {
//     $(this).prop('Counter',0).animate({
//         Counter: $(this).text()
//     }, {
//         duration: 9000,
//         easing: 'swing',
//         step: function (now) {
//             $(this).text(Math.ceil(now));
//         }
//     });
// });


