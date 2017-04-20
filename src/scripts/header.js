import $ from 'jquery'
import '../styles/header.css'
import header from '../template/header.html'

$('#header').html(header)

let fixNavBar = (index, nextIndex, direction) => {
  // console.log(index, nextIndex, direction)
  if (index === 1) {
    $('#menu2').hide()
  } else {
    $('#menu2').show()
  }
}

export {fixNavBar}
