'use strict'

var timers = require('timers')

process.on('beforeExit', () => {
  process.stdout.write('\n')
})

const N = 100000

for (let i = 0; i < N; i++) {
  const num = '' + i
  const someObject = {
    _onTimeout() {
      process.stdout.clearLine()
      process.stdout.write(num)
    }
  }
  timers.enroll(someObject, i)
  timers._unrefActive(someObject)
}

setTimeout(() => {
  console.log('timer fired')
}, N)
