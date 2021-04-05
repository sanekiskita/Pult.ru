
$(function () {
    let includes = $('[data-include]')
    $.each(includes, function () {
      let file = './' + $(this).data('include') + '.html'
      $(this).load(file)
    })
  });



$('.shopmenu__href').hover(function(){
  $(this).addClass("active");
  $('.shopmenu__img').attr('src', './assets/img/shopmenu/' +$(this).data('img'));
},function(){
  $(this).removeClass("active");
}
);

  $(document).ready(function(){
    $('.slick1').slick({
      dots: true,
      infinite: true,
      arrows: false,
      speed: 500,
      autoplay: true,
      autoplaySpeed: 3000,
      rows: 0
    });
    $('.slick2').slick({
      dots: true,
      infinite: true,
      arrows: false,
      speed: 500,
      autoplay: true,
      autoplaySpeed: 3000,
      rows: 0
    });
  });