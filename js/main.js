$(document).ready(function(){
  // set variables

  // fade speed
  var speed = 500;

  // auto slider option
  var autoSwitch = true;

  // auto switch speed
  var autoSwitchSpeed = 4000;

  // add initial active class
  $('.slide').first().addClass('active');

  // hide all slides
  $('.slide').hide();

  // show first slide
  $('.active').show();

  // next handler
  $('#next').on('click', nextSlide);

  $('#prev').on('click', prevSlide);

  // auto slider handler
  if(autoSwitch == true){
    setInterval(nextSlide, autoSwitchSpeed);
  }

  // switch to next slide
  function nextSlide(){
    $('.active').removeClass('active').addClass('oldActive');
      if($('.oldActive').is(':last-child')){
        $('.slide').first().addClass('active');
      } else {
        $('.oldActive').next().addClass('active');
      }
        $('.oldActive').removeClass('oldActive');
        $('.slide').fadeOut(speed);
        $('.active').fadeIn(speed);
  }
  // swtich to prev slide
  function prevSlide(){
    $('.active').removeClass('active').addClass('oldActive');
      if($('.oldActive').is(':first-child')){
        $('.slide').last().addClass('active');
      } else {
        $('.oldActive').prev().addClass('active');
      }
        $('.oldActive').removeClass('oldActive');
        $('.slide').fadeOut(speed);
        $('.active').fadeIn(speed);
  }
});
