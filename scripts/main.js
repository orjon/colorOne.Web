
$(() => {

  $('.slideshow > div:gt(0)').hide()


  function slideShow() {
    $('.slideshow > div:first')
      .fadeOut(2500)
      .next()
      .fadeIn()
      .end()
      .appendTo('.slideshow')
  }

  setInterval(slideShow, 2500)

})
