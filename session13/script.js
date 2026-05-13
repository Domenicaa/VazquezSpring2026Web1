$(document).ready(function(){

  let currentSlide = 0;

  let slides = $(".slide");

  $(".slide").hide();

  $(slides[currentSlide]).show();

  $("#next").click(function(){

    $(slides[currentSlide]).hide();

    currentSlide++;

    if(currentSlide >= slides.length){
      currentSlide = 0;
    }

    $(slides[currentSlide]).fadeIn();

  });

  $("#prev").click(function(){

    $(slides[currentSlide]).hide();

    currentSlide--;

    if(currentSlide < 0){
      currentSlide = slides.length - 1;
    }

    $(slides[currentSlide]).fadeIn();

  });

});