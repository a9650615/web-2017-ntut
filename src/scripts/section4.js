import $ from 'jquery'
import '../styles/section4.css'
import section4 from '../template/section4.html'

$('#section4').html(section4)

$('.select_button .button').on('click', (e) => {
  let targetId = $(e.currentTarget).data('target')
  $('.select_button .button').removeClass('is-active').addClass('is-outlined')
  $(e.currentTarget).removeClass('is-outlined').addClass('is-active')
  $('#man_wear_block, #woman_wear_block').addClass('hidden')
  $(`#${targetId}`).removeClass('hidden')
})
