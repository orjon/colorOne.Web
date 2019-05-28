$(() => {

  const fadeOut= 1500
  const fadeIn= 500
  const animSpeed = 3500

  $('.explode > div:gt(0)').hide()


  function explode() {
    $('.explode > div:first')
      .fadeOut(fadeOut)
      .next()
      .fadeIn(fadeIn)
      .end()
      .appendTo('.explode')
  }

  setInterval(explode, animSpeed)

})
