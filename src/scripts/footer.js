import $ from 'jquery'
import '../styles/footer.css'
import html from '../template/footer.html'

$('footer').html(html)

$('.cut').on('click', (e) => {
  $(e.currentTarget).addClass('clicked')
  setTimeout(() => {
    $('footer').addClass('open-gate')
    $('footer .on-top').addClass('open-gate')
  }, 900)
})
