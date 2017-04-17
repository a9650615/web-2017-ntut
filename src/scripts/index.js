'use strict'
import 'babel-polyfill'
import './header'
import '../styles/index.css'

if (module.hot) {
  module.hot.accept()
}

// var $ = document.querySelector.bind(document)
// $('#block2').innerHTML = asd
let $ = window.$
$(document).ready(() => {
  $('#fullpage').fullpage({
    css3: true,
    easingcss3: 'ease',
    anchors: ['firstPage', 'secendPage', '3rdPage', '4rdPage'],
    menu: '#myMenu',
    // events
    onLeave: (index, nextIndex, direction) => {},
    afterLoad: (anchorLink, index) => {},
    afterRender: () => {},
    afterResize: () => {},
    afterResponsive: (isResponsive) => {},
    afterSlideLoad: (anchorLink, index, slideAnchor, slideIndex) => {},
    onSlideLeave: (anchorLink, index, slideIndex, direction, nextSlideIndex) => {}
  })
})
