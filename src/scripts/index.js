'use strict'
import 'babel-polyfill'
import './header'
import './section1'
import './section2'
import './section3'
import './section4'
import './section6'
import './section7'
import './section8'
import './makeline_step/makeline_step.js'
import '../styles/index.css'

if (module.hot) {
  module.hot.accept()
}

// var $ = document.querySelector.bind(document)
// $('#block2').innerHTML = asd
// let $ = window.$
// $(document).ready(() => {
//   $('#fullpage').fullpage({
//     css3: true,
//     easingcss3: 'ease',
//     anchors: ['firstPage', 'secendPage', '3rdPage', '4rdPage'],
//     menu: '#myMenu',
//     // events
//     onLeave: (index, nextIndex, direction) => {
//       // fixNavBar(index, nextIndex, direction)
//     },
//     afterLoad: (anchorLink, index) => { fixNavBar(index, -1, -1) },
//     afterRender: () => {},
//     afterResize: () => {},
//     afterResponsive: (isResponsive) => {},
//     afterSlideLoad: (anchorLink, index, slideAnchor, slideIndex) => {},
//     onSlideLeave: (anchorLink, index, slideIndex, direction, nextSlideIndex) => {}
//   })
// })
