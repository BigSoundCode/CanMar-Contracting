function handleScroll() {
const content = document.querySelectorAll('.slide-up');
const windowHeight = window.innerHeight;
content.forEach(item => {
const itemTop = item.getBoundingClientRect().top;
if (itemTop < windowHeight) {
item.classList.add('active');
console.log('This works!');
}
});
}
window.addEventListener('load', handleScroll);
window.addEventListener('scroll', handleScroll);

$(document).ready(function(){
    $(".hamburger").click(function(){
      $(this).toggleClass("is-active");
    });
  });

  $(document).ready(function(){
    $(".hamburger").click(function(){
        $(".menu").slideToggle("slow");
    });
});

$('.expand-button').on('click', function(){
  $('.special-text').toggleClass('-expanded');
  
  if ($('.special-text').hasClass('-expanded')) {
    $('.expand-button').html('-');
  } else {
    $('.expand-button').html('+');
  }
});

$('.expand-button-2').on('click', function(){
  $('.special-text-2').toggleClass('-expanded');
  
  if ($('.special-text-2').hasClass('-expanded')) {
    $('.expand-button-2').html('-');
  } else {
    $('.expand-button-2').html('+');
  }
});


$('.expand-button-3').on('click', function(){
  $('.special-text-3').toggleClass('-expanded');
  
  if ($('.special-text-3').hasClass('-expanded')) {
    $('.expand-button-3').html('-');
  } else {
    $('.expand-button-3').html('+');
  }
});

$('.expand-button-4').on('click', function(){
  $('.special-text-4').toggleClass('-expanded');
  
  if ($('.special-text-4').hasClass('-expanded')) {
    $('.expand-button-4').html('-');
  } else {
    $('.expand-button-4').html('+');
  }
});


$('.expand-button-5').on('click', function(){
  $('.special-text-5').toggleClass('-expanded');
  
  if ($('.special-text-5').hasClass('-expanded')) {
    $('.expand-button-5').html('-');
  } else {
    $('.expand-button-5').html('+');
  }
});


document.addEventListener('DOMContentLoaded', function() {
  var image = document.querySelectorAll('.image');

  image.addEventListener('touchstart', function() {
    image.classList.add('active');
  });

  image.addEventListener('touchmove', function() {
    image.classList.remove('active');
  });

  image.addEventListener('touchend', function() {
    image.classList.remove('active');
  });
});
