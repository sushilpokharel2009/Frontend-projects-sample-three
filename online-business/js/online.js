$(document).ready(function(){
	$("li .opener").click(function(){
		$(this).parent().toggleClass("active");
							

	});

  $(".carousel-control-prev").click(function(e){
  e.preventDefault();
})

$('.filtr-container').filterizr({
  //layout: 'packed'
});

$(".opener").click(function(e) {
       e.preventDefault();
   });

});


var rangeSlider = function(){
  var slider = $('.range-slider'),
      range = $('.range-slider__range'),
      value = $('.range-slider__value');
    
  slider.each(function(){

    value.each(function(){
      var value = $(this).prev().attr('value');
      $(this).html(value);
    });

    range.on('input', function(){
      $(this).next(value).html(this.value);
    });
  });
};

rangeSlider();

////////////////////////////

$('.nstSlider').nstSlider({
    "left_grip_selector": ".leftGrip",
    "right_grip_selector": ".rightGrip",
    "value_bar_selector": ".bar",
    "highlight": {
        "grip_class": "gripHighlighted",
        "panel_selector": ".highlightPanel"
    },
    "value_changed_callback": function(cause, leftValue, rightValue) {
        $('.leftLabel').text(leftValue);
        $('.rightLabel').text(rightValue);
    },
});

	// Call methods and such...
	var highlightMin = Math.random() * 20,
	    highlightMax = highlightMin + Math.random() * 80;
	$('.nstSlider').nstSlider('highlight_range', highlightMin, highlightMax);



            