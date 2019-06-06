$(() => {

  // const animationSpeed= 3600
  const animationSpeed= 2400

// 2000 = x1800
// 2400 = x1500
// 3600 = x1000
// 3000 = x1200
// 4000 = x900

  const currentPage = document.querySelector('.navText').innerHTML
  const navIcons = document.querySelectorAll('.navIcon')
  const navText = document.querySelector('.navText')

  navIcons.forEach(icon => {
    icon.addEventListener('mouseover', (e) => {
      resetNavIcons()
      if ($(e.target).hasClass('code')) {
        $('.navText').css('text-align', 'left')
        navText.innerHTML='code'
        $(e.target).attr('src', './images/nav/navCodeColor3.png')
      } else if ($(e.target).hasClass('design')) {
        $('.navText').css('text-align', 'left')
        navText.innerHTML='design & visualisation'
        $(e.target).attr('src', './images/nav/navDesignColor2.png')
      } else if ($(e.target).hasClass('electronics')) {
        $('.navText').css('text-align', 'left')
        navText.innerHTML='electronics'
        $(e.target).attr('src', './images/nav/navElectronicsColor5.png')
      } else if ($(e.target).hasClass('face')) {
        $('.navText').css('text-align', 'right')
        navText.innerHTML='about me'
        $(e.target).attr('src', './images/nav/navFaceColor.png')
      }
    })

    icon.addEventListener('mouseout', () => {
      navText.innerHTML= currentPage
      resetNavIcons()
      $('.code.current').attr('src', './images/nav/navCodeColor3.png')
      $('.design.current').attr('src', './images/nav/navDesignColor2.png')
      $('.electronics.current').attr('src', './images/nav/navElectronicsColor5.png')
      $('.face.current').attr('src', './images/nav/navFaceColor.png')
      $('.navText.aboutMe').css('text-align', 'right')

    })
  })
  // //
  function resetNavIcons() {
    $('.navText').css('text-align', 'left')
    $('.code').attr('src', './images/nav/navCode.png')
    $('.design').attr('src', './images/nav/navDesign.png')
    $('.electronics').attr('src', './images/nav/navElectronicsColor0.png')
    $('.face').attr('src', './images/nav/navFace.png')
  }


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
