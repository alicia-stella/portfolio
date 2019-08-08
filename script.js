var options = {
  strings: ["INT&Eacute;GRATRICE FRONT-END", "D&Eacute;VELOPPEUSE WEB"],
  loop: true,
  loopCount: Infinity,
  typeSpeed: 50,
  backSpeed: 80
}

var typed = new Typed(".metier", options);

$(function() {
  $('a[href*=#]').on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
  });
});