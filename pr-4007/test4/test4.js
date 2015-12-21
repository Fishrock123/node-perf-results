'use strict'

const timers = require('timers')

const durationMap = {}

const N = 100000
const EXTRA = 10000
var x = 0

for (let i = 0; i < N; i++) {
  const timer = { _onTimeout() {
    console.log('hi', ++x)
  } }
  const duration = EXTRA + i
  timers.enroll(timer, duration)
  timers._unrefActive(timer)

  // timeout a few timers
  if (duration % EXTRA === 0) continue

  // Keep track of the timer so we can cancel it
  durationMap[duration] = timer
}

var unenrolled = EXTRA
setInterval(function cancelTimers() {
  const maxThisRun = unenrolled + 20000
  while (unenrolled < maxThisRun) {
    if (unenrolled >= N + EXTRA) {
      clearInterval(this)
      return
    }
    const timer = durationMap[unenrolled++]
    if (timer) timers.unenroll(timer)
  }
}, 4000).unref()

setTimeout(() => {
  console.log('done')
}, N + 10500)
