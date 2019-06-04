$(() => {

  const animationSpeed= 3600

  const currentPage = document.querySelector('.navText').innerHTML
  const navIcons = document.querySelectorAll('.navIcon')
  const navText = document.querySelector('.navText')

  navIcons.forEach(icon => {
    icon.addEventListener('mouseover', (e) => {
      navText.innerHTML=''
      if ($(e.target).hasClass('code')) {
        navText.innerHTML='code'
      } else if ($(e.target).hasClass('design')) {
        navText.innerHTML='design & visualisation'
      } else if ($(e.target).hasClass('electronics')) {
        navText.innerHTML='electronics'
      } else if ($(e.target).hasClass('face')) {
        navText.innerHTML='about me'
      }
    })

    icon.addEventListener('mouseout', () => {
      navText.innerHTML= currentPage
    })
  })


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
