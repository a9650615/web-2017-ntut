'use strict'
import 'babel-polyfill'
import '../styles/index.scss'

if (module.hot) {
  module.hot.accept()
}

var $ = document.querySelector.bind(document)

let asd = require('../test.html')

$('#block2').innerHTML = asd
