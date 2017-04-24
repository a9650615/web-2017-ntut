import $ from 'jquery'

$('#image-show-hat, #image-show-bag').hide()

$('#new .select_button .button').on('click', (e) => {
  let targetId = $(e.currentTarget).data('target')
  $('.select_button .button').removeClass('is-active').addClass('is-outlined')
  $(e.currentTarget).removeClass('is-outlined').addClass('is-active')
  $('#image-show-accessories, #image-show-hat, #image-show-bag').hide()
  $(`#${targetId}`).fadeIn(500)
})

$('.title-animation h1').css('opacity', 0)
let total = $('.title-animation h1').length
let i = 0

let titleEaseIn = () => {
  if (i < total) {
    $('.title-animation h1').eq(i).animate({
      opacity: 1
    })
    i++
    setTimeout(titleEaseIn, 1000)
  }
}

titleEaseIn()
