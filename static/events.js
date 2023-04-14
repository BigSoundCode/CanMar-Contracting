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

  
