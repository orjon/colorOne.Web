$(() => {

  // const animationSpeed= 3600
  const animationSpeed= 2400

// 2000 = x1800
// 2400 = x1500
// 3600 = x1000
// 3000 = x1200
// 4000 = x900


  $('.colorFade > div:gt(0)').hide()
  $('.timeFade > div:gt(0)').hide()


  $('.colorFade').click(function(){
    $('.timeFade').toggleClass('hidden')
  })

  $('.timeFade').click(function(){
    $('.timeFade').toggleClass('hidden')
  })



  function colorFade() {
    $('.colorFade > div:first')
      .fadeOut(animationSpeed)
      .next()
      .fadeIn()
      .end()
      .appendTo('.colorFade')
  }

  function timeFade() {
    $('.timeFade > div:first')
      .fadeOut(animationSpeed)
      .next()
      .fadeIn(animationSpeed)
      .end()
      .appendTo('.timeFade')
  }

  setInterval(colorFade, animationSpeed)
  setInterval(timeFade, animationSpeed)

})
