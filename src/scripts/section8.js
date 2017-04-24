import $ from 'jquery'
import '../styles/section8.css'
import section8 from '../template/section8.html'

$('#section8').html(section8)

$('.img_block .silder').hide()

let index = 0
setInterval(() => {
  index++
  if (index >= 4) {
    index = 0
  }
  $('.img_block .silder').fadeOut(100)
  $('.img_block .silder').eq(index).fadeIn(300)
}, 2000)
