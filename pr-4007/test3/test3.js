'use strict'

var timers = require('timers')

const N = 100000

for (let i = 0; i < N; i++) {
  const someObject = { _onTimeout() {} }
  timers.enroll(someObject, i)
  timers._unrefActive(someObject)
}

setTimeout(() => {}, N)
