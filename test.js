import test from 'ava'

import delay from './dist/index.js'

test('delay 函数应在指定时间后解决', async (t) => {
  const start = Date.now()
  await delay(1000)
  const end = Date.now()
  t.true(end - start >= 1000)
})
