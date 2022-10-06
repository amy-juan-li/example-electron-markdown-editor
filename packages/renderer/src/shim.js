import process from 'process'

if (typeof global === 'undefined' || typeof global.process === 'undefined') {
  window.global = window
  window.process = process
}
