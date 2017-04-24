import $ from 'jquery'
import '../styles/footer.css'
import html from '../template/footer.html'

$('footer').html(html)

$('.cut').on('click', (e) => {
  $(e.currentTarget).addClass('clicked')
  $('#fuck-text-2').hide()
  setTimeout(() => {
    $('footer').addClass('open-gate')
    $('footer .on-top').addClass('open-gate')
    $('html,body').animate({
      scrollTop: $('.new-gate').offset().top},
    'slow')
    goToHell()
  }, 900)
})

let goToHell = () => {
  setTimeout(() => {
    $('#surprise-mother-fucker').fadeIn(200).css('display', 'flex')
    setTimeout(() => {
      $('.fuck-text div').hide()
      $('#fuck-text-2').fadeIn(200)
      seeYouNotAgain()
    }, 2000)
  }, 1000)
}

let seeYouNotAgain = () => {
  setTimeout(() => {
    $('#fullpage').addClass('get-out')
    $('body').addClass('fix')
    setTimeout(() => {
      $('.door').addClass('ease')
      setTimeout(() => {
        $('.door').removeClass('ease').addClass('open').addClass('ease')
        setTimeout(() => {
          window.location.href = 'https://aqua.birdyo.ga'
        }, 100)
      }, 400)
    }, 1000)
  }, 1500)
}
