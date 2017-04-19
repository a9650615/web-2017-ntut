import $ from 'jquery'
import '../styles/header.css'
import header from '../template/header.html'

$('#header').html(header)

let fixNavBar = (index, nextIndex, direction) => {
  // console.log(index, nextIndex, direction)
  if (index === 1 && nextIndex === 2) {
    $('#menu2').show()
  }
  if (nextIndex === 1) {
    $('#menu2').hide()
  }
}

export {fixNavBar}
