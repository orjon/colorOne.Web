$(() => {

  const fadeOut= 1500
  const fadeIn= 500
  const animSpeed = 3500

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
