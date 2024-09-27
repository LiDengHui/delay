import test from 'ava'

import delay from './dist/index.js'

test('delay 函数应在指定时间后解决', async (t) => {
  const start = Date.now()
  console.log(start)
  await delay(1000)
  const end = Date.now()
  console.log(end)
  t.true(end - start >= 1000)
})
