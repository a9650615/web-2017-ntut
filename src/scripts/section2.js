import $ from 'jquery'
import '../styles/section2.css'
import section2 from '../template/section2.html'

$('#section2').html(section2)

$('.select_button .button').on('click', (e) => {
  let targetId = $(e.currentTarget).data('target')
  $('.select_button .button').removeClass('is-active').addClass('is-outlined')
  $(e.currentTarget).removeClass('is-outlined').addClass('is-active')
  $('#man_wear_block, #woman_wear_block').addClass('hidden')
  $(`#${targetId}`).removeClass('hidden')
})
